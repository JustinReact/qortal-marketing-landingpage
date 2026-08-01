import type { MetadataRoute } from "next";
import { BLOG_BASE } from "../constants/Identifiers";
import { fetchQortalResourceList } from "../utils/qortalResourceList";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages = [
    {
      url: "https://qortal.dev",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1
    },
    {
      url: "https://qortal.dev/downloads",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1
    },
    {
      url: "https://qortal.dev/wiki",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6
    },
    {
      url: "https://qortal.dev/support",
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.1
    },
    {
      url: "https://qortal.dev/faq",
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.1
    },
    {
      url: "https://qortal.dev/blog",
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9
    },
    {
      url: "https://qortal.dev/privacy",
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.1
    },
    {
      url: "https://qortal.dev/qort",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5
    },
    {
      url: "https://qortal.dev/docs/q-apps",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7
    },
    {
      url: "https://qortal.dev/promo",
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3
    },
    {
      url: "https://qortal.dev/ebook",
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.5
    },
    {
      url: "https://qortal.dev/creators",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5
    },
    {
      url: "https://qortal.dev/devs",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5
    },
    {
      url: "https://qortal.dev/team",
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.5
    },
    {
      url: "https://qortal.dev/webinar",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5
    },
    {
      url: "https://qortal.dev/onboarding",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5
    },
    {
      url: "https://qortal.dev/freedomcells",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5
    },
    {
      url: "https://qortal.dev/donate",
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3
    }
  ];

  let blogPostPages: MetadataRoute.Sitemap = [];
  try {
    const blogs = await fetchQortalResourceList("BLOG", `${BLOG_BASE}-`, 60);
    blogPostPages = blogs.map((post) => ({
      url: `https://qortal.dev/blog/${post.identifier}`,
      lastModified: post.created ? new Date(post.created) : new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9
    }));
  } catch (error) {
    console.error("Failed to fetch blog list for sitemap:", error);
  }

  return [...staticPages, ...blogPostPages];
}
