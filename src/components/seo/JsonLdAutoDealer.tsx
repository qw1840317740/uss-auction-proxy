import { siteConfig, getAbsoluteUrl } from "@/lib/seo";
import { JsonLdScript } from "./JsonLdScript";

interface Props {
  locale: string;
}

/**
 * AutoDealer JSON-LD for the home page. Extends the previous inline block with
 * `sameAs`, `areaServed`, weekend hours, and a `parentOrganization` link to
 * the site-wide Organization entity.
 */
export function JsonLdAutoDealer({ locale }: Props) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoDealer",
    "@id": `${siteConfig.baseUrl}#autodealer`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: getAbsoluteUrl(`/${locale}`),
    logo: `${siteConfig.baseUrl}${siteConfig.logo}`,
    telephone: siteConfig.phone,
    parentOrganization: { "@id": `${siteConfig.baseUrl}#organization` },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: siteConfig.openingHours.weekdays.days,
        opens: siteConfig.openingHours.weekdays.opens,
        closes: siteConfig.openingHours.weekdays.closes,
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: siteConfig.openingHours.saturday.days,
        opens: siteConfig.openingHours.saturday.opens,
        closes: siteConfig.openingHours.saturday.closes,
      },
    ],
    areaServed: siteConfig.areaServedCountries.map((c) => ({ "@type": "Country", name: c })),
    currenciesAccepted: siteConfig.currenciesAccepted,
    paymentAccepted: siteConfig.paymentAccepted,
    priceRange: siteConfig.priceRange,
    // E-E-A-T trust signals: JUMVEA certification, export volume, public reach
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Japanese Used Vehicle Export Catalog",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Japan Dealer Auction Proxy Bidding",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Worldwide Vehicle Export & Shipping",
          },
        },
      ],
    },
    // Member of JUMVEA — referenced via hasCredential for trust
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "license",
        identifier: siteConfig.jumveaMemberId,
        recognizedBy: {
          "@type": "Organization",
          name: "Japan Used Motor Vehicle Exporters Association (JUMVEA)",
          url: "https://www.jumvea.or.jp/",
        },
      },
    ],
  };

  return <JsonLdScript data={jsonLd} />;
}