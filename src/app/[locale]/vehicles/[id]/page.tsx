import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { JsonLdBreadcrumb } from "@/components/seo/JsonLdBreadcrumb";
import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { demoVehicles, getVehicleText } from "@/lib/demo-vehicles";
import {
  siteConfig,
  buildCanonical,
  localizedHreflangLanguages,
  mapFuel,
  mapTransmission,
  mapDrive,
  parseDisplacementCc,
  priceValidUntilISO,
} from "@/lib/seo";
import Page from "./_Content";

function getVehicle(id: string) {
  return demoVehicles.find((vehicle) => vehicle.id === id);
}

function absoluteImage(src?: string) {
  if (!src) return `${siteConfig.baseUrl}${siteConfig.logo}`;
  return src.startsWith("http") ? src : `${siteConfig.baseUrl}${src}`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}): Promise<Metadata> {
  const { locale, id } = await params;
  const t = await getTranslations({ locale, namespace: "seo.vehicles" });
  const vehicle = getVehicle(id);

  if (!vehicle) {
    return {
      title: t("title"),
      description: t("description"),
      alternates: {
        canonical: buildCanonical(locale, `/vehicles/${id}`),
        languages: localizedHreflangLanguages(locale, `/vehicles/${id}`),
      },
    };
  }

  const vehicleName = `${vehicle.year} ${vehicle.make} ${vehicle.model}`;
  const description =
    getVehicleText(vehicle.description, locale) || `${vehicleName} available from ${siteConfig.name}.`;
  const url = buildCanonical(locale, `/vehicles/${id}`);

  // NOTE: openGraph.images and twitter.images are intentionally NOT set here.
  // The colocated `opengraph-image.tsx` / `twitter-image.tsx` files in this
  // route emit 1200×630 dynamic cards, which Next.js auto-injects (and which
  // override anything in `generateMetadata`).
  return {
    title: `${vehicleName} for Export from Japan`,
    description,
    alternates: {
      canonical: url,
      languages: localizedHreflangLanguages(locale, `/vehicles/${id}`),
    },
    openGraph: {
      title: `${vehicleName} | ${siteConfig.name}`,
      description,
      url,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${vehicleName} | ${siteConfig.name}`,
      description,
    },
  };
}

export default async function VehicleDetailPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  const t = await getTranslations({ locale, namespace: "seo.vehicles" });
  const vehicle = getVehicle(id);
  const vehicleName = vehicle ? `${vehicle.year} ${vehicle.make} ${vehicle.model}` : id;

  const productJsonLd = vehicle
    ? buildVehicleProductJsonLd({
        vehicle,
        vehicleName,
        locale,
        id,
      })
    : null;

  return (
    <>
      <JsonLdBreadcrumb
        items={[
          { name: t("title"), url: "/vehicles" },
          { name: vehicleName },
        ]}
        locale={locale}
      />
      {productJsonLd && <JsonLdScript data={productJsonLd} />}
      <Page params={Promise.resolve({ id })} />
    </>
  );
}

// ---------------------------------------------------------------------------
// Vehicle Product JSON-LD builder — extracted for testability.
// ---------------------------------------------------------------------------

interface BuildArgs {
  vehicle: import("@/lib/demo-vehicles").Vehicle;
  vehicleName: string;
  locale: string;
  id: string;
}

function buildVehicleProductJsonLd({ vehicle, vehicleName, locale, id }: BuildArgs) {
  const url = buildCanonical(locale, `/vehicles/${id}`);
  const cc = parseDisplacementCc(vehicle.displacement);
  const brandUrl = `${siteConfig.baseUrl}/${locale}/vehicles?make=${encodeURIComponent(vehicle.make)}`;

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${url}#product`,
    name: vehicleName,
    sku: vehicle.id,
    mpn: vehicle.id,
    category: vehicle.bodyType,
    brand: {
      "@type": "Brand",
      name: vehicle.make,
      url: brandUrl,
    },
    image: vehicle.images.map(absoluteImage),
    description: getVehicleText(vehicle.description, locale),
    itemCondition: "https://schema.org/UsedCondition",
    modelDate: String(vehicle.year),
    vehicleModelDate: String(vehicle.year),
    bodyType: vehicle.bodyType,
    fuelType: vehicle.fuel,
    vehicleEngineDisplacement: cc
      ? { "@type": "QuantitativeValue", value: cc, unitCode: "CMQ" }
      : undefined,
    vehicleFuelType: mapFuel(vehicle.fuel),
    vehicleTransmission: mapTransmission(vehicle.transmission),
    vehicleDrivenWheels: mapDrive(vehicle.drive),
    vehicleSeatingCapacity: { "@type": "QuantitativeValue", value: vehicle.seats },
    vehicleNumberOfDoors: vehicle.doors,
    vehicleExteriorColor: vehicle.exteriorColor,
    mileageFromOdometer: {
      "@type": "QuantitativeValue",
      value: vehicle.mileage,
      unitCode: "KMT",
    },
    offers: {
      "@type": "Offer",
      "@id": `${url}#offer`,
      url,
      price: vehicle.price,
      priceCurrency: "JPY",
      priceValidUntil: priceValidUntilISO(),
      availability:
        vehicle.status === "available"
          ? "https://schema.org/InStock"
          : "https://schema.org/OutOfStock",
      itemCondition: "https://schema.org/UsedCondition",
      seller: {
        "@type": "AutoDealer",
        "@id": `${siteConfig.baseUrl}#autodealer`,
        name: siteConfig.name,
        url: siteConfig.baseUrl,
      },
    },
  };
}