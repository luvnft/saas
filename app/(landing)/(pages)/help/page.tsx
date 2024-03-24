// pages/somepage.tsx
"use client";
import { LandingNavbar } from "@/components/landing-navbar";
import { Footer } from "@/components/footer";
import { LandingMiddle } from "@/components/landing-navmiddle";
import { SparklesPreview } from "./(routes)/sparks";

import React from 'react';
import GoogleForm from './(routes)/GoogleForm';

const helpPage: React.FC = () => {
  return (
    <div>
      <LandingNavbar /> 
            
            <LandingMiddle />   
            <SparklesPreview/>   
            
<div className="flex flex-row items-center justify-center  w-full md:text-1xl text-1xl lg:text-2xl font-semibold ">
      <h1></h1>
      <GoogleForm />
      </div>
      <Footer/>
    
    </div>
  );
};

export default helpPage;
