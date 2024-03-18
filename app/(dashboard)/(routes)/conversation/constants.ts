import * as z from "zod";

export const formSchema = z.object({
  prompt: z.string().min(1, {
    message: "Prompt is required."
  }),
  model: z.string().min(1),
});

export const modelOption = [
  {
    value: "gpt-3.5-turbo",
    label: "GPT-3.5-turbo"
  },
  {
    value: "gpt-4",
    label: "GPT-4"
  },
  {
    value: "gpt-4-turbo-preview",
    label: "GPT-4-turbo-preview"
  },
]