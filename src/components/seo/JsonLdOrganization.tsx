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
    taxID: siteConfig.vatId,
    // JUMVEA = Japan Used Motor Vehicle Exporters Association.
    // Certification builds E-E-A-T signals Google uses for YMYL export sites.
    member: {
      "@type": "Organization",
      name: "Japan Used Motor Vehicle Exporters Association (JUMVEA)",
      identifier: siteConfig.jumveaMemberId,
      url: "https://www.jumvea.or.jp/",
    },
    knowsAbout: [
      "Japanese used vehicle export",
      "USS auction proxy bidding",
      "Vehicle inspection",
      "Export documentation",
      "RoRo and container shipping",
    ],
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