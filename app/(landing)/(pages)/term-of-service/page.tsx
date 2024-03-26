import { LandingNavbar } from "@/components/landing-navbar";
import { Terms } from "./(routes)/terms";
import { SparklesPreview } from "./(routes)/sparks";
// import { LandingMiddle } from "@/components/landing-navmiddle";

import { Footer } from "@/components/footer";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service", 
  description: "Unleash AI Creativity",
}


const LandingPage = () => {
    return ( 
        <div className="h-full ">
            <LandingNavbar />
            {/* <LandingMiddle /> */}
            <SparklesPreview/>
            <Terms />
            <Footer/>
        </div>
    );
}
 
export default LandingPage;