// CookieConsent.tsx
"use client"

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

const CookieConsent: React.FC = () => {
  const [accepted, setAccepted] = useState<boolean>(false);
  const { toast } = useToast()

  useEffect(() => {
    // Check if user has already accepted cookie consent
    const hasAccepted = localStorage.getItem('cookieConsent') === 'accepted';
    if (hasAccepted) {
      setAccepted(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setAccepted(true);
    toast({
      title: "This website uses cookies to enhance the user experience.",
      description: ""
    })
  };

  if (accepted) {
    return null; // Don't render if already accepted
  }

  return (
    <div className="cookie-consent">
      <p>This website uses cookies to enhance the user experience.</p>
      <div className='flex justify-center mt-5'>
     
      <Button variant="default" onClick={handleAccept}>Accept</Button>
      </div>
    </div>
  );
};

export default CookieConsent;
