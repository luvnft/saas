"use client"

import Image from "next/image";
import * as React from "react";
import { Progress } from "@/components/ui/progress";



export const Loader = () => {
  const [progress, setProgress] = React.useState(0);
  const [startTime, setStartTime] = React.useState(0);

  React.useEffect(() => {
    setStartTime(Date.now());
    const timer = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      const progressPercentage = (elapsedTime / 3000) * 100;
      setProgress(progressPercentage >= 100 ? 100 : progressPercentage);
    }, 50); // Adjust this interval for smoother animation
    return () => clearInterval(timer);
  }, [startTime]);

  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-10 h-10 relative animate-spin">
        <Image alt="Logo" 
        src="/logo.png" 
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        fill />
      </div>
      <p className="text-sm text-muted-foreground">Cogify is thinking...</p>
      <div className="w-[60%]" style={{ backgroundColor: 'white', height: '10px' }}>
        <Progress value={progress} style={{ backgroundColor: 'black', height: '100%', borderRadius: '5px'}} />
      </div>
          </div>
  );
};

export const Loaderimage = () => {
  const [progress, setProgress] = React.useState(0);
  const [startTime, setStartTime] = React.useState(0);

  React.useEffect(() => {
    setStartTime(Date.now());
    const timer = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      const progressPercentage = (elapsedTime / 3000) * 100;
      setProgress(progressPercentage >= 100 ? 100 : progressPercentage);
    }, 50); // Adjust this interval for smoother animation
    return () => clearInterval(timer);
  }, [startTime]);
  
  return(
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-10 h-10 relative animate-spin">
        <Image
          alt="Logo"
          src="/logo.png"
          
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <p className="text-sm text-muted-foreground">
      Cogify is generating image...
      </p>
      <div className="w-[60%]" style={{ backgroundColor: 'white', height: '10px' }}>
        <Progress value={progress} style={{ backgroundColor: 'black', height: '100%', borderRadius: '5px'}} />
      </div>
          </div>
  );
}
export const LoaderAudio = () => {
  const [progress, setProgress] = React.useState(0);
  const [startTime, setStartTime] = React.useState(0);

  React.useEffect(() => {
    setStartTime(Date.now());
    const timer = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      const progressPercentage = (elapsedTime / 3000) * 100;
      setProgress(progressPercentage >= 100 ? 100 : progressPercentage);
    }, 50); // Adjust this interval for smoother animation
    return () => clearInterval(timer);
  }, [startTime]);

  return(
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-10 h-10 relative animate-spin">
        <Image
          alt="Logo"
          src="/logo.png"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
        />
      </div>
      <p className="text-sm text-muted-foreground">
      Cogify is cheking it&apos;s vocal...
      </p>
      <div className="w-[60%]" style={{ backgroundColor: 'white', height: '10px' }}>
        <Progress value={progress} style={{ backgroundColor: 'black', height: '100%', borderRadius: '5px'}} />
      </div>
    </div>
  );
}
