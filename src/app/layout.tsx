import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import "./globals.css";

const BASE_URL = "https://uss-auction-proxy.vercel.app";
const SITE_NAME = "ClickCar（クリックカー）";
const SITE_DESCRIPTION =
  "ClickCar（クリックカー） provides premium Japanese used vehicle sales and global export support from Saitama, Japan.";

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
      { url: "/favicon.ico" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      zh: `${BASE_URL}/zh`,
      en: `${BASE_URL}/en`,
      ja: `${BASE_URL}/ja`,
    },
  },
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    url: BASE_URL,
    type: "website",
    locale: "ja_JP",
    alternateLocale: ["en_US", "zh_CN"],
    images: [
      {
        url: "/images/clickcar-logo.svg",
        width: 720,
        height: 180,
        alt: `${SITE_NAME} logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: ["/images/clickcar-logo.svg"],
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
      <Analytics />
    </>
  );
}