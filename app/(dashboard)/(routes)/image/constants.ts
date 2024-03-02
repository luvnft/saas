import exp from "constants";
import * as z from "zod";

export const formSchema = z.object({
  prompt: z.string().min(1, {
    message: "Photo prompt is required"
  }),
  amount: z.string().min(1),
  resolution: z.string().min(1),
  speechModel: z.string().min(1),
});

export const amountOptions = [
  {
    value: "1",
    label: "1 Photo"
  },
  {
    value: "2",
    label: "2 Photos"
  },
  {
    value: "3",
    label: "3 Photos"
  },
  {
    value: "4",
    label: "4 Photos"
  },
  {
    value: "5",
    label: "5 Photos"
  }
];


export const speechModel = [
  {
    value: "tts-1",
    label: "tts-1",
  },
  {
    value: "tts-2",
    label: "tts-2",
  },
  {
    value: "tts-3",
    label: "tts-3",
  },
  {
    value: "tts-4",
    label: "tts-4",
  },
  {
    value: "tts-5",
    label: "tts-5",
  }
];

export const resolutionOptions = [
  {
    value: "256x256",
    label: "256x256",
  },
  {
    value: "512x512",
    label: "512x512",
  },
  {
    value: "1024x1024",
    label: "1024x1024",
  },
];



