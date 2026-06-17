"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import {
  ClipboardCheck,
  Shield,
  FileText,
  Eye,
  Wrench,
  RefreshCw,
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  Car,
  Settings,
} from "lucide-react";

const featureIcons = [ClipboardCheck, Shield, FileText, Eye, Wrench, RefreshCw];
const featureColors = [
  "bg-emerald-50 text-emerald-600",
  "bg-teal-50 text-teal-600",
  "bg-cyan-50 text-cyan-600",
  "bg-neutral-100 text-neutral-700",
  "bg-amber-50 text-amber-600",
  "bg-purple-50 text-purple-600",
];

const processIcons = [ClipboardCheck, Eye, Wrench, CheckCircle2];
const processColors = [
  "bg-emerald-600",
  "bg-teal-600",
  "bg-cyan-600",
  "bg-neutral-900",
];

const combinationIcons = [Car, Settings, RefreshCw];
const combinationColors = [
  "bg-emerald-50 text-emerald-600 border-emerald-100",
  "bg-teal-50 text-teal-600 border-teal-100",
  "bg-neutral-100 text-neutral-700 border-neutral-200",
];

export default function MaintenanceServicePage() {
  const t = useTranslations("services.maintenance");
  const [openFaq, setOpenFaq] = useState<string | null>("q1");

  const features = (["f1", "f2", "f3", "f4", "f5", "f6"] as const).map(
    (key, index) => ({
      key,
      Icon: featureIcons[index],
      color: featureColors[index],
    })
  );

  const steps = (
    ["step1", "step2", "step3", "step4"] as const
  ).map((key, index) => ({
    key,
    num: String(index + 1).padStart(2, "0"),
    Icon: processIcons[index],
    color: processColors[index],
  }));

  const combinations = (["a", "b", "c"] as const).map((key, index) => ({
    key,
    Icon: combinationIcons[index],
    color: combinationColors[index],
  }));

  const faqs = (["q1", "q2", "q3"] as const).map((key) => ({ key }));

  function toggleFaq(key: string) {
    setOpenFaq(openFaq === key ? null : key);
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-900 text-white">
        <div className="container-main py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm mb-6">
              <Wrench className="w-4 h-4" />
              Maintenance Service
            </div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              {t("title")}
            </h1>
            <p className="text-lg md:text-xl text-emerald-100">
              {t("subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600 leading-relaxed text-lg">
              {t("desc")}
            </p>
          </div>
        </div>
      </section>

      {/* Service Items */}
      <section className="py-16 bg-gray-50">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              {t("features.title")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map(({ key, Icon, color }) => (
              <div
                key={key}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div
                  className={`w-14 h-14 rounded-xl ${color} flex items-center justify-center mb-4`}
                >
                  <Icon className="w-7 h-7" />
                </div>
                <p className="text-gray-700 leading-relaxed font-medium">
                  {t(`features.${key}`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Process */}
      <section className="py-16">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              {t("process.title")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {steps.map(({ key, num, Icon, color }) => (
              <div
                key={key}
                className="relative bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`w-10 h-10 rounded-full ${color} text-white flex items-center justify-center text-sm font-bold`}
                  >
                    {num}
                  </div>
                  <Icon className="w-5 h-5 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t(`process.${key}.title`)}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {t(`process.${key}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Consultation Scenarios */}
      <section className="py-16 bg-gray-50">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              {t("combinations.title")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {combinations.map(({ key, Icon, color }) => (
              <div
                key={key}
                className={`rounded-xl p-6 border ${color} hover:shadow-md transition-shadow`}
              >
                <div className="mb-4">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t(`combinations.${key}.title`)}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {t(`combinations.${key}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service FAQ */}
      <section className="py-16">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              {t("faq.title")}
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map(({ key }) => (
              <div
                key={key}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(key)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-900 pr-4">
                    {t(`faq.${key}.q`)}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ${
                      openFaq === key ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === key && (
                  <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">
                    {t(`faq.${key}.a`)}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-900 text-white">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">{t("ctaTitle")}</h2>
            <p className="text-emerald-100 text-lg mb-8">{t("ctaDesc")}</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-emerald-700 font-semibold rounded-xl hover:bg-emerald-50 transition-colors"
            >
              {t("ctaContact")}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
