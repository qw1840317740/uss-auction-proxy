"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Plus } from "lucide-react";

const faqKeys = ["q1", "q2", "q3", "q4"];

export function FAQSection() {
  const t = useTranslations("home.faq");
  const faqT = useTranslations("faq.items");
  const nav = useTranslations("nav");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="border-b border-rule py-16 md:py-24">
      <div className="container-main grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
        <div className="min-w-0">
          <p className="cc-label cc-tick">{nav("faq")}</p>
          <h2 className="mt-4 text-[1.75rem] font-semibold leading-[1.1] tracking-[-0.03em] text-ink [overflow-wrap:anywhere] md:text-[2.25rem]">
            {t("title")}
          </h2>
          <Link href="/faq" className="mt-6 inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-medium text-ink">
            <span className="cc-link">{t("viewAll")}</span>
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="border-t border-ink">
          {faqKeys.map((key, i) => {
            const open = openIndex === i;
            return (
              <div key={key} className="border-b border-rule">
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : i)}
                    aria-expanded={open}
                    aria-controls={`home-faq-${key}`}
                    className="flex w-full items-start justify-between gap-6 py-5 text-left font-sans text-base font-medium tracking-normal text-ink"
                  >
                    <span>{faqT(`${key}.q`)}</span>
                    <Plus
                      className={`mt-0.5 h-5 w-5 shrink-0 text-ink-3 transition-transform duration-200 ${open ? "rotate-45" : ""}`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div id={`home-faq-${key}`} hidden={!open} className="max-w-[65ch] pb-6 text-sm leading-7 text-ink-2">
                  {faqT(`${key}.a`)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
