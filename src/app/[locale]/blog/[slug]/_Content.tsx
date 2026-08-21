"use client";

import { useMemo, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { usePathname } from "@/i18n/routing";
import { Link } from "@/i18n/routing";
import { GlassBreadcrumb } from "@/components/layout/GlassBreadcrumb";
import { cn, formatDate } from "@/lib/utils";
import { demoPosts, getLocalized } from "@/lib/demo-blog";
import {
  Calendar,
  Tag,
  Share2,
  Clock,
  ArrowRight,
  Copy,
  MessageCircle,
  Send,
} from "lucide-react";
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

const shareCopyByLocale = {
  en: {
    share: "Share article",
    native: "Share",
    facebook: "Facebook",
    x: "X",
    instagram: "Instagram",
    whatsapp: "WhatsApp",
    line: "LINE",
    copy: "Copy link",
    copied: "Link copied",
    instagramCopied: "Link copied for Instagram",
  },
  zh: {
    share: "分享文章",
    native: "分享",
    facebook: "Facebook",
    x: "X",
    instagram: "Instagram",
    whatsapp: "WhatsApp",
    line: "LINE",
    copy: "复制链接",
    copied: "链接已复制",
    instagramCopied: "已复制，可粘贴到 Instagram",
  },
  ja: {
    share: "記事を共有",
    native: "共有",
    facebook: "Facebook",
    x: "X",
    instagram: "Instagram",
    whatsapp: "WhatsApp",
    line: "LINE",
    copy: "リンクをコピー",
    copied: "リンクをコピーしました",
    instagramCopied: "Instagram用にリンクをコピーしました",
  },
} as const;

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

/**
 * Layout CSS for embedded articles. The original <style> tag is stripped by
 * extractEmbeddedArticleBody, so we re-inject a scoped copy here. All selectors
 * are namespaced under `.embedded-html-article` to avoid clashing with Tailwind
 * classes elsewhere on the page. CSS variables are scoped to the article root
 * so they don't leak globally.
 */
const EMBEDDED_HTML_CSS = `
.embedded-html-article {
  --red: #CC0000; --red-light: #fff0f0;
  --amber: #D97706; --amber-light: #FFFBEB;
  --green: #15803D; --green-light: #F0FDF4;
  --blue: #1D4ED8; --blue-light: #EFF6FF;
  --black: #111111; --ink: #1c1c1c;
  --gray-700: #444; --gray-500: #888; --gray-100: #f5f5f5;
  --white: #ffffff; --rule: #e0e0e0;
  --serif: 'Playfair Display', Georgia, serif;
  --sans: 'Inter', system-ui, sans-serif;
  --mono: 'DM Mono', monospace;
  --max: 780px;
  color: var(--gray-700);
  font-family: var(--sans);
  font-weight: 300;
  line-height: 1.7;
}
.embedded-html-article .section { padding: 2.75rem 0; border-bottom: 1px solid var(--rule); }
.embedded-html-article .section:last-of-type { border-bottom: none; }
.embedded-html-article .section-label { font-family: var(--mono); font-size: 10px; letter-spacing: .2em; text-transform: uppercase; color: var(--gray-500); margin-bottom: 1rem; }
.embedded-html-article .section-label::before { content: '— '; color: var(--red); }
.embedded-html-article h2 { font-family: var(--serif); font-size: 1.6rem; font-weight: 400; color: var(--black); margin: 1.6rem 0 1.1rem; line-height: 1.3; }
.embedded-html-article h3 { font-size: 15px; font-weight: 500; color: var(--black); margin-bottom: .45rem; margin-top: 1.4rem; }
.embedded-html-article h3:first-child { margin-top: 0; }
.embedded-html-article p { font-size: 15px; line-height: 1.8; color: var(--gray-700); margin-bottom: .9rem; font-weight: 300; }
.embedded-html-article p:last-child { margin-bottom: 0; }
.embedded-html-article strong.key { color: var(--black); font-weight: 500; }
.embedded-html-article .article-body { max-width: var(--max); margin: 0 auto; padding: 0; }

/* TIMELINE */
.embedded-html-article .timeline { position: relative; margin: 1.5rem 0; padding-left: 1.75rem; }
.embedded-html-article .timeline::before { content: ''; position: absolute; left: 7px; top: 8px; bottom: 8px; width: 1px; background: var(--rule); }
.embedded-html-article .tl-item { position: relative; margin-bottom: 1.5rem; }
.embedded-html-article .tl-item:last-child { margin-bottom: 0; }
.embedded-html-article .tl-dot { position: absolute; left: -1.75rem; top: 4px; width: 15px; height: 15px; border-radius: 50%; background: var(--white); border: 2px solid var(--red); display: flex; align-items: center; justify-content: center; }
.embedded-html-article .tl-dot-inner { width: 5px; height: 5px; border-radius: 50%; background: var(--red); }
.embedded-html-article .tl-week { font-family: var(--mono); font-size: 10px; letter-spacing: .1em; color: var(--red); text-transform: uppercase; margin-bottom: 3px; }
.embedded-html-article .tl-title { font-size: 14px; font-weight: 500; color: var(--black); margin-bottom: 3px; }
.embedded-html-article .tl-desc { font-size: 13px; color: var(--gray-500); line-height: 1.55; font-weight: 300; }

/* DOC CHECKLIST */
.embedded-html-article .doc-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: var(--rule); border: 1px solid var(--rule); margin: 1.5rem 0; }
.embedded-html-article .doc-col { background: var(--white); }
.embedded-html-article .doc-header { background: var(--black); color: var(--white); font-family: var(--mono); font-size: 10px; letter-spacing: .14em; text-transform: uppercase; padding: .65rem 1rem; }
.embedded-html-article .doc-item { display: flex; gap: 10px; align-items: flex-start; padding: .65rem 1rem; border-bottom: 1px solid var(--rule); font-size: 13px; }
.embedded-html-article .doc-item:last-child { border-bottom: none; }
.embedded-html-article .doc-icon { flex-shrink: 0; width: 16px; height: 16px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-top: 1px; }
.embedded-html-article .doc-icon-red { background: var(--red); }
.embedded-html-article .doc-icon-blue { background: #2563EB; }
.embedded-html-article .doc-icon svg { width: 8px; height: 8px; }
.embedded-html-article .doc-name { color: var(--black); font-weight: 400; line-height: 1.4; }
.embedded-html-article .doc-note { font-size: 11.5px; color: var(--gray-500); display: block; margin-top: 1px; font-weight: 300; }

/* SHIPPING COMPARE */
.embedded-html-article .ship-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: var(--rule); border: 1px solid var(--rule); margin: 1.5rem 0; }
.embedded-html-article .ship-col { background: var(--white); padding: 1.25rem; }
.embedded-html-article .ship-header { font-size: 13px; font-weight: 500; color: var(--black); margin-bottom: .75rem; padding-bottom: .65rem; border-bottom: 1px solid var(--rule); display: flex; justify-content: space-between; align-items: center; }
.embedded-html-article .ship-tag { font-family: var(--mono); font-size: 10px; padding: 2px 8px; border-radius: 2px; }
.embedded-html-article .t-cheap { background: var(--green-light); color: var(--green); }
.embedded-html-article .t-safe { background: var(--blue-light); color: var(--blue); }
.embedded-html-article .ship-row { display: flex; justify-content: space-between; padding: .4rem 0; border-bottom: .5px solid var(--rule); font-size: 13px; }
.embedded-html-article .ship-row:last-child { border-bottom: none; }
.embedded-html-article .ship-label { color: var(--gray-500); font-weight: 300; }
.embedded-html-article .ship-val { color: var(--black); font-weight: 400; text-align: right; }

/* DUTY TABLE */
.embedded-html-article .duty-table { width: 100%; border-collapse: collapse; font-size: 13px; margin: 1.5rem 0; }
.embedded-html-article .duty-table thead tr { border-bottom: 2px solid var(--black); }
.embedded-html-article .duty-table th { font-family: var(--mono); font-size: 10px; letter-spacing: .1em; text-transform: uppercase; padding: 8px 10px; color: var(--gray-500); font-weight: 400; text-align: left; }
.embedded-html-article .duty-table tbody tr { border-bottom: 1px solid var(--rule); }
.embedded-html-article .duty-table tbody tr:last-child { border-bottom: none; }
.embedded-html-article .duty-table td { padding: 10px 10px; color: var(--gray-700); vertical-align: top; }
.embedded-html-article .duty-table td:first-child { font-weight: 500; color: var(--black); }
.embedded-html-article .duty-table td:nth-child(2) { font-family: var(--mono); font-size: 12px; color: var(--red); }
.embedded-html-article .age-badge { display: inline-block; font-family: var(--mono); font-size: 10px; padding: 2px 6px; border-radius: 2px; background: var(--gray-100); color: var(--gray-500); }

/* CALLOUTS */
.embedded-html-article .callout { border-left: 2px solid var(--green); padding: .85rem 1.1rem; margin: 1.5rem 0; background: var(--green-light); border-radius: 0; }
.embedded-html-article .callout p { font-size: 14px; color: #166534; margin: 0; }
.embedded-html-article .callout strong { font-weight: 500; }
.embedded-html-article .callout-amber { border-left-color: var(--amber); background: var(--amber-light); }
.embedded-html-article .callout-amber p { color: #92400E; }
.embedded-html-article .callout-red { border-left-color: var(--red); background: var(--red-light); }
.embedded-html-article .callout-red p { color: #7F1D1D; }
.embedded-html-article .callout-blue { border-left-color: var(--blue); background: var(--blue-light); }
.embedded-html-article .callout-blue p { color: #1E3A8A; }

/* COST BREAKDOWN */
.embedded-html-article .cost-list { margin: 1rem 0; }
.embedded-html-article .cost-row { display: flex; align-items: center; justify-content: space-between; padding: .65rem 0; border-bottom: 1px solid var(--rule); font-size: 14px; }
.embedded-html-article .cost-row:last-child { border-bottom: none; font-weight: 500; color: var(--black); border-top: 2px solid var(--black); padding-top: .85rem; margin-top: .25rem; }
.embedded-html-article .cost-label { color: var(--gray-700); }
.embedded-html-article .cost-val { font-family: var(--mono); color: var(--black); }
.embedded-html-article .cost-note { font-size: 11px; color: var(--gray-500); margin-left: 8px; font-weight: 300; }

/* CTA section is stripped before injection, no styles needed */

/* IMAGES */
.embedded-html-article .article-img { width: 100%; display: block; margin: 1.75rem 0; }
.embedded-html-article .article-img img { width: 100%; height: 320px; object-fit: cover; display: block; }
.embedded-html-article .article-img figcaption { font-family: var(--mono); font-size: 11px; color: var(--gray-500); letter-spacing: .05em; padding: .55rem 0 0; border-top: 1px solid var(--rule); margin-top: 0; }
.embedded-html-article .img-2col { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: var(--rule); margin: 1.75rem 0; }
.embedded-html-article .img-2col figure { margin: 0; background: var(--white); }
.embedded-html-article .img-2col img { width: 100%; height: 220px; object-fit: cover; display: block; }
.embedded-html-article .img-2col figcaption { font-family: var(--mono); font-size: 11px; color: var(--gray-500); letter-spacing: .04em; padding: .45rem .65rem; }

@media (max-width: 500px) {
  .embedded-html-article .img-2col { grid-template-columns: 1fr; }
  .embedded-html-article .article-img img { height: 220px; }
}
@media (max-width: 600px) {
  .embedded-html-article .doc-grid,
  .embedded-html-article .ship-grid { grid-template-columns: 1fr; }
}
`;

function extractEmbeddedArticleBody(html: string): string {
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const body = bodyMatch?.[1] ?? html;

  let cleaned = body
    .replace(/<script\b[\s\S]*?<\/script>/gi, "")
    .replace(/<style\b[\s\S]*?<\/style>/gi, "")
    .replace(/<link\b[^>]*>/gi, "")
    .replace(/<meta\b[^>]*>/gi, "")
    .replace(/<title\b[\s\S]*?<\/title>/gi, "")
    // Strip <header> and <footer> — the blog template already renders site chrome.
    .replace(/<header\b[\s\S]*?<\/header>/gi, "")
    .replace(/<footer\b[\s\S]*?<\/footer>/gi, "");

  // Strip the hero block — blog template renders its own H1, byline, share panel.
  cleaned = stripBalancedBlock(cleaned, /<div\b[^>]*class="hero"[^>]*>/);
  // Strip the final CTA section — blog template renders a CTA / Related Posts block.
  cleaned = stripBalancedBlock(cleaned, /<div\b[^>]*class="cta-section"[^>]*>/);

  return cleaned;
}

/**
 * Find `startRegex` inside `html` and remove the entire matched block (including
 * properly-balanced nested <div> and <section> tags) by counting opens/closes.
 * Leaves the surrounding markup intact.
 */
function stripBalancedBlock(html: string, startRegex: RegExp): string {
  const openMatch = startRegex.exec(html);
  if (!openMatch) return html;
  const start = openMatch.index;
  // `startRegex` matches up to and including the open tag (e.g. "<div ...>"). Skip
  // past it so the open regex below does not immediately match it again.
  const skipTo = html.indexOf(">", start) + 1;
  // Count subsequent open/close pairs of div|section (avoid `<divider>` false
  // positives).
  const openRe = /<(div|section)(?:\s|>)/g;
  const closeRe = /<\/(div|section)>/g;
  let depth = 1;
  let pos = skipTo;
  while (pos < html.length && depth > 0) {
    openRe.lastIndex = pos;
    closeRe.lastIndex = pos;
    const open = openRe.exec(html);
    const close = closeRe.exec(html);
    if (!open && !close) break;
    if (open && (!close || open.index < close.index)) {
      depth++;
      pos = open.index + open[0].length;
    } else if (close) {
      depth--;
      pos = close.index + close[0].length;
      if (depth === 0) {
        let end = pos;
        while (end < html.length && /\s/.test(html[end])) end++;
        return html.slice(0, start) + html.slice(end);
      }
    } else {
      break;
    }
  }
  return html;
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
  const embeddedArticleBody = useMemo(
    () => (post.embedHtml ? extractEmbeddedArticleBody(postContent) : ""),
    [post.embedHtml, postContent]
  );
  // Scoped CSS from the source HTML (tables, callouts, FAQ blocks etc.). The base
  // EMBEDDED_HTML_CSS handles shared layout; guideStyles adds the post-specific
  // styling already scoped to the guide's wrapper class by the generator.
  const postGuideStyles = useMemo(
    () => (post.guideStyles ? getLocalized(post.guideStyles, locale) : ""),
    [post.guideStyles, locale]
  );

  // Related posts: other posts (not current), take up to 3
  const relatedPosts = demoPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const shareCopy =
    shareCopyByLocale[locale as keyof typeof shareCopyByLocale] ?? shareCopyByLocale.en;
  const localizedPathname =
    pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
      ? pathname
      : `/${locale}${pathname.startsWith("/") ? pathname : `/${pathname}`}`;
  const shareUrl = `https://clickcar.jp${localizedPathname}`;
  const encodedShareUrl = encodeURIComponent(shareUrl);
  const encodedShareText = encodeURIComponent(postTitle);
  const encodedMessage = encodeURIComponent(`${postTitle} ${shareUrl}`);
  const shareIconClass =
    "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition hover:-translate-y-0.5 hover:border-red-200 hover:bg-red-50 hover:text-red-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-red-500/30";

  const updateShareLabel = (label: string) => {
    setShareLabel(label);
    window.setTimeout(() => setShareLabel(t("share")), 2000);
  };

  const copyShareUrl = async (label: string = shareCopy.copied) => {
    try {
      await navigator.clipboard.writeText(shareUrl);
    } catch {
      // Some in-app browsers block clipboard access; keep the UI response calm.
    }
    updateShareLabel(label);
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: postTitle, text: postExcerpt, url: shareUrl });
        return;
      } catch (error) {
        if ((error as Error).name === "AbortError") return;
        // user cancelled
      }
    }
    await copyShareUrl();
  };

  const handleInstagramShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: postTitle, text: postExcerpt, url: shareUrl });
        return;
      } catch (error) {
        if ((error as Error).name === "AbortError") return;
      }
    }
    await copyShareUrl(shareCopy.instagramCopied);
  };

  const renderSharePanel = () => {
    return (
      <div className="mt-5 rounded-2xl border border-gray-200/80 bg-white/90 p-3 shadow-[0_18px_45px_rgba(17,24,39,0.08)] backdrop-blur">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex min-w-0 items-center gap-3">
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-950 text-white shadow-sm">
              <Share2 className="h-4 w-4" />
            </span>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-gray-950">{shareCopy.share}</p>
              <p className="truncate text-xs text-gray-500">{shareLabel}</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={handleNativeShare}
              className={shareIconClass}
              aria-label={shareCopy.native}
              title={shareCopy.native}
            >
              <Send className="h-4 w-4" />
            </button>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodedShareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className={shareIconClass}
              aria-label={shareCopy.facebook}
              title={shareCopy.facebook}
            >
              <span className="text-base font-bold leading-none">f</span>
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodedShareUrl}&text=${encodedShareText}`}
              target="_blank"
              rel="noopener noreferrer"
              className={shareIconClass}
              aria-label={shareCopy.x}
              title={shareCopy.x}
            >
              <span className="text-sm font-semibold leading-none">X</span>
            </a>
            <button
              type="button"
              onClick={handleInstagramShare}
              className={shareIconClass}
              aria-label={shareCopy.instagram}
              title={shareCopy.instagram}
            >
              <span className="text-[11px] font-black uppercase leading-none tracking-tight">IG</span>
            </button>
            <a
              href={`https://api.whatsapp.com/send?text=${encodedMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className={shareIconClass}
              aria-label={shareCopy.whatsapp}
              title={shareCopy.whatsapp}
            >
              <MessageCircle className="h-4 w-4" />
            </a>
            <a
              href={`https://social-plugins.line.me/lineit/share?url=${encodedShareUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className={shareIconClass}
              aria-label={shareCopy.line}
              title={shareCopy.line}
            >
              <span className="text-[10px] font-black uppercase leading-none tracking-tight">LINE</span>
            </a>
            <button
              type="button"
              onClick={() => copyShareUrl()}
              className={shareIconClass}
              aria-label={shareCopy.copy}
              title={shareCopy.copy}
            >
              <Copy className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <GlassBreadcrumb backHref="/blog" backLabel={tc("back")} current={t("title")} />
      </div>

      {/* Article Header — always rendered so embedHtml posts still get H1, share panel */}
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

        {renderSharePanel()}
      </div>

      {/* Cover Image — only on non-embedHtml posts (embedHtml posts carry their own imagery) */}
      {!post.embedHtml && (
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
      )}

      {/* Article Body */}
      <div className={cn(
        "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",
        post.embedHtml ? "pt-6 pb-10" : "py-10"
      )}>
        {post.embedHtml ? (
          <>
            {/* Scoped CSS for embedded articles (e.g. japan-export-guide).
                Original <style> tags are stripped by extractEmbeddedArticleBody, so we
                re-inject the layout classes here, scoped under .embedded-html-article
                to avoid clashing with Tailwind on the rest of the page. */}
            <style dangerouslySetInnerHTML={{ __html: EMBEDDED_HTML_CSS }} />
            {postGuideStyles && (
              <style dangerouslySetInnerHTML={{ __html: postGuideStyles }} />
            )}
            <article
              className="embedded-html-article"
              dangerouslySetInnerHTML={{ __html: embeddedArticleBody }}
            />
          </>
        ) : (
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
                    <Image
                      src={imgMatch[2]}
                      alt={imgMatch[1]}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 768px"
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
        )}
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
