import { LandingNavbar } from "@/components/landing-navbar";
import { LandingMiddle } from "@/components/landing-navmiddle";
import { Footer } from "@/components/footer";
import  ConversationPage  from "./data";


const LandingPage = () => {
  return ( 
    <div className="h-full ">
      <LandingNavbar /><LandingMiddle />
      <ConversationPage/>
   

      <Footer/>
      

    </div>
   );
}
 
export default LandingPage;
