import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://uss-auction-proxy.vercel.app"),
  title: {
    default: "clickcar（クリックカー） — Premium Japanese Used Cars & Global Export",
    template: "%s | clickcar（クリックカー）",
  },
  description:
    "clickcar（クリックカー） — Premium Japanese used vehicle sales and global export service. 日本のプレミアム中古車販売・輸出サービス。",
  openGraph: {
    siteName: "clickcar（クリックカー）",
    type: "website",
    locale: "ja_JP",
    alternateLocale: ["en_US", "zh_CN"],
  },
  twitter: {
    card: "summary_large_image",
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
  return children;
}
