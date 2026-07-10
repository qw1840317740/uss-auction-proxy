import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { JsonLdBreadcrumb } from "@/components/seo/JsonLdBreadcrumb";
import { buildCanonical, localizedHreflangLanguages } from "@/lib/seo";
import Page from "./_Content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.vehicles" });
  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: buildCanonical(locale, "/vehicles"),
      type: "website",
    },
    alternates: {
      canonical: buildCanonical(locale, "/vehicles"),
      languages: localizedHreflangLanguages(locale, "/vehicles"),
    },
  };
}

export default async function VehiclesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.vehicles" });
  return (
    <>
      <JsonLdBreadcrumb items={[{ name: t("title"), url: "/vehicles" }]} locale={locale} />
      <Page />
    </>
  );
}
