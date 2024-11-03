import type { MetadataRoute } from 'next';
import { groupApi } from '../constants/endpoint';
import { BLOG_BASE } from '../constants/Identifiers';
import { fetchAndEvaluateBlogs } from '../utils/fetchAndEvaluateBlogs';

interface BlogPost {
  title: string;
  body: string;
  thumbnail: string;
  categories: string[];
  name: string;
  identifier: string;
  isValid: boolean;
  created: number;
}

type Blog = BlogPost[];

const getBlogRawData = async (
  name: string,
  identifier: string,
  content: any
): Promise<BlogPost> => {
  const res = await fetchAndEvaluateBlogs({
    name,
    identifier,
    content
  });
  return res;
};

const getBlogs = async () => {
  try {
    // Fetch list of Bester's blogs resources from Qortal blockchain
    const url = `${groupApi}/arbitrary/resources/searchsimple?service=BLOG&name=Bester&identifier=${BLOG_BASE}-&limit=20&mode=ALL&prefix=true&includemetadata=false&reverse=true`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      next: { revalidate: 60 } // Cache this data for 24 hours
    });
    const data = await response.json();
    let blogs: Blog = [];
    for (const content of data) {
      if (content.name && content.identifier) {
        const fullBlogData = await getBlogRawData(
          content.name,
          content.identifier,
          content
        );
        blogs.push(fullBlogData);
      }
    }
    return blogs;
  } catch (error) {
    console.error(error);
  }
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages = [
    {
      url: 'https://qortal.dev',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: 'https://qortal.dev/support',
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.1,
    },
    {
      url: 'https://qortal.dev/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: 'https://qortal.dev/privacy',
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.1,  
    },
    {
      url: 'https://qortal.dev/qort',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: 'https://qortal.dev/docs/q-apps',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: 'https://qortal.dev/docs/extension',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: 'https://qortal.dev/promo',
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    }
  ];
  const blogs: Blog = (await getBlogs()) ?? []; 
  const blogPostPages = blogs.map((post) => ({
    url: `https://qortal.dev/blog/${post.identifier}`,
    lastModified: new Date(post.created),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...staticPages, ...blogPostPages];
}