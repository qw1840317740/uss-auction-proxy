import { siteConfig } from "@/lib/seo";
import { JsonLdScript } from "./JsonLdScript";

/**
 * Top-level Organization JSON-LD for the site. Per Google's dealer-site
 * recommendation, this is the parent entity; AutoDealer on the home page
 * references it via `parentOrganization`.
 */
export function JsonLdOrganization() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.baseUrl}#organization`,
    name: siteConfig.legalName,
    alternateName: siteConfig.name,
    url: siteConfig.baseUrl,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.baseUrl}${siteConfig.logo}`,
      width: 960,
      height: 145,
    },
    foundingDate: siteConfig.foundingDate,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.phone,
        contactType: "sales",
        areaServed: siteConfig.areaServedCountries,
        availableLanguage: ["English", "Japanese", "Chinese"],
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
  };

  return <JsonLdScript data={jsonLd} />;
}