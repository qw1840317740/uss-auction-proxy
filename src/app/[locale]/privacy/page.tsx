import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { JsonLdBreadcrumb } from "@/components/seo/JsonLdBreadcrumb";
import { buildCanonical, localizedHreflangLanguages } from "@/lib/seo";
import PrivacyContent from "./_Content";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.privacy" });
  const canonical = buildCanonical(locale, "/privacy");

  return {
    title: t("title"),
    description: t("description"),
    alternates: { canonical, languages: localizedHreflangLanguages(locale, "/privacy") },
    openGraph: { title: t("title"), description: t("description"), url: canonical, type: "website" },
  };
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "privacy" });
  return (
    <>
      <JsonLdBreadcrumb items={[{ name: t("title") }]} locale={locale} />
      <PrivacyContent />
    </>
  );
}
