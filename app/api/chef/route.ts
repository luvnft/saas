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

    const generateImage = async function(prompt:any, resolution:any, modelImage:any) {
      const response = await openai.images.generate({
        model: modelImage,
        prompt,
        n: 1, // one image per call as per API limitation
        size: resolution,
      });
      return response.data;
    }

    // Initialize an array to hold the promises
    let imagePromises = [];

    // For the specified amount, push image generation promises into the array
    for (let i = 0; i < parseInt(amount, 10); i++) {
      imagePromises.push(generateImage(prompt, resolution, modelImage));
    }

    // Await all the image generation promises
    const images = await Promise.all(imagePromises);

    if (!isPro) {
      await incrementApiLimit();
    }

    const imageUrls = images.map(response => response[0]); // Access the first image URL directly from the response array
    return NextResponse.json(imageUrls); // Respond with image URLs

  } catch (error) {
    console.log('[IMAGE_ERROR]', error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}