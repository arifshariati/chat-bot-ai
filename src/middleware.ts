import { ClerkMiddlewareAuth, clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextRequest } from "next/server";

const isPublicRoutes = createRouteMatcher(["/", "/auth(.*)", "/portal(.*)", "/images(.*)"]);

export default clerkMiddleware((auth: ClerkMiddlewareAuth, req: NextRequest) => {
  if (!isPublicRoutes(req)) auth().protect();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
