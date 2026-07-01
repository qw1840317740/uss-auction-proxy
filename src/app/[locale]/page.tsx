import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { HeroSection } from "@/components/home/HeroSection";
import { HomeSearchBar } from "@/components/home/HomeSearchBar";
import { BrandShowcase } from "@/components/home/BrandShowcase";
import { ServiceCards } from "@/components/home/ServiceCards";
import { HowItWorks } from "@/components/home/HowItWorks";
import { VehicleShowcase } from "@/components/home/VehicleShowcase";
import { BlogSection } from "@/components/home/BlogSection";
import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/home/CTASection";

const BASE_URL = "https://clickcar.jp";
const BRAND_NAME = "ClickCar";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoDealer",
  name: BRAND_NAME,
  description:
    "Premium Japanese used vehicle sales and global export service from Saitama, Japan.",
  url: BASE_URL,
  logo: `${BASE_URL}/images/clickcar-logo.svg`,
  telephone: "+81-49-257-4332",
  email: "kaiseisg@kaiseisg.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "200-2 Kitanagaido",
    addressLocality: "Miyoshi-machi",
    addressRegion: "Saitama",
    postalCode: "354-0045",
    addressCountry: "JP",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 35.8326,
    longitude: 139.5197,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
  priceRange: "$$",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  return {
    title: t("title"),
    description: t("description"),
    openGraph: { title: t("title"), description: t("description"), url: `${BASE_URL}/${locale}`, type: "website" },
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: Object.fromEntries(routing.locales.map((l) => [l, `${BASE_URL}/${l}`])),
    },
  };
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <HomeSearchBar />
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