import React from "react";
import { notFound } from "next/navigation";
import { BlogPost as BlogPostInterface } from "../../../components/Blog/BlogPostsClient";
import { fetchAndEvaluateBlogs } from "../../../utils/fetchAndEvaluateBlogs";
import { groupApi } from "../../../constants/endpoint";
import BlogPostClient from "../../../components/Blog/BlogPostClient";
import { Metadata } from "next";
import parse from "html-react-parser";
import { stripHtmlTags } from "../../../utils/stripHTMLTags";

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

// Dynamic metadata
export const generateMetadata = async (slug: string): Promise<Metadata> => {
  try {
    const url = `${groupApi}/arbitrary/resources/searchsimple?service=BLOG&name=Bester&identifier=${slug}&limit=1&mode=ALL&prefix=true&includemetadata=false&reverse=true`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const blogResource = await response.json();
    // If the blog post doesn't exist, return default metadata for a "not found" page
    if (!blogResource) {
      return {
        title: 'Blog post not found | Qortal Blog',
        description: 'The blog post you are looking for does not exist.',
        robots: {
          index: false, // Optional: Prevent indexing of 404 pages
        },
      };
    }
    const blogRawData = await fetchAndEvaluateBlogs({
      name: "Bester",
      identifier: slug,
      content: blogResource[0]
    });
    const strippedDescription = stripHtmlTags(blogRawData.body).slice(0, 160);
    return {
      title: blogRawData.title,
      description: strippedDescription
    }
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return {
      title: 'Error loading blog post | Qortal Blog',
      description: 'There was an error loading this blog post. Please try again later.',
      robots: {
        index: false, // Prevent indexing of error pages
      },
    };
  }
}

const BlogPost = async ({ params }: { params: { slug: string } }) => {
  const blogPost = await getBlogPost(params.slug);

  if (!blogPost) {
    return notFound();
  }

  return <BlogPostClient blog={blogPost} />;
};

export default BlogPost;
