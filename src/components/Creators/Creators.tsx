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
  VideoBox
} from "../Creators/Creators-styles";
import ReactGA from "react-ga4";
import { Grid, useTheme } from "@mui/material";
import { OpenSourceSVG } from "../Common/Icons/OpenSourceSVG";
import { HiveSVG } from "../Common/Icons/HiveSVG";
import { ConnectSVG } from "../Common/Icons/ConnectSVG";
import { YoutubeVideoContainer } from "../Qort/QORTPage-styles";
import { YoutubePlaceholder } from "../YouTube/YoutubePlaceholder";
import { useState } from "react";

const Creators = () => {
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
                src="https://www.youtube.com/embed/pWyB8tNZZ40?si=hRHI1Q25ab5M2AA7&autoplay=1&rel=0"
                loading="lazy"
                title="The internet is dying"
                allowFullScreen
                allow="autoplay"
              ></iframe>
            ) : (
              <YoutubePlaceholder
                className="landing-page-video"
                isModal={false}
                onClick={handleVideoClick}
                YoutubeThumbnail={
                  "/images/Youtube/The internet is dying thumbnail.png"
                }
                YoutubeTitle="The internet is dying"
              />
            )}
          </YoutubeVideoContainer>
        </VideoBox>
      </Container>
      <Features container>
        <FeatureContainer item sm={12} md={4}>
          <IconContainer1>
            <OpenSourceSVG color={"#ffffff"} height="40" width="40" />
          </IconContainer1>
          <SubHeader>Open-Source</SubHeader>
          <FeatureText>
            Qortal's open-source code allows for full transparency and invites
            all developers to contribute, fostering trust and collective growth.
          </FeatureText>
        </FeatureContainer>
        <FeatureContainer item sm={12} md={4}>
          <IconContainer2>
            <HiveSVG color={"#ffffff"} height="40" width="40" />
          </IconContainer2>
          <SubHeader>Decentralized</SubHeader>
          <FeatureText>
            Decentralization ensures Qortal is censorship-proof and not
            controlled by a single entity, promising you freedom and equity.
          </FeatureText>
        </FeatureContainer>
        <FeatureContainer item sm={12} md={4}>
          <IconContainer3>
            <ConnectSVG color={"#ffffff"} height="40" width="40" />
          </IconContainer3>
          <SubHeader>Peer-To-Peer</SubHeader>
          <FeatureText>
            Qortal's P2P technology ensures that you have direct control over
            your transactions, eliminating intermediaries for greater
            transparency and enhanced security.
          </FeatureText>
        </FeatureContainer>
                  <ButtonRow>
                    <DiscordButton
              onClick={() => {
                ReactGA.event({
                  category: "User",
                  action: "Clicked Install Qortal Button on Promo page",
                  label: "Clicked Install Qortal Button on Promo page"
                });
                window.open("https://bit.ly/qortal-chrome-extension", "_blank");
              }}
            >
              INSTALL QORTAL 
            </DiscordButton>
          </ButtonRow>
      </Features>
    </>
  );
};

export default Creators;
