"use client";
import React, { useEffect } from "react";
import ReactGA from "react-ga4";
import {
  BlogCategoriesRow,
  BlogPostCategory,
  BlogPostTitle
} from "./BlogPostsClient-styles";
import { formatDateWithSuffix } from "../../utils/formatDateWithSuffix";
import { BlogPost } from "./BlogPostsClient";
import parse from "html-react-parser";
import {
  BackToBlogButton,
  BlogBody,
  BlogDate,
  BlogDateAndCategoryRow,
  BlogDivider,
  BlogMainImage,
  BlogPostContainer
} from "./BlogPostClient-styles";
import { BackArrowSVG } from "../Common/Icons/BackArrowSVG";
import { useRouter } from "next/navigation";

interface BlogPostClientProps {
  blog: BlogPost;
}

const BlogPostClient = ({ blog }: BlogPostClientProps) => {
  const router = useRouter();

  useEffect(() => {
    if (blog && blog.body) {
      // Once the content is rendered, select the superscripts and references
      const superscripts = document.querySelectorAll("sup");
      const references = document.querySelectorAll("p");

      // Dynamically assign IDs to references (assuming they're numbered like "1. Reference text")
      references.forEach((ref) => {
        const match = ref.innerText.match(/^(\d+)\./); // Look for numbers followed by period
        if (match) {
          const refNumber = match[1];
          ref.id = `reference-${refNumber}`; // Assign an ID dynamically, e.g., "reference-1"
        }
      });

      // Add click events to superscripts to scroll to the corresponding reference
      superscripts.forEach((sup) => {
        const refNumber = sup.innerText; // Get the number in the superscript (e.g., "1")
        const targetReference = document.getElementById(
          `reference-${refNumber}`
        );

        if (targetReference) {
          sup.style.cursor = "pointer"; // Make superscripts appear clickable
          sup.style.textDecoration = "underline"; // Make superscripts appear clickable
          sup.style.color = "blue"; // Make superscripts appear clickable
          sup.addEventListener("click", () => {
            targetReference.scrollIntoView({ behavior: "smooth" });
          });
        }
      });

      // Clean up event listeners when component unmounts
      return () => {
        superscripts.forEach((sup) => {
          sup.removeEventListener("click", () => {});
        });
      };
    }
  }, [blog]); // Re-run the effect when content changes

  // Google Analytics event tracking
  useEffect(() => {
    ReactGA.event({
      category: "Blog Post Viewed",
      action: `Viewed ${blog.title}`,
      label: `Viewed ${blog.title}`
    });
  }, []);

  return (
    <BlogPostContainer>
      <BackToBlogButton
        onClick={() => {
          router.push("/blog");
        }}
      >
        <BackArrowSVG height={"20"} width={"20"} color={"#ffffff"} />
        All Blogs
      </BackToBlogButton>
      <BlogDateAndCategoryRow>
        <BlogDate>{formatDateWithSuffix(blog.created)}</BlogDate>
        <BlogDivider />
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
      <BlogBody>{parse(blog.body)}</BlogBody>
    </BlogPostContainer>
  );
};

export default BlogPostClient;
