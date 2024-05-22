import * as z from "zod";

export const formSchema = z.object({
  prompt: z.string().min(1, {
    message: "Prompt is required."
  }),
  model: z.string().min(1),
});

export const modelOption = [
  {
    value: "gpt-4o",
    label: "gpt-4o",
    data: "Our Most advanced model and it has the same high intelligence as GPT-4 Turbo but is much more efficient—it generates text 2x faster"
  },
  {
    value: "gpt-4-turbo-2024-04-09",
    label: "gpt-4-turbo-2024-04-09",
    data: "GPT-4 Turbo may not be the swiftest, but it epitomizes precision and currency in its outputs. With each interaction, it delivers the latest and most accurate information."
  },
  {
    value: "gpt-4-turbo-preview",
    label: "gpt-4-turbo-preview",
    data: "GPT-4 Turbo Preview: Its brilliance may falter under server loads, but when it works, it dazzles like no other."
  },
]