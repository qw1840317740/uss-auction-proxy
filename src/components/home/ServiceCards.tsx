"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Car, Ship, Wrench, ArrowRight } from "lucide-react";

const services = [
  { key: "vehicleSales", icon: Car, href: "/vehicles", color: "bg-blue-50 text-blue-600" },
  { key: "exportService", icon: Ship, href: "/services/export", color: "bg-amber-50 text-amber-600" },
  { key: "maintenancePrep", icon: Wrench, href: "/services/maintenance", color: "bg-emerald-50 text-emerald-600" },
];

export function ServiceCards() {
  const t = useTranslations("home.services");

  return (
    <section className="py-20">
      <div className="container-main">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">{t("title")}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t("subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.key}
              href={service.href}
              className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md border border-gray-100 transition-all hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-4`}>
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                {t(`${service.key}.title`)}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {t(`${service.key}.desc`)}
              </p>
              <span className="inline-flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-all">
                <span className="mr-1">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
