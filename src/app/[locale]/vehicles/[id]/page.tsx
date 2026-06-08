import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { JsonLdBreadcrumb } from "@/components/seo/JsonLdBreadcrumb";
import Page from "./_Content";

const BASE_URL = "https://uss-auction-proxy.vercel.app";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.vehicles" });
  return {
    title: t("title"),
    description: t("description"),
    openGraph: { title: t("title"), description: t("description"), type: "website" },
  };
}

export default async function VehicleDetailPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  const t = await getTranslations({ locale, namespace: "seo.vehicles" });
  return (
    <>
      <JsonLdBreadcrumb
        items={[
          { name: t("title"), url: "/vehicles" },
          { name: id },
        ]}
        locale={locale}
      />
      <Page params={Promise.resolve({ id })} />
    </>
  );
}
