"use client";
import React from "react";
import {
  BlogDateAndCategoryRow,
  BlogPageTitle,
  BlogPostBody,
  BlogPostCard,
  BlogPostCategory,
  BlogPostDate,
  BlogPostImage,
  BlogPostsContainer,
  BlogPostTitle,
  MainBlogWrapper,
  ReadMoreButton
} from "./Blog-styles"; // MUI and styled-components here
import { formatDateWithSuffix } from "../../utils/formatDateWithSuffix";
import parse from "html-react-parser";

interface BlogPost {
  title: string;
  body: string;
  thumbnail: string;
  categories: string[];
  identifier: string;
  created: number;
}

interface BlogPostsClientProps {
  blogs: BlogPost[];
}

const BlogPostsClient: React.FC<BlogPostsClientProps> = ({ blogs }) => {
  return (
    <MainBlogWrapper>
      <BlogPageTitle>Qortal Blog</BlogPageTitle>
      <BlogPostsContainer>
        {blogs
          .filter((blog) => blog.thumbnail)
          .map((blog) => (
            <BlogPostCard key={blog.identifier}>
              <BlogPostImage
                src={blog.thumbnail}
                alt={blog.title}
                width={500}
                height={500}
              />
              <BlogDateAndCategoryRow>
                <BlogPostDate>
                  {formatDateWithSuffix(blog.created)} |
                </BlogPostDate>
                {(blog?.categories || []).map((category: string) => (
                  <BlogPostCategory key={category}>{category}</BlogPostCategory>
                ))}
              </BlogDateAndCategoryRow>
              <BlogPostTitle>{blog.title}</BlogPostTitle>
              <BlogPostBody>{parse(blog.body)}</BlogPostBody>
              <ReadMoreButton>Read More</ReadMoreButton>
            </BlogPostCard>
          ))}
      </BlogPostsContainer>
    </MainBlogWrapper>
  );
};

export default BlogPostsClient;
