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
      <BrandShowcase />
      <ServiceCards />
      <HowItWorks />
      <VehicleShowcase />
      <FAQSection />
      <CTASection />
    </>
  );
}
