"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { cn, formatDate } from "@/lib/utils";
import { Calendar, Tag, ArrowRight } from "lucide-react";
import Image from "next/image";

const demoPosts = [
  {
    slug: "buying-guide-2025",
    title: "Complete Guide to Buying Japanese Used Cars in 2025",
    excerpt: "Everything you need to know about purchasing and importing quality Japanese used vehicles, from selection to delivery.",
    category: "Guide",
    date: "2025-05-20",
    readTime: "8 min read",
    color: "bg-blue-500",
    image: "/images/blog/office-business.jpg",
  },
  {
    slug: "top-japanese-used-cars-2025",
    title: "Top 10 Japanese Used Cars to Buy in 2025",
    excerpt: "Our experts pick the best value Japanese used cars available for purchase this year.",
    category: "Buying Tips",
    date: "2025-05-18",
    readTime: "6 min read",
    color: "bg-green-500",
    image: "/images/blog/car-keys.jpg",
  },
  {
    slug: "understanding-vehicle-inspection",
    title: "Understanding Japanese Vehicle Inspection Reports",
    excerpt: "Learn how to read and interpret Japanese vehicle inspection reports like a professional buyer.",
    category: "Guide",
    date: "2025-05-15",
    readTime: "10 min read",
    color: "bg-blue-500",
    image: "/images/blog/car-keys.jpg",
  },
  {
    slug: "shipping-to-africa-guide",
    title: "Shipping Japanese Used Cars to Africa: Complete Guide",
    excerpt: "Detailed guide covering ports, shipping lines, transit times, and import regulations for African destinations.",
    category: "Shipping",
    date: "2025-05-12",
    readTime: "7 min read",
    color: "bg-purple-500",
    image: "/images/blog/city-road.jpg",
  },
  {
    slug: "toyota-hiace-buying-guide",
    title: "Toyota HiAce Buying Guide: What to Look For",
    excerpt: "The Toyota HiAce remains one of the most popular exports. Here's what to check before buying.",
    category: "Buying Tips",
    date: "2025-05-08",
    readTime: "5 min read",
    color: "bg-green-500",
    image: "/images/blog/ev-car.jpg",
  },
  {
    slug: "market-trends-may-2025",
    title: "Japanese Used Car Market Trends — May 2025",
    excerpt: "Market analysis and price trends for popular models in the Japanese used car market.",
    category: "Market News",
    date: "2025-05-05",
    readTime: "6 min read",
    color: "bg-amber-500",
    image: "/images/blog/workshop.jpg",
  },
];

const categoryColors: Record<string, string> = {
  "Guide": "bg-blue-100 text-blue-700",
  "Buying Tips": "bg-green-100 text-green-700",
  "Shipping": "bg-purple-100 text-purple-700",
  "Market News": "bg-amber-100 text-amber-700",
};

export default function BlogPage() {
  const t = useTranslations("blog");

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50">
      {/* Hero */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">{t("title")}</h1>
          <p className="mt-3 text-lg text-gray-500 max-w-2xl mx-auto">{t("subtitle")}</p>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {demoPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-gray-200 transition-all"
            >
              {/* Cover Image */}
              <div className="h-48 relative overflow-hidden bg-gray-100">
                <Image
                  src={post.image || "/images/blog/car-keys.jpg"}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <span className={cn(
                  "absolute top-3 left-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium",
                  categoryColors[post.category] || "bg-gray-100 text-gray-600"
                )}>
                  <Tag className="w-3 h-3" />
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-3 text-sm text-gray-400 mb-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {formatDate(post.date)}
                  </span>
                  <span>{post.readTime}</span>
                </div>

                <h2 className="text-base font-semibold text-gray-900 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm text-gray-500 line-clamp-2">{post.excerpt}</p>

                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                  {t("readMore")}
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
