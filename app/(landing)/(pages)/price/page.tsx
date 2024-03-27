import  Navbar  from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
// import { LandingMiddle } from "@/components/landing-navmiddle";
import { SparklesPreview } from "./(routes)/sparks";

import React from 'react';
import GoogleForm from './(routes)/GoogleForm';
import { Metadata } from "next";
import  { Plans } from '@/components/infinite-scroll'

export const metadata: Metadata = {
  title: "Join-Us", 
  description: "Unleash AI Creativity",
}

const helpPage: React.FC = () => {
  return (

    <div>

      <Navbar/>     
            
      {/* <LandingMiddle />    */}
      
      <Plans/>       
      <Footer/>
      
    </div>
  );
};

export default helpPage;
