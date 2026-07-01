import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { JsonLdBreadcrumb } from "@/components/seo/JsonLdBreadcrumb";
import Page from "./_Content";

const BASE_URL = "https://clickcar.jp";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.contact" });
  return {
    title: t("title"),
    description: t("description"),
    openGraph: { title: t("title"), description: t("description"), url: `${BASE_URL}/${locale}/contact`, type: "website" },
    alternates: { canonical: `${BASE_URL}/${locale}/contact`, languages: Object.fromEntries(routing.locales.map((l) => [l, `${BASE_URL}/${l}/contact`])) },
  };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.contact" });
  return (
    <>
      <JsonLdBreadcrumb items={[{ name: t("title") }]} locale={locale} />
      <Page />
    </>
  );
}
