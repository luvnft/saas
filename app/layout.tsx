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
  title:  {
    default: 'Cogify',
    template: '%s - Cogify',
  },
  
  description: "Unleash AI Creativity - Prompt, Generate, Speak, Entertain, Code",
  metadataBase: new URL('https://cogify.social'),
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
          <link rel="shortcut icon" href="/logo.png" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
          <link rel="icon" href="/favicon.ico" />
          <title>Cogify</title>
          {/* Meta for SEO */}
          <meta name="description" content="Unleash AI Creativity - Prompt, Generate, Speak, Entertain, Code" />
          <meta name="keywords" content="AI, creativity, prompt, generate, speak, entertain, code" />
          <meta name="author" content="Shubham Sharma" />
          {/* Open Graph meta tags for social media */}
          <meta property="og:title" content="Cogify" />
          <meta property="og:description" content="Unleash AI Creativity - Prompt, Generate, Speak, Entertain, Code" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://cogify.social" />
          <meta property="og:image" content="https://cogify.social/logo.png" />
          {/* Twitter Card meta tags */}
          <meta name="twitter:site" content="@shubhamsharmaui" />
          <meta name="twitter:title" content="Cogify" />
          <meta name="twitter:description" content="Unleash AI Creativity - Prompt, Generate, Speak, Entertain, Code" />
          <meta name="twitter:image" content="https://cogify.social/logo.png" />
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
