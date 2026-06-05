import { MetadataRoute } from "next";

const BASE_URL = "https://uss-auction-proxy.vercel.app";
const locales = ["zh", "en", "ja"];

const staticPages = [
  { path: "", priority: 1.0, changeFrequency: "daily" as const },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/vehicles", priority: 0.9, changeFrequency: "daily" as const },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" as const },
  { path: "/faq", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/services/export", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/services/maintenance", priority: 0.7, changeFrequency: "monthly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const page of staticPages) {
      entries.push({
        url: `${BASE_URL}/${locale}${page.path}`,
        lastModified: new Date(),
        changeFrequency: page.changeFrequency,
        priority: page.priority,
      });
    }
  }

  return entries;
}
