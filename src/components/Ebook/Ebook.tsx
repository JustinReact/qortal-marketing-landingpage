"use client";
import React, { useState } from "react";
import {
  BookImage,
  BookSectionContainer,
  Container,
  ContentCol,
  CTABox,
  CTABoxButton,
  CTABoxTextFieldContainer,
  CTABoxTitle,
  CTADescription,
  CTASubTitle,
  CTATitle,
  IconBlock,
  IconPlaceholder,
  IconRow,
  IconText,
  MainCol,
  SectionTitle
} from "./Ebook-styles";
import { useTheme, FormHelperText } from "@mui/material";
import { CustomInputField } from "../Blog/BlogPostsClient-styles";

const Ebook = () => {
  const theme = useTheme();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<boolean>(false);

  const handleNameInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setName(event.target.value as string);
  };

  const handleEmailInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setEmail(value); // Always update the field first

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(value.length > 0 && !emailRegex.test(value));
  };

  return (
    <>
    <Container>
      <MainCol>
        <CTASubTitle>FREE EBOOK</CTASubTitle>
        <CTATitle>
          UNLOCK THE WORLD OF{" "}
          <span style={{ color: theme.palette.customBlue.main }}>QORTAL</span>
        </CTATitle>
        <CTADescription>
          Your Simple Guide to Understanding Decentralized Freedom
        </CTADescription>
      </MainCol>
      <MainCol>
        <CTABox>
          <CTABoxTitle>Get Your Free Copy</CTABoxTitle>
          <CTABoxTextFieldContainer>
            <CustomInputField
              name="name"
              aria-label="name"
              label="Name"
              variant="filled"
              value={name}
              onChange={handleNameInputChange}
              required
            />
            <CustomInputField
              name="email"
              aria-label="email"
              label="E-Mail address"
              variant="filled"
              value={email}
              onChange={handleEmailInputChange}
              required
              error={emailError}
              helperText={
                emailError ? "Please enter a valid email address." : ""
              }
            />
          </CTABoxTextFieldContainer>
          <CTABoxButton>Download Free Ebook</CTABoxButton>
        </CTABox>
      </MainCol>
    </Container>
      <BookSectionContainer>
        <BookImage
          src="/images/Ebook/Ebook Design.png"
          alt="Understanding Qortal Book"
        />

        <ContentCol>
          <SectionTitle>This eBook will acquaint you with</SectionTitle>

          <IconRow>
            <IconBlock>
              <IconPlaceholder /> {/* You can replace this with a real <img> */}
              <IconText>Lorem ipsum Lorem ipsum Lorem ipsum</IconText>
            </IconBlock>

            <IconBlock>
              <IconPlaceholder />
              <IconText>Lorem ipsum Lorem ipsum Lorem ipsum</IconText>
            </IconBlock>

            <IconBlock>
              <IconPlaceholder />
              <IconText>Lorem ipsum Lorem ipsum Lorem ipsum</IconText>
            </IconBlock>
          </IconRow>
        </ContentCol>
      </BookSectionContainer>
      </>
  );
};

export default Ebook;
