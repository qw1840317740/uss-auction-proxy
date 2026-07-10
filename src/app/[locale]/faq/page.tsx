import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { JsonLdBreadcrumb } from "@/components/seo/JsonLdBreadcrumb";
import { buildCanonical, localizedHreflangLanguages } from "@/lib/seo";
import Page from "./_Content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.faq" });
  return {
    title: t("title"),
    description: t("description"),
    openGraph: { title: t("title"), description: t("description"), url: buildCanonical(locale, "/faq"), type: "website" },
    alternates: {
      canonical: buildCanonical(locale, "/faq"),
      languages: localizedHreflangLanguages(locale, "/faq"),
    },
  };
}

export default async function FaqPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "faq.items" });
  const tSeo = await getTranslations({ locale, namespace: "seo.faq" });

  const faqKeys = ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8"] as const;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqKeys.map((key) => ({
      "@type": "Question",
      name: t(`${key}.q`),
      acceptedAnswer: {
        "@type": "Answer",
        text: t(`${key}.a`),
      },
    })),
  };

  return (
    <>
      <JsonLdScript data={jsonLd} />
      <JsonLdBreadcrumb items={[{ name: tSeo("title") }]} locale={locale} />
      <Page />
    </>
  );
}