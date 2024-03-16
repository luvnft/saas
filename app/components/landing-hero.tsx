"use client";

import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

import { Button } from "@/app/components/ui/button";

export const LandingHero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div className="text-white font-bold py-36 text-center space-y-5">
      <div className="text-4xl sm:text-5xl text-zinc-900 md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <h1>The Best AI Tool for</h1>
        <div className=" bg-clip-text text-blue-500 dark:text-blue-500">
          <TypewriterComponent
            options={{
              strings: [
                "Chatbot.",
                "Audio Generation.",
                "Photo Generation. ",
                "Blog Writing.",
                "Mail Writing. ",
                "Content Creation. ",
                "Code Generation. ",

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
  );
};
