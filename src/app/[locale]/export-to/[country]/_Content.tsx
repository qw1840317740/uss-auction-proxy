"use client";

import { useTranslations } from "next-intl";
import {
  Ship,
  FileCheck,
  Car,
  Phone,
  Search,
  ClipboardList,
  Banknote,
  ArrowRight,
  CheckCircle2,
  Globe,
} from "lucide-react";
import { Link } from "@/i18n/routing";
import { getCountryBySlug, exportCountries } from "@/lib/export-countries";

import { countryGuidance } from "@/lib/country-guidance";

interface Props {
  locale: string;
  countrySlug: string;
}

export default function ExportToContent({ locale, countrySlug }: Props) {
  const t = useTranslations("exportTo");
  const tFaq = useTranslations("exportToFaq");
  const tc = useTranslations("common");
  const tNav = useTranslations("nav");
  const country = getCountryBySlug(countrySlug);

  if (!country) return null;

  const countryName =
    country.name[locale as "en" | "zh" | "ja"] ?? country.name.en;
  const region =
    country.region[locale as "en" | "zh" | "ja"] ?? country.region.en;
  const language = (["en", "zh", "ja"].includes(locale) ? locale : "en") as "en" | "zh" | "ja";
  const guidance = countryGuidance[countrySlug];

  // Other countries in the same region — for internal cross-linking
  const otherCountries = exportCountries.filter(
    (c) => c.slug !== countrySlug,
  );

  // Process steps (shared structure; localized labels)
  const steps = ["step1", "step2", "step3", "step4", "step5"] as const;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb — strip header via hidden spacer since JsonLdBreadcrumb already mounted */}
      <div className="border-b border-white/60 bg-gradient-to-r from-gray-50 via-white to-red-50/40">
        <div className="container-main py-4 text-sm text-gray-500">
          <Link href="/" className="hover:text-primary">
            {tc("home")}
          </Link>
          <span className="mx-2">/</span>
          <Link href="/export-guide" className="hover:text-primary">
            {tNav("exportGuide")}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{countryName}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-black text-white">
        <div className="container-main py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full text-sm mb-5">
              <Globe className="w-4 h-4" />
              {region}
            </div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              {t(guidance.restricted ? "restrictedHeroTitle" : "heroTitle", { country: countryName })}
            </h1>
            <p className="text-lg md:text-xl text-neutral-100 mb-6">
              {t(guidance.restricted ? "restrictedHeroSubtitle" : "heroSubtitle", { country: countryName })}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-primary px-5 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                {t(guidance.restricted ? "restrictedHeroCta" : "heroCta")}
                <ArrowRight className="w-4 h-4" />
              </Link>
              {!guidance.restricted && <Link
                href="/services/auction"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 px-5 py-3 rounded-lg font-bold transition-colors"
              >
                {t("heroCtaSecondary")}
              </Link>}
            </div>
          </div>
        </div>
      </section>


      {/* Country-specific guidance */}
      <section className="py-12 bg-white">
        <div className="container-main">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {t("regulationsTitle", { country: countryName })}
            </h2>
            {guidance.restricted && (
              <p className="border-l-4 border-red-600 bg-red-50 p-4 mb-5 text-sm font-semibold text-red-900">
                {t("restrictedNotice")}
              </p>
            )}
            <p className="text-lg text-gray-700 leading-relaxed">{guidance.rule[language]}</p>
            <h3 className="text-base font-semibold text-gray-900 mt-5 mb-2">{t("beforeBid")}</h3>
            <p className="text-gray-700 leading-relaxed">{guidance.check[language]}</p>
            <a href={guidance.source} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-primary underline underline-offset-2">
              {t("officialSource")} <ArrowRight className="w-4 h-4" />
            </a>
            {guidance.secondarySource && (
              <a href={guidance.secondarySource.url} target="_blank" rel="noopener noreferrer" className="ml-5 inline-flex items-center gap-1 mt-4 text-sm font-medium text-primary underline underline-offset-2">
                {guidance.secondarySource.name} <ArrowRight className="w-4 h-4" />
              </a>
            )}
            <Link href="/buying/japan-export-costs" className="ml-5 inline-flex items-center gap-1 mt-4 text-sm font-medium text-primary underline underline-offset-2">
              {t("costGuide")} <ArrowRight className="w-4 h-4" />
            </Link>
            <div className="mt-6 grid grid-cols-1 gap-4">
              <InfoTile
                icon={<FileCheck className="w-5 h-5 text-primary" />}
                label={t("facts.docs")}
                value={t("facts.docsValue")}
              />
            </div>
            <p className="mt-4 text-sm text-gray-500">{t("regulationsDisclaimer")}</p>
          </div>
        </div>
      </section>

      {/* Popular categories */}
      {!guidance.restricted && <section className="py-12 bg-gray-50">
        <div className="container-main">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              {t("categoriesTitle", { country: countryName })}
            </h2>
            <p className="text-gray-600 mb-6">{t("categoriesSubtitle")}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {(["sedan", "suv", "van", "kei"] as const).map((cat) => (
                <Link
                  key={cat}
                  href={`/vehicles?bodyType=${cat}`}
                  className="group bg-white rounded-xl p-5 border border-gray-100 hover:border-primary hover:shadow-sm transition-all flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <Car className="w-5 h-5 text-primary" />
                    <span className="font-medium text-gray-900">
                      {t(`categories.${cat}`)}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>}

      {/* Process — 5 steps shared with export-guide */}
      {!guidance.restricted && <section className="py-12 bg-white">
        <div className="container-main">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              {t("processTitle", { country: countryName })}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {steps.map((key, idx) => {
                const icons = [Search, ClipboardList, Banknote, FileCheck, Ship];
                const Icon = icons[idx];
                return (
                  <div
                    key={key}
                    className="bg-gray-50 rounded-xl p-5 border border-gray-100"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-9 h-9 rounded-lg bg-primary text-white flex items-center justify-center text-sm font-bold">
                        0{idx + 1}
                      </div>
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-1.5">
                      {t(`process.${key}.title`)}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {t(`process.${key}.desc`)}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>}

      {/* FAQ */}
      <section className="py-12 bg-gray-50">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              {t("faqTitle", { country: countryName })}
            </h2>
            <div className="space-y-3">
              {(["q1", "q2", "q3", "q4", "q5", "q6"] as const).map((k) => (
                <details
                  key={k}
                  className="bg-white rounded-xl border border-gray-100 overflow-hidden group"
                >
                  <summary className="flex items-center justify-between p-5 cursor-pointer">
                    <span className="font-medium text-gray-900 pr-4">
                      {tFaq(`${k}.q`, { country: countryName })}
                    </span>
                    <CheckCircle2 className="w-5 h-5 text-gray-300 group-open:text-primary transition-colors shrink-0" />
                  </summary>
                  <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">
                    {tFaq(`${k}.a`, { country: countryName })}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Other destinations — internal cross-linking */}
      <section className="py-10 bg-white">
        <div className="container-main">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              {t("otherTitle")}
            </h2>
            <div className="flex flex-wrap gap-2">
              {otherCountries.map((c) => (
                <Link
                  key={c.slug}
                  href={`/export-to/${c.slug}`}
                  className="px-3 py-1.5 bg-gray-100 hover:bg-primary hover:text-white text-gray-700 text-sm rounded-full transition-colors"
                >
                  {c.name[locale as "en" | "zh" | "ja"] ?? c.name.en}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-primary text-white">
        <div className="container-main text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            {t(guidance.restricted ? "restrictedCtaTitle" : "ctaTitle", { country: countryName })}
          </h2>
          <p className="text-neutral-100 mb-6 max-w-2xl mx-auto">
            {t(guidance.restricted ? "restrictedCtaSubtitle" : "ctaSubtitle", { country: countryName })}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-4 h-4" />
              {t("ctaContact")}
            </Link>
            {!guidance.restricted && (
              <Link
                href="/vehicles"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white px-6 py-3 rounded-lg font-bold transition-colors"
              >
                {t("ctaBrowse")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

// ---------- Local subcomponents ----------


function InfoTile({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="bg-gray-50 rounded-lg p-4 flex items-start gap-3">
      <div className="shrink-0 mt-0.5">{icon}</div>
      <div>
        <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">
          {label}
        </div>
        <div className="text-sm text-gray-800 leading-relaxed">{value}</div>
      </div>
    </div>
  );
}
