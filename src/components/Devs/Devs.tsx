"use client";
import {
  Container,
  Header,
  SubHeader,
  Features,
  FeatureContainer,
  FeatureText,
  VideoBox,
  YoutubeVideoContainer,
  TopCol,
  TopHeader,
  TopFoldButtonRow,
  CTAButton1,
  CTAButton2,
  TopSubHeader,
  FeaturesTitleContainer,
  FeaturesTitleContainer as WikiSectionTitle,
  FeatureCardsRow,
  QAppsImg,
  CTAButton,
  WikiSectionContainer,
  BackArrowIcon,
  WikiSectionRow,
  WikiSectionColumn,
  WikiCTAButton,
  QortalLogoImg
} from "../Devs/Devs-styles";
import { useMediaQuery, useTheme } from "@mui/material";
import { YoutubePlaceholder } from "../YouTube/YoutubePlaceholder";
import { useState } from "react";

const Devs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [showVideoPlayer, setShowVideoPlayer] = useState<boolean>(false);

  const handleVideoClick = () => {
    setShowVideoPlayer((prevState) => !prevState);
  };

  return (
    <>
      <Container container>
        <TopCol item xs={12} sm={12} md={6}>
          <TopHeader>Qortal For Developers</TopHeader>
          <Header>
            Build an uncensorable app in 5 minutes.
            <br /> No backend required.
          </Header>
          <TopFoldButtonRow>
            <CTAButton1
            // onClick={() => {
            //   scrollToTopCard1Feature();
            // }}
            >
              SEE IT NOW
            </CTAButton1>
            <CTAButton2
            // onClick={() => {
            //   router.push("/downloads");
            // }}
            >
              JOIN DEV GROUP
            </CTAButton2>
          </TopFoldButtonRow>
          <TopSubHeader>
            Join our community of developers building the next generation of
            decentralized applications on Qortal!
          </TopSubHeader>
        </TopCol>
        <VideoBox item xs={12} sm={12} md={6}>
          {showVideoPlayer ? (
            <YoutubeVideoContainer>
              <iframe
                src="https://www.youtube.com/embed/M01coUo0dVA?si=gJC29726RcXxxJsH&autoplay=1&rel=0"
                loading="lazy"
                title="How To Publish Videos To Q-Tube On Qortal"
                allowFullScreen
                allow="autoplay"
              ></iframe>
            </YoutubeVideoContainer>
          ) : (
            <YoutubePlaceholder
              className="dev-page-video"
              isModal={false}
              onClick={handleVideoClick}
              YoutubeThumbnail={"/images/Creators/UncensorableVideos.png"}
              YoutubeTitle="How To Publish Videos To Q-Tube On Qortal"
            />
          )}
        </VideoBox>
      </Container>
      <Features container>
        <FeaturesTitleContainer>
          <TopHeader>Qortal Q-Apps</TopHeader>
          <Header>
            Check out some decentralized apps our developers have already built
            on Qortal!
          </Header>
          <TopSubHeader>
            You can deploy an app in minutes, using only Javascript, and paying
            a tiny publishing fee. Nothing else needed!
          </TopSubHeader>
        </FeaturesTitleContainer>
        <FeatureCardsRow>
          <FeatureContainer item sm={12} md={4}>
            <QAppsImg
              src={
                theme.palette.mode === "dark"
                  ? "/images/LandingPage/Q-TubeDark.png"
                  : "/images/LandingPage/Q-TubeLight.png"
              }
              alt="Q-Tube Logo"
              width={150}
              height={80}
              quality={100}
            />
            <SubHeader>Q-Tube</SubHeader>
            <FeatureText>
              Q-Tube allows the publishing and viewing of uncensorable videos on
              Qortal, with no ads, no middlemen, and no platform cuts. Viewers
              can support creators with superlikes paid in QORT.
            </FeatureText>
            <CTAButton
              onClick={() => {
                window.open("https://link.qortal.dev/call", "_blank");
              }}
            >
              TRY IT NOW
            </CTAButton>
          </FeatureContainer>
          <FeatureContainer item sm={12} md={4}>
            <QAppsImg
              src={
                theme.palette.mode === "dark"
                  ? "/images/Devs/Q-ShopDark.png"
                  : "/images/Devs/Q-ShopLight.webp"
              }
              alt="Q-Shop Logo"
              width={150}
              height={80}
              quality={100}
            />
            <SubHeader>Q-Shop</SubHeader>
            <FeatureText>
              Q-Shop is a decentralized e-commerce platform where you can set up
              your own online store to sell products or services, with no
              platform fees, no middlemen, and complete control over your
              business.
            </FeatureText>
            <CTAButton
              onClick={() => {
                window.open("https://link.qortal.dev/call", "_blank");
              }}
            >
              TRY IT NOW
            </CTAButton>
          </FeatureContainer>
          <FeatureContainer item sm={12} md={4}>
            <QAppsImg
              src={
                theme.palette.mode === "dark"
                  ? "/images/Devs/Q-FundDark.png"
                  : "/images/Devs/Q-FundLight.png"
              }
              alt="Q-Fund Logo"
              width={150}
              height={80}
              quality={100}
            />
            <SubHeader>Q-Fund</SubHeader>
            <FeatureText>
              Q-Fund is a decentralized crowdfunding platform that allows you to
              raise funds for your projects or causes, with no platform fees, no
              middlemen, and full control over your campaigns.
            </FeatureText>
            <CTAButton
              onClick={() => {
                window.open("https://link.qortal.dev/call", "_blank");
              }}
            >
              {" "}
              TRY IT NOW
            </CTAButton>
          </FeatureContainer>
        </FeatureCardsRow>
      </Features>
      <WikiSectionContainer>
        <WikiSectionColumn>
          <WikiSectionTitle>
            <TopHeader>Ready to build?</TopHeader>
            <Header>
              Check out our wiki guide on setting up and deploying your first
              Q-App!
            </Header>
            <WikiSectionRow>
              <TopSubHeader>Read the wiki guide</TopSubHeader>
              <BackArrowIcon
                color={theme.palette.text.primary}
                height={"25px"}
                width={"25px"}
              />
            </WikiSectionRow>
          </WikiSectionTitle>
          <WikiCTAButton>READ WIKI</WikiCTAButton>
        </WikiSectionColumn>
        <QortalLogoImg src="/images/Devs/QortalLogo.webp" alt="Qortal Logo" width={350} height={350} quality={100} />
      </WikiSectionContainer>
    </>
  );
};

export default Devs;
