"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqKeys = ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8"] as const;

const faqMapping: Record<string, string[]> = {
  all: [...faqKeys],
  general: ["q1"],
  purchase: ["q2", "q5"],
  export: ["q3", "q6"],
  maintenance: ["q7"],
  payment: ["q4", "q8"],
};

const categoryKeys = [
  "all",
  "general",
  "purchase",
  "export",
  "maintenance",
  "payment",
] as const;

export default function FAQPage() {
  const t = useTranslations("faq");
  const [activeCategory, setActiveCategory] = useState("all");
  const [openIndex, setOpenIndex] = useState<string | null>("q1");

  const filteredKeys = faqMapping[activeCategory] ?? faqKeys;

  function toggleItem(key: string) {
    setOpenIndex(openIndex === key ? null : key);
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-black text-white">
        <div className="container-main py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm mb-6">
              <HelpCircle className="w-4 h-4" />
              FAQ
            </div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              {t("title")}
            </h1>
            <p className="text-lg md:text-xl text-neutral-100">
              {t("subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Category Tabs + FAQ Items */}
      <section className="py-16">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 mb-10">
              {categoryKeys.map((key) => (
                <button
                  key={key}
                  onClick={() => {
                    setActiveCategory(key);
                    setOpenIndex(null);
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === key
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {key === "all"
                    ? "All"
                    : t(`categories.${key}`)}
                </button>
              ))}
            </div>

            {/* Accordion Items */}
            <div className="space-y-3">
              {filteredKeys.map((key) => (
                <div
                  key={key}
                  className="bg-white rounded-xl border border-gray-100 overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(key)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium text-gray-900 pr-4">
                      {t(`items.${key}.q`)}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ${
                        openIndex === key ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openIndex === key && (
                    <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">
                      {t(`items.${key}.a`)}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Empty state */}
            {filteredKeys.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                No questions found for this category.
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
