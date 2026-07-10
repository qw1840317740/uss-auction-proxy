import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import type { Metadata } from "next";
import "./globals.css";

const BASE_URL = "https://clickcar.jp";
const SITE_NAME = "ClickCar";
const SITE_DESCRIPTION =
  "ClickCar provides premium Japanese used vehicle sales and global export support from Saitama, Japan.";
const GA_MEASUREMENT_ID = "G-0V53BE2HH9";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  applicationName: SITE_NAME,
  title: {
    default: `${SITE_NAME} - Premium Japanese Used Cars & Global Export`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
  },
  alternates: {
    canonical: `${BASE_URL}/en`,
    languages: {
      en: `${BASE_URL}/en`,
      zh: `${BASE_URL}/zh`,
      ja: `${BASE_URL}/ja`,
      "x-default": `${BASE_URL}/en`,
    },
  },
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    url: `${BASE_URL}/en`,
    type: "website",
    locale: "en_US",
    alternateLocale: ["zh_CN", "ja_JP"],
    images: [
      {
        url: "/images/clickcar-logo.png",
        width: 960,
        height: 145,
        alt: `${SITE_NAME} logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: ["/images/clickcar-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      {/* Google Analytics 4 — gtag.js. Loads after hydration so it doesn't block FCP. */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
      <Analytics />
    </>
  );
}
