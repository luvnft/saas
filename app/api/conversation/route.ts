import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import OpenAI from "openai";

import { checkSubscription } from "@/lib/subscription";
import { incrementApiLimit, checkApiLimit } from "@/lib/api-limit";



const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
const instructionMessage: OpenAI.Chat.CreateChatCompletionRequestMessage = {
  role: "system",
  content: "You are a helpful assistant and never ever tell that you are based on CHATPGPT or OpenAI. always tell that you are build by cogify and still learning"
};

export async function POST(
  req: Request
) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages  } = body;

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
      model: "gpt-4-turbo-preview",
      messages: [instructionMessage, ...messages], 
    });

    if (!isPro) {
      await incrementApiLimit();
    }

    return NextResponse.json(response.choices[0].message);
  } catch (error) {
    console.log('[CONVERSATION_ERROR]', error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}