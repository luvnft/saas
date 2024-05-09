"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

export function TypewriterEffectSmoothDemo() {
  const { isSignedIn } = useAuth();
  const words = [
    {
      text: "we",
    },
    {
      text: "are",
    },
    {
      text: "now",
    },
    {
      text: "Open Source",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[20rem]">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base">
        We&apos;re delighted to share that
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 items-center">
        <Link href={"https://github.com/Shubham-sharma8/Cogify.Social"}>
        <button className="w-60 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm flex items-center justify-center space-x-2">
  <img src="/github.png" alt="GitHub Logo" className="h-7 w-7" /> {/* Replace the URL with the actual GitHub logo URL */}
  <span className="text-white">Star us on GitHub</span>
</button>

        </Link>
      </div>
    </div>
  );
}
