import React from "react";
import { notFound } from "next/navigation";
import { BlogPost as BlogPostInterface } from "../../../components/Blog/BlogPostsClient";
import { fetchAndEvaluateBlogs } from "../../../utils/fetchAndEvaluateBlogs";
import { groupApi } from "../../../constants/endpoint";
import BlogPostClient from "../../../components/Blog/BlogPostClient";

const getBlogPost = async (slug: string): Promise<BlogPostInterface | null> => {
  try {
    const url = `${groupApi}/arbitrary/resources/searchsimple?service=BLOG&name=Bester&identifier=${slug}&limit=1&mode=ALL&prefix=true&includemetadata=false&reverse=true`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const blogResource = await response.json();
    const blogRawData = await fetchAndEvaluateBlogs({
      name: "Bester",
      identifier: slug,
      content: blogResource[0]
    });
    if (!blogRawData.isValid) {
      return null; // Invalid blog post
    }
    return blogRawData;
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
};

const BlogPost = async ({ params }: { params: { slug: string } }) => {
  const blogPost = await getBlogPost(params.slug);

  if (!blogPost) {
    return notFound();
  }

  return <BlogPostClient blog={blogPost} />;
};

export default BlogPost;
