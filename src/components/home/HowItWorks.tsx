"use client";

import { useTranslations } from "next-intl";
import { SectionHead } from "./SectionHead";

const steps = ["step1", "step2", "step3", "step4"] as const;

export function HowItWorks() {
  const t = useTranslations("home.howItWorks");

  return (
    <section className="border-b border-rule-dark bg-graphite py-16 text-on-dark md:py-24">
      <div className="container-main">
        <SectionHead tone="dark" title={t("title")} lede={t("subtitle")} />

        {/* Genuinely ordinal: a four-stage process read left to right */}
        <ol className="grid gap-px overflow-hidden rounded-[10px] border border-rule-dark bg-rule-dark sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((key, i) => (
            <li key={key} className="min-w-0 bg-graphite p-6">
              <div className="flex items-center gap-3">
                <span className="cc-data text-sm font-semibold text-signal">{String(i + 1).padStart(2, "0")}</span>
                <span className="h-px flex-1 bg-rule-dark" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-[-0.015em] text-on-dark">{t(`${key}.title`)}</h3>
              <p className="mt-2 text-sm leading-6 text-on-dark-2">{t(`${key}.desc`)}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
