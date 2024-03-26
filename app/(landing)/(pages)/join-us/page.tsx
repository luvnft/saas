import { LandingNavbar } from "@/components/landing-navbar";
import { Footer } from "@/components/footer";
// import { LandingMiddle } from "@/components/landing-navmiddle";
import { SparklesPreview } from "./(routes)/sparks";

import React from 'react';
import GoogleForm from './(routes)/GoogleForm';
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join-Us", 
  description: "Unleash AI Creativity",
}

const helpPage: React.FC = () => {
  return (
    <div>
      <LandingNavbar /> 
            
      {/* <LandingMiddle />    */}
      <SparklesPreview/>   
            
      <div>
        <div style={{ textAlign: 'left', marginLeft: '25%', marginRight: '25%', marginTop: '5vh' }}>
          <p style={{ textAlign: 'center' }}>
            Write us at <a style={{ color: '#A020F0', fontWeight: 'bold' }} href="mailto:connect@cogify.social?subject=I%20want%20to%20contact%20you.">connect@cogify.social</a> to connect with us.
          </p>
          <div className="flex justify-center" style={{ width: '100%', marginTop: '20px' }}> 
            <Link href={'mailto:connect@cogify.social?subject=I%20want%20to%20contact%20you.'}>
              <Button className="px-8 py-2 rounded-md bg-zinc-800 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-blue-500">
                Contact Us 
              </Button> 
            </Link>
          </div>
          <p style={{ textAlign: 'center', marginTop: '10px' }}>
            Or fill this form
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
