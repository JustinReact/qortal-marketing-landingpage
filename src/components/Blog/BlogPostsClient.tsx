"use client";
import React from "react";
import {
  BlogCategoriesRow,
  BlogDateAndCategoryCol,
  BlogPageTitle,
  BlogPostBody,
  BlogPostCard,
  BlogPostCategory,
  BlogPostDate,
  BlogPostImage,
  BlogPostsContainer,
  BlogPostTitle,
  Divider,
  MainBlogWrapper,
  ReadMoreButton
} from "./BlogPostsClient-styles";
import { formatDateWithSuffix } from "../../utils/formatDateWithSuffix";
import parse from "html-react-parser";
export interface BlogPost {
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
              <BlogDateAndCategoryCol>
                <BlogPostDate>
                  {formatDateWithSuffix(blog.created)}
                </BlogPostDate>
                <Divider />
                <BlogCategoriesRow>
                  {(blog?.categories || []).map((category: string) => (
                    <BlogPostCategory key={category}>
                      {category}
                    </BlogPostCategory>
                  ))}
                </BlogCategoriesRow>
              </BlogDateAndCategoryCol>
              <BlogPostTitle>{blog.title}</BlogPostTitle>
              <BlogPostBody>{parse(blog.body)}</BlogPostBody>
              <ReadMoreButton href={`/blog/${blog.identifier}`}>Read More</ReadMoreButton>
            </BlogPostCard>
          ))}
      </BlogPostsContainer>
    </MainBlogWrapper>
  );
};

export default BlogPostsClient;
