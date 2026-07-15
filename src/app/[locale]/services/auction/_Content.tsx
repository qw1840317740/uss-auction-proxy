import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import {
  ArrowRight,
  BadgeJapaneseYen,
  CarFront,
  Check,
  ChevronDown,
  FileSearch,
  Gavel,
  MessageCircle,
  Search,
  ShieldCheck,
  Ship,
} from "lucide-react";
import { GlassBreadcrumb } from "@/components/layout/GlassBreadcrumb";

const principles = [ShieldCheck, FileSearch, BadgeJapaneseYen] as const;
const scopeIcons = [Search, FileSearch, Gavel, Ship] as const;
const processIcons = [MessageCircle, Search, FileSearch, Gavel, CarFront, Ship] as const;

export default async function AuctionServiceContent() {
  const t = await getTranslations("services.auction");
  const common = await getTranslations("common");

  return (
    <main className="bg-white text-neutral-950">
      <section className="relative isolate min-h-[560px] overflow-hidden bg-[#05070b] text-white md:min-h-[620px]">
        <Image
          src="/images/hero/car-showroom.jpg"
          alt={t("imageAlt")}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/66" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/72 to-transparent" />
        <div className="absolute inset-y-0 left-0 w-1 bg-red-600" />

        <div className="container-main relative flex min-h-[560px] flex-col justify-center py-14 md:min-h-[620px] md:py-20">
          <GlassBreadcrumb backHref="/" backLabel={common("back")} current={t("title")} tone="dark" className="mb-10" />
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-3 text-sm font-semibold uppercase text-red-400">
              <Gavel className="h-4 w-4" />
              <span>{t("eyebrow")}</span>
            </div>
            <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">{t("title")}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-200 md:text-xl">{t("subtitle")}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-red-600 px-6 font-semibold text-white transition-colors hover:bg-red-500">
                {t("primaryCta")}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/blog/japan-auction-grade-guide" className="inline-flex h-12 items-center justify-center rounded-md border border-white/35 bg-black/20 px-6 font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10">
                {t("secondaryCta")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-neutral-50">
        <div className="container-main grid md:grid-cols-3">
          {principles.map((Icon, index) => (
            <div key={index} className="flex min-h-32 items-start gap-4 border-neutral-200 px-0 py-7 md:border-l md:px-7 md:first:border-l-0">
              <Icon className="mt-1 h-6 w-6 shrink-0 text-red-600" />
              <div>
                <h2 className="font-semibold text-neutral-950">{t(`principles.p${index + 1}.title`)}</h2>
                <p className="mt-1 text-sm leading-6 text-neutral-600">{t(`principles.p${index + 1}.desc`)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-main">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <p className="text-sm font-semibold uppercase text-red-600">{t("scope.eyebrow")}</p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">{t("scope.title")}</h2>
              <p className="mt-5 max-w-lg text-lg leading-8 text-neutral-600">{t("scope.subtitle")}</p>
            </div>
            <div className="grid gap-px overflow-hidden rounded-lg border border-neutral-200 bg-neutral-200 sm:grid-cols-2">
              {scopeIcons.map((Icon, index) => (
                <article key={index} className="min-h-64 bg-white p-7 md:p-9">
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-neutral-950 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-7 text-xl font-semibold">{t(`scope.s${index + 1}.title`)}</h3>
                  <p className="mt-3 leading-7 text-neutral-600">{t(`scope.s${index + 1}.desc`)}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#080b10] py-20 text-white md:py-28">
        <div className="container-main">
          <p className="text-sm font-semibold uppercase text-red-400">{t("process.eyebrow")}</p>
          <div className="mt-3 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="max-w-2xl text-3xl font-bold md:text-4xl">{t("process.title")}</h2>
            <p className="max-w-xl leading-7 text-neutral-400">{t("process.subtitle")}</p>
          </div>
          <ol className="mt-14 grid gap-x-8 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
            {processIcons.map((Icon, index) => (
              <li key={index} className="border-t border-white/15 pt-6">
                <div className="flex items-center justify-between">
                  <Icon className="h-6 w-6 text-red-500" />
                  <span className="text-sm font-semibold text-neutral-500">0{index + 1}</span>
                </div>
                <h3 className="mt-8 text-xl font-semibold">{t(`process.step${index + 1}.title`)}</h3>
                <p className="mt-3 leading-7 text-neutral-400">{t(`process.step${index + 1}.desc`)}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-main grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase text-red-600">{t("costs.eyebrow")}</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">{t("costs.title")}</h2>
            <p className="mt-5 text-lg leading-8 text-neutral-600">{t("costs.desc")}</p>
            <p className="mt-6 border-l-2 border-red-600 pl-5 text-sm leading-6 text-neutral-500">{t("costs.note")}</p>
          </div>
          <ul className="divide-y divide-neutral-200 border-y border-neutral-200">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <li key={item} className="flex items-start gap-4 py-4">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
                <span className="leading-7 text-neutral-700">{t(`costs.i${item}`)}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50 py-20 md:py-24">
        <div className="container-main max-w-4xl">
          <p className="text-center text-sm font-semibold uppercase text-red-600">{t("faq.eyebrow")}</p>
          <h2 className="mt-3 text-center text-3xl font-bold md:text-4xl">{t("faq.title")}</h2>
          <div className="mt-10 divide-y divide-neutral-200 border-y border-neutral-200">
            {[1, 2, 3, 4].map((item) => (
              <details key={item} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-semibold text-neutral-950">
                  <span>{t(`faq.q${item}.q`)}</span>
                  <ChevronDown className="h-5 w-5 shrink-0 text-neutral-500 transition-transform group-open:rotate-180" />
                </summary>
                <p className="max-w-3xl pt-4 leading-7 text-neutral-600">{t(`faq.q${item}.a`)}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-red-600 py-16 text-white md:py-20">
        <div className="container-main flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase text-red-100">{t("cta.eyebrow")}</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">{t("cta.title")}</h2>
            <p className="mt-4 leading-7 text-red-50">{t("cta.desc")}</p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-white px-6 font-semibold text-red-700 transition-colors hover:bg-neutral-100">
              {t("cta.primary")}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/vehicles" className="inline-flex h-12 items-center justify-center rounded-md border border-white/50 px-6 font-semibold text-white transition-colors hover:bg-white/10">
              {t("cta.secondary")}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
