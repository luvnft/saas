"use client";

import { LandingNavbar } from "@/app/components/landing-navbar";
import { LandingHero } from "@/app/components/landing-hero";
import { LandingContent } from "@/app/components/Landing-content";
import { TabsDemo } from "@/app/components/tabs-middle";
import { Footer } from "@/app/components/footer";
import {TypewriterEffectSmoothDemo} from "@/app/components/typing-effect";
import { SparklesPreview } from "./(routes)/sparks";
import { CardHoverEffectDemo } from "./(routes)/card-hover";
import { AnimatedTooltipPreview} from "./(routes)/founder";
import { AnimatedPinDemo } from "./(routes)/casouselabout";
import { LandingMiddle } from "@/app/components/landing-navmiddle";

const LandingPage = () => {
  return ( 
    <div className="h-full ">
            <LandingNavbar /> 
            
            <LandingMiddle />      


      <SparklesPreview />    
      <AnimatedTooltipPreview />
      <div className="flex flex-row items-center justify-center  w-full md:text-1xl text-1xl lg:text-2xl font-semibold ">
      <p> Meet out developers</p>
      </div>
      <CardHoverEffectDemo />  
      <AnimatedPinDemo />
      
      <Footer/>
      
      
    </div>
   );
}
 
export default LandingPage;