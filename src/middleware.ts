import createMiddleware from "next-intl/middleware";
import { NextResponse, type NextRequest } from "next/server";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Let next-auth handle its own routes untouched
  if (pathname.startsWith("/api/auth")) {
    return NextResponse.next();
  }

  // Always run next-intl locale routing (synchronous in v4)
  const intlRes = intlMiddleware(req);

  // Locale-aware auth check for the dashboard
  const match = pathname.match(/^\/(zh|en|ja)\/?(.*)$/);
  const stripped = match ? "/" + match[2] : pathname;
  const locale = match?.[1] ?? routing.defaultLocale;

  if (stripped.startsWith("/dashboard")) {
    const { getToken } = await import("next-auth/jwt");
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    if (!token) {
      const url = req.nextUrl.clone();
      url.pathname = `/${locale}/auth/login`;
      url.searchParams.set("callbackUrl", req.nextUrl.pathname + req.nextUrl.search);
      return NextResponse.redirect(url);
    }

    // Role gate: blog management requires STAFF or ADMIN
    if (stripped.startsWith("/dashboard/blog") && !["ADMIN", "STAFF"].includes(token.role as string)) {
      const url = req.nextUrl.clone();
      url.pathname = `/${locale}/dashboard`;
      url.search = "";
      return NextResponse.redirect(url);
    }
  }

  return intlRes;
}

export const config = {
  matcher: ["/", "/(zh|en|ja)/:path*"],
};
