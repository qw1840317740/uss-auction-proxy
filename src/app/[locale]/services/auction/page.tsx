import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { JsonLdBreadcrumb } from "@/components/seo/JsonLdBreadcrumb";
import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { buildCanonical, getAbsoluteMediaUrl, localizedHreflangLanguages, siteConfig } from "@/lib/seo";
import AuctionServiceContent from "./_Content";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.auction" });
  const canonical = buildCanonical(locale, "/services/auction");
  const image = getAbsoluteMediaUrl("/images/hero/car-showroom.jpg");

  return {
    title: t("title"),
    description: t("description"),
    alternates: { canonical, languages: localizedHreflangLanguages(locale, "/services/auction") },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: canonical,
      type: "website",
      images: [{ url: image, width: 1920, height: 1080, alt: t("title") }],
    },
    twitter: { card: "summary_large_image", title: t("title"), description: t("description"), images: [image] },
  };
}

export default async function AuctionPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "services.auction" });
  const serviceUrl = buildCanonical(locale, "/services/auction");
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${serviceUrl}#service`,
    name: t("title"),
    description: t("subtitle"),
    serviceType: "Japanese used vehicle auction proxy service",
    url: serviceUrl,
    provider: { "@id": `${siteConfig.baseUrl}#organization` },
    areaServed: "Worldwide",
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: buildCanonical(locale, "/contact"),
      servicePhone: siteConfig.phone,
    },
  };

  return (
    <>
      <JsonLdBreadcrumb items={[{ name: t("title") }]} locale={locale} />
      <JsonLdScript data={serviceJsonLd} />
      <AuctionServiceContent />
    </>
  );
}
