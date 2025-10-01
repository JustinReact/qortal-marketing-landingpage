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
import { useTheme } from "@mui/material";
import { YoutubePlaceholder } from "../YouTube/YoutubePlaceholder";
import { useState } from "react";

const Devs = () => {
  const theme = useTheme();

  const [showVideoPlayer, setShowVideoPlayer] = useState<boolean>(false);

  const handleVideoClick = () => {
    setShowVideoPlayer((prevState) => !prevState);
  };


  return (
    <>
      <Container>
        <TopCol>
          <TopHeader>Qortal For Developers</TopHeader>
          <Header>
            Build an uncensorable App in 5 minutes.
            <br /> <span>No backend required.</span>
          </Header>
          <TopFoldButtonRow>
            <CTAButton2
              onClick={() => {
                window.open("https://link.qortal.dev/new-devs", "_blank");
              }}
            >
              LEARN HOW
            </CTAButton2>
          </TopFoldButtonRow>
        </TopCol>
        <VideoBox>
          {showVideoPlayer ? (
            <YoutubeVideoContainer>
              <iframe
                src="https://www.youtube.com/embed/jgI4PDoPAMU?si=012wkriR86HSeJtC&autoplay=1&rel=0"
                loading="lazy"
                title="How To Create A Q-App On Qortal"
                allowFullScreen
                allow="autoplay"
              ></iframe>
            </YoutubeVideoContainer>
          ) : (
            <YoutubePlaceholder
              className="dev-page-video"
              isModal={false}
              onClick={handleVideoClick}
              YoutubeThumbnail={"/images/Devs/Q-AppsTutorial.png"}
              YoutubeTitle="How To Publish Videos To Q-Tube On Qortal"
            />
          )}
        </VideoBox>
      </Container>
      <Features>
        <FeaturesTitleContainer>
          <TopHeader>Qortal Q-Apps</TopHeader>
          <Header>
            Check out some decentralized apps our developers have already built
            on Qortal!
          </Header>
          <TopSubHeader>
            You can deploy an App in minutes, using only JavaScript, and paying
            a tiny publishing fee. Nothing else needed!
          </TopSubHeader>
        </FeaturesTitleContainer>
        <FeatureCardsRow>
          <FeatureContainer>
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
                window.open("https://link.qortal.dev/qtube", "_blank");
              }}
            >
              TRY IT NOW
            </CTAButton>
          </FeatureContainer>
          <FeatureContainer>
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
                window.open("https://link.qortal.dev/qshop", "_blank");
              }}
            >
              TRY IT NOW
            </CTAButton>
          </FeatureContainer>
          <FeatureContainer>
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
                window.open("https://link.qortal.dev/qfund", "_blank");
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
          <WikiCTAButton
            onClick={() => {
              window.open("https://link.qortal.dev/dev-wiki", "_blank");
            }}
          >
            READ WIKI
          </WikiCTAButton>
        </WikiSectionColumn>
        <QortalLogoImg
          src="/images/Devs/QortalLogo.webp"
          alt="Qortal Logo"
          width={350}
          height={350}
          quality={100}
        />
      </WikiSectionContainer>
    </>
  );
};

export default Devs;
