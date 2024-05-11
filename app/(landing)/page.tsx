import { LandingHero } from "@/components/landing-hero";
import { LandingContent } from "@/components/Landing-content";
import { TabsDemo } from "@/components/tabs-middle";
import { Footer } from "@/components/footer";
import { TypewriterEffectSmoothDemo } from "@/components/typing-effect";
import Navbar from "@/components/ui/navbar";
import { InfiniteMovingCards } from "@/components/global/infinite-moving-cards";
import { clients } from "@/lib/constant";
import CookieConsentComponent from "@/components/CookieConsent";
import { HeroHighlights } from "./(try)/conversation/text";
import { GridDemo } from "./(try)/conversation/grid"; // Import the GridDemo component
import  RetroGridFinal  from "@/components/magicui/retro";



const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <HeroHighlights/>
      {/* <GridDemo/>  */}
      <RetroGridFinal/>
      <TabsDemo />
      
      <LandingContent />
      


      {/* <TypewriterEffectSmoothDemo /> */}
      

      {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
  <InfiniteMovingCards
    className="md:mt-[18rem]"
    items={clients}
    direction="right"
    speed="slow"
  />
</div> */}

      <CookieConsentComponent />
      <TypewriterEffectSmoothDemo/>

      <Footer />
    </div>
  );
};

export default LandingPage;
