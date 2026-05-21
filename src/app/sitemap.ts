import type { MetadataRoute } from "next";
import { BRAND } from "@/lib/site";
import { getProjectSlugs } from "@/lib/projects";

/**
 * Sitemap — public, indexable routes only.
 * Excludes /municipalities (noindex B2B page) and /design-system (dev QA).
 */

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? BRAND.url;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "", // home
    "/what-we-do",
    "/the-work",
    "/about",
    "/field-notes",
    "/get-in-touch",
  ].map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const projectRoutes = getProjectSlugs().map((slug) => ({
    url: `${BASE}/the-work/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes];
}
