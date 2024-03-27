"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return (
    <div>
      <Navbar />
    </div>
  );
}


function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
      <div
      >
  
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item="AI Services">
            <div className="  text-sm grid grid-cols-2 gap-10 p-2">
              <ProductItem
                title="Conversation"
                href="/conversation"
                src="/con.svg"
                description= "Engage in enlightening dialogues with AI where curiosity meets intelligence"
              />
              <ProductItem
                title="Image Generation"
                href="/image"
                src="/imag.svg"
                description="Bring your ideas to life with our powerful Image Generation tool."
              />
              <ProductItem
                title="Text-to-Speech"
                href="/text-to-speech"
                src="/spe.svg"
                description="Transform text into lifelike speech with our advanced Text-to-Speech generation."
              />
              <ProductItem
                title="Code Generation"
                href="/code"
                src="/code.svg"
                description="Efficiently create code with our streamlined Code Generation tool."
              />
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Price">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/price">Hobby</HoveredLink>
              <HoveredLink href="/price">Pro Plan</HoveredLink>
              <HoveredLink href="/price">Unlimited</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Contact Us">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/feedback">Feedback</HoveredLink>
              <HoveredLink href="/help">Help</HoveredLink>
              <HoveredLink href="/refund">Refund</HoveredLink>
              <HoveredLink href="/join-us">Join Us</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="About">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/about-us">About Us</HoveredLink>
              <HoveredLink href="https://wallpalette.studio">Blog/Articles</HoveredLink>
              <HoveredLink href="/faqs">FAQs</HoveredLink>
            </div>
          </MenuItem>
        </Menu>
      </div>
    );
  }
  