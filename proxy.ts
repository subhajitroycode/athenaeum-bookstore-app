import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const proxy = async (request: NextRequest) => {
  const session = request.cookies.get("better-auth.session_token");

  if (session && request.nextUrl.pathname.startsWith("/auth")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: "/auth/:path*",
};
