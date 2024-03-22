import { Avatar, AvatarImage } from "@/components/ui/avatar";

export const BotAvatar = () => {
  return (
    <Avatar className="h-8 w-8">
      <AvatarImage className="p-1" src="/logo.png" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
    </Avatar>
  );
};
