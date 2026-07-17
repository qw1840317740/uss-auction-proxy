"use client";

import { useTranslations } from "next-intl";
import { ArrowRight, Gavel, Ship, Warehouse } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useScrollReveal } from "@/lib/useScrollReveal";

const serviceLinks = [
  { key: "inventory", href: "/vehicles", icon: Warehouse },
  { key: "auction", href: "/services/auction", icon: Gavel },
  { key: "export", href: "/services/export", icon: Ship },
] as const;

export function HomeIntro() {
  const t = useTranslations("home.intro");
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="border-b border-gray-100 bg-white py-16 md:py-20">
      <div
        ref={ref}
        className={`container-main grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center reveal reveal-up ${isVisible ? "revealed" : ""}`}
      >
        <div>
          <p className="mb-3 text-sm font-semibold uppercase text-secondary">{t("eyebrow")}</p>
          <h2 className="max-w-3xl text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
            {t("title")}
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-base leading-7 text-gray-600">
            <p>{t("body1")}</p>
            <p>{t("body2")}</p>
          </div>
        </div>

        <nav aria-label={t("navLabel")} className="border-y border-gray-200">
          {serviceLinks.map(({ key, href, icon: Icon }) => (
            <Link
              key={key}
              href={href}
              className="group flex items-center gap-4 border-b border-gray-200 px-1 py-5 last:border-b-0"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-800 transition-colors group-hover:bg-secondary group-hover:text-white">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-semibold text-gray-900 group-hover:text-secondary">{t(`links.${key}.title`)}</span>
                <span className="mt-1 block text-sm leading-5 text-gray-500">{t(`links.${key}.desc`)}</span>
              </span>
              <ArrowRight className="h-5 w-5 shrink-0 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-secondary" aria-hidden="true" />
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
