"use client";

import Link from "next/link";
import Image from "next/image";
import { Montserrat } from 'next/font/google'
import { Code, Eye, Film, HomeIcon, ImageIcon, LayoutDashboard, Megaphone, MessageSquare, MessageSquarePlus, Settings } from "lucide-react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { FreeCounter } from "@/components/free-counter";

const poppins = Montserrat ({ weight: '600', subsets: ['latin'] });

const routes = [
  
    {
      label: 'Home',
      icon: HomeIcon, // Assuming you have a Home icon imported from somewhere
      href: '/', // Link to the homepage
      color: "text-blue-500" // Adjust the color according to your design
    },
  
  
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/dashboard',
    color: "text-sky-500"
  },
  {
    label: 'Conversation',
    icon: MessageSquare,
    href: '/conversation',
    color: "text-violet-500",
  },
  {
    label: 'Image Generation',
    icon: ImageIcon,
    color: "text-pink-700",
    href: '/image',
  },
  {
    label: 'WebGPT',
    icon: MessageSquarePlus,
    href: '/webgpt',
    color: "text-black-500",
    bgColor: "bg-black-500/10",
  },
  {
    label: 'Image Insight',
    icon: Eye,
    color: "text-Blue-500",
    href: '/image-insight',
  },
 
  {
    label: 'Text to speech Generation',
    icon: Megaphone,
    color: "text-emerald-500",
    href: '/text-to-speech',
  },
  {
    label: 'Entertainment Suggestions',
    icon: Film,
    color: "text-green-700",
    bgColor: "bg-green-700/10",
    href: '/entertainment',
  },
  
  {
    label: 'Code Generation',
    icon: Code,
    color: "text-green-700",
    href: '/code',
  },
  
  {
    label: 'Settings',
    icon: Settings,
    href: '/settings',
  },
];

export const Sidebar = ({
  apiLimitCount = 0,
  isPro = false
}: {
  apiLimitCount: number;
  isPro: boolean;
}) => {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative h-8 w-8 mr-4">
            <Image fill alt="Logo" src="/logo_white.png" 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
          </div>
          <h1 className={cn("text-2xl font-bold", poppins.className)}>
            Cogify
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href} 
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathname === route.href ? "text-white bg-white/10" : "text-zinc-400",
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <FreeCounter 
        apiLimitCount={apiLimitCount} 
        isPro={isPro}
      />
    </div>
  );
};
