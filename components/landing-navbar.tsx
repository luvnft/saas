"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { Montserrat } from 'next/font/google';
import { cn } from '@/lib/utils';

const font = Montserrat({ weight: '600', subsets: ['latin'] });

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return windowSize;
}

export const LandingNavbar = () => {
  const { isSignedIn } = useAuth();
  const screenSize = useWindowSize();

  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <div className="relative h-8 w-8 mr-4">
          <Image fill alt="Logo" src="/logo.png" />
        </div>
        <div>
          <h1 className={cn('text-2xl font-bold', font.className)}>Cogify</h1>
        </div>
      </Link>
      {screenSize.width >= 700 && (
        <div className="flex items-center gap-x-2">
          <Link href={isSignedIn ? '/dashboard' : '/sign-up'}>
            <Button className="px-8 py-2 rounded-md bg-zinc-800 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-blue-500">
              Get Started
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
};
