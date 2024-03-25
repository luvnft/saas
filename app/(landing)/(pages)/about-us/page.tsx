"use client";

import { LandingNavbar } from "@/components/landing-navbar";
import { Footer } from "@/components/footer";
import { SparklesPreview } from "./(routes)/sparks";
import { CardHoverEffectDemo } from "./(routes)/card-hover";
import { AnimatedTooltipPreview} from "./(routes)/founder";
import { AnimatedPinDemo } from "./(routes)/casouselabout";
import { LandingMiddle } from "@/components/landing-navmiddle";


const LandingPage = () => {
  return ( 
    <div className="h-full ">
            <LandingNavbar /> 
            
            <LandingMiddle />      


      <SparklesPreview />    
      <AnimatedTooltipPreview />
      <div className="flex flex-row items-center justify-center  w-full md:text-1xl text-1xl lg:text-2xl font-semibold ">
      <p> Meet our Founder and CEO</p>
      </div>
      <CardHoverEffectDemo />  
      <AnimatedPinDemo />
      
      <Footer/>
      
      
    </div>
   );
}
 
export default LandingPage;