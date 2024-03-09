import React from 'react';
import { cn } from "@/lib/utils";
import Image from "next/image"
import Link from "next/link"
import { Montserrat } from "next/font/google";
import { TextRevealCardPreview } from "./ui/TextRevealCard";


const font = Montserrat({ weight: '600', subsets: ['latin'] });
export const Footer = () => {
    
  return (
    <div>
      <hr className="line" />

      <footer className="footer ">
        <div className=" flex-col space-y-2 flex px-2">
          <Link href="/" className="flex items-center">
            <div className="relative h-8 w-8 mr-4">
              <Image fill alt="Logo" src="/logo.png" />
            </div>
            <h1 className={cn("text-2xl font-light ", font.className)}>
              Cogify
            </h1>
          </Link>
          <div className="text">
            
          </div>
          <div className="text">
            <p>A product by <a href="https://www.iamclint.tech" className={cn("text-light font-light ", font.className)}>
                Clint Tech</a></p>
          </div>
          <div className="text">
            <p>Building in public by <a href="https://iamclint.tech/founder" className={cn("text-light font-light ", font.className)}>Shubham Sharma</a></p>
            <p>© 2024 Cogify. All rights reserved</p>
          </div>
        </div>
        <div className="center items-center justify-center"> {/* Added flex and justify-center classes */}
          <TextRevealCardPreview />
        </div> 
        
        <div >
          <div className="right flex-col space-y-2 flex px-12">
            <Link href="/about-us" >
            <button className="px-4 py-2 rounded-md border border-black bg-white text-neutarl-700 text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
                About us 
            </button>
            </Link>
            

            <Link href="/privacy-policy" className="flex items-center">
            <button className="px-4 py-2 rounded-md border border-black bg-white text-neutarl-700 text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
                Privacy Policy
                </button>
            </Link>
            <Link href="/term-of-service" className="flex items-center">
            <button className="px-4 py-2 rounded-md border border-black bg-white text-neutarl-700 text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
    Terms of Service
</button>
            </Link>
            <Link href="/" className="flex items-center">
            <button className="px-4 py-2 rounded-md border border-black bg-white text-neutarl-700 text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
    Contact Us
</button>

            </Link>
            <Link href="/" className="flex items-center">
            <button className="px-4 py-2 rounded-md border border-black bg-white text-neutarl-700 text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
    Careers
</button>

            </Link>
            
          </div>
        </div>
      </footer>
      
    </div>
  );
}
