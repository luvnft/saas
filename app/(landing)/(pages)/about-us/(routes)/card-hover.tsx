import { HoverEffect } from "@/components/pages/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-8xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Conversation",
    description:
      "Engage in enlightening dialogues with AI where curiosity meets intelligence",
    link: "/conversation",
  },
  {
    title: "Image Generation",
    description:
      "Bring your ideas to life with our powerful Image Generation tool.      .",
    link: "/image",
  },

  {
    title: "WebGPT",
    description:
      "Power of GPT-4o connected with internet.",
    link: "/webgpt",
  },
  {
    title: "Text-to-Speech Generation",
    description:
      "Transform text into lifelike speech with our advanced Text-to-Speech generation.     ",
    link: "/text-to-speech",
  },
  
  {
    title: "Code Generation",
    description:
      "Efficiently create code with our streamlined Code Generation tool.     ",
    link: "/code",
  },
  {
    title: "Entertainment Suggestion",
    description:
      "Intelligently suggest movies or series based on your preferences. ",
    link: "/entertainment",
  },
  {
    title: "More?",
    description: "More stunning features comming soon.",
    link: "/coming-soon",
  },
];
