import { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { demoPosts } from "@/lib/demo-blog";
import { demoVehicles } from "@/lib/demo-vehicles";
import { exportCountries } from "@/lib/export-countries";

const BASE_URL = "https://clickcar.jp";
const SITE_LAST_UPDATED = new Date("2026-07-15T00:00:00.000Z");

const staticPages = [
  { path: "", priority: 1.0, changeFrequency: "daily" as const },
  { path: "/vehicles", priority: 0.9, changeFrequency: "daily" as const },
  { path: "/export-guide", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/services/auction", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/services/export", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/services/maintenance", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" as const },
  { path: "/faq", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    for (const page of staticPages) {
      entries.push({
        url: `${BASE_URL}/${locale}${page.path}`,
        lastModified: SITE_LAST_UPDATED,
        changeFrequency: page.changeFrequency,
        priority: page.priority,
      });
    }

    for (const vehicle of demoVehicles) {
      entries.push({
        url: `${BASE_URL}/${locale}/vehicles/${vehicle.id}`,
        lastModified: SITE_LAST_UPDATED,
        changeFrequency: "weekly",
        priority: 0.8,
      });
    }

    for (const post of demoPosts) {
      entries.push({
        url: `${BASE_URL}/${locale}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }

    // Per-country export landing pages — 16 countries × 3 locales = 48 URLs
    for (const country of exportCountries) {
      entries.push({
        url: `${BASE_URL}/${locale}/export-to/${country.slug}`,
        lastModified: SITE_LAST_UPDATED,
        changeFrequency: "monthly" as const,
        priority: 0.75,
      });
    }
  }

  return entries;
}
