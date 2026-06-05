import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Velocity JAPAN — Premium Japanese Used Cars & Global Export",
  description:
    "Velocity JAPAN — Premium Japanese used vehicle sales and global export service. 日本のプレミアム中古車販売・輸出サービス。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
