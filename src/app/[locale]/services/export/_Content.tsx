"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import {
  Globe,
  FileText,
  Ship,
  MapPin,
  Shield,
  CreditCard,
  ArrowRight,
  Package,
} from "lucide-react";

const featureIcons = [Globe, FileText, Ship, MapPin, Shield, CreditCard];
const featureColors = [
  "bg-neutral-100 text-neutral-700",
  "bg-indigo-50 text-indigo-600",
  "bg-cyan-50 text-cyan-600",
  "bg-emerald-50 text-emerald-600",
  "bg-amber-50 text-amber-600",
  "bg-purple-50 text-purple-600",
];

const processIcons = [
  Package,
  FileText,
  CreditCard,
  Shield,
  FileText,
  Ship,
];
const processColors = [
  "bg-neutral-900",
  "bg-indigo-600",
  "bg-cyan-600",
  "bg-emerald-600",
  "bg-amber-500",
  "bg-purple-600",
];

export default function ExportServicePage() {
  const t = useTranslations("services.export");

  const features = (["f1", "f2", "f3", "f4", "f5", "f6"] as const).map(
    (key, index) => ({
      key,
      Icon: featureIcons[index],
      color: featureColors[index],
    })
  );

  const steps = (
    ["step1", "step2", "step3", "step4", "step5", "step6"] as const
  ).map((key, index) => ({
    key,
    num: String(index + 1).padStart(2, "0"),
    Icon: processIcons[index],
    color: processColors[index],
  }));

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-black text-white">
        <div className="container-main py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm mb-6">
              <Ship className="w-4 h-4" />
              Export Service
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

      {/* Service Features */}
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

      {/* Export Process */}
      <section className="py-16">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              {t("process.title")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
                  <div className={`text-lg font-bold text-gray-300`}>
                    <Icon className="w-5 h-5" />
                  </div>
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-neutral-900 via-neutral-800 to-black text-white">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">{t("ctaTitle")}</h2>
            <p className="text-neutral-100 text-lg mb-8">{t("ctaDesc")}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 bg-white text-red-600 font-semibold rounded-xl hover:bg-red-50 transition-colors"
              >
                {t("ctaContact")}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/vehicles"
                className="inline-flex items-center gap-2 px-8 py-3 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
              >
                {t("ctaBrowse")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
