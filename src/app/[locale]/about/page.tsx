import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { JsonLdBreadcrumb } from "@/components/seo/JsonLdBreadcrumb";
import Page from "./_Content";

const BASE_URL = "https://uss-auction-proxy.vercel.app";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.about" });
  return {
    title: t("title"),
    description: t("description"),
    openGraph: { title: t("title"), description: t("description"), url: `${BASE_URL}/${locale}/about`, type: "website" },
    alternates: { canonical: `${BASE_URL}/${locale}/about`, languages: Object.fromEntries(routing.locales.map((l) => [l, `${BASE_URL}/${l}/about`])) },
  };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.about" });
  return (
    <>
      <JsonLdBreadcrumb items={[{ name: t("title") }]} locale={locale} />
      <Page />
    </>
  );
}
