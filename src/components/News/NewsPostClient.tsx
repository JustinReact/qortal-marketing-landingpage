"use client";
import React from "react";
import {
  BackToNewsButton,
  NewsPostContainer,
  NewsPostTitle,
  NewsSubContainer
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
        <BackToNewsButton
          onClick={() => {
            router.push("/blog");
          }}
        >
          <CurlyBackArrowSVG height={"14"} width={"21"} color={"#000000"} />
          Return to News
        </BackToNewsButton>
        <NewsPostTitle>{newsPost.title}</NewsPostTitle>
      </NewsSubContainer>
    </NewsPostContainer>
  );
};

export default NewsPostClient;
