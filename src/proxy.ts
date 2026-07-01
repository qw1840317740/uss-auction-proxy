import createMiddleware from "next-intl/middleware";
import { NextResponse, type NextRequest } from "next/server";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

export async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Let next-auth handle its own routes untouched
  if (pathname.startsWith("/api/auth")) {
    return NextResponse.next();
  }

  const intlRes = intlMiddleware(req);

  const match = pathname.match(/^\/(zh|en|ja)\/?(.*)$/);
  const stripped = match ? "/" + match[2] : pathname;
  const locale = match?.[1] ?? routing.defaultLocale;

  if (stripped.startsWith("/auth") || stripped.startsWith("/dashboard")) {
    intlRes.headers.set("X-Robots-Tag", "noindex, nofollow");
  }

  if (stripped.startsWith("/dashboard")) {
    const { getToken } = await import("next-auth/jwt");
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    if (!token) {
      const url = req.nextUrl.clone();
      url.pathname = `/${locale}/auth/login`;
      url.searchParams.set("callbackUrl", req.nextUrl.pathname + req.nextUrl.search);
      const response = NextResponse.redirect(url);
      response.headers.set("X-Robots-Tag", "noindex, nofollow");
      return response;
    }

    const staffOnlyRoutes = ["/dashboard/blog", "/dashboard/inquiries"];
    const isStaffOnlyRoute = staffOnlyRoutes.some((route) => stripped.startsWith(route));

    if (isStaffOnlyRoute && !["ADMIN", "STAFF"].includes(token.role as string)) {
      const url = req.nextUrl.clone();
      url.pathname = `/${locale}/dashboard`;
      url.search = "";
      const response = NextResponse.redirect(url);
      response.headers.set("X-Robots-Tag", "noindex, nofollow");
      return response;
    }
  }

  return intlRes;
}

export const config = {
  matcher: ["/", "/(zh|en|ja)/:path*"],
};
