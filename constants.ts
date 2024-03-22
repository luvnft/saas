import { Label } from "@radix-ui/react-label";
import { Icon } from "@radix-ui/react-select";
import { color } from "framer-motion";
import { Code, Film, ImageIcon, Megaphone, MessageSquare } from "lucide-react";

export const MAX_FREE_COUNTS = 500;

export const tools = [
  {
    label: 'Conversation',
    icon: MessageSquare,
    href: '/conversation',
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: 'Text to speech',
    icon: Megaphone,
    href: '/text-to-speech',
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    label: 'Image Generation',
    icon: ImageIcon,
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
    href: '/image',
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
    bgColor: "bg-green-700/10",
    href: '/code',
  },
  
];

