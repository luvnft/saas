import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import OpenAI from "openai";

import { checkSubscription } from "@/lib/subscription";
import { incrementApiLimit, checkApiLimit } from "@/lib/api-limit";


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(
  req: Request
) {
  try {
    const { userId } = auth();
    const { prompt, amount = 1, resolution = "512x512", modelImage = "dall-e-2"} = await req.json();

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!process.env.OPENAI_API_KEY) {
      return new NextResponse("OpenAI API Key not configured.", { status: 500 });
    }

    if (!prompt) {
      return new NextResponse("Prompt is required", { status: 400 });
    }

    if (!amount) {
      return new NextResponse("Amount is required", { status: 400 });
    }

    if (!resolution) {
      return new NextResponse("Resolution is required", { status: 400 });
    }

    const freeTrial = await checkApiLimit();
    const isPro = await checkSubscription();

    if (!freeTrial && !isPro) {
      return new NextResponse("Free trial has expired. Please upgrade to pro.", { status: 403 });
    }

    const response = await openai.images.generate({
      model: modelImage,
      prompt,
      n: parseInt(amount, 10),
      size: resolution,
    });

    if (!isPro) {
      await incrementApiLimit();
    }

    return NextResponse.json(response.data);
  } catch (error) {
    console.log('[IMAGE_ERROR]', error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
