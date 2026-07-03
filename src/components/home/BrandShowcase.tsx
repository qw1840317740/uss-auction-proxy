"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { useScrollReveal, useStaggerReveal } from "@/lib/useScrollReveal";
import { brandLogos, featuredBrands } from "@/lib/brands";

export function BrandShowcase() {
  const t = useTranslations("home.brands");
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { containerRef, isChildVisible } = useStaggerReveal(featuredBrands.length, 20);

  return (
    <section className="py-16 bg-white">
      <div className="container-main">
        <div
          ref={titleRef}
          className={`text-center mb-10 reveal reveal-blur ${titleVisible ? "revealed" : ""}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{t("title")}</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">{t("subtitle")}</p>
        </div>

        <div ref={containerRef} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {featuredBrands.map((brand, i) => (
            <Link
              key={brand}
              href={`/vehicles?make=${brand}`}
              className={`reveal-stagger group flex flex-col items-center justify-center rounded-2xl border border-gray-100 bg-gray-50 px-3 py-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-white hover:shadow-lg ${isChildVisible(i) ? "revealed" : ""}`}
              style={{ transitionDelay: `${i * 20}ms` }}
            >
              <div className="w-16 h-16 relative mb-4 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500">
                {brandLogos[brand] ? (
                  <Image
                    src={brandLogos[brand]}
                    alt={brand}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                ) : (
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-gray-200 bg-white text-lg font-black text-gray-800 shadow-sm group-hover:border-primary/30 group-hover:text-primary">
                    {brand.slice(0, 2).toUpperCase()}
                  </span>
                )}
              </div>
              <span className="text-sm font-medium text-gray-400 group-hover:text-primary transition-colors duration-300">
                {brand}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
