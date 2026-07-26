import type { Metadata } from "next";
import { contact } from "@/data/contact";
import { site } from "@/data/site";
import { getSiteUrl } from "@/lib/siteUrl";
import "./globals.css";

const description =
  "Luminate Projects plans, coordinates, delivers, and evaluates meaningful events, workshops, exhibitions, educational programs, and creative projects.";
const siteUrl = getSiteUrl();
const sharingImage = siteUrl
  ? new URL(
      "/assets/optimized/covers/global-education-fair-m-tower-cover.webp",
      siteUrl,
    )
  : null;
const organizationData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  description: site.positioning,
  email: contact.email,
  telephone: contact.phoneMyanmar,
  sameAs: [contact.facebookUrl],
  founder: {
    "@type": "Person",
    name: site.founder.name,
    jobTitle: site.founder.role,
  },
  ...(siteUrl ? { url: siteUrl } : {}),
};

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: {
    default: "Luminate Projects | Creative Project Management Studio",
    template: "%s | Luminate Projects",
  },
  description,
  applicationName: "Luminate Projects",
  keywords: [
    "creative project management",
    "event operations",
    "educational programs",
    "workshop development",
    "exhibition coordination",
  ],
  authors: [{ name: "Luminate Projects" }],
  creator: "Luminate Projects",
  icons: {
    icon: "/favicon.ico",
  },
  robots: siteUrl
    ? { index: true, follow: true }
    : { index: false, follow: false },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Luminate Projects",
    title: "Luminate Projects | Creative Project Management Studio",
    description,
    ...(siteUrl ? { url: siteUrl } : {}),
    ...(sharingImage
      ? {
          images: [
            {
              url: sharingImage,
              width: 1800,
              height: 1200,
              alt: "Luminate Projects event project",
            },
          ],
        }
      : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: "Luminate Projects | Creative Project Management Studio",
    description,
    ...(sharingImage ? { images: [sharingImage] } : {}),
  },
  ...(siteUrl
    ? {
        alternates: {
          canonical: siteUrl,
        },
      }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationData).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
