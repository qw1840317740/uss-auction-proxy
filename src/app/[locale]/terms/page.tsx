import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { JsonLdBreadcrumb } from "@/components/seo/JsonLdBreadcrumb";
import { buildCanonical, localizedHreflangLanguages } from "@/lib/seo";
import TermsContent from "./_Content";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.terms" });
  const canonical = buildCanonical(locale, "/terms");

  return {
    title: t("title"),
    description: t("description"),
    alternates: { canonical, languages: localizedHreflangLanguages(locale, "/terms") },
    openGraph: { title: t("title"), description: t("description"), url: canonical, type: "website" },
  };
}

export default async function TermsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "terms" });
  return (
    <>
      <JsonLdBreadcrumb items={[{ name: t("title") }]} locale={locale} />
      <TermsContent />
    </>
  );
}
