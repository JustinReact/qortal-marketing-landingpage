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
  FeatureText
} from "./Promo-styles";
import { Grid, Box, useTheme } from "@mui/material";
import UnderlineScribble from "../../images/Promo/UnderlineScribble.webp";
import Arrow from "../../images/Promo/Arrow.webp";
import { OpenSourceSVG } from "../../components/Common/Icons/OpenSourceSVG";
import { HiveSVG } from "../../components/Common/Icons/HiveSVG";
import { ConnectSVG } from "../../components/Common/Icons/ConnectSVG";

export const Promo = () => {
  const theme = useTheme();
  return (
    <>
      <Container container>
        <Grid item sm={12} md={6}>
          <Header>
            Earn up to{" "}
            <span>
              500 QORT{" "}
              <img
                src={UnderlineScribble}
                alt="underline-scribble"
                className="underline-scribble"
              />
            </span>{" "}
            by Building a Q-App on Qortal!
            <ArrowImg src={Arrow} alt="arrow" />
          </Header>
          <ButtonRow>
            <DiscordButton
              onClick={() => {
                window.open("https://discord.gg/DRyQ79xqhd", "_blank");
              }}
            >
              JOIN DISCORD
            </DiscordButton>
          </ButtonRow>
        </Grid>
        <Grid
          item
          sm={12}
          md={6}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          PROMO VID GOES HERE
        </Grid>
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
      </Features>
    </>
  );
};
