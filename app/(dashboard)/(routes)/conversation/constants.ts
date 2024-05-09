import * as z from "zod";

export const formSchema = z.object({
  prompt: z.string().min(1, {
    message: "Prompt is required."
  }),
  model: z.string().min(1),
});

export const modelOption = [
  {
    value: "gpt-4-turbo-2024-04-09",
    label: "gpt-4-turbo-2024-04-09",
    data: "GPT-3.5 stands as the pinnacle of your choices, offering unparalleled excellence in generating flawless outputs swiftly, all while maintaining remarkably low latency."
  },
  {
    value: "gpt-4",
    label: "GPT-4",
    data: "GPT-4 may not be the swiftest, but it epitomizes precision and currency in its outputs. With each interaction, it delivers the latest and most accurate information."
  },
  {
    value: "gpt-4-turbo-preview",
    label: "GPT-4-turbo-preview",
    data: "GPT-4 Turbo Preview: Its brilliance may falter under server loads, but when it works, it dazzles like no other."
  },
]