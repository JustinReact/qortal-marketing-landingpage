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
import { themeSlice } from "../../state/theme/themeSlice";
import { useTheme } from "@mui/material";

interface NewsPostClientProps {
  newsPost: NewsPost;
}

const NewsPostClient = ({ newsPost }: NewsPostClientProps) => {
  const router = useRouter();
  const theme = useTheme();
  return (
    <NewsPostContainer>
      <NewsSubContainer>
        <NewsTitleContainer>
          <BackToNewsButton
            onClick={() => {
              router.push("/news");
            }}
          >
            <CurlyBackArrowSVG height={"14"} width={"21"} color={theme.palette.mode === "dark" ? "#000000" : "#ffffff"} />
            Return to List
          </BackToNewsButton>
          <NewsPostTitle>{newsPost.title}</NewsPostTitle>
          <NewsPostMainImage
            src={newsPost.thumbnail}
            alt={newsPost.title}
            width={500}
            height={500}
          />
        </NewsTitleContainer>
        <NewsPostBody>
          {parse(newsPost.body)}
        </NewsPostBody>
      </NewsSubContainer>
    </NewsPostContainer>
  );
};

export default NewsPostClient;
