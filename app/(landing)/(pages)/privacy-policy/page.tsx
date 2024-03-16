"use client";

import { LandingNavbar } from "@/components/landing-navbar";
import { LandingContent } from "@/components/Landing-content";
import { PrivacyPolicy } from "./(routes)/privacy";
import { Footer } from "@/components/footer";
import {TypewriterEffectSmoothDemo} from "@/components/typing-effect";
import { SparklesPreview } from "./(routes)/sparks";
import { LandingMiddle } from "@/components/landing-navmiddle";

const termPage = () => {
  return ( 
    <div className="h-full ">
            <LandingNavbar /> 
            <LandingMiddle />      
      <SparklesPreview />  
      <PrivacyPolicy />  
      <Footer/>

      
      
    </div>
   );
}
 
export default termPage;