import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ||
    "http://localhost:3000";

  return [
    {
      url: `${siteUrl}/ar`,
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          "ar-SA": `${siteUrl}/ar`,
          en: `${siteUrl}/en`,
          "x-default": `${siteUrl}/ar`,
        },
      },
    },
    {
      url: `${siteUrl}/en`,
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          "ar-SA": `${siteUrl}/ar`,
          en: `${siteUrl}/en`,
          "x-default": `${siteUrl}/ar`,
        },
      },
    },
  ];
}
