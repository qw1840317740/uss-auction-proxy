"use client";

import { useTranslations } from "next-intl";
import { ArrowRight, Gavel, Ship, Warehouse } from "lucide-react";
import { Link } from "@/i18n/routing";

const serviceLinks = [
  { key: "inventory", href: "/vehicles", icon: Warehouse },
  { key: "auction", href: "/services/auction", icon: Gavel },
  { key: "export", href: "/services/export", icon: Ship },
] as const;

export function HomeIntro() {
  const t = useTranslations("home.intro");

  return (
    <section className="border-b border-rule bg-paper-raised py-16 md:py-24">
      <div className="container-main grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-20">
        <div className="min-w-0">
          <p className="cc-label cc-tick">{t("eyebrow")}</p>
          <h2 className="mt-4 max-w-3xl text-[1.75rem] font-semibold leading-[1.12] tracking-[-0.03em] text-ink [overflow-wrap:anywhere] md:text-[2.25rem]">
            {t("title")}
          </h2>
          <div className="mt-6 max-w-[65ch] space-y-4 text-base leading-7 text-ink-2">
            <p>{t("body1")}</p>
            <p>{t("body2")}</p>
          </div>
        </div>

        <nav aria-label={t("navLabel")} className="self-start border-t border-ink">
          {serviceLinks.map(({ key, href, icon: Icon }) => (
            <Link key={key} href={href} className="group flex items-center gap-4 border-b border-rule py-5">
              <Icon className="h-5 w-5 shrink-0 text-ink-3 transition-colors group-hover:text-signal" aria-hidden="true" />
              <span className="min-w-0 flex-1">
                <span className="block font-semibold text-ink">{t(`links.${key}.title`)}</span>
                <span className="mt-1 block text-sm leading-5 text-ink-2">{t(`links.${key}.desc`)}</span>
              </span>
              <ArrowRight className="h-4 w-4 shrink-0 text-ink-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-ink" aria-hidden="true" />
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
