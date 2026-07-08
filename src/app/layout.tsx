import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import "./globals.css";

const BASE_URL = "https://clickcar.jp";
const SITE_NAME = "ClickCar";
const SITE_DESCRIPTION =
  "ClickCar provides premium Japanese used vehicle sales and global export support from Saitama, Japan.";

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
      <Analytics />
    </>
  );
}
