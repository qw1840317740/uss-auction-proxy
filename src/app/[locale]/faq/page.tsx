import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import Page from "./_Content";

const BASE_URL = "https://clickcar.jp";

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
    openGraph: { title: t("title"), description: t("description"), url: `${BASE_URL}/${locale}/faq`, type: "website" },
    alternates: { canonical: `${BASE_URL}/${locale}/faq`, languages: Object.fromEntries(routing.locales.map((l) => [l, `${BASE_URL}/${l}/faq`])) },
  };
}

export default async function FaqPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "faq.items" });

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Page />
    </>
  );
}
