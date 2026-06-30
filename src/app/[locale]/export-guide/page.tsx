"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import {
  MessageCircle,
  Search,
  FileCheck,
  CreditCard,
  FileText,
  Ship,
  ArrowRight,
  Banknote,
  CheckCircle2,
} from "lucide-react";

const stepIcons = [MessageCircle, Search, FileCheck, CreditCard, FileText, Ship];
const stepColors = [
  "bg-neutral-100 text-neutral-700",
  "bg-emerald-50 text-emerald-600",
  "bg-amber-50 text-amber-600",
  "bg-purple-50 text-purple-600",
  "bg-rose-50 text-rose-600",
  "bg-teal-50 text-teal-600",
];

export default function ExportGuidePage() {
  const t = useTranslations("exportGuide");
  const tc = useTranslations("common");

  const steps = ["step1", "step2", "step3", "step4", "step5", "step6"] as const;

  const paymentMethods = [
    { key: "bankWire", icon: Banknote, color: "bg-neutral-100 text-neutral-700 border-neutral-200" },
    { key: "creditCard", icon: CreditCard, color: "bg-purple-50 text-purple-600 border-purple-100" },
    { key: "paypal", icon: FileText, color: "bg-indigo-50 text-indigo-600 border-indigo-100" },
  ] as const;

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-black text-white">
        <div className="container-main py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              {t("title")}
            </h1>
            <p className="text-lg md:text-xl text-neutral-100">
              {t("subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* 6-Step Timeline */}
      <section className="py-16">
        <div className="container-main">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {steps.map((key, index) => {
                const Icon = stepIcons[index];
                return (
                  <div
                    key={key}
                    className="relative bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                  >
                    {/* Step number */}
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${stepColors[index]}`}
                      >
                        0{index + 1}
                      </div>
                      <div className={`w-10 h-10 rounded-xl ${stepColors[index]} flex items-center justify-center`}>
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {t(`steps.${key}.title`)}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {t(`steps.${key}.desc`)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16 bg-gray-50">
        <div className="container-main">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-4">
                <CreditCard className="w-7 h-7" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                {t("payment.title")}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {paymentMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <div
                    key={method.key}
                    className={`bg-white rounded-xl p-6 border ${method.color.split(" ").slice(2).join(" ")} shadow-sm text-center`}
                  >
                    <div
                      className={`w-12 h-12 rounded-xl ${method.color.split(" ").slice(0, 2).join(" ")} flex items-center justify-center mx-auto mb-3`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-semibold text-gray-900">
                      {t(`payment.${method.key}`)}
                    </h3>
                  </div>
                );
              })}
            </div>
            <p className="text-center text-sm text-gray-500 mt-6">
              {t("payment.note")}
            </p>
          </div>
        </div>
      </section>

      {/* Shipping Info */}
      <section className="py-16">
        <div className="container-main">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-4">
                <Ship className="w-7 h-7" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                {t("shipping.title")}
              </h2>
              <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
                {t("shipping.desc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-primary via-primary-dark to-black text-white">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center">
            <CheckCircle2 className="w-12 h-12 mx-auto mb-4 text-white/80" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {tc("getStarted")}
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-semibold rounded-xl hover:bg-gray-100 transition-colors"
              >
                {tc("contactUs")}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/vehicles"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors border border-white/20"
              >
                {tc("viewAll")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
