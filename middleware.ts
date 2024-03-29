import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/api/webhook", "/about-us", "/privacy-policy", 
  "/term-of-service", "/contact-us", "/careers", "/help", "/feedback", 
  "/refund", "/join-us", "/price", "/image-insight"]
});


export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
