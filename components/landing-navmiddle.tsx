

"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import Image from "next/image"
import { useState, useEffect } from 'react';


import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"



function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
      width: window.innerWidth,
      height: window.innerHeight,
  });

  useEffect(() => {
      function handleResize() {
          setWindowSize({
              width: window.innerWidth,
              height: window.innerHeight,
          });
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}


const components: { title: string; href: string; description: string }[] = [
  {
    title: "Conversation",
    href: "/features/conversation",
    description:
      "Engage in enlightening dialogues with AI where curiosity meets intelligence",
  },
  {
    title: "Text-to-Speech generation",
    href: "/docs/primitives/hover-card",
    description:
      "Transform text into lifelike speech with our advanced Text-to-Speech generation.     ",
  },
  {
    title: "Image Generation",
    href: "/docs/primitives/progress",
    description:
      "Bring your ideas to life with our powerful Image Generation tool.      .",
  },
  {
    title: "Code Generation",
    href: "/docs/primitives/scroll-area",
    description: "Efficiently create code with our streamlined Code Generation tool.     ",
  },
  {
    title: "Movie or Series suggestion",
    href: "/docs/primitives/tabs",
    description:
      "Intelligently suggest movies or series based on your preferences. ",
  },
  {
    title: "More",
    href: "/docs/primitives/tooltip",
    description:
      "More stunning features comming soon.",
  },
]

export function LandingMiddle() {
  const screenSize = useWindowSize(); // Assuming you have a custom hook to get the window size

  return (
    
    
<div className={cn("flex", {
            'justify-center': screenSize.width >= 700,
            'justify-end ': screenSize.width < 700,
        })} style={{ position: 'fixed', top: '4rem', width: '100%', zIndex: 60 }}>    <NavigationMenu className="fixed top-4 w-full z-60">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="relative h-8 w-8 mr-4">
                      <Image
                         alt="Logo"
                          src="/logo.png"
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                     </div>
                     <div className="mb-2 mt-4 text-lg font-medium">
                     Cogify/ai
                    </div>
  
                    <p className="text-sm leading-tight text-muted-foreground">
                    Your AI-powered assistant for conversations, 
                    image generation, 
                    text-to-speech, and more.

                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/feedback" title="Feedback">
              Your feedback fuels our innovation at Cogify. Share your thoughts and help us improve!
              </ListItem>
              <ListItem href="/help" title="Help ">
              Need assistance? We're here to help! Fill out the form below and let us guide you through any questions or concerns you have with Cogify.     
              </ListItem>
              <ListItem href="/affiliation" title="Affiliation">
              "Interested in affiliating with Cogify? Submit your request here and let's explore partnership opportunities together."
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {screenSize.width >= 480 && (
        <NavigationMenuItem>
          <NavigationMenuTrigger>Features</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        )}
        <NavigationMenuItem>
          <Link href="/feedback" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              
              Feedback
            </NavigationMenuLink>
            
          </Link>
        </NavigationMenuItem>
        {screenSize.width >= 480 && (
        <NavigationMenuItem>
          
          <Link href="/help" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Help
            </NavigationMenuLink>
            
          </Link>
        </NavigationMenuItem>
        )}
      </NavigationMenuList>
    </NavigationMenu>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

