import { MetadataRoute } from "next";

const BASE_URL = "https://clickcar.jp";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/*/auth/", "/*/dashboard/"],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}