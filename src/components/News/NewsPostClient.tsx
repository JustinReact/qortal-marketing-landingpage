"use client";
import React from "react";
import {
  BackToNewsButton,
  NewsPostBody,
  NewsPostContainer,
  NewsPostMainImage,
  NewsPostTitle,
  NewsSubContainer,
  NewsTitleContainer
} from "./NewsPostClient-styles";
import { useRouter } from "next/navigation";
import { CurlyBackArrowSVG } from "../Common/Icons/CurlyBackArrowSVG";
import { NewsPost } from "./NewsPostsClient";
import parse from "html-react-parser";

interface NewsPostClientProps {
  newsPost: NewsPost;
}

const NewsPostClient = ({ newsPost }: NewsPostClientProps) => {
  const router = useRouter();
  return (
    <NewsPostContainer>
      <NewsSubContainer>
        <NewsTitleContainer>
          <BackToNewsButton
            onClick={() => {
              router.push("/news");
            }}
          >
            <CurlyBackArrowSVG height={"14"} width={"21"} color={"#000000"} />
            Return to News
          </BackToNewsButton>
          <NewsPostMainImage
            src={newsPost.thumbnail}
            alt={newsPost.title}
            width={500}
            height={500}
          />
          <NewsPostTitle>{newsPost.title}</NewsPostTitle>
        </NewsTitleContainer>
        <NewsPostBody>
          {parse(newsPost.body)}
        </NewsPostBody>
      </NewsSubContainer>
    </NewsPostContainer>
  );
};

export default NewsPostClient;
