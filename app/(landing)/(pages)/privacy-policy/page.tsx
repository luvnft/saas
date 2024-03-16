"use client";

import { LandingNavbar } from "@/app/components/landing-navbar";
import { LandingContent } from "@/app/components/Landing-content";
import { PrivacyPolicy } from "./(routes)/privacy";
import { Footer } from "@/app/components/footer";
import {TypewriterEffectSmoothDemo} from "@/app/components/typing-effect";
import { SparklesPreview } from "./(routes)/sparks";
import { LandingMiddle } from "@/app/components/landing-navmiddle";

const LandingPage = () => {
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
 
export default LandingPage;