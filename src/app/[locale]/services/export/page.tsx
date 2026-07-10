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
  const t = await getTranslations({ locale, namespace: "seo.export" });
  return {
    title: t("title"),
    description: t("description"),
    openGraph: { title: t("title"), description: t("description"), url: buildCanonical(locale, "/services/export"), type: "website" },
    alternates: {
      canonical: buildCanonical(locale, "/services/export"),
      languages: localizedHreflangLanguages(locale, "/services/export"),
    },
  };
}

export default async function ExportPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.export" });
  return (
    <>
      <JsonLdBreadcrumb items={[{ name: t("title") }]} locale={locale} />
      <Page />
    </>
  );
}
