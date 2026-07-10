import { getTranslations } from "next-intl/server";
import { siteConfig } from "@/lib/seo";
import { JsonLdScript } from "./JsonLdScript";

export interface BreadcrumbItem {
  /** Display label (will be localized at the call site if needed). */
  name: string;
  /** Path suffix relative to the locale (e.g. "/vehicles"). Required for all but the trailing current item. */
  url?: string;
}

interface Props {
  items: BreadcrumbItem[];
  locale: string;
}

/**
 * BreadcrumbList JSON-LD. Localized "Home" label, contiguous `position`
 * counting from 1..N (the trailing current item without `url` still gets a slot).
 */
export async function JsonLdBreadcrumb({ items, locale }: Props) {
  const t = await getTranslations({ locale, namespace: "common" });
  const homeLabel = t("home");

  // Build the full list with Home at the front. The trailing item represents the
  // current page and may omit `url`.
  const full: BreadcrumbItem[] = [{ name: homeLabel, url: "" }, ...items];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: full.map((item, i) => {
      const position = i + 1;
      const entry: { "@type": "ListItem"; position: number; name: string; item?: string } = {
        "@type": "ListItem",
        position,
        name: item.name,
      };
      if (item.url !== undefined) {
        // Empty string = Home; build the per-locale URL.
        entry.item = item.url === ""
          ? `${siteConfig.baseUrl}/${locale}`
          : `${siteConfig.baseUrl}/${locale}${item.url}`;
      }
      return entry;
    }),
  };

  return <JsonLdScript data={jsonLd} />;
}