"use client";
import React from "react";
import {
  BlogCategoriesRow,
  BlogDateAndCategoryCol,
  BlogPostBody,
  BlogPostCard,
  BlogPostCategory,
  BlogPostDate,
  BlogPostImage,
  BlogPostTitle,
  Divider
} from "./Blog-styles";
import { formatDateWithSuffix } from "../../utils/formatDateWithSuffix";
import { BlogPost } from "./BlogPostsClient";
import parse from "html-react-parser";

interface BlogPostClientProps {
  blog: BlogPost;
}

const BlogPostClient = ({ blog }: BlogPostClientProps) => {
  return (
    <BlogPostCard key={blog.identifier}>
      <BlogPostImage
        src={blog.thumbnail}
        alt={blog.title}
        width={500}
        height={500}
      />
      <BlogDateAndCategoryCol>
        <BlogPostDate>{formatDateWithSuffix(blog.created)}</BlogPostDate>
        <Divider />
        <BlogCategoriesRow>
          {(blog?.categories || []).map((category: string) => (
            <BlogPostCategory key={category}>{category}</BlogPostCategory>
          ))}
        </BlogCategoriesRow>
      </BlogDateAndCategoryCol>
      <BlogPostTitle>{blog.title}</BlogPostTitle>
      <BlogPostBody>{parse(blog.body)}</BlogPostBody>
    </BlogPostCard>
  );
};

export default BlogPostClient;
