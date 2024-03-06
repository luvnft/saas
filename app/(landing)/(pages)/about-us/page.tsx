"use client";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingHero } from "@/components/landing-hero";
import { LandingContent } from "@/components/Landing-content";
import { LandingMiddle } from "@/components/landing-navmiddle";
import { TabsDemo } from "@/components/tabs-middle";
import { Footer } from "@/components/footer";
import {TypewriterEffectSmoothDemo} from "@/components/typing-effect";
import { SparklesPreview } from "./sparks";
import { CardHoverEffectDemo } from "./card-hover";
import { AnimatedTooltipPreview} from "./founder";
import { AnimatedPinDemo } from "./casouselabout";
const LandingPage = () => {
  return ( 
    <div className="h-full ">
      <LandingNavbar /> 
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