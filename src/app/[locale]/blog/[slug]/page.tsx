import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { JsonLdBreadcrumb } from "@/components/seo/JsonLdBreadcrumb";
import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { demoPosts, getLocalized } from "@/lib/demo-blog";
import { siteConfig, buildCanonical, localizedHreflangLanguages } from "@/lib/seo";
import Page from "./_Content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = demoPosts.find((p) => p.slug === slug);

  const title = post ? getLocalized(post.title, locale) : `${siteConfig.name} Blog`;
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
      url: buildCanonical(locale, `/blog/${slug}`),
      ...(post?.image ? { images: [{ url: post.image, width: 1200, height: 630 }] } : {}),
      publishedTime: post?.date,
    },
    alternates: {
      canonical: buildCanonical(locale, `/blog/${slug}`),
      languages: localizedHreflangLanguages(locale, `/blog/${slug}`),
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
  const articleExcerpt = post ? getLocalized(post.excerpt, locale) : "";
  const articleSection = post ? getLocalized(post.category, locale) : tBlog("title");
  const postUrl = buildCanonical(locale, `/blog/${slug}`);
  const postDate = post?.date ?? "2026-01-01";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${postUrl}#article`,
    headline: articleTitle,
    description: articleExcerpt,
    image: post?.image ?? `${siteConfig.baseUrl}${siteConfig.logo}`,
    articleSection,
    inLanguage: locale,
    datePublished: postDate,
    dateModified: postDate,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.baseUrl,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${siteConfig.baseUrl}#organization`,
      name: siteConfig.legalName,
      url: siteConfig.baseUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.baseUrl}${siteConfig.logo}`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
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
      <JsonLdScript data={jsonLd} />
      <Page />
    </>
  );
}