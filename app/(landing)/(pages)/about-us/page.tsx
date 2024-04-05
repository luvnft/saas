"use client";
import React from "react";

import { Footer } from "@/components/footer";
import SparklesPreview from "@/components/ui/sparks";
import { CardHoverEffectDemo } from "./(routes)/card-hover";
import { AnimatedTooltipPreview } from "./(routes)/founder";
import { AnimatedPinDemo } from "./(routes)/casouselabout";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

const font = Montserrat({ weight: "600", subsets: ["latin"] });

const LandingPage: React.FC = () => {
  return (
    <div className="h-full ">
      <nav className="p-4 bg-transparent flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="relative h-8 w-8 mr-4">
            <Image
              fill
              alt="Logo"
              src="/logo.png"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div>
            <h1 className={cn("text-2xl font-bold", font.className)}>Cogify</h1>
          </div>
        </Link>

        <aside className="flex items-center gap-4">
          <Link
            href="/dashboard"
            className="relative w-30 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm "
          >
            {/* <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" /> */}
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Get Started
            </span>
          </Link>
        </aside>
      </nav>

      <SparklesPreview buttonText="About us" />
      <AnimatedTooltipPreview />
      <div className="flex flex-row items-center justify-center  w-full md:text-1xl text-1xl lg:text-2xl font-semibold ">
        <p> Meet our Founder and CEO</p>
      </div>
      <CardHoverEffectDemo />
      <AnimatedPinDemo />

      <Footer />
    </div>
  );
};

export default LandingPage;
