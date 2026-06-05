"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { useScrollReveal, useStaggerReveal } from "@/lib/useScrollReveal";

const brands = [
  { name: "Toyota", logo: "/images/brands/toyota.svg" },
  { name: "Honda", logo: "/images/brands/honda.svg" },
  { name: "Nissan", logo: "/images/brands/nissan.svg" },
  { name: "Mazda", logo: "/images/brands/mazda.svg" },
  { name: "Subaru", logo: "/images/brands/subaru.svg" },
  { name: "Lexus", logo: "/images/brands/lexus.svg" },
  { name: "Mitsubishi", logo: "/images/brands/mitsubishi.svg" },
  { name: "Suzuki", logo: "/images/brands/suzuki.svg" },
  { name: "Daihatsu", logo: "/images/brands/daihatsu.svg" },
  { name: "Isuzu", logo: "/images/brands/isuzu.svg" },
];

export function BrandShowcase() {
  const t = useTranslations("home.brands");
  const title = useScrollReveal();
  const { containerRef, isChildVisible } = useStaggerReveal(brands.length, 30);

  return (
    <section className="py-24 bg-white">
      <div className="container-main">
        <div
          ref={title.ref}
          className={`text-center mb-14 reveal reveal-blur ${title.isVisible ? "revealed" : ""}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{t("title")}</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">{t("subtitle")}</p>
        </div>

        <div ref={containerRef} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {brands.map((brand, i) => (
            <Link
              key={brand.name}
              href={`/vehicles?make=${brand.name}`}
              className={`reveal-stagger group flex flex-col items-center justify-center bg-gray-50 rounded-2xl py-8 px-4 border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${isChildVisible(i) ? "revealed" : ""}`}
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              <div className="w-16 h-16 relative mb-4 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <span className="text-sm font-medium text-gray-400 group-hover:text-primary transition-colors duration-300">
                {brand.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
