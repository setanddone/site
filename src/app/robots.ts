import type { MetadataRoute } from "next";
import { BRAND } from "@/lib/site";

/**
 * robots.txt — allow general crawling, keep the hidden + dev routes out,
 * and point crawlers at the sitemap.
 */

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? BRAND.url;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/municipalities", "/design-system", "/api/"],
    },
    sitemap: `${BASE}/sitemap.xml`,
  };
}
