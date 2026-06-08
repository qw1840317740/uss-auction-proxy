"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { formatDate } from "@/lib/utils";
import { demoPosts } from "@/lib/demo-blog";
import { Calendar, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useScrollReveal, useStaggerReveal } from "@/lib/useScrollReveal";

const blogPosts = demoPosts.slice(0, 3);

const categoryColors: Record<string, string> = {
  Guide: "bg-blue-100 text-blue-700",
  "Buying Tips": "bg-green-100 text-green-700",
  Shipping: "bg-purple-100 text-purple-700",
  "Market News": "bg-amber-100 text-amber-700",
};

export function BlogSection() {
  const t = useTranslations("blog");
  const title = useScrollReveal();
  const { containerRef, isChildVisible } = useStaggerReveal(blogPosts.length, 30);

  return (
    <section className="py-24 bg-gray-50">
      <div className="container-main">
        <div
          ref={title.ref}
          className={`text-center mb-14 reveal reveal-blur ${title.isVisible ? "revealed" : ""}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {t("title")}
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className={`reveal-stagger group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-gray-200 transition-all ${isChildVisible(i) ? "revealed" : ""}`}
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              <div className="h-48 relative overflow-hidden bg-gray-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span
                  className={`absolute top-3 left-3 inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                    categoryColors[post.category] || "bg-gray-100 text-gray-600"
                  }`}
                >
                  {post.category}
                </span>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{formatDate(post.date)}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-base font-semibold text-gray-900 group-hover:text-primary transition-colors line-clamp-2 mb-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-2">{post.excerpt}</p>
                <div className="mt-3 flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                  {t("readMore")}
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
