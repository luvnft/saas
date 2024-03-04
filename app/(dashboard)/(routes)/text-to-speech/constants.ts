import * as z from "zod";

export const formSchema = z.object({
  prompt: z.string().min(1, {
    message: "Music prompt is required"
  }),
  model: z.string().min(1),
});

export const modelSelected = [
  {
    value: "alloy",
    label: "Alloy"
  },
  {
    value: "echo",
    label: "Echo"
  },
  {
    value: "fable",
    label: "Fable"
  },
  {
    value: "onyx",
    label: "Onyx"

  },
  {
    value: "nova",
    label: "Nova"
    
  },
  {
    value: "shimmer",
    label: "Shimmer"
    
  },

];



