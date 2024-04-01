import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from 'next/server';

export function middleware(request: Request) {
  const response = NextResponse.next();

  // Set the Strict-Transport-Security header
  response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');

  return response;
}



export default authMiddleware({
  publicRoutes: ["/", "/api/webhook", "/about-us", "/privacy-policy", 
  "/term-of-service", "/contact-us", "/careers", "/help", "/feedback", 
  "/refund", "/join-us", "/price",]
});


export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

