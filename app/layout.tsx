import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';

import { ToasterProvider } from '@/components/toaster-provider';
import { ModalProvider } from '@/components/modal-provider';
import { CrispProvider } from '@/components/crisp-provider';

import './globals.css';

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#00bcd4' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

const font = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title:  {
    default: 'Cogify',
    template: '%s - Cogify',
  },
  description: "Try all new GPT-4o services, Dall 3 image generation, text-to-speech, Gpt4-o + Internet at free and unlimited usage. No ads, no tracking. We provide the best available AI services for free.",
  metadataBase: new URL('https://cogify.social'),
  openGraph: {
    type: 'website',
    url: 'https://cogify.social',
    title: 'Cogify',
    description: 'Try all new GPT-4o services, Dall 3 image generation, text-to-speech, Gpt4-o + Internet at free and unlimited usage. No ads, no tracking. We provide the best available AI services for free.',
    images: [
      {
        url: 'https://cogify.social/logo.png',
        width: 800,
        height: 600,
        alt: 'Cogify Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@shubhamsharmaui',
    title: 'Cogify',
    description: 'Try all new GPT-4o services, Dall 3 image generation, text-to-speech, Gpt4-o + Internet at free and unlimited usage. No ads, no tracking. We provide the best available AI services for free.',
    images: 'https://cogify.social/opengraph-image.png',
  },
  alternates: {
    canonical: 'https://cogify.social',
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="anonymous" />
          <link rel="preload" href="/fonts/Inter-VariableFont_wght.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
          <link rel="shortcut icon" href="/logo.png" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <meta name="theme-color" content="#00bcd4" />
          <meta name="description" content="Unleash AI Creativity - Prompt, Generate, Speak, Entertain, Code" />
          <meta name="keywords" content=", gpt4-o, chagpt-4, chatgpt4, cogify, cogify.social, chatgpt4-o, free, chatgpt4 free, AI, creativity, prompt, generate, speak, entertain, code" />
          <meta name="author" content="Shubham Sharma" />

          {/* Open Graph meta tags */}
          <meta property="og:title" content="Cogify" />
          <meta property="og:description" content="Unleash AI Creativity - Prompt, Generate, Speak, Entertain, Code" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://cogify.social" />
          <meta property="og:image" content="https://cogify.social/logo.png" />
          <meta property="og:image:width" content="800" />
          <meta property="og:image:height" content="600" />

          {/* Twitter Card meta tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@shubhamsharmaui" />
          <meta name="twitter:title" content="Cogify" />
          <meta name="twitter:description" content="Unleash AI Creativity - Prompt, Generate, Speak, Entertain, Code" />
          <meta name="twitter:image" content="https://cogify.social/logo.png" />

          {/* Structured Data */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Cogify",
              "url": "https://cogify.social",
              "logo": "https://cogify.social/logo.png",
              "sameAs": [
                "https://twitter.com/shubhamsharmaui",
                // Add other social media profiles here
              ],
            })}
          </script>

          {/* Content-Security-Policy for better security */}
          <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; img-src 'self' data:; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';" />
        </head>
        <CrispProvider />
        <body className={font.className}>
          <ToasterProvider />
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}