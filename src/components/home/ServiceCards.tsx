"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Car, Ship, Wrench, ArrowRight } from "lucide-react";
import { useScrollReveal, useStaggerReveal } from "@/lib/useScrollReveal";

const services = [
  { key: "vehicleSales", icon: Car, href: "/vehicles", color: "bg-neutral-100 text-neutral-700" },
  { key: "exportService", icon: Ship, href: "/services/export", color: "bg-amber-50 text-amber-600" },
  { key: "maintenancePrep", icon: Wrench, href: "/services/maintenance", color: "bg-emerald-50 text-emerald-600" },
];

export function ServiceCards() {
  const t = useTranslations("home.services");
  const tc = useTranslations("common");
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { containerRef, isChildVisible } = useStaggerReveal(services.length, 80);

  return (
    <section className="py-24">
      <div className="container-main">
        <div
          ref={titleRef}
          className={`text-center mb-10 reveal reveal-blur ${titleVisible ? "revealed" : ""}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{t("title")}</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">{t("subtitle")}</p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <Link
              key={service.key}
              href={service.href}
              className={`reveal-stagger group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-500 hover:-translate-y-2 ${isChildVisible(i) ? "revealed" : ""}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                {t(`${service.key}.title`)}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {t(`${service.key}.desc`)}
              </p>
              <span className="inline-flex items-center text-sm font-medium text-primary gap-1 group-hover:gap-2 transition-all">
                {tc("learnMore")}
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
