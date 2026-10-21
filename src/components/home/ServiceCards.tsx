"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Car, Gavel, Ship, Wrench, ArrowRight } from "lucide-react";
import { SectionHead } from "./SectionHead";

const services = [
  { key: "auctionProxy", icon: Gavel, href: "/services/auction" },
  { key: "vehicleSales", icon: Car, href: "/vehicles" },
  { key: "exportService", icon: Ship, href: "/services/export" },
  { key: "maintenancePrep", icon: Wrench, href: "/services/maintenance" },
];

export function ServiceCards() {
  const t = useTranslations("home.services");
  const tc = useTranslations("common");
  const nav = useTranslations("nav");

  return (
    <section className="border-b border-rule py-16 md:py-24">
      <div className="container-main">
        <SectionHead label={nav("services")} title={t("title")} lede={t("subtitle")} />

        {/* 2×2 hairline matrix rather than four floating icon tiles */}
        <div className="grid border-t border-rule md:grid-cols-2">
          {services.map((service, i) => (
            <Link
              key={service.key}
              href={service.href}
              className={`group flex min-w-0 gap-5 border-b border-rule py-7 md:px-8 ${i % 2 === 0 ? "md:border-r md:pl-0" : "md:pr-0"}`}
            >
              <service.icon className="mt-1 h-5 w-5 shrink-0 text-ink-3 transition-colors group-hover:text-signal" aria-hidden="true" />
              <span className="min-w-0 flex-1">
                <span className="block text-lg font-semibold tracking-[-0.015em] text-ink">{t(`${service.key}.title`)}</span>
                <span className="mt-2 block text-sm leading-6 text-ink-2">{t(`${service.key}.desc`)}</span>
                <span className="mt-4 inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-medium text-ink">
                  <span className="cc-link">{tc("learnMore")}</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
