"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { brandLogos, featuredBrands } from "@/lib/brands";
import { SectionHead } from "./SectionHead";

export function BrandShowcase() {
  const t = useTranslations("home.brands");

  return (
    <section className="border-b border-rule py-16 md:py-24">
      <div className="container-main">
        <SectionHead title={t("title")} lede={t("subtitle")} />

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[10px] border border-rule bg-rule sm:grid-cols-3 md:grid-cols-5">
          {featuredBrands.map((brand) => (
            <Link
              key={brand}
              href={`/vehicles?make=${brand}`}
              className="group flex min-w-0 items-center gap-3 bg-paper-raised px-4 py-4 transition-colors hover:bg-paper"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center grayscale transition-[filter] duration-300 group-hover:grayscale-0">
                {brandLogos[brand] ? (
                  <Image src={brandLogos[brand]} alt="" width={36} height={36} className="object-contain" />
                ) : (
                  <span className="cc-data text-xs font-semibold text-ink-2">{brand.slice(0, 2).toUpperCase()}</span>
                )}
              </span>
              <span className="truncate text-sm font-medium text-ink-2 transition-colors group-hover:text-ink">{brand}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
