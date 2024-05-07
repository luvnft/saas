"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { Button } from "@/components/ui/button";

export function HeroHighlights() {
  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
    "Write a letter to your boss asking for a leave extension.",
    "Write a poem about the beauty of friendship.",
    "How can I improve my problem-solving skills?",
  ];
  const { isSignedIn } = useAuth();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
    window.location.href = "/conversation";
  };

  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
      >
        <div className="text-white font-bold py-10 text-center space-y-5">
          <div className="text-4xl sm:text-5xl text-zinc-900 md:text-6xl lg:text-7xl space-y-5 font-extrabold">
            The Best AI Tool for
            <div className="bg-clip-text text-blue-500 dark:text-blue-500">
              <TypewriterComponent
                options={{
                  strings: [
                    "Chatbot.",
                    "Audio Generation.",
                    "Photo Generation.",
                    "Blog Writing.",
                    "Mail Writing.",
                    "Content Creation.",
                    "Code Generation.",
                    "Image Insight",
                    "Calories Count"
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
          <div className="text-sm md:text-xl font-light text-zinc-400">
            Create content using AI 10x faster.
          </div>
          <div>
            <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
              <Button className="w-60 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm ">
                Start Generating For Free
              </Button>
            </Link>
          </div>
          <div className="text-zinc-400 text-xs md:text-sm font-normal">
            No credit card required*.
          </div>
        </div>
      </motion.h1>
      
      <div className="flex flex-col justify-center space-y-6"> 
  <Highlight className="text-2xl md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center">
    Ask Anything - Cogify
  </Highlight>

  <PlaceholdersAndVanishInput
    placeholders={placeholders}
    onChange={handleChange}
    onSubmit={onSubmit}
  />
</div>
    </HeroHighlight>
  );
}
