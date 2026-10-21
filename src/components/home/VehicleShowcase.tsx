"use client";

import { useVehiclePrice } from "@/components/providers/CurrencyProvider";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { formatMileage } from "@/lib/utils";
import { ArrowRight, Heart } from "lucide-react";
import Image from "next/image";
import { demoVehicles } from "@/lib/demo-vehicles";
import { useFavorites } from "@/lib/useFavorites";
import { SectionHead } from "./SectionHead";

export function VehicleShowcase() {
  const t = useTranslations("home.showcase");
  const vt = useTranslations("vehicles.vehicle");
  const nav = useTranslations("nav");
  const { format: formatVehiclePrice } = useVehiclePrice();
  const showcaseVehicles = demoVehicles.filter((vehicle) => vehicle.status === "available");
  const { toggle, isFavorite } = useFavorites();

  if (showcaseVehicles.length === 0) return null;

  return (
    <section className="border-b border-rule py-16 md:py-24">
      <div className="container-main">
        <SectionHead
          label={nav("vehicles")}
          title={t("title")}
          lede={t("subtitle")}
          action={
            <Link href="/vehicles" className="cc-btn cc-btn--line">
              {vt("viewDetail")}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          }
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {showcaseVehicles.map((v) => (
            <Link key={v.id} href={`/vehicles/${v.id}`} className="cc-card group flex min-w-0 flex-col overflow-hidden">
              <div className="relative aspect-[16/10] overflow-hidden bg-paper-2">
                <Image
                  src={v.images[0] || "/images/cars/car-side-1.jpg"}
                  alt={`${v.year} ${v.make} ${v.model}`}
                  fill
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggle(v.id);
                  }}
                  aria-label={nav("favorites")}
                  aria-pressed={isFavorite(v.id)}
                  className={`absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-md border border-rule bg-paper-raised/90 transition-colors ${
                    isFavorite(v.id) ? "text-signal" : "text-ink-2 hover:text-ink"
                  }`}
                >
                  <Heart className="h-4 w-4" fill={isFavorite(v.id) ? "currentColor" : "none"} />
                </button>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <p className="cc-label">{v.make}</p>
                <h3 className="mt-1.5 text-lg font-semibold leading-snug tracking-[-0.015em] text-ink [overflow-wrap:anywhere]">
                  {v.year} {v.make} {v.model}
                </h3>

                <dl className="cc-data mt-4 grid grid-cols-3 border-y border-rule text-[13px] text-ink-2">
                  <div className="py-2.5 pr-2">
                    <dt className="sr-only">km</dt>
                    <dd className="truncate">{formatMileage(v.mileage)}</dd>
                  </div>
                  <div className="border-l border-rule px-2 py-2.5">
                    <dt className="sr-only">Transmission</dt>
                    <dd className="truncate">{[v.steering, v.transmission].filter(Boolean).join(" · ")}</dd>
                  </div>
                  <div className="border-l border-rule py-2.5 pl-2">
                    <dt className="sr-only">cc</dt>
                    <dd className="truncate">{v.displacement}</dd>
                  </div>
                </dl>

                <div className="mt-auto flex items-center justify-between gap-3 pt-4">
                  <span className="cc-data text-xl font-semibold text-ink">
                    {v.price > 0 ? formatVehiclePrice(v.price) : vt("priceOnRequest")}
                  </span>
                  <ArrowRight className="h-4 w-4 text-ink-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-ink" aria-hidden="true" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
