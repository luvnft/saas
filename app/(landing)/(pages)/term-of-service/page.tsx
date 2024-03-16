"use client";

import { LandingNavbar } from "@/components/landing-navbar";
import { Terms } from "./(routes)/terms";
import { SparklesPreview } from "./(routes)/sparks";
import { LandingMiddle } from "@/components/landing-navmiddle";

import { Footer } from "@/components/footer";



const LandingPage = () => {
    return ( 
        <div className="h-full ">
            <LandingNavbar />
            <LandingMiddle />
            <SparklesPreview/>
            <Terms />
            <Footer/>
        </div>
    );
}
 
export default LandingPage;