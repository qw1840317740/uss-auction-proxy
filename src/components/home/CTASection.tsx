"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export function CTASection() {
  const t = useTranslations("home.cta");

  return (
    <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
      <div className="container-main text-center">
        <h2 className="text-3xl font-bold mb-3">{t("title")}</h2>
        <p className="text-blue-100 mb-8 max-w-xl mx-auto">{t("subtitle")}</p>
        <div className="flex items-center justify-center gap-4">
          <Link
            href="/vehicles"
            className="px-8 py-3 bg-secondary hover:bg-secondary-light text-gray-900 font-semibold rounded-xl transition-colors"
          >
            {t("browseVehicles")}
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 border-2 border-white/30 hover:border-white text-white font-semibold rounded-xl transition-colors"
          >
            {t("contact")}
          </Link>
        </div>
      </div>
    </section>
  );
}
