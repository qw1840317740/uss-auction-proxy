"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { usePathname } from "@/i18n/routing";
import { Link } from "@/i18n/routing";
import { cn, formatDate } from "@/lib/utils";
import { demoPosts, getLocalized } from "@/lib/demo-blog";
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
  "市场资讯": "bg-amber-100 text-amber-700",
  "市場情報": "bg-amber-100 text-amber-700",
  "购车指南": "bg-blue-100 text-blue-700",
  "購入ガイド": "bg-blue-100 text-blue-700",
  "购车贴士": "bg-green-100 text-green-700",
  "購入のヒント": "bg-green-100 text-green-700",
  "物流运输": "bg-purple-100 text-purple-700",
  "物流・輸送": "bg-purple-100 text-purple-700",
  "JDM Culture": "bg-red-100 text-red-700",
  "JDM文化": "bg-red-100 text-red-700",
};

// Inline markdown renderer: **bold** and *italic*
function renderInline(text: string): React.ReactNode {
  const parts: React.ReactNode[] = [];
  // Split by **bold** first, then *italic* within each segment
  const boldRegex = /\*\*(.+?)\*\*/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let keyIdx = 0;

  while ((match = boldRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(renderItalic(text.slice(lastIndex, match.index), keyIdx++));
    }
    parts.push(<strong key={`b${keyIdx++}`} className="font-semibold text-gray-900">{renderItalic(match[1], keyIdx++)}</strong>);
    lastIndex = boldRegex.lastIndex;
  }
  if (lastIndex < text.length) {
    parts.push(renderItalic(text.slice(lastIndex), keyIdx++));
  }
  return parts.length === 1 ? parts[0] : <>{parts}</>;
}

