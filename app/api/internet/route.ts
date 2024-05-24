import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import OpenAI from "openai";
import axios from 'axios';

import { OpenAIStream, StreamingTextResponse } from 'ai';

import { checkSubscription } from "@/lib/subscription";
import { incrementApiLimit, checkApiLimit } from "@/lib/api-limit";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const { messages } = await req.json();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!messages) {
      return new NextResponse("Messages are required", { status: 400 });
    }

    if (!process.env.OPENAI_API_KEY) {
      return new NextResponse("OpenAI API Key not configured.", { status: 500 });
    }

    // Add your Bing Search API key and endpoint
    const bingSearchApiKey = process.env.BING_SEARCH_API_KEY;
    const bingSearchEndpoint = 'https://api.bing.microsoft.com/v7.0/search';

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const search = async (query: string) => {
      const mkt = 'en-US';
      const params = { q: query, mkt: mkt };
      const headers = { 'Ocp-Apim-Subscription-Key': bingSearchApiKey };

      try {
        const response = await axios.get(bingSearchEndpoint, { headers, params });
        return response.data.webPages.value;
      } catch (error) {
        throw error;
      }
    };

    const results = await search(messages[messages.length - 1].content);

    const results_prompts = results.map((result: any) => 
      `Source:\nTitle: ${result.name}\nURL: ${result.url}\nContent: ${result.snippet}\nDescription: ${result.description}`);

    const prompt = "Use these sources to answer the question:\n\n" +
               results_prompts.join("\n\n") + "\n\nQuestion: " +
               messages[messages.length - 1].content + "\n\nAnswer:";

     const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      stream: true,
      messages: [
        ...messages,
        {
          role: 'system',
          content: prompt
        }
      ]
    });
    const freeTrial = await checkApiLimit();
    const isPro = await checkSubscription();


    if (!isPro) {
      await incrementApiLimit();
    }
    const stream = OpenAIStream(response);
    // Respond with the stream
    return new StreamingTextResponse(stream);

  } catch (error) {
    console.log('[CONVERSATION_ERROR]', error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
