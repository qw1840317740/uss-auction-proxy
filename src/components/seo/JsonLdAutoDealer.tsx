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
  };

  return <JsonLdScript data={jsonLd} />;
}