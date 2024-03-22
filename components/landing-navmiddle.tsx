

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
    href: "/docs/primitives/alert-dialog",
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
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export function LandingMiddle() {
  const screenSize = useWindowSize(); // Assuming you have a custom hook to get the window size

  return (
    
    
<div className={cn("flex top", {
            'justify-center': screenSize.width >= 700,
            'justify-end ': screenSize.width < 700,
        })} >    <NavigationMenu className="fixed top-4 w-full z-60">
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
              <ListItem href="/docs" title="Conversation">
              Engage in enlightening dialogues with AI where curiosity meets intelligence
              </ListItem>
              <ListItem href="/docs/installation" title="Text to Speech generation ">
              Transform text into lifelike speech with our advanced Text-to-Speech generation.     
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Image generation">
              Bring your ideas to life with our powerful Image Generation tool.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {screenSize.width >= 480 && (
        <NavigationMenuItem>
          <NavigationMenuTrigger>Learn</NavigationMenuTrigger>
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
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              
              Feedback
            </NavigationMenuLink>
            
          </Link>
        </NavigationMenuItem>
        {screenSize.width >= 480 && (
        <NavigationMenuItem>
          
          <Link href="/docs" legacyBehavior passHref>
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

