/* eslint-disable @typescript-eslint/no-unused-vars */
// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

export async function middleware(request: NextRequest): Promise<NextResponse> {
  const { locales } = routing;
  const pathname = request.nextUrl.pathname;

  // Step 1: Detect browser language and determine locale
  const acceptLanguage = request.headers.get("accept-language") || "";
  const browserLang = acceptLanguage.split(",")[0]?.split("-")[0]?.toLowerCase();
  const locale = (locales as unknown as string[]).includes(browserLang) ? (browserLang as "en" | "es" | "fr") : "fr";

  // Step 2: Check if the pathname includes a locale
  const pathnameHasLocale = locales.some(
    (loc) => pathname.startsWith(`/${loc}/`) || pathname === `/${loc}`
  );

  // Step 3: Redirect to the determined locale if no locale is present in the path
  if (!pathnameHasLocale) {
    const newUrl = new URL(`/${locale}${pathname}`, request.url);
    return NextResponse.redirect(newUrl);
  }

  // Step 4: Call the next-intl middleware to handle locale routing
  const response = await intlMiddleware(request);

  // Step 5: Handle GET requests: Extend session cookie expiration
  if (request.method === "GET") {
    const token = request.cookies.get("session")?.value ?? null;
    if (token !== null) {
      response.cookies.set("session", token, {
        path: "/",
        maxAge: 60 * 60 * 24 * 30, // 30 days
        sameSite: "lax",
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
      });
    }
  } else {
    // Step 6: For non-GET requests, validate Origin and Host headers
    const originHeader = request.headers.get("Origin");
    const hostHeader = request.headers.get("Host");

    if (!originHeader || !hostHeader) {
      return new NextResponse(null, {
        status: 403,
        statusText: "Forbidden: Missing Origin or Host headers",
      });
    }

    try {
      const origin = new URL(originHeader);
      if (origin.host !== hostHeader) {
        return new NextResponse(null, {
          status: 403,
          statusText: "Forbidden: Origin does not match Host",
        });
      }
    } catch (error) {
      return new NextResponse(null, {
        status: 403,
        statusText: "Forbidden: Invalid Origin header",
      });
    }
  }

  // Step 7: Return the response
  return response;
}

export const config = {
  matcher: ["/((?!api|trpc|_next|_vercel|.*\\..*).*)"],
};