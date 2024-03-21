"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image"
import Link from "next/link"
import { useAuth } from "@clerk/nextjs";
import { useState, useEffect } from 'react';


import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
      width: window.innerWidth,
      height: window.innerHeight,
  });

  useEffect(() => {
      function handleResize() {
          setWindowSize({
              width: window.innerWidth,
              height: window.innerHeight,
          });
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}


const font = Montserrat({ weight: '600', subsets: ['latin'] });

export const LandingNavbar = () => {
  const { isSignedIn } = useAuth();
  const screenSize = useWindowSize(); // Assuming you have a custom hook to get the window size


  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <div className="relative h-8 w-8 mr-4">
          <Image fill alt="Logo" src="/logo.png" />
        </div>
        <div> 
        
                <h1 className={cn("text-2xl font-bold", font.className)}>
                        Cogify
        </h1>
        
        </div>

      </Link>
      {screenSize.width >= 700 && (
      <div className="flex items-center gap-x-2">
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button className="px-8 py-2 rounded-md bg-zinc-800 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-blue-500">
            Get Started
          </Button>
          
        </Link>
      </div>
      )}
    </nav>
  )
}