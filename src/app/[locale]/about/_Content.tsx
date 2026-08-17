"use client";

import { useTranslations } from "next-intl";
import {
  Building2,
  Shield,
  Award,
  CheckCircle2,
  Users,
  Globe,
  DollarSign,
  MapPin,
  ClipboardList,
  MessageSquare,
  Eye,
} from "lucide-react";

const regionIcons = [MapPin, Globe, MapPin, Globe, MapPin];
const regionColors = [
  "bg-red-50 text-red-600",
  "bg-amber-50 text-amber-600",
  "bg-neutral-100 text-neutral-700",
  "bg-emerald-50 text-emerald-600",
  "bg-purple-50 text-purple-600",
];

const reasonIcons = [Shield, DollarSign, Globe, Award];
const reasonColors = [
  "bg-neutral-100 text-neutral-700",
  "bg-emerald-50 text-emerald-600",
  "bg-amber-50 text-amber-600",
  "bg-purple-50 text-purple-600",
];

const stepIconsShort = [ClipboardList, Eye, CheckCircle2, MessageSquare];

export default function AboutPage() {
  const t = useTranslations("about");

  const regions = [
    "asia",
    "middleEast",
    "europe",
    "northAmerica",
    "oceania",
  ] as const;

  const statsData = [
    { icon: Building2, value: t("stats.values.sourcing"), label: t("stats.sourcing") },
    { icon: Award, value: t("stats.values.brands"), label: t("stats.brands") },
    { icon: Globe, value: t("stats.values.support"), label: t("stats.support") },
    { icon: Users, value: t("stats.values.contact"), label: t("stats.contact") },
  ];

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

      {/* Company Profile */}
      <section className="py-16">
        <div className="container-main">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
              <div className="md:col-span-1">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Building2 className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {t("companyProfile.title")}
                </h2>
              </div>
              <div className="md:col-span-2">
                <p className="text-gray-600 leading-relaxed text-lg">
                  {t("companyProfile.desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Service Network */}
      <section className="py-16 bg-gray-50">
        <div className="container-main">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-4">
              <Globe className="w-7 h-7" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              {t("globalNetwork.title")}
            </h2>
            <p className="text-gray-500 text-lg">
              {t("globalNetwork.subtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {regions.map((key, index) => {
              const Icon = regionIcons[index];
              return (
                <div
                  key={key}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow"
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${regionColors[index]} flex items-center justify-center mx-auto mb-3`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {t(`globalNetwork.regions.${key}.name`)}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {t(`globalNetwork.regions.${key}.countries`)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PIT FLOW / Our Process */}
      <section className="py-16">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              {t("pitFlow.title")}
            </h2>
            <p className="text-gray-500 text-lg">
              {t("pitFlow.subtitle")}
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {(["step1", "step2", "step3", "step4"] as const).map(
                (key, index) => {
                  const Icon = stepIconsShort[index];
                  return (
                    <div key={key} className="relative text-center">
                      {/* Connecting line */}
                      {index < 3 && (
                        <div className="hidden md:block absolute top-6 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-gray-200" />
                      )}
                      {/* Numbered circle */}
                      <div className="relative z-10 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                        0{index + 1}
                      </div>
                      <div className="mb-3">
                        <Icon className="w-5 h-5 text-primary mx-auto" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {t(`pitFlow.${key}.title`)}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {t(`pitFlow.${key}.desc`)}
                      </p>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              {t("whyUs.title")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {(["reason1", "reason2", "reason3", "reason4"] as const).map(
              (key, index) => {
                const Icon = reasonIcons[index];
                return (
                  <div
                    key={key}
                    className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                  >
                    <div
                      className={`w-14 h-14 rounded-xl ${reasonColors[index]} flex items-center justify-center mb-4`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {t(`whyUs.${key}.title`)}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {t(`whyUs.${key}.desc`)}
                    </p>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 bg-primary">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
            {statsData.map((stat) => (
              <div key={stat.label} className="py-4">
                <stat.icon className="w-8 h-8 mx-auto mb-3 text-white/80" />
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
