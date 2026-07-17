import type { Metadata } from "next";
import { getTranslations, getLocale } from "next-intl/server";
import { HeroSection } from "@/components/home/HeroSection";
import { HomeSearchBar } from "@/components/home/HomeSearchBar";
import { HomeIntro } from "@/components/home/HomeIntro";
import { BrandShowcase } from "@/components/home/BrandShowcase";
import { ServiceCards } from "@/components/home/ServiceCards";
import { HowItWorks } from "@/components/home/HowItWorks";
import { VehicleShowcase } from "@/components/home/VehicleShowcase";
import { BlogSection } from "@/components/home/BlogSection";
import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/home/CTASection";
import { JsonLdOrganization } from "@/components/seo/JsonLdOrganization";
import { JsonLdWebSite } from "@/components/seo/JsonLdWebSite";
import { JsonLdAutoDealer } from "@/components/seo/JsonLdAutoDealer";
import { siteConfig, localizedHreflangLanguages } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  const canonicalUrl = `${siteConfig.baseUrl}/${locale}`;

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: `${t("title")} | ClickCar`,
      description: t("description"),
      url: canonicalUrl,
      type: "website",
    },
    alternates: {
      canonical: canonicalUrl,
      languages: localizedHreflangLanguages(locale, ""),
    },
    robots: { index: true, follow: true },
  };
}

export default function HomePage() {
  // We need locale here, but HomePage is a server component receiving no props.
  // Use `headers()` to read x-locale? Simpler: rely on the parent [locale] layout,
  // and call the locale-aware JsonLd components by reading headers() — but that
  // adds complexity. Instead, render the locale-agnostic JSON-LD here and let
  // the locale-specific JSON-LD (Organization is locale-agnostic; WebSite uses locale
  // for SearchAction; AutoDealer uses locale for url) be inserted by a wrapper.
  //
  // To keep this file simple, we render a locale-agnostic Organization plus a
  // locale-aware WebSite+AutoDealer pair via a server-side wrapper.
  return (
    <>
      <JsonLdOrganization />
      <HomePageStructuredData />
      <HeroSection />
      <HomeSearchBar />
      <HomeIntro />
      <BrandShowcase />
      <div className="bg-gray-50">
        <ServiceCards />
      </div>
      <div className="bg-gray-50">
        <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>
      <div className="bg-white">
        <HowItWorks />
      </div>
      <VehicleShowcase />
      <BlogSection />
      <div className="bg-white">
        <FAQSection />
      </div>
      <CTASection />
    </>
  );
}

// Server component wrapper that reads the active locale from next-intl and
// emits locale-aware structured data (WebSite + AutoDealer).
async function HomePageStructuredData() {
  const locale = await getLocale();
  return (
    <>
      <JsonLdWebSite locale={locale} />
      <JsonLdAutoDealer locale={locale} />
    </>
  );
}
