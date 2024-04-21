"use client"
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'

import Image from "next/image";
import * as React from "react";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";



export const Loader = () => {
  
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-10 h-10 relative animate-spin">
        <Image alt="Logo" 
        src="/logo.png" 
        draggable={false}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        fill />
      </div>
      <p className="text-sm text-muted-foreground">Cogify is thinking...</p>
      
          </div>
  );
};

export const Loaderimage = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress(prevProgress => prevProgress + 10);
      } else {
        clearInterval(interval);
      }
    }, 1600); // 16 seconds in milliseconds

    return () => clearInterval(interval);
  }, [progress]);

  return(
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-10 h-10 relative animate-spin">
        <Image
          alt="Logo"
          src="/logo.png"
          draggable={false}
          
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <p className="text-sm text-muted-foreground">
      Cogify is generating image...
      </p>
      <div>
        <CircularProgress value={progress} color='grey' size='70px' thickness='7px'>
          <CircularProgressLabel>{`${progress}%`}</CircularProgressLabel>
        </CircularProgress>
      </div>
          </div>
  );
}
export const LoaderAudio = () => {
  const [progress, setProgress] = React.useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress(prevProgress => prevProgress + 10);
      } else {
        clearInterval(interval);
      }
    }, 500); // 5 seconds in milliseconds

    return () => clearInterval(interval);
  }, [progress]);

  return(
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-10 h-10 relative animate-spin">
        <Image
          alt="Logo"
          src="/logo.png"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
          draggable={false}
        />
      </div>
      <p className="text-sm text-muted-foreground">
      Cogify is cheking it&apos;s vocal...
      </p>
      <div className="w-[60%]" style={{ backgroundColor: 'white', height: '10px' }}>
        <Progress value={progress} style={{ backgroundColor: 'black', height: '100%', borderRadius: '5px'}} />
      </div>
      <div>
        <CircularProgress value={progress} color='grey' size='70px' thickness='7px'>
          <CircularProgressLabel>{`${progress}%`}</CircularProgressLabel>
        </CircularProgress>
      </div>
      
    </div>
  );
}
