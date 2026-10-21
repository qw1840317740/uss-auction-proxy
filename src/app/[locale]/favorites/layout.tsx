import type { Metadata } from "next";

// Favorites are per-browser (localStorage), so the page has no indexable content.
export const metadata: Metadata = {
  robots: { index: false, follow: true },
};

export default function FavoritesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
