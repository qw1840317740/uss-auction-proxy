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
  CheckCircle2,
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

const costKeys = ["vehicle", "service", "inland", "preparation", "freight", "destination"] as const;
const documentKeys = ["invoice", "exportCertificate", "billOfLading", "auctionSheet"] as const;

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
              {t("title")}
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
      <section className="py-16 bg-gray-50">
        <div className="container-main max-w-5xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">{t("costs.title")}</h2>
          <p className="text-gray-600 max-w-3xl mb-8">{t("costs.intro")}</p>
          <div className="grid md:grid-cols-2 gap-x-10 border-t border-gray-200">
            {costKeys.map((key) => (
              <div key={key} className="py-4 border-b border-gray-200 flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900">{t(`costs.${key}.title`)}</h3>
                  <p className="text-sm text-gray-600 mt-1">{t(`costs.${key}.desc`)}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-gray-600">{t("costs.note")}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-main max-w-5xl grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">{t("documents.title")}</h2>
            <p className="text-gray-600 mb-6">{t("documents.intro")}</p>
            <ul className="space-y-3">
              {documentKeys.map((key) => (
                <li key={key} className="flex gap-3 text-gray-700">
                  <FileText className="w-5 h-5 text-primary shrink-0" />
                  {t(`documents.${key}`)}
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-500 mt-5">{t("documents.note")}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">{t("responsibilities.title")}</h2>
            <div className="border-t border-gray-200 py-5">
              <h3 className="font-semibold text-gray-900 mb-2">{t("responsibilities.japanTitle")}</h3>
              <p className="text-gray-600">{t("responsibilities.japanDesc")}</p>
            </div>
            <div className="border-t border-gray-200 py-5">
              <h3 className="font-semibold text-gray-900 mb-2">{t("responsibilities.destinationTitle")}</h3>
              <p className="text-gray-600">{t("responsibilities.destinationDesc")}</p>
            </div>
            <p className="text-sm text-gray-500">{t("responsibilities.note")}</p>
          </div>
        </div>
      </section>

      <section className="py-12 border-t border-gray-100 bg-gray-50">
        <div className="container-main max-w-5xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{t("destinations.title")}</h2>
          <p className="text-gray-600 mb-5">{t("destinations.intro")}</p>
          <div className="flex flex-wrap gap-4">
            {(["united-kingdom", "uae", "australia"] as const).map((slug) => (
              <Link key={slug} href={`/export-to/${slug}`} className="inline-flex items-center gap-2 text-primary font-medium hover:underline underline-offset-4">
                {t(`destinations.${slug}`)} <ArrowRight className="w-4 h-4" />
              </Link>
            ))}
          </div>
        </div>
      </section>

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
