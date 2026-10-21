import { NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import type { Metadata } from "next";
import { buildCanonical, getOgLocale, localizedHreflangLanguages } from "@/lib/seo";
import { getJpyPerUsd } from "@/lib/currency";
import { CurrencyProvider } from "@/components/providers/CurrencyProvider";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: buildCanonical(locale, ""),
      languages: localizedHreflangLanguages(locale, ""),
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: buildCanonical(locale, ""),
      locale: getOgLocale(locale),
    },
  };
}

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "zh" | "en" | "ja")) {
    notFound();
  }
  // Enables static rendering for every page under this layout (next-intl).
  setRequestLocale(locale);

  const messages = (await import(`../../messages/${locale}.json`)).default;
  const fx = await getJpyPerUsd();

  return (
    <html lang={locale} className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <CurrencyProvider fx={fx}>
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <Header locale={locale} />
          <main id="main-content" className="flex-1" tabIndex={-1}>
            {children}
          </main>
          <Footer />
          </CurrencyProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
