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
  BlogSubContainer,
  Divider,
  MainBlogWrapper,
  ReadMoreButton
} from "./BlogPostsClient-styles";
import { formatDateWithSuffix } from "../../utils/formatDateWithSuffix";
import parse from "html-react-parser";
import ReactGA from "react-ga4";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
  return (
    <MainBlogWrapper>
      <BlogPageTitle>QORTAL BLOG</BlogPageTitle>
      <BlogPostsContainer>
        {blogs
          .filter((blog) => blog.thumbnail)
          .sort((a, b) => b.created - a.created)
          .map((blog) => (
            <BlogPostCard
              aria-label="Click to read more"
              key={blog.identifier}
              role="button"
              onClick={() => {
                router.push(`/blog/${blog.identifier}`);
              }}
              onKeyDown={() => {
                router.push(`/blog/${blog.identifier}`);
              }}
            >
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
              <BlogSubContainer>
                <BlogPostTitle>{blog.title}</BlogPostTitle>
                <BlogPostBody>{parse(blog.body)}</BlogPostBody>
                <ReadMoreButton
                  onClick={() => {
                    ReactGA.event({
                      category: "User",
                      action: `Clicked on blog post: ${blog.title} from blog page`,
                      label: `Clicked on blog post: ${blog.title} from blog page`
                    });
                  }}
                  href={`/blog/${blog.identifier}`}
                  passHref
                >
                  Read More
                </ReadMoreButton>
              </BlogSubContainer>
            </BlogPostCard>
          ))}
      </BlogPostsContainer>
    </MainBlogWrapper>
  );
};

export default BlogPostsClient;
