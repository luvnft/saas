import { LandingNavbar } from "@/app/components/landing-navbar";
import { LandingHero } from "@/app/components/landing-hero";
import { LandingContent } from "@/app/components/Landing-content";
import { LandingMiddle } from "@/app/components/landing-navmiddle";
import { TabsDemo } from "@/app/components/tabs-middle";
import { Footer } from "@/app/components/footer";
import {TypewriterEffectSmoothDemo} from "@/app/components/typing-effect";
const LandingPage = () => {
  return ( 
    <div className="h-full ">
      <LandingNavbar /> <LandingMiddle />
      <LandingHero />
      <div className="text-sm md:text-xl font-bold text-zinc-800 flex justify-center ">
        Start exploring the power of AI
      </div>
      <LandingContent />
      
      <TabsDemo />
      
      <TypewriterEffectSmoothDemo />
      <Footer/>
      
    </div>
   );
}
 
export default LandingPage;
