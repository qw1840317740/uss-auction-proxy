import { HeroSection } from "@/components/home/HeroSection";
import { BrandShowcase } from "@/components/home/BrandShowcase";
import { ServiceCards } from "@/components/home/ServiceCards";
import { HowItWorks } from "@/components/home/HowItWorks";
import { VehicleShowcase } from "@/components/home/VehicleShowcase";
import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/home/CTASection";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoDealer",
  name: "Velocity JAPAN",
  description:
    "Premium Japanese used vehicle sales and global export service from Saitama, Japan.",
  url: "https://uss-auction-proxy.vercel.app",
  telephone: "+81-49-257-4332",
  email: "info@velocityjapan.jp",
  address: {
    "@type": "PostalAddress",
    streetAddress: "北永井500番地2",
    addressLocality: "三芳町",
    addressRegion: "埼玉県",
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
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
    ],
    opens: "09:00",
    closes: "18:00",
  },
  priceRange: "$$",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      {/* White background - Brand logos */}
      <BrandShowcase />
      {/* Gray-50 background - Services */}
      <div className="bg-gray-50">
        <ServiceCards />
      </div>
      {/* Decorative wave divider */}
      <div className="bg-gray-50">
        <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>
      {/* White background - How It Works */}
      <div className="bg-white">
        <HowItWorks />
      </div>
      {/* Gray-50 background - Vehicle Showcase */}
      <VehicleShowcase />
      {/* White background - FAQ */}
      <div className="bg-white">
        <FAQSection />
      </div>
      {/* Primary gradient - CTA */}
      <CTASection />
    </>
  );
}
