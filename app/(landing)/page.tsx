import { LandingNavbar } from "@/components/landing-navbar";
import { LandingHero } from "@/components/landing-hero";
import { LandingContent } from "@/components/Landing-content";
import { LandingMiddle } from "@/components/landing-navmiddle";
import { TabsDemo } from "@/components/tabs-middle";
import { Footer } from "@/components/footer";
import {TypewriterEffectSmoothDemo} from "@/components/typing-effect";




const LandingPage = () => {
  return ( 
    <div >
      <LandingNavbar />
     
      <LandingHero />
      <div className="text-sm md:text-xl font-bold text-zinc-800 flex justify-center ">
        Start exploring the power of AI
      </div>
      <TabsDemo />
      <LandingContent />
      
      
      
      <TypewriterEffectSmoothDemo />
      <Footer/>
      

    </div>
   );
}
 
export default LandingPage;
