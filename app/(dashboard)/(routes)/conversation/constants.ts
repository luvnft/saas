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
    label: "GPT-4o",
    data: "Our Most advanced model and it has the same high intelligence as GPT-4 Turbo but is much more efficient—it generates text 2x faster. Up to Oct 2023"
  },
  {
    value: "gpt-4-turbo-2024-04-09",
    label: "GPT-4-Turbo",
    data: "GPT-4 Turbo may not be the swiftest, but it epitomizes precision and currency in its outputs. With each interaction, it delivers the latest and most accurate information. Up to Dec 2023"
  },
  {
    value: "gpt-4-turbo-preview",
    label: "GPT-4-Turbo-Preview",
    data: "GPT-4 Turbo Preview: Its brilliance may falter under server loads, but when it works, it dazzles like no other. Up to Dec 2023 "
  },
  {
    value: "gpt-4",
    label: "GPT-4",
    data: "GPT-4 Turbo Preview: Updated from June 13th 2023 with improved function calling support."
  },
  {
    value: "gpt-3.5-turbo",
    label: "GPT-3.5-Turbo",
    data: "GPT-3.5 Turbo :The latest GPT-3.5 Turbo model with higher accuracy at responding in requested formats and a fix for a bug which caused a text encoding issue for non-English language function calls."
  },
]