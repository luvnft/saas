import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return <SignIn />;
}
export const runtime = 'edge';
