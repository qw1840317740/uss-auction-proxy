"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  const t = useTranslations("home.cta");

  return (
    <section className="py-16 md:py-20">
      <div className="container-main">
        <div className="flex flex-col gap-8 rounded-[10px] border border-rule bg-paper-raised p-8 md:flex-row md:items-center md:justify-between md:p-12">
          <div className="min-w-0 max-w-2xl">
            <h2 className="text-[1.75rem] font-semibold leading-[1.1] tracking-[-0.03em] text-ink [overflow-wrap:anywhere] md:text-[2.25rem]">
              {t("title")}
            </h2>
            <p className="mt-3 text-base leading-7 text-ink-2">{t("subtitle")}</p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="cc-btn cc-btn--signal">
              {t("contact")}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link href="/vehicles" className="cc-btn cc-btn--line">
              {t("browseVehicles")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
