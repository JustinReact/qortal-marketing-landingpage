import React from "react";
import { fetchAndEvaluateBlogs } from "../../utils/fetchAndEvaluateBlogs";
import { groupApi } from "../../constants/endpoint";
import BlogPostsClient from "../../components/Blog/BlogPostsClient";
import { BLOG_BASE } from "../../constants/Identifiers";

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

export const metadata = {
  title: 'Qortal Blog - Explore the Latest About Qortal, Web3, and Decentralization',
  description: 'Explore the latest blog posts about Qortal, Web3, decentralization, and much more, on the Qortal Blog!',
};

type Blog = BlogPost[];

// Utility function to fetch data with retries and delay
const fetchWithRetry = async (
  url: string,
  options: RequestInit,
  retries = 5,
  delay = 5000
): Promise<any> => {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url, options);
      if (!response.ok) throw new Error("Failed to fetch");
      const data = await response.json();
      return data;
    } catch (error) {
      if (i === retries - 1) {
        console.error("Failed to fetch blogs after multiple attempts:", error);
        throw error; // Throw error if all retries fail
      }
      console.warn(`Retrying fetch... Attempt ${i + 1}`);
      await new Promise((resolve) => setTimeout(resolve, delay)); // Wait before next retry
    }
  }
};

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
    const data = await fetchWithRetry(
      url,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
        next: { revalidate: 3600 },
      },
      5,    // Retry up to 5 times
      2000  // 2-second delay between retries
    );
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

const BlogPage = async (): Promise<JSX.Element> => {
  const blogs: Blog = (await getBlogs()) ?? []; // Default to an empty array if blogs is undefined
  const newBlogs = blogs.filter((blog) => blog.identifier !== "qortal-dev-blog-MnVXFVKP5P");
  // const blogIdentifiers = newBlogs.map((blog) => blog.identifier);
  // console.log("Blog Identifiers:", blogIdentifiers);
  if (!blogs || blogs.length === 0) {
    return <div>No blogs found</div>; // Fallback if no blogs are found
  }

  return <BlogPostsClient blogs={newBlogs} />;
};

export default BlogPage;
