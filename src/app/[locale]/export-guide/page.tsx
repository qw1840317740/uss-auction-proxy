import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { JsonLdBreadcrumb } from "@/components/seo/JsonLdBreadcrumb";
import { buildCanonical, localizedHreflangLanguages, defaultOgImages } from "@/lib/seo";
import Page from "./_Content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "exportGuide" });
  const title =
    locale === "en"
      ? "How to Buy and Import a Used Car from Japan"
      : t("title");
  const description =
    locale === "en"
      ? "Learn the ClickCar process for buying Japanese used cars: consultation, vehicle sourcing, quotes, payment, export documents and international shipping."
      : t("subtitle");

  return {
    title,
    description,
    openGraph: {
      images: defaultOgImages(locale),
      title,
      description,
      url: buildCanonical(locale, "/export-guide"),
      type: "website",
    },
    alternates: {
      canonical: buildCanonical(locale, "/export-guide"),
      languages: localizedHreflangLanguages(locale, "/export-guide"),
    },
  };
}

export default async function ExportGuidePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "exportGuide" });

  return (
    <>
      <JsonLdBreadcrumb items={[{ name: t("title") }]} locale={locale} />
      <Page />
    </>
  );
}
