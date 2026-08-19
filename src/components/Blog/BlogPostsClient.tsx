"use client";
import React from "react";
import {
  BlogPageTitle,
  BlogPostBody,
  BlogPostCard,
  BlogPostDate,
  BlogPostImage,
  BlogPostsContainer,
  BlogPostTitle,
  BlogSubContainer,
  MainBlogWrapper
} from "./BlogPostsClient-styles";
import { formatDateWithSuffix } from "../../utils/formatDateWithSuffix";
import { useRouter } from "next/navigation";

export interface BlogPost {
  title: string;
  body?: string;
  excerpt?: string;
  thumbnail: string;
  categories: string[];
  identifier: string;
  created: number;
  isValid: boolean;
}

interface BlogPostsClientProps {
  blogs: BlogPost[];
}

const BlogPostsClient: React.FC<BlogPostsClientProps> = ({ blogs }) => {
  const router = useRouter();
  return (
    <MainBlogWrapper>
      <BlogPageTitle>BLOG</BlogPageTitle>
      <BlogPostsContainer>
        {blogs
          .filter((blog) => blog.thumbnail)
          .sort((a, b) => b.created - a.created)
          .map((blog) => (
            <BlogPostCard
              aria-label="Click to read more"
              key={blog.identifier}
              role="button"
              tabIndex={0}
              onClick={() => {
                router.push(`/blog/${blog.identifier}`);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  router.push(`/blog/${blog.identifier}`);
                }
              }}
            >
              <BlogPostImage
                src={blog.thumbnail}
                alt={blog.title}
                width={500}
                height={500}
                unoptimized={blog.thumbnail?.startsWith("data:")}
              />
              <BlogSubContainer>
                <BlogPostTitle>{blog.title}</BlogPostTitle>
                <BlogPostBody>{blog.excerpt || null}</BlogPostBody>
              </BlogSubContainer>
              <BlogPostDate>
                {formatDateWithSuffix(blog.created)}
              </BlogPostDate>
            </BlogPostCard>
          ))}
      </BlogPostsContainer>
    </MainBlogWrapper>
  );
};

export default BlogPostsClient;
