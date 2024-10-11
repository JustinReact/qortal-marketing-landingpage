"use client";
import React from "react";
import {
  BlogCategoriesRow,
  BlogDateAndCategoryCol,
  BlogPostBody,
  BlogPostCategory,
  BlogPostDate,
  BlogPostImage,
  BlogPostTitle,
  Divider
} from "./BlogPostsClient-styles";
import { formatDateWithSuffix } from "../../utils/formatDateWithSuffix";
import { BlogPost } from "./BlogPostsClient";
import parse from "html-react-parser";
import { BackToBlogButton, BlogDateAndCategoryRow, BlogMainImage, BlogPostContainer } from "./BlogPostClient-styles";
import { BackArrowSVG } from "../Common/Icons/BackArrowSVG";
import { useRouter } from "next/navigation";

interface BlogPostClientProps {
  blog: BlogPost;
}

const BlogPostClient = ({ blog }: BlogPostClientProps) => {
  const router = useRouter();
  return (
    <BlogPostContainer>
      <BackToBlogButton onClick={() => {
        router.push("/blog");
      }}>
        <BackArrowSVG height={"20"} width={"20"} color={"#ffffff"} />
        All Blogs
      </BackToBlogButton>
      <BlogDateAndCategoryRow>
        <BlogPostDate>{formatDateWithSuffix(blog.created)}</BlogPostDate>
        <BlogCategoriesRow>
          {(blog?.categories || []).map((category: string) => (
            <BlogPostCategory key={category}>{category}</BlogPostCategory>
          ))}
        </BlogCategoriesRow>
      </BlogDateAndCategoryRow>
      <BlogMainImage
        src={blog.thumbnail}
        alt={blog.title}
        width={500}
        height={500}
      />
      <BlogPostTitle>{blog.title}</BlogPostTitle>
      <BlogPostBody>{parse(blog.body)}</BlogPostBody>
    </BlogPostContainer>
  );
};

export default BlogPostClient;
