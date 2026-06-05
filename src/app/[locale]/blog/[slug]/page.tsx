"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { cn, formatDate } from "@/lib/utils";
import {
  ArrowLeft,
  Calendar,
  Tag,
  Share2,
  Clock,
  ArrowRight,
  ImageIcon,
} from "lucide-react";
import Image from "next/image";

const postContent = {
  title: "Complete Guide to Buying Japanese Used Cars in 2025",
  category: "Guide",
  date: "2025-05-20",
  readTime: "8 min read",
  content: `
## Why Buy Japanese Used Cars?

Japan is home to some of the world's most reliable and well-maintained used vehicles. With strict inspection standards, low mileage averages, and a culture of meticulous vehicle care, Japanese used cars offer exceptional value for buyers worldwide.

Whether you're a dealer looking to expand your inventory or an individual seeking a quality vehicle, Japan's used car market provides unmatched selection and quality.

## How the Process Works

### 1. Vehicle Selection
Browse our curated inventory of premium Japanese used vehicles. Each listing includes detailed specifications, condition reports, and transparent pricing to help you make an informed decision.

### 2. Inspection Reports
Every vehicle comes with a comprehensive condition report that grades the exterior, interior, and mechanical condition. Understanding these reports is crucial for making informed purchase decisions.

### 3. Purchase & Payment
Once you've found your ideal vehicle, confirm the order and complete payment via bank wire transfer. We ensure a secure and transparent transaction process.

### 4. Export & Delivery
After payment, we handle all export documentation, vehicle preparation, and shipping arrangements to deliver your vehicle safely to your nearest port.

## Tips for First-Time Buyers

- Start with a clear budget that includes all fees and shipping costs
- Study vehicle condition reports carefully before purchasing
- Consider the total landed cost, not just the vehicle price
- Choose vehicles with comprehensive service history
- Work with an established exporter with transparent pricing

## Common Mistakes to Avoid

Many first-time buyers focus only on the vehicle price without accounting for additional costs like transport, export processing, shipping, and insurance. Always request a complete cost breakdown before confirming your purchase.
  `,
  relatedPosts: [
    {
      slug: "understanding-vehicle-inspection",
      title: "Understanding Japanese Vehicle Inspection Reports",
      category: "Guide",
      date: "2025-05-15",
    },
    {
      slug: "top-japanese-used-cars-2025",
      title: "Top 10 Japanese Used Cars to Buy in 2025",
      category: "Buying Tips",
      date: "2025-05-18",
    },
    {
      slug: "market-trends-may-2025",
      title: "Japanese Used Car Market Trends — May 2025",
      category: "Market News",
      date: "2025-05-05",
    },
  ],
};

const categoryColors: Record<string, string> = {
  "Guide": "bg-blue-100 text-blue-700",
  "Buying Tips": "bg-green-100 text-green-700",
  "Shipping": "bg-purple-100 text-purple-700",
  "Market News": "bg-amber-100 text-amber-700",
};

export default function BlogPostPage() {
  const t = useTranslations("blog");
  const tc = useTranslations("common");

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
            categoryColors[postContent.category] || "bg-gray-100 text-gray-600"
          )}>
            <Tag className="w-3 h-3" />
            {postContent.category}
          </span>
          <span className="text-sm text-gray-400 flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {t("publishedOn")} {formatDate(postContent.date)}
          </span>
          <span className="text-sm text-gray-400 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {postContent.readTime}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
          {postContent.title}
        </h1>

        {/* Share */}
        <div className="mt-4 flex items-center gap-2">
          <button className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm text-gray-500 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors">
            <Share2 className="w-4 h-4" />
            {t("share")}
          </button>
        </div>
      </div>

      {/* Cover Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full h-64 sm:h-80 rounded-xl overflow-hidden bg-gray-100">
          <Image
            src="/images/blog/highway-driving.jpg"
            alt={postContent.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Article Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <article className="prose prose-gray max-w-none prose-headings:font-semibold prose-h2:text-xl prose-h3:text-lg prose-a:text-primary">
          {postContent.content.split("\n\n").map((block, idx) => {
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
            {postContent.relatedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-xl border border-gray-100 p-4 hover:shadow-sm hover:border-gray-200 transition-all"
              >
                <span className={cn(
                  "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium mb-2",
                  categoryColors[post.category] || "bg-gray-100 text-gray-600"
                )}>
                  {post.category}
                </span>
                <h3 className="text-sm font-semibold text-gray-900 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-400 mt-1.5">{formatDate(post.date)}</p>
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
