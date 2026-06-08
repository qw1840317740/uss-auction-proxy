"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n/routing";
import { Link } from "@/i18n/routing";
import { cn, formatDate } from "@/lib/utils";
import { demoPosts } from "@/lib/demo-blog";
import {
  ArrowLeft,
  Calendar,
  Tag,
  Share2,
  Clock,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

const categoryColors: Record<string, string> = {
  "Guide": "bg-blue-100 text-blue-700",
  "Buying Tips": "bg-green-100 text-green-700",
  "Shipping": "bg-purple-100 text-purple-700",
  "Market News": "bg-amber-100 text-amber-700",
};

export default function BlogPostPage() {
  const t = useTranslations("blog");
  const tc = useTranslations("common");
  const pathname = usePathname();
  const [shareLabel, setShareLabel] = useState(t("share"));

  // Extract slug from pathname (/zh/blog/xxx -> xxx)
  const slug = pathname.split("/blog/")[1]?.replace(/\/$/, "") || "";
  const post = demoPosts.find((p) => p.slug === slug) || demoPosts[0];

  // Related posts: other posts (not current), take up to 3
  const relatedPosts = demoPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const handleShare = async () => {
    const url = `${window.location.origin}${pathname}`;
    if (navigator.share) {
      try {
        await navigator.share({ title: post.title, url });
      } catch {
        // user cancelled
      }
    } else {
      await navigator.clipboard.writeText(url);
      setShareLabel(t("linkCopied"));
      setTimeout(() => setShareLabel(t("share")), 2000);
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-white">
      {/* Back Link */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {tc("back")}
        </Link>
      </div>

      {/* Article Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className={cn(
            "inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium",
            categoryColors[post.category] || "bg-gray-100 text-gray-600"
          )}>
            <Tag className="w-3 h-3" />
            {post.category}
          </span>
          <span className="text-sm text-gray-400 flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {t("publishedOn")} {formatDate(post.date)}
          </span>
          <span className="text-sm text-gray-400 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {post.readTime}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
          {post.title}
        </h1>

        {/* Share */}
        <div className="mt-4 flex items-center gap-2">
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm text-gray-500 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
          >
            <Share2 className="w-4 h-4" />
            {shareLabel}
          </button>
        </div>
      </div>

      {/* Cover Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full h-64 sm:h-80 rounded-xl overflow-hidden bg-gray-100">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Article Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <article className="prose prose-gray max-w-none prose-headings:font-semibold prose-h2:text-xl prose-h3:text-lg prose-a:text-primary">
          {(post.content || post.excerpt).split("\n\n").map((block, idx) => {
            const trimmed = block.trim();
            if (!trimmed) return null;

            if (trimmed.startsWith("## ")) {
              return (
                <h2 key={idx} className="text-xl font-semibold text-gray-900 mt-8 mb-3">
                  {trimmed.replace("## ", "")}
                </h2>
              );
            }
            if (trimmed.startsWith("### ")) {
              return (
                <h3 key={idx} className="text-lg font-semibold text-gray-800 mt-6 mb-2">
                  {trimmed.replace("### ", "")}
                </h3>
              );
            }
            if (trimmed.startsWith("- ")) {
              const items = trimmed.split("\n").filter((l) => l.trim().startsWith("- "));
              return (
                <ul key={idx} className="list-disc pl-5 space-y-1 my-3">
                  {items.map((item, i) => (
                    <li key={i} className="text-gray-600 text-sm leading-relaxed">
                      {item.replace("- ", "")}
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={idx} className="text-gray-600 text-sm leading-relaxed my-3">
                {trimmed}
              </p>
            );
          })}
        </article>
      </div>

      {/* Related Posts */}
      <div className="bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">{t("relatedPosts")}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedPosts.map((rp) => (
              <Link
                key={rp.slug}
                href={`/blog/${rp.slug}`}
                className="group bg-white rounded-xl border border-gray-100 p-4 hover:shadow-sm hover:border-gray-200 transition-all"
              >
                <span className={cn(
                  "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium mb-2",
                  categoryColors[rp.category] || "bg-gray-100 text-gray-600"
                )}>
                  {rp.category}
                </span>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors line-clamp-2">
                  {rp.title}
                </h3>
                <p className="text-sm text-gray-400 mt-1.5">{formatDate(rp.date)}</p>
                <div className="mt-3 flex items-center gap-1 text-sm font-medium text-primary">
                  {t("readMore")}
                  <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
