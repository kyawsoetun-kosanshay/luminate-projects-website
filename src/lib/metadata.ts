import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/siteUrl";

const siteName = "Luminate Projects";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

export function createPageMetadata({
  title,
  description,
  path,
  image = "/assets/optimized/covers/global-education-fair-m-tower-cover.webp",
}: PageMetadataOptions): Metadata {
  const siteUrl = getSiteUrl();
  const fullTitle = `${title} | ${siteName}`;

  return {
    title,
    description,
    ...(siteUrl
      ? {
          alternates: {
            canonical: new URL(path, siteUrl),
          },
          openGraph: {
            type: "website",
            locale: "en_US",
            siteName,
            title: fullTitle,
            description,
            url: new URL(path, siteUrl),
            images: [
              {
                url: new URL(image, siteUrl),
                alt: `${title} — ${siteName}`,
              },
            ],
          },
          twitter: {
            card: "summary_large_image" as const,
            title: fullTitle,
            description,
            images: [new URL(image, siteUrl)],
          },
        }
      : {}),
  };
}
