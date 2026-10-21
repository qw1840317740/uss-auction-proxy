"use client";

import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { formatDate } from "@/lib/utils";
import { demoPosts, getLocalized } from "@/lib/demo-blog";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { SectionHead } from "./SectionHead";

// Sort newest-first by publish date, then take the first 3.
const blogPosts = [...demoPosts]
  .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))
  .slice(0, 3);

export function BlogSection() {
  const t = useTranslations("home.blog");
  const blogT = useTranslations("blog");
  const nav = useTranslations("nav");
  const locale = useLocale();

  return (
    <section className="border-b border-rule py-16 md:py-24">
      <div className="container-main">
        <SectionHead
          label={nav("guides")}
          title={t("title")}
          lede={t("subtitle")}
          action={
            <Link href="/blog" className="cc-btn cc-btn--line">
              {nav("blog")}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          }
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {blogPosts.map((post) => {
            const postTitle = getLocalized(post.title, locale);
            const postExcerpt = getLocalized(post.excerpt, locale);
            const postCategory = getLocalized(post.category, locale);
            const postReadTime = getLocalized(post.readTime, locale);

            return (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="cc-card group flex min-w-0 flex-col overflow-hidden">
                <div className="relative aspect-[16/9] overflow-hidden bg-paper-2">
                  <Image
                    src={post.image}
                    alt={postTitle}
                    fill
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="cc-label flex flex-wrap gap-x-2">
                    <span className="text-signal">{postCategory}</span>
                    <span aria-hidden="true">/</span>
                    <span>{formatDate(post.date)}</span>
                    <span aria-hidden="true">/</span>
                    <span>{postReadTime}</span>
                  </p>
                  <h3 className="mt-3 line-clamp-2 text-base font-semibold leading-snug tracking-[-0.01em] text-ink">{postTitle}</h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-ink-2">{postExcerpt}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-medium text-ink">
                    <span className="cc-link">{blogT("readMore")}</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
