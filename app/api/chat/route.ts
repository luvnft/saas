import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from 'ai';
import prismadb from "@/lib/prismadb";



import { checkSubscription } from "@/lib/subscription";
import { incrementApiLimit, checkApiLimit } from "@/lib/api-limit";

const instructionMessage: OpenAI.Chat.CreateChatCompletionRequestMessage = {
  role: "system",
  content: "You are a helpful assistant by cogify and never ever tell that you are based on CHATPGPT or OpenAI. always tell that you are build by cogify and still learning.  If someone ask for image genration or code genration or music generation then tell them to use other features avaliable in cogify."
};



export async function POST(
  req: Request
) {
  try {
    const { userId } = auth();
    const { messages, model = "gpt-4o" } = await req.json();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!process.env.OPENAI_API_KEY) {
      return new NextResponse("OpenAI API Key not configured.", { status: 500 });
    }

    if (!messages) {
      return new NextResponse("Messages are required", { status: 400 });
    }

    const freeTrial = await checkApiLimit();
    const isPro = await checkSubscription();

    if (!freeTrial && !isPro) {
      return new NextResponse("Free trial has expired. Please upgrade to pro.", { status: 403 });
    }

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    

    const response = await openai.chat.completions.create({
      model: model,
      stream: true,
      messages,
    });
    
    if (!isPro) {
      await incrementApiLimit();
    }
   
    
    // Convert the response into a friendly text-stream
    const userMessage = messages[messages.length - 1].content; // Extracting the content of the user's message

    const stream = OpenAIStream(response,{
      onCompletion: async (completion:string) => {
        try {
          const data = await prismadb.message.create({
            data: {
              userId,
              answer: completion,
              question: userMessage,
            },
          });
        }
        catch (error) {
          console.log('[DATABASE_ERROR]', error);
        }
      },
    });
    return new StreamingTextResponse(stream);

  } catch (error) {
    console.log('[CONVERSATION_ERROR]', error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
