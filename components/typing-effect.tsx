"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";


export function TypewriterEffectSmoothDemo() {
    const { isSignedIn } = useAuth();
  const words = [
    {
      text: "We",
    },
    {
      text: "are",
    },
    {
      text: "built",
    },
    {
      text: "on",
    },
    {
      text: "Chatgpt-4.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  
  return (
    <div className="flex flex-col items-center justify-center h-[20rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        Learn more how we get started?
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
      <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
        <button className="w-60 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          About us
        </button>
        </Link>
      </div>
    </div>
  );
}
