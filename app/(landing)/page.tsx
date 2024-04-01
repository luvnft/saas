import { LandingHero } from "@/components/landing-hero";
import { LandingContent } from "@/components/Landing-content";
import { TabsDemo } from "@/components/tabs-middle";
import { Footer } from "@/components/footer";
import {TypewriterEffectSmoothDemo} from "@/components/typing-effect";
import  Navbar  from "@/components/ui/navbar";
import { InfiniteMovingCards } from '@/components/global/infinite-moving-cards'
import { clients } from '@/lib/constant'
import CookieConsentComponent from '@/components/CookieConsent';




const LandingPage = () => {
  return ( 
    
    <div >
      <Navbar/>     
      <LandingHero />
      <div className="text-sm md:text-xl font-bold text-zinc-800 flex justify-center ">
        Start exploring the power of AI
      </div>
      <TabsDemo />
      
      <LandingContent />
            
      
      <TypewriterEffectSmoothDemo />

      {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
  <InfiniteMovingCards
    className="md:mt-[18rem]"
    items={clients}
    direction="right"
    speed="slow"
  />
</div> */}
<CookieConsentComponent/>


      <Footer/>
    </div>
    
   );
}
 
export default LandingPage;
