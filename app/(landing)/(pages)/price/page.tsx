import  Navbar  from "@/components/ui/navbar";
import { Footer } from "@/components/footer";
// import { LandingMiddle } from "@/components/landing-navmiddle";

import React from 'react';
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
