import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

import { ToasterProvider } from '@/components/toaster-provider'
import { ModalProvider } from '@/components/modal-provider'
import { CrispProvider } from '@/components/crisp-provider'

import './globals.css'
import type { Viewport } from 'next'
 
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'cyan' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  
  
}

export function generateViewport(): Viewport {
  return {
    themeColor: 'black',
  }
}
 

const font = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  category: 'technology',

  manifest: 'https:/cogify.social/manifest.json',
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  metadataBase: new URL('https://cogify.social'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },

  openGraph: {
  title:  {
    default: 'Cogify',
    template: '%s - Cogify',
  },
  
  description: "Unleash AI Creativity - Prompt, Generate, Speak, Entertain, Code",
  url: 'https://cogify.studio',
    siteName: 'Cogify',
    images: [
      {
        url: 'https://cogify.social/logo.png',
        alt: 'Cogify - Logo', // Must be an absolute URL
        
      },
      {
        url: 'https://cogify.social/1.svg', // Must be an absolute URL
        alt: 'an alien planet&apos;s ecosystem, featuring bizarre flora and fauna, strange geology, and atmospheric anomalies',
      },
      {
        url: 'https://cogify.social/2.svg', // Must be an absolute URL
        alt: 'mandalas incorporating vibrant colors and unique patterns that will inspire feelings of happiness and well-being.',
      },
      {
        url: 'https://cogify.social/3.svg', // Must be an absolute URL
        alt: 'literary classic 1700&apos;s, blending indian traditional and modern elements to add a unique artistic touch for a marriage.',
      },
      {
        url: 'https://cogify.social/4.svg', // Must be an absolute URL
        alt: 'an anime character with large, detailed eyes and distinctive Japanese anime aesthetics',
      },
      {
        url: 'https://cogify.social/4.svg', // Must be an absolute URL
        alt: 'an anime character with large, detailed eyes and distinctive Japanese anime aesthetics',
      },
      
    ],
    locale: 'en_US',
    type: 'website',
  },
  other: {
    custom: 'meta',
  },
}



  
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="shortcut icon" href="/logo.png" />
        </head>
        <CrispProvider />
        <body className={font.className}>
          <ToasterProvider />
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
