
import { Code, Eye, Film, ImageIcon, Megaphone, MessageSquare } from "lucide-react";

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
    label: 'Image Generation',
    icon: ImageIcon,
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
    href: '/image',
  },

  {
    label: 'Image-Insight',
    icon: Eye,
    color: "text-blue-100",
    bgColor: "bg-blue-100/10",
    href: '/image-insight',
  },
  {
    label: 'Text to speech',
    icon: Megaphone,
    href: '/text-to-speech',
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
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

export const items = [
  
];