function renderItalic(text: string, baseKey: number): React.ReactNode {
  const italicRegex = /\*(.+?)\*/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let idx = baseKey * 100;

  while ((match = italicRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(<em key={`i${idx++}`} className="italic">{match[1]}</em>);
    lastIndex = italicRegex.lastIndex;
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  return parts.length === 1 ? parts[0] : <>{parts}</>;
}

export default function BlogPostPage() {
  const t = useTranslations("blog");
  const tc = useTranslations("common");
  const locale = useLocale();
  const pathname = usePathname();
  const [shareLabel, setShareLabel] = useState(t("share"));

  // Extract slug from pathname (returns /blog/xxx without locale prefix)
  const slug = pathname.split("/blog/")[1]?.replace(/\/$/, "") || "";
  const post = demoPosts.find((p) => p.slug === slug) || demoPosts[0];

  // Localized fields
  const postTitle = getLocalized(post.title, locale);
  const postExcerpt = getLocalized(post.excerpt, locale);
  const postCategory = getLocalized(post.category, locale);
  const postReadTime = getLocalized(post.readTime, locale);
  const postContent = post.content ? getLocalized(post.content, locale) : postExcerpt;

  // Related posts: other posts (not current), take up to 3
  const relatedPosts = demoPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const handleShare = async () => {
    const url = `${window.location.origin}${pathname}`;
    if (navigator.share) {
      try {
        await navigator.share({ title: postTitle, url });
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
            categoryColors[postCategory] || "bg-gray-100 text-gray-600"
          )}>
            <Tag className="w-3 h-3" />
            {postCategory}
          </span>
          <span className="text-sm text-gray-400 flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {t("publishedOn")} {formatDate(post.date)}
          </span>
          <span className="text-sm text-gray-400 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {postReadTime}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
          {postTitle}
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
            alt={postTitle}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Article Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <article className="prose prose-gray max-w-none prose-headings:font-semibold prose-h2:text-xl prose-h3:text-lg prose-a:text-primary">
          {postContent.split("\n\n").map((block, idx) => {
            const trimmed = block.trim();
            if (!trimmed) return null;

            // H2 heading
            if (trimmed.startsWith("## ")) {
              return (
                <h2 key={idx} className="text-xl font-semibold text-gray-900 mt-10 mb-4 scroll-mt-20">
                  {renderInline(trimmed.replace("## ", ""))}
                </h2>
              );
            }
            // H3 heading
            if (trimmed.startsWith("### ")) {
              return (
                <h3 key={idx} className="text-lg font-semibold text-gray-800 mt-8 mb-3 scroll-mt-20">
                  {renderInline(trimmed.replace("### ", ""))}
                </h3>
              );
            }
            // Image: ![alt](url)
            const imgMatch = trimmed.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
            if (imgMatch) {
              return (
                <figure key={idx} className="my-8 -mx-4 sm:mx-0">
                  <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-gray-100">
                    <img
                      src={imgMatch[2]}
                      alt={imgMatch[1]}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  {imgMatch[1] && (
                    <figcaption className="text-center text-sm text-gray-400 mt-2">{imgMatch[1]}</figcaption>
                  )}
                </figure>
              );
            }
            // Table: lines starting with |
            if (trimmed.startsWith("|") && trimmed.includes("\n|")) {
              const rows = trimmed.split("\n").filter((l) => l.trim().startsWith("|"));
              if (rows.length >= 2) {
                // Skip separator row (|---|---|)
                const headerCells = rows[0].split("|").filter((c) => c.trim());
                const dataRows = rows.slice(1).filter((r) => !r.match(/^\|[\s\-:|]+\|$/));
                return (
                  <div key={idx} className="my-6 overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="border-b-2 border-gray-200">
                          {headerCells.map((cell, ci) => (
                            <th key={ci} className="px-3 py-2 text-left font-semibold text-gray-900 bg-gray-50">
                              {cell.trim()}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {dataRows.map((row, ri) => {
                          const cells = row.split("|").filter((c) => c.trim());
                          return (
                            <tr key={ri} className="border-b border-gray-100 hover:bg-gray-50">
                              {cells.map((cell, ci) => (
                                <td key={ci} className="px-3 py-2.5 text-gray-600">
                                  {renderInline(cell.trim())}
                                </td>
                              ))}
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                );
              }
            }
            // Unordered list
            if (trimmed.startsWith("- ")) {
              const items = trimmed.split("\n").filter((l) => l.trim().startsWith("- "));
              return (
                <ul key={idx} className="list-disc pl-5 space-y-2 my-4">
                  {items.map((item, i) => (
                    <li key={i} className="text-gray-600 leading-relaxed">
                      {renderInline(item.replace(/^-\s/, ""))}
                    </li>
                  ))}
                </ul>
              );
            }
            // Ordered list
            if (/^\d+\.\s/.test(trimmed)) {
              const items = trimmed.split("\n").filter((l) => /^\d+\.\s/.test(l.trim()));
              return (
                <ol key={idx} className="list-decimal pl-5 space-y-2 my-4">
                  {items.map((item, i) => (
                    <li key={i} className="text-gray-600 leading-relaxed">
                      {renderInline(item.replace(/^\d+\.\s/, ""))}
                    </li>
                  ))}
                </ol>
              );
            }
            // Custom HTML block (for enriched content like car entries, buying guide, FAQ)
            // Matches any block starting with an HTML tag (e.g. <div>, <table>) so that
            // inline style blocks and nested structures render as HTML instead of leaking.
            if (/^<(div|section|table|figure)\b/.test(trimmed)) {
              return (
                <div key={idx} className="jdm-block" dangerouslySetInnerHTML={{ __html: trimmed }} />
              );
            }
            // Tier divider: >>> Section Title
            if (trimmed.startsWith(">>> ")) {
              return (
                <div key={idx} className="flex items-center gap-4 pt-12 pb-4">
                  <h3 className="text-sm font-mono uppercase tracking-widest text-red-600 whitespace-nowrap">
                    {trimmed.replace(">>> ", "")}
                  </h3>
                  <div className="flex-1 h-px bg-gray-200" />
                </div>
              );
            }
            // Paragraph
            return (
              <p key={idx} className="text-gray-600 leading-relaxed my-4">
                {renderInline(trimmed)}
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
            {relatedPosts.map((rp) => {
              const rpTitle = getLocalized(rp.title, locale);
              const rpCategory = getLocalized(rp.category, locale);

              return (
              <Link
                key={rp.slug}
                href={`/blog/${rp.slug}`}
                className="group bg-white rounded-xl border border-gray-100 p-4 hover:shadow-sm hover:border-gray-200 transition-all"
              >
                <span className={cn(
                  "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium mb-2",
                  categoryColors[rpCategory] || "bg-gray-100 text-gray-600"
                )}>
                  {rpCategory}
                </span>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors line-clamp-2">
                  {rpTitle}
                </h3>
                <p className="text-sm text-gray-400 mt-1.5">{formatDate(rp.date)}</p>
                <div className="mt-3 flex items-center gap-1 text-sm font-medium text-primary">
                  {t("readMore")}
                  <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
