// pages/somepage.tsx
import { LandingNavbar } from "@/components/landing-navbar";
import { Footer } from "@/components/footer";
// import { LandingMiddle } from "@/components/landing-navmiddle";
import  SparklesPreview  from "@/components/ui/sparks";


import React from 'react';
import GoogleForm from './(routes)/GoogleForm';

import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Feedback", 
  description: "Unleash AI Creativity",
}

const helpPage: React.FC = () => {
  return (
    <div>
      <LandingNavbar /> 
            
            {/* <LandingMiddle />    */}
            <SparklesPreview buttonText="Feedback" />            
            <div>
            <div style={{ textAlign: 'left', marginLeft: '25%', marginRight: '25%', marginTop: '5vh' }}>
        
          <p style={{ textAlign: 'center',  }}>
          Write us at <a  href="mailto:feedback@cogify.social?subject=I%20have%20a%20suggestion%20to.">feedback@cogify.social</a> for strong feedback
             
             </p>
             <div className="flex justify-center" style={{ width: '100%', marginTop: '20px' }}> 
             <Link href={'mailto:mailto:feedback@cogify.social?subject=I%20have%20a%20suggestion%20to.'}>

             <Button className="px-8 py-2 rounded-md bg-zinc-800 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-blue-500">
          Feedback
          </Button> 

          </Link>
          </div>
        <div style={{ textAlign: 'center', marginTop: '10px' }}>
          
        </div>
        <hr style={{ borderColor: 'black', borderWidth: '1px', marginTop: '10px', marginBottom: '10px' }} />
      </div>
      
      <GoogleForm />
      </div>
      <Footer/>
    
    </div>
  );
};

export default helpPage;
