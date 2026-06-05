"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ChevronDown } from "lucide-react";

export function FAQSection() {
  const t = useTranslations("home.faq");
  const faqT = useTranslations("faq.items");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqKeys = ["q1", "q2", "q3", "q4"];

  return (
    <section className="py-16">
      <div className="container-main">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">{t("title")}</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqKeys.map((key, i) => (
            <div key={key} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-medium text-gray-900">{faqT(`${key}.q`)}</span>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${openIndex === i ? "rotate-180" : ""}`} />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">
                  {faqT(`${key}.a`)}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/faq" className="text-sm font-medium text-primary hover:underline">
            {t("viewAll")} →
          </Link>
        </div>
      </div>
    </section>
  );
}
