"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { useScrollReveal } from "@/lib/useScrollReveal";

export function CTASection() {
  const t = useTranslations("home.cta");
  const reveal = useScrollReveal();

  return (
    <section className="py-24 bg-gradient-to-br from-primary via-primary-dark to-[#0f2044] text-white relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container-main text-center relative">
        <div
          ref={reveal.ref}
          className={`reveal reveal-blur ${reveal.isVisible ? "revealed" : ""}`}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">{t("title")}</h2>
          <p className="text-blue-200 mb-10 max-w-xl mx-auto text-lg">{t("subtitle")}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/vehicles"
              className="w-full sm:w-auto px-10 py-4 bg-secondary hover:bg-secondary-light text-gray-900 font-bold rounded-xl transition-all duration-300 shadow-xl shadow-amber-500/20 hover:shadow-2xl hover:shadow-amber-500/30 hover:-translate-y-0.5 btn-premium text-lg"
            >
              {t("browseVehicles")}
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-10 py-4 border-2 border-white/30 hover:border-white text-white font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5 backdrop-blur-sm bg-white/5 hover:bg-white/10 text-lg"
            >
              {t("contact")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
