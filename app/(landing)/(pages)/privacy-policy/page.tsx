
import { LandingNavbar } from "@/components/landing-navbar";
import { PrivacyPolicy } from "./(routes)/privacy";
import { Footer } from "@/components/footer";
import { SparklesPreview } from "./(routes)/sparks";
import { LandingMiddle } from "@/components/landing-navmiddle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy", 
  description: "Unleash AI Creativity",
}

const termPage = () => {
  return ( 
    <div className="h-full ">
            <LandingNavbar /> <LandingMiddle />      
      <SparklesPreview />  
      <PrivacyPolicy />  
      <Footer/>

      
      
    </div>
   );
}
 
export default termPage;