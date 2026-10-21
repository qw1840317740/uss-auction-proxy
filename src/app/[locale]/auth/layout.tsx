import type { Metadata } from "next";

// Sign-in/register read the query string at request time and should never be indexed.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return children;
}
