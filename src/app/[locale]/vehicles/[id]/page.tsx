import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { JsonLdBreadcrumb } from "@/components/seo/JsonLdBreadcrumb";
import { demoVehicles, getVehicleText } from "@/lib/demo-vehicles";
import Page from "./_Content";

const BASE_URL = "https://clickcar.jp";
const BRAND_NAME = "ClickCar";

function getVehicle(id: string) {
  return demoVehicles.find((vehicle) => vehicle.id === id);
}

function absoluteImage(src?: string) {
  if (!src) return `${BASE_URL}/images/clickcar-logo.png`;
  return src.startsWith("http") ? src : `${BASE_URL}${src}`;
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
    };
  }

  const vehicleName = `${vehicle.year} ${vehicle.make} ${vehicle.model}`;
  const description =
    getVehicleText(vehicle.description, locale) || `${vehicleName} available from ${BRAND_NAME}.`;
  const url = `${BASE_URL}/${locale}/vehicles/${id}`;

  return {
    title: `${vehicleName} for Export from Japan`,
    description,
    alternates: {
      canonical: url,
      languages: Object.fromEntries(
        routing.locales.map((item) => [item, `${BASE_URL}/${item}/vehicles/${id}`]),
      ),
    },
    openGraph: {
      title: `${vehicleName} | ${BRAND_NAME}`,
      description,
      url,
      type: "website",
      images: [{ url: absoluteImage(vehicle.images[0]), alt: vehicleName }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${vehicleName} | ${BRAND_NAME}`,
      description,
      images: [absoluteImage(vehicle.images[0])],
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
    ? {
        "@context": "https://schema.org",
        "@type": "Product",
        name: vehicleName,
        brand: { "@type": "Brand", name: vehicle.make },
        image: vehicle.images.map(absoluteImage),
        description: getVehicleText(vehicle.description, locale),
        sku: vehicle.id,
        category: vehicle.bodyType,
        offers: {
          "@type": "Offer",
          price: vehicle.price,
          priceCurrency: "JPY",
          availability:
            vehicle.status === "available"
              ? "https://schema.org/InStock"
              : "https://schema.org/OutOfStock",
          url: `${BASE_URL}/${locale}/vehicles/${id}`,
          seller: {
            "@type": "AutoDealer",
            name: BRAND_NAME,
            url: BASE_URL,
          },
        },
        mileageFromOdometer: {
          "@type": "QuantitativeValue",
          value: vehicle.mileage,
          unitCode: "KMT",
        },
        vehicleModelDate: String(vehicle.year),
      }
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
      {productJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
        />
      )}
      <Page params={Promise.resolve({ id })} />
    </>
  );
}
