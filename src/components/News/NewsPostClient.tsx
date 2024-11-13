"use client";
import React from "react";
import {
  BackToNewsButton,
  NewsPostContainer,
  NewsPostTitle,
  NewsSubContainer,
  NewsTitleContainer
} from "./NewsPostClient-styles";
import { useRouter } from "next/navigation";
import { CurlyBackArrowSVG } from "../Common/Icons/CurlyBackArrowSVG";
import { NewsPost } from "./NewsPostsClient";

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
        <NewsPostTitle>{newsPost.title}</NewsPostTitle>
        </NewsTitleContainer>
      </NewsSubContainer>
    </NewsPostContainer>
  );
};

export default NewsPostClient;
