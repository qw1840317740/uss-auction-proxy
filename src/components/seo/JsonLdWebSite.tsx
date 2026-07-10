import { siteConfig, getAbsoluteUrl } from "@/lib/seo";
import { JsonLdScript } from "./JsonLdScript";

/**
 * WebSite JSON-LD with a SearchAction that targets the vehicles listing.
 * This unlocks Google's sitelinks searchbox.
 */
export function JsonLdWebSite({ locale }: { locale: string }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.baseUrl}#website`,
    name: siteConfig.name,
    url: siteConfig.baseUrl,
    inLanguage: ["en", "zh", "ja"],
    publisher: { "@id": `${siteConfig.baseUrl}#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${getAbsoluteUrl(`/${locale}/vehicles`)}?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return <JsonLdScript data={jsonLd} />;
}