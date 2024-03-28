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
  title: "Help", 
  description: "Unleash AI Creativity",
}


const helpPage: React.FC = () => {
  return (
    <div>
      <LandingNavbar /> 
            
            {/* <LandingMiddle />    */}
            <SparklesPreview buttonText="Help" />            
            <div>
            <div style={{ textAlign: 'left', marginLeft: '25%', marginRight: '25%', marginTop: '5vh' }}>
            <p style={{ textAlign: 'center' }}>
              Write us at <a style={{ color: '#A020F0', fontWeight: 'bold' }} href="mailto:help@cogify.social?subject=I%20need%20help%20related%20to.">help@cogify.social</a> for urgent help
            </p>
             <div className="flex justify-center" style={{ width: '100%', marginTop: '20px' }}> 
             <Link href={'mailto:help@cogify.social?subject=I%20need%20help%20related%20to'}>

             <Button className="px-8 py-2 rounded-md bg-zinc-800 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-blue-500">
          Help
          </Button> 

          </Link>
          </div>
          <p style={{ textAlign: 'center', marginTop: '10px' }}>
            <strong>Or fill this form</strong>
            </p>
            <hr style={{ borderColor: 'black', borderWidth: '1px', marginTop: '10px', marginBottom: '10px' }} />

        
      </div>
      
      <GoogleForm />
      </div>
      <Footer/>
    
    </div>
  );
};

export default helpPage;
