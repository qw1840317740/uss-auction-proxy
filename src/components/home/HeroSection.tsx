"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { demoVehicles } from "@/lib/demo-vehicles";
import { formatMileage } from "@/lib/utils";
import { useVehiclePrice } from "@/components/providers/CurrencyProvider";

const factKeys = ["uss", "base", "drive"] as const;

export function HeroSection() {
  const t = useTranslations("home.hero");
  const locale = useLocale();
  const { format: formatVehiclePrice } = useVehiclePrice();

  // Feature a real in-stock car: the highest-priced available listing with photos.
  const featured =
    demoVehicles
      .filter((v) => v.status === "available" && v.price > 0 && v.images.length > 0)
      .sort((a, b) => b.price - a.price)[0] ?? demoVehicles.find((v) => v.status === "available");

  const specs = featured
    ? [
        { label: t("spec.year"), value: String(featured.year) },
        { label: t("spec.mileage"), value: formatMileage(featured.mileage) },
        {
          label: t("spec.grade"),
          value: featured.auctionGrade
            ? `${featured.auctionGrade}${featured.auctionInteriorGrade ? ` / ${featured.auctionInteriorGrade}` : ""}`
            : "—",
        },
        { label: t("spec.layout"), value: [featured.steering, featured.transmission].filter(Boolean).join(" · ") },
        { label: t("spec.location"), value: featured.region },
        { label: t("spec.price"), value: featured.price > 0 ? formatVehiclePrice(featured.price) : "—", strong: true },
      ]
    : [];

  return (
    <section className="relative border-b border-rule-dark bg-graphite text-on-dark">
      <div className="container-main grid gap-12 py-14 md:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)] lg:items-center lg:gap-16">
        {/* Copy */}
        <div className="min-w-0">
          <p className="cc-label cc-tick !text-on-dark-2">{t("eyebrow")}</p>
          <h1 className="mt-6 text-[2.5rem] font-semibold leading-[1.04] tracking-[-0.035em] [overflow-wrap:anywhere] [text-wrap:balance] sm:text-5xl lg:text-[3.6rem]">
            {t("title").replace(/<br\s*\/?>/gi, locale === "en" ? " " : "")}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-on-dark-2 md:text-lg">{t("subtitle")}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/vehicles" className="cc-btn cc-btn--signal">
              {t("exploreVehicles")}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href="/contact" className="cc-btn cc-btn--line-dark">
              {t("contactUs")}
            </Link>
          </div>

          <dl className="mt-12 grid border-t border-rule-dark sm:grid-cols-3">
            {factKeys.map((key) => (
              <div key={key} className="border-b border-rule-dark py-4 sm:border-b-0 sm:pr-5 sm:[&:not(:first-child)]:border-l sm:[&:not(:first-child)]:pl-5">
                <dt className="cc-data text-lg font-medium text-on-dark">{t(`facts.${key}Value`)}</dt>
                <dd className="mt-1 text-[13px] leading-5 text-on-dark-2">{t(`facts.${key}`)}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Spec sheet: a real car from inventory */}
        {featured && (
          <figure className="min-w-0 overflow-hidden rounded-[10px] border border-rule-dark bg-graphite-2">
            <figcaption className="flex items-center justify-between gap-4 border-b border-rule-dark px-4 py-3">
              <span className="cc-label cc-tick !text-on-dark-2">{t("featured")}</span>
              <span className="cc-data truncate text-xs text-on-dark-2">{featured.id.toUpperCase()}</span>
            </figcaption>

            <Link href={`/vehicles/${featured.id}`} className="group block">
              <div className="relative aspect-[16/10] overflow-hidden bg-graphite">
                <Image
                  src={featured.images[0]}
                  alt={`${featured.year} ${featured.make} ${featured.model}`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
                />
              </div>

              <div className="flex items-end justify-between gap-4 px-4 pb-1 pt-4">
                <h2 className="min-w-0 text-xl font-semibold tracking-[-0.02em] text-on-dark [overflow-wrap:anywhere] sm:text-2xl">
                  {featured.year} {featured.make} {featured.model}
                </h2>
                <span className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap text-sm text-on-dark-2 transition-colors group-hover:text-on-dark">
                  {t("viewCar")}
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </div>
            </Link>

            <dl className="grid grid-cols-2 sm:grid-cols-3">
              {specs.map((spec) => (
                <div key={spec.label} className="border-t border-rule-dark px-4 py-3 [&:nth-child(odd)]:border-r sm:[&:nth-child(odd)]:border-r-0 sm:[&:not(:nth-child(3n))]:border-r">
                  <dt className="cc-label !text-[10px] !text-on-dark-2/80">{spec.label}</dt>
                  <dd className={`cc-data mt-1 truncate ${spec.strong ? "text-base font-semibold text-on-dark" : "text-sm text-on-dark"}`}>{spec.value}</dd>
                </div>
              ))}
            </dl>
          </figure>
        )}
      </div>
    </section>
  );
}
