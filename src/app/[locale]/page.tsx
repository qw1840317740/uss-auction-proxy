import { HeroSection } from "@/components/home/HeroSection";
import { BrandShowcase } from "@/components/home/BrandShowcase";
import { ServiceCards } from "@/components/home/ServiceCards";
import { HowItWorks } from "@/components/home/HowItWorks";
import { VehicleShowcase } from "@/components/home/VehicleShowcase";
import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
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
