"use client";

import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { formatDate } from "@/lib/utils";
import { demoPosts, getLocalized } from "@/lib/demo-blog";
import { Calendar, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useScrollReveal, useStaggerReveal } from "@/lib/useScrollReveal";

const blogPosts = demoPosts.slice(0, 3);

const categoryColors: Record<string, string> = {
  Guide: "bg-red-50 text-red-700",
  "Buying Tips": "bg-green-100 text-green-700",
  Shipping: "bg-purple-100 text-purple-700",
  "Market News": "bg-amber-100 text-amber-700",
  "市场资讯": "bg-amber-100 text-amber-700",
  "市場情報": "bg-amber-100 text-amber-700",
  "购车指南": "bg-red-50 text-red-700",
  "購入ガイド": "bg-red-50 text-red-700",
  "购车贴士": "bg-green-100 text-green-700",
  "購入のヒント": "bg-green-100 text-green-700",
  "物流运输": "bg-purple-100 text-purple-700",
  "物流・輸送": "bg-purple-100 text-purple-700",
  "JDM Culture": "bg-red-100 text-red-700",
  "JDM文化": "bg-red-100 text-red-700",
};

export function BlogSection() {
  const t = useTranslations("blog");
  const locale = useLocale();
  const title = useScrollReveal();
  const { containerRef, isChildVisible } = useStaggerReveal(blogPosts.length, 30);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-main">
        <div
          ref={title.ref}
          className={`text-center mb-10 reveal reveal-blur ${title.isVisible ? "revealed" : ""}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {t("title")}
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => {
            const postTitle = getLocalized(post.title, locale);
            const postExcerpt = getLocalized(post.excerpt, locale);
            const postCategory = getLocalized(post.category, locale);
            const postReadTime = getLocalized(post.readTime, locale);

            return (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={`reveal-stagger group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-md hover:shadow-xl hover:border-gray-300 transition-all ${isChildVisible(i) ? "revealed" : ""}`}
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              <div className="h-48 relative overflow-hidden bg-gray-100">
                <Image
                  src={post.image}
                  alt={postTitle}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span
                  className={`absolute top-3 left-3 inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                    categoryColors[postCategory] || "bg-gray-100 text-gray-600"
                  }`}
                >
                  {postCategory}
                </span>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{formatDate(post.date)}</span>
                  <span>·</span>
                  <span>{postReadTime}</span>
                </div>
                <h3 className="text-base font-semibold text-gray-900 group-hover:text-primary transition-colors line-clamp-2 mb-2">
                  {postTitle}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-2">{postExcerpt}</p>
                <div className="mt-3 flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                  {t("readMore")}
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
