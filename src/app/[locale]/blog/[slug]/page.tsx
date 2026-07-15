import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { JsonLdBreadcrumb } from "@/components/seo/JsonLdBreadcrumb";
import { JsonLdScript } from "@/components/seo/JsonLdScript";
import { demoPosts, getLocalized } from "@/lib/demo-blog";
import { siteConfig, buildCanonical, getAbsoluteMediaUrl, localizedHreflangLanguages } from "@/lib/seo";
import { notFound } from "next/navigation";
import Page from "./_Content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = demoPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: `${siteConfig.name} Blog`,
      robots: { index: false, follow: false },
    };
  }

  const title = getLocalized(post.title, locale);
  const description = getLocalized(post.excerpt, locale);
  const image = post.image ? getAbsoluteMediaUrl(post.image) : getAbsoluteMediaUrl(siteConfig.logo);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: buildCanonical(locale, `/blog/${slug}`),
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: [siteConfig.name],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
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

  if (!post) {
    notFound();
  }

  const articleTitle = getLocalized(post.title, locale);
  const articleExcerpt = getLocalized(post.excerpt, locale);
  const articleSection = getLocalized(post.category, locale);
  const postUrl = buildCanonical(locale, `/blog/${slug}`);
  const postDate = post.date;
  const postImage = post.image ? getAbsoluteMediaUrl(post.image) : getAbsoluteMediaUrl(siteConfig.logo);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${postUrl}#article`,
    headline: articleTitle,
    description: articleExcerpt,
    image: [postImage],
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
