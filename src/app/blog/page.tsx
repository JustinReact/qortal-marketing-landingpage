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

const BlogPage = async (): Promise<JSX.Element> => {
  const blogs: Blog = (await getBlogs()) ?? []; // Default to an empty array if blogs is undefined
  console.log(blogs);

  if (!blogs || blogs.length === 0) {
    return <div>No blogs found</div>; // Fallback if no blogs are found
  }

  return <BlogPostsClient blogs={blogs} />;
};

export default BlogPage;
