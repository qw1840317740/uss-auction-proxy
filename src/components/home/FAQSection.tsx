"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ChevronDown } from "lucide-react";
import { useScrollReveal, useStaggerReveal } from "@/lib/useScrollReveal";

export function FAQSection() {
  const t = useTranslations("home.faq");
  const faqT = useTranslations("faq.items");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqKeys = ["q1", "q2", "q3", "q4"];
  const title = useScrollReveal();
  const { containerRef, isChildVisible } = useStaggerReveal(faqKeys.length, 60);

  return (
    <section className="py-24">
      <div className="container-main">
        <div
          ref={title.ref}
          className={`text-center mb-10 reveal reveal-blur ${title.isVisible ? "revealed" : ""}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{t("title")}</h2>
        </div>

        <div ref={containerRef} className="max-w-3xl mx-auto space-y-4">
          {faqKeys.map((key, i) => (
            <div
              key={key}
              className={`reveal-stagger bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md ${openIndex === i ? "shadow-md" : ""} ${isChildVisible(i) ? "revealed" : ""}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-medium text-gray-900">{faqT(`${key}.q`)}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ml-4 ${openIndex === i ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === i ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 text-sm text-gray-500 leading-relaxed">
                  {faqT(`${key}.a`)}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/faq" className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1 group">
            {t("viewAll")}
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
