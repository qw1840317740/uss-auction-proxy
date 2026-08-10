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
import { formatMileage } from "@/lib/utils";
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
  const currentYear = new Date().getFullYear();
  const vehicleAge = currentYear - vehicle.year;
  const isClassic = vehicleAge >= 30;
  const isVintage = vehicleAge >= 50;

  // Title: prefix classic/vintage labels for long-tail collector keywords
  const prefix = isVintage
    ? "Vintage"
    : isClassic
      ? "Classic"
      : "";
  const title = prefix
    ? `${prefix} ${vehicleName} (${vehicle.transmission}, ${vehicle.bodyType}) for Export — ${siteConfig.name}`
    : `${vehicleName} (${vehicle.transmission}, ${vehicle.bodyType}) for Export from Japan`;

  // Description: auto-build a rich snippet when no hand-written description exists,
  // or use the first 155–160 chars of the hand-written one (meta-description sweet spot).
  const handWritten = getVehicleText(vehicle.description, locale)
    || `${vehicleName} available from ${siteConfig.name}.`;
  const autoDescription =
    `${vehicleName} — ${formatMileage(vehicle.mileage)}, ${vehicle.displacement} ${vehicle.fuel}, ` +
    `${vehicle.transmission}, ${vehicle.drive}, ${vehicle.exteriorColor}, ${vehicle.bodyType}. ` +
    (vehicle.price > 0
      ? `Listed at ¥${vehicle.price.toLocaleString()} JPY. `
      : "Contact ClickCar for pricing. ") +
    `Exported worldwide from Saitama, Japan by ${siteConfig.name}.`;

  // Use the hand-written description if it's substantive (>120 chars), otherwise auto-generate
  const description = handWritten.length > 120 ? handWritten : autoDescription;

  // Keywords: per-vehicle long-tail keywords appended to site-wide seed
  const keywordParts = [
    vehicleName,
    `${vehicle.year} ${vehicle.make}`,
    `${vehicle.make} ${vehicle.model}`,
    `${vehicle.displacement} ${vehicle.bodyType}`,
    `${vehicle.transmission} ${vehicle.drive}`,
    "Japanese used cars export",
  ];
  if (isClassic) keywordParts.push("classic car Japan", "collector car export");
  if (vehicle.chassisCode) keywordParts.push(`${vehicle.make} ${vehicle.chassisCode}`);
  if (vehicle.engineCode) keywordParts.push(`${vehicle.engineCode} engine`);

  const url = buildCanonical(locale, `/vehicles/${id}`);

  // NOTE: openGraph.images and twitter.images are intentionally NOT set here.
  // The colocated `opengraph-image.tsx` / `twitter-image.tsx` files in this
  // route emit 1200×630 dynamic cards, which Next.js auto-injects (and which
  // override anything in `generateMetadata`).
  return {
    title,
    description,
    keywords: keywordParts.join(", "),
    alternates: {
      canonical: url,
      languages: localizedHreflangLanguages(locale, `/vehicles/${id}`),
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
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

  // Parse forward-gear count from transmission string (e.g. "5MT" → 5, "7-Speed PDK" → 7)
  let numberOfForwardGears: number | undefined;
  const gearMatch = vehicle.transmission.match(/(\d+)/);
  if (gearMatch) numberOfForwardGears = Number(gearMatch[1]);

  const vehicleEngine = cc || vehicle.engineCode
    ? {
        "@type": "EngineSpecification" as const,
        ...(cc ? { engineDisplacement: { "@type": "QuantitativeValue" as const, value: cc, unitCode: "CMQ" } } : {}),
        ...(vehicle.engineCode ? { name: vehicle.engineCode } : {}),
        fuelType: mapFuel(vehicle.fuel),
      }
    : undefined;

  const steeringPosition =
    vehicle.steering === "LHD"
      ? "https://schema.org/LeftHandDriving"
      : vehicle.steering === "RHD"
        ? "https://schema.org/RightHandDriving"
        : undefined;

  return {
    "@context": "https://schema.org",
    "@type": ["Product", "Vehicle"],
    "@id": `${url}#vehicle`,
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
    productionDate: String(vehicle.year),
    bodyType: vehicle.bodyType,
    fuelType: vehicle.fuel,
    ...(vehicleEngine ? { vehicleEngine } : {}),
    vehicleEngineDisplacement: cc
      ? { "@type": "QuantitativeValue", value: cc, unitCode: "CMQ" }
      : undefined,
    vehicleFuelType: mapFuel(vehicle.fuel),
    vehicleTransmission: mapTransmission(vehicle.transmission),
    ...(numberOfForwardGears ? { numberOfForwardGears } : {}),
    vehicleDrivenWheels: mapDrive(vehicle.drive),
    vehicleSeatingCapacity: { "@type": "QuantitativeValue", value: vehicle.seats },
    vehicleNumberOfDoors: vehicle.doors,
    vehicleExteriorColor: vehicle.exteriorColor,
    vehicleInteriorColor: vehicle.interiorColor,
    ...(vehicle.chassisCode ? { vehicleIdentificationNumber: vehicle.chassisCode } : {}),
    ...(steeringPosition ? { steeringPosition } : {}),
    ...(vehicle.previousOwners != null ? { numberOfPreviousOwners: vehicle.previousOwners } : {}),
    ...(vehicle.firstRegistered ? { dateVehicleFirstRegistered: vehicle.firstRegistered } : {}),
    mileageFromOdometer: {
      "@type": "QuantitativeValue",
      value: vehicle.mileage,
      unitCode: "KMT",
    },
    offers:
      vehicle.price > 0
        ? {
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
          }
        : undefined,
  };
}
