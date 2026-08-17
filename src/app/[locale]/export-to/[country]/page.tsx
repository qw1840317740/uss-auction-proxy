import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { JsonLdBreadcrumb } from "@/components/seo/JsonLdBreadcrumb";
import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { buildCanonical, localizedHreflangLanguages, siteConfig } from "@/lib/seo";
import { exportCountries, getCountryBySlug } from "@/lib/export-countries";
import ExportToContent from "./_Content";

/**
 * Per-country export landing page. Generates 1 URL per (locale, country) pair.
 * Total indexed URLs: = 16 countries × 3 locales = 48.
 *
 * Long-tail SEO strategy: each page targets the `[country]` segment of
 * "import cars from Japan to [country]" / "buy used Japanese car [country]"
 * type queries. Country-specific copy (age limits, ports, transit time)
 * differentiates from generic /export-guide pages.
 */

export async function generateStaticParams() {
  // Pre-render every country × every locale at build time
  return ["en", "zh", "ja"].flatMap((locale) =>
    exportCountries.map((c) => ({ locale, country: c.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; country: string }>;
}): Promise<Metadata> {
  const { locale, country: slug } = await params;
  const country = getCountryBySlug(slug);
  if (!country) return { title: "Country not found", robots: { index: false } };

  const tSeo = await getTranslations({ locale, namespace: "seo.exportTo" });
  const countryName = country.name[locale as "en" | "zh" | "ja"] ?? country.name.en;
  const title = tSeo("pageTitle", { country: countryName });
  const description = tSeo("description", { country: countryName });

  const url = buildCanonical(locale, `/export-to/${slug}`);
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: localizedHreflangLanguages(locale, `/export-to/${slug}`),
    },
    keywords: [
      ...country.keywords,
      `import cars from Japan to ${countryName}`,
      `buy used Japanese car ${countryName}`,
    ].join(", "),
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: siteConfig.name,
    },
  };
}

export default async function ExportToCountryPage({
  params,
}: {
  params: Promise<{ locale: string; country: string }>;
}) {
  const { locale, country: slug } = await params;
  const country = getCountryBySlug(slug);
  if (!country) notFound();

  const tSeo = await getTranslations({ locale, namespace: "seo.exportTo" });
  const tCta = await getTranslations({ locale, namespace: "common" });
  const countryName = country.name[locale as "en" | "zh" | "ja"] ?? country.name.en;
  const canonical = buildCanonical(locale, `/export-to/${slug}`);

  // FAQ schema for the page — generic cross-locale Q&A, with country name injected
  const faqKeys = ["q1", "q2", "q3", "q4", "q5", "q6"] as const;
  const tFaq = await getTranslations({ locale, namespace: "exportToFaq" });
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqKeys.map((k) => ({
      "@type": "Question",
      name: tFaq(`${k}.q`, { country: countryName }),
      acceptedAnswer: {
        "@type": "Answer",
        text: tFaq(`${k}.a`, { country: countryName }),
      },
    })),
  };

  return (
    <>
      <JsonLdBreadcrumb
        items={[
          { name: tCta("home"), url: "/" },
          { name: "Export Guide", url: "/export-guide" },
          { name: countryName },
        ]}
        locale={locale}
      />
      <JsonLdScript data={faqJsonLd} />
      <ExportToContent locale={locale} countrySlug={slug} />
    </>
  );
}