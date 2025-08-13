"use client";
import {
  ArrowImg,
  Container,
  Header,
  DiscordButton,
  ButtonRow,
  SubHeader,
  Features,
  FeatureContainer,
  IconContainer1,
  IconContainer2,
  IconContainer3,
  FeatureText,
  VideoBox,
  LockIcon,
  CTAButton
} from "../Creators/Creators-styles";
import ReactGA from "react-ga4";
import { Grid, useTheme } from "@mui/material";
import { HiveSVG } from "../Common/Icons/HiveSVG";
import { ConnectSVG } from "../Common/Icons/ConnectSVG";
import { YoutubeVideoContainer } from "../Qort/QORTPage-styles";
import { YoutubePlaceholder } from "../YouTube/YoutubePlaceholder";
import { useState } from "react";
import { PlayCircleSVG } from "../Common/Icons/PlayCircleSVG";
import { QortalSVG } from "../Common/Icons/QortalSVG";

const Creators = () => {
  const theme = useTheme();
  const [showVideoPlayer, setShowVideoPlayer] = useState<boolean>(false);

  const handleVideoClick = () => {
    setShowVideoPlayer((prevState) => !prevState);
  };

  return (
    <>
      <Container container>
        <Grid item xs={12} sm={12}>
          <Header>
            Your Videos. Your Audience. No Takedowns. Ever.
            {/* <ArrowImg
              src={"/images/Promo/Arrow.webp"}
              alt="arrow"
              width={500}
              height={500}
            /> */}
          </Header>
        </Grid>
        <VideoBox>
          <YoutubeVideoContainer>
            {showVideoPlayer ? (
              <iframe
                src="https://www.youtube.com/embed/M01coUo0dVA?si=gJC29726RcXxxJsH&autoplay=1&rel=0"
                loading="lazy"
                title="How To Publish Videos To Q-Tube On Qortal"
                allowFullScreen
                allow="autoplay"
              ></iframe>
            ) : (
              <YoutubePlaceholder
                className="creator-page-video"
                isModal={false}
                onClick={handleVideoClick}
                YoutubeThumbnail={
                  "/images/Creators/UncensorableVideos.png"
                }
                YoutubeTitle="How To Publish Videos To Q-Tube On Qortal"
              />
            )}
          </YoutubeVideoContainer>
        </VideoBox>
      </Container>
      <Features container>
        <FeatureContainer item sm={12} md={4}>
          <IconContainer1>
            <PlayCircleSVG color={"#ffffff"} height="55" width="55" />
            <LockIcon color={"#8162f0"} height="13" width="13" />
          </IconContainer1>
          <SubHeader>Own Your Channel</SubHeader>
          <FeatureText>
            On Qortal, your channel lives on a peer-to-peer network, not on a
            company’s servers. That means that there are no takedowns, no
            strikes, and no sudden loss of your entire audience because of
            something you may have done wrong!
          </FeatureText>
        </FeatureContainer>
        <FeatureContainer item sm={12} md={4}>
          <IconContainer2>
            <QortalSVG color={"#ffffff"} height="40" width="40" />
          </IconContainer2>
          <SubHeader>Keep 100% of Your Earnings</SubHeader>
          <FeatureText>
            There are no ads, no middlemen, and no platform cuts. You earn QORT
            through superlikes on your content, and keep 100% of the earnings!{" "}
          </FeatureText>
        </FeatureContainer>
        <FeatureContainer item sm={12} md={4}>
          <IconContainer3>
            <ConnectSVG color={"#ffffff"} height="42" width="42" />
          </IconContainer3>
          <SubHeader>Reach Your Audience Every Time</SubHeader>
          <FeatureText>
            No algorithms hiding your work. Every subscriber sees what you
            publish, exactly when you publish it.
          </FeatureText>
        </FeatureContainer>
        <ButtonRow>
          <CTAButton
            onClick={() => {
              ReactGA.set({ dimension1: "Landing Page Download Button" }); // Event-level dimension
              ReactGA.event({
                category: "User",
                action: "Clicked Main Download CTA Button",
                label: "Clicked Main Download CTA Button"
              });
              // router.push("/downloads");
            }}
          >
            BOOK A CALL
          </CTAButton>
        </ButtonRow>
      </Features>
    </>
  );
};

export default Creators;
