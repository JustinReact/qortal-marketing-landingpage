"use client";
import React, { useRef } from "react";
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
import Modal from "../Common/Modal/Modal";
import {
  useClickablePostImages,
  usePostImageModal,
} from "../../hooks/usePostImageModal";

interface NewsPostClientProps {
  newsPost: NewsPost;
}

const NewsPostClient = ({ newsPost }: NewsPostClientProps) => {
  const router = useRouter();
  const theme = useTheme();
  const postContainerRef = useRef<HTMLDivElement>(null);
  const { openModal, modalImages, openImageModal, closeModal } =
    usePostImageModal();

  useClickablePostImages(postContainerRef, openImageModal, [newsPost?.body]);

  return (
    <NewsPostContainer ref={postContainerRef}>
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
            width={1200}
            height={1200}
            data-full-src={newsPost.thumbnail}
          />
        </NewsTitleContainer>
        <NewsPostBody>
          {typeof newsPost.body === "string" ? parse(newsPost.body) : null}
        </NewsPostBody>
      </NewsSubContainer>
      {openModal && (
        <Modal
          images={modalImages}
          openModal={openModal}
          onClickFunc={closeModal}
        />
      )}
    </NewsPostContainer>
  );
};

export default NewsPostClient;
