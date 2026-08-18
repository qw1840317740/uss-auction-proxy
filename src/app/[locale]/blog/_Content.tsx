"use client";

import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { cn, formatDate } from "@/lib/utils";
import { demoPosts, getLocalized } from "@/lib/demo-blog";
import { Calendar, Tag, ArrowRight } from "lucide-react";
import Image from "next/image";

const categoryColors: Record<string, string> = {
  "Guide": "bg-red-50 text-red-700",
  "Buying Tips": "bg-green-100 text-green-700",
  "Shipping": "bg-purple-100 text-purple-700",
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

export default function BlogPage() {
  const t = useTranslations("blog");
  const locale = useLocale();

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50">
      {/* Hero */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">{t("title")}</h1>
          <p className="mt-3 text-lg text-gray-500 max-w-2xl mx-auto">{t("subtitle")}</p>
        </div>
      </div>

      {/* Posts Grid — sorted newest-first by publish date */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...demoPosts]
            .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))
            .map((post) => {
            const postTitle = getLocalized(post.title, locale);
            const postExcerpt = getLocalized(post.excerpt, locale);
            const postCategory = getLocalized(post.category, locale);
            const postReadTime = getLocalized(post.readTime, locale);

            return (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-gray-200 transition-all"
            >
              {/* Cover Image */}
              <div className="h-48 relative overflow-hidden bg-gray-100">
                <Image
                  src={post.image || "/images/blog/car-keys.jpg"}
                  alt={postTitle}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <span className={cn(
                  "absolute top-3 left-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium",
                  categoryColors[postCategory] || "bg-gray-100 text-gray-600"
                )}>
                  <Tag className="w-3 h-3" />
                  {postCategory}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-3 text-sm text-gray-400 mb-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {formatDate(post.date)}
                  </span>
                  <span>{postReadTime}</span>
                </div>

                <h2 className="text-base font-semibold text-gray-900 group-hover:text-primary transition-colors line-clamp-2">
                  {postTitle}
                </h2>
                <p className="mt-2 text-sm text-gray-500 line-clamp-2">{postExcerpt}</p>

                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                  {t("readMore")}
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
