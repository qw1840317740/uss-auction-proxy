import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { JsonLdBreadcrumb } from "@/components/seo/JsonLdBreadcrumb";
import { demoPosts, getLocalized } from "@/lib/demo-blog";
import Page from "./_Content";

const BASE_URL = "https://uss-auction-proxy.vercel.app";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = demoPosts.find((p) => p.slug === slug);

  // Use actual article data if available, fallback to generic
  const title = post ? getLocalized(post.title, locale) : "Velocity JAPAN Blog";
  const description = post
    ? getLocalized(post.excerpt, locale)
    : "Latest news and insights about Japanese used car exports.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: `${BASE_URL}/${locale}/blog/${slug}`,
      ...(post?.image ? { images: [{ url: post.image, width: 1200, height: 630 }] } : {}),
      publishedTime: post?.date,
    },
    alternates: {
      canonical: `${BASE_URL}/${locale}/blog/${slug}`,
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, `${BASE_URL}/${l}/blog/${slug}`])
      ),
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const tBlog = await getTranslations({ locale, namespace: "blog" });
  const post = demoPosts.find((p) => p.slug === slug);

  const articleTitle = post ? getLocalized(post.title, locale) : tBlog("title");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: articleTitle,
    description: post ? getLocalized(post.excerpt, locale) : "",
    image: post?.image ?? "",
    datePublished: post?.date ?? "2026-01-01",
    dateModified: post?.date ?? "2026-01-01",
    author: {
      "@type": "Organization",
      name: "Velocity JAPAN",
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Velocity JAPAN",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/images/brands/toyota.svg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/${locale}/blog/${slug}`,
    },
  };

  return (
    <>
      <JsonLdBreadcrumb
        items={[
          { name: tBlog("title"), url: "/blog" },
          { name: articleTitle },
        ]}
        locale={locale}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Page />
    </>
  );
}
