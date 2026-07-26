import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { getSiteUrl } from "@/lib/siteUrl";

const staticRoutes = [
  "",
  "/about",
  "/services",
  "/work",
  "/process",
  "/contact",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  if (!siteUrl) return [];

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route}`,
    })),
    ...projects.map((project) => ({
      url: `${siteUrl}/work/${project.slug}`,
    })),
  ];
}
