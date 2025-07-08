import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import { NextResponse, NextRequest } from "next/server";

const Initmiddleware = createMiddleware(routing);

export function middleware(request: NextRequest) {
  const acceptLanguage = request.headers.get("accept-language");
  const browserLang = acceptLanguage?.split(",")[0].split("-")[0] || "en";
  const { pathname } = request.nextUrl;

  const supportedLocales = ["en", "pl"];
  const pathLocale = pathname.split("/")[1];

  if (!supportedLocales.includes(pathLocale)) {
    const finalLocale = browserLang === "pl" ? "pl" : "en";
    return NextResponse.redirect(new URL(`/${finalLocale}`, request.url));
  }

  return Initmiddleware(request);
}

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
