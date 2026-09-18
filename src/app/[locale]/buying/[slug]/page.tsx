import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "@/i18n/routing";
import { JsonLdBreadcrumb } from "@/components/seo/JsonLdBreadcrumb";
import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { buyingGuides, buyingGuideSlugs, type BuyingGuideLocale, type BuyingGuideSlug } from "@/lib/buying-guides";
import { buildCanonical, localizedHreflangLanguages, siteConfig } from "@/lib/seo";

const labels = {
  en: { home: "Home", buying: "Buying from Japan", check: "Before you proceed", related: "Continue planning", quote: "Discuss your vehicle", auction: "Auction sourcing service", export: "Export service", countries: "Import rules by destination" },
  zh: { home: "首页", buying: "从日本购车", check: "购买前须知", related: "继续规划", quote: "咨询车辆需求", auction: "拍卖寻车服务", export: "出口服务", countries: "目的国进口规则" },
  ja: { home: "ホーム", buying: "日本から購入", check: "購入前の確認", related: "次に確認すること", quote: "車両を相談する", auction: "オークション調達", export: "輸出サービス", countries: "仕向地の輸入規則" },
} as const;

function getGuide(locale: string, slug: string) {
  if (!buyingGuideSlugs.includes(slug as BuyingGuideSlug)) return null;
  const language = (["en", "zh", "ja"].includes(locale) ? locale : "en") as BuyingGuideLocale;
  return { content: buyingGuides[slug as BuyingGuideSlug][language], language };
}

export function generateStaticParams() {
  return ["en", "zh", "ja"].flatMap((locale) =>
    buyingGuideSlugs.map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const guide = getGuide(locale, slug);
  if (!guide) return { robots: { index: false } };
  const pathname = "/buying/" + slug;
  const url = buildCanonical(locale, pathname);
  return {
    title: guide.content.title + " | ClickCar",
    description: guide.content.description,
    alternates: {
      canonical: url,
      languages: localizedHreflangLanguages(locale, pathname),
    },
    openGraph: {
      title: guide.content.title,
      description: guide.content.description,
      url,
      type: "article",
      siteName: siteConfig.name,
    },
  };
}

export default async function BuyingGuidePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const guide = getGuide(locale, slug);
  if (!guide) notFound();
  const { content, language } = guide;
  const t = labels[language];
  const related = buyingGuideSlugs.filter((item) => item !== slug);

  return (
    <main className="bg-white text-neutral-900">
      <JsonLdBreadcrumb
        locale={locale}
        items={[
          { name: t.home, url: "/" },
          { name: t.buying, url: "/services/auction" },
          { name: content.title },
        ]}
      />
      <JsonLdScript data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [{
          "@type": "Question",
          name: content.question,
          acceptedAnswer: { "@type": "Answer", text: content.answer },
        }],
      }} />

      <header className="border-b border-neutral-200 bg-neutral-950 text-white">
        <div className="container-main py-14 md:py-20">
          <nav aria-label={t.buying} className="mb-8 text-sm text-neutral-300">
            <Link href="/" className="hover:text-white">{t.home}</Link>
            <span className="mx-2">/</span>
            <span>{t.buying}</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold leading-tight md:text-5xl">{content.title}</h1>
            <p className="mt-6 text-lg leading-8 text-neutral-200">{content.intro}</p>
            <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-md bg-red-600 px-5 py-3 font-semibold text-white hover:bg-red-500">
              {t.quote}<ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </header>

      <div className="container-main grid gap-12 py-12 lg:grid-cols-[minmax(0,1fr)_240px] lg:py-16">
        <article className="max-w-3xl">
          {content.sections.map((section, index) => (
            <section key={section.title} className="border-b border-neutral-200 py-8 first:pt-0 last:border-0">
              <div className="mb-4 flex items-start gap-4">
                <span className="mt-1 text-sm font-bold text-red-600">{String(index + 1).padStart(2, "0")}</span>
                <h2 className="text-2xl font-bold leading-tight">{section.title}</h2>
              </div>
              <p className="leading-8 text-neutral-700">{section.body}</p>
              <ul className="mt-5 space-y-3">
                {section.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-6 text-neutral-700">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-red-600" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
          <section className="border-t border-neutral-200 pt-8">
            <h2 className="text-xl font-bold">{content.question}</h2>
            <p className="mt-3 leading-8 text-neutral-700">{content.answer}</p>
          </section>
        </article>

        <aside className="h-fit border-t-2 border-red-600 pt-5 lg:sticky lg:top-24">
          <h2 className="font-bold">{t.related}</h2>
          <div className="mt-4 divide-y divide-neutral-200 border-y border-neutral-200">
            {related.map((item) => (
              <Link key={item} href={"/buying/" + item} className="flex items-start justify-between gap-3 py-4 text-sm font-medium hover:text-red-600">
                {buyingGuides[item][language].title}<ArrowRight className="h-4 w-4 shrink-0" />
              </Link>
            ))}
            <Link href="/services/auction" className="flex items-center justify-between gap-3 py-4 text-sm font-medium hover:text-red-600">{t.auction}<ArrowRight className="h-4 w-4" /></Link>
            <Link href="/services/export" className="flex items-center justify-between gap-3 py-4 text-sm font-medium hover:text-red-600">{t.export}<ArrowRight className="h-4 w-4" /></Link>
            <Link href="/export-guide" className="flex items-center justify-between gap-3 py-4 text-sm font-medium hover:text-red-600">{t.countries}<ArrowRight className="h-4 w-4" /></Link>
          </div>
        </aside>
      </div>

      <section className="border-t border-neutral-200 bg-neutral-50">
        <div className="container-main flex flex-col gap-5 py-12 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-neutral-700">{t.check}: {content.description}</p>
          <Link href="/contact" className="inline-flex shrink-0 items-center gap-2 font-semibold text-red-700 hover:underline">{t.quote}<ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </main>
  );
}
