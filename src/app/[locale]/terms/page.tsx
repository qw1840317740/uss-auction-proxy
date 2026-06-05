"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ArrowLeft, FileText } from "lucide-react";

const sectionKeys = ["service", "pricing", "purchase", "shipping", "warranty", "changes"];

export default function TermsPage() {
  const t = useTranslations("terms");
  const tc = useTranslations("common");

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="container-main">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-blue-200 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            {tc("back")}
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-8 h-8 text-secondary" />
            <h1 className="text-3xl md:text-4xl font-bold">{t("title")}</h1>
          </div>
          <p className="text-blue-200 text-sm">{t("lastUpdated")}</p>
        </div>
      </div>

      {/* Content */}
      <div className="container-main py-12 max-w-4xl">
        <p className="text-gray-600 leading-relaxed mb-10 text-lg">{t("intro")}</p>

        <div className="space-y-8">
          {sectionKeys.map((key, i) => (
            <div key={key} className="border-l-4 border-primary/20 pl-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                <span className="text-primary mr-2">{i + 1}.</span>
                {t(`sections.${key}.title`)}
              </h2>
              <p className="text-gray-600 leading-relaxed">{t(`sections.${key}.content`)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
