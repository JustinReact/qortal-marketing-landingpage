"use client";
import { useState, useRef, useEffect } from "react";
import { Box } from "@mui/material";
import {
  BGShape,
  Container,
  FeaturesTextContainer,
  FeaturesTitleText,
  MainFeaturesCol,
  MainFeaturesRow,
  MainFeaturesText,
  TabButton,
  TabsRow,
  Divider,
  FeaturesBodyContainer,
  FeaturesBodyText,
  FeaturesImg,
  TriangleShape,
  HexagonShape,
  FeaturesImgContainer,
  InstallQortalButton,
  FeaturesImgCol
} from "./Features-styles";
import ReactGA from "react-ga4";
import { useRouter } from "next/navigation";

interface FeatureInfo {
  title: string;
  text: string;
  image: string;
}

export interface FeatureData {
  [key: string]: FeatureInfo;
}

const Features = () => {
  const router = useRouter();

  // Enum for the three features
  enum FeaturesEnum {
    Group_Chat = "Group-Chat",
    Qort_Trade = "Qort.Trade",
    Q_Apps = "Q-Apps"
  }

  const topPageRef = useRef<HTMLDivElement>(null);

  // State for the current ,
  const [currentFeature, setCurrentFeature] = useState<FeaturesEnum>(
    FeaturesEnum.Group_Chat
  );

  const currentFeatureText = Object.freeze({
    [FeaturesEnum.Group_Chat]: {
      title: "Group Encrypted Chats: Secure and Private Messaging",
      text: "Stay connected with confidence through Group Encrypted Chats in Qortal Hub and Qortal Go. Create and participate in group conversations with end-to-end encryption, ensuring your messages stay secure and private. No centralized servers, no third-party data access—just secure communication on the network. Whether you're discussing personal matters, community initiatives, or private business, your conversations are safe from censorship and prying eyes.",
      image: "/images/Features/GroupEncryptedChats.png"
    },
    [FeaturesEnum.Qort_Trade]: {
      title: "Decentralized Trading with Qort.Trade",
      text: "Qort.Trade in Qortal Hub and Qortal Go offers a peer-to-peer trading experience, enabling users to acquire QORT using Litecoin directly on the Qortal blockchain without intermediaries. Trade securely, with no reliance on centralized exchanges, ensuring you retain full control of your assets at all times.",
      image: "/images/Features/Qort_TradeScreenshot.png"
    },
    [FeaturesEnum.Q_Apps]: {
      title: "Qortal Q-Apps: Web3 Applications at Your Fingertips",
      text: "Qortal Hub and Qortal Go make it easy to use Q-Apps built on the Qortal network. Open the Q-Apps section, click an app, and you're ready to go. No complex setup—just seamless access to apps for video, games, messaging, publishing, and more.",
      image: "/images/Features/Q-AppsStore.png"
    }
  });

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: "API"
    });
  }, []);

  return (
    <Container ref={topPageRef}>
      <TabsRow>
            <TabButton
              className={
                currentFeature === FeaturesEnum.Group_Chat
                  ? "tabButtonActive"
                  : ""
              }
              onClick={() => {
                if (currentFeature === FeaturesEnum.Group_Chat) {
                  return;
                }
                setCurrentFeature(FeaturesEnum.Group_Chat);
              }}
            >
              <p>Group Encrypted Chats</p>
            </TabButton>
            <TabButton
              className={
                currentFeature === FeaturesEnum.Qort_Trade
                  ? "tabButtonActive"
                  : ""
              }
              onClick={() => {
                if (currentFeature === FeaturesEnum.Qort_Trade) {
                  return;
                }
                setCurrentFeature(FeaturesEnum.Qort_Trade);
              }}
            >
              <p>Qort.Trade</p>
            </TabButton>
            <TabButton
              className={
                currentFeature === FeaturesEnum.Q_Apps ? "tabButtonActive" : ""
              }
              onClick={() => {
                if (currentFeature === FeaturesEnum.Q_Apps) {
                  return;
                }
                setCurrentFeature(FeaturesEnum.Q_Apps);
              }}
            >
              <p>Q-Apps</p>
            </TabButton>
      </TabsRow>
      <MainFeaturesRow container>
        <MainFeaturesCol
          xs={12}
          sm={12}
          md={12}
          lg={6}
        >
          <FeaturesTextContainer>
            <FeaturesTitleText>
              {currentFeature === FeaturesEnum.Qort_Trade
                ? "Qort.Trade"
                : currentFeature === FeaturesEnum.Group_Chat
                ? "Group Encrypted Chats"
                : "Wallet"}
            </FeaturesTitleText>
            <Divider />
            <MainFeaturesText>
              {currentFeatureText[currentFeature].title}
            </MainFeaturesText>
          </FeaturesTextContainer>
          <FeaturesBodyContainer>
            <FeaturesBodyText>
              {currentFeatureText[currentFeature].text}
            </FeaturesBodyText>
          </FeaturesBodyContainer>
        </MainFeaturesCol>
        <FeaturesImgCol
          xs={12}
          sm={12}
          md={12}
          lg={6}
        >
          <FeaturesImgContainer>
            <FeaturesImg
              src={currentFeatureText[currentFeature].image}
              alt="feature-image"
              width={1200}
              height={1000}
            />
            {currentFeature === FeaturesEnum.Group_Chat ? (
              <BGShape />
            ) : currentFeature === FeaturesEnum.Qort_Trade ? (
              <TriangleShape />
            ) : (
              <HexagonShape />
            )}
          </FeaturesImgContainer>
        </FeaturesImgCol>
      </MainFeaturesRow>
      <Box>
        <InstallQortalButton
          onClick={() => {
            ReactGA.event({
              category: "User",
              action: "Clicked Install Qortal Features Homepage",
              label: "Clicked Install Qortal Features Homepage"
            });
            router.push("/downloads");
          }}
        >
          Install Qortal
        </InstallQortalButton>
      </Box>
    </Container>
  );
};

export default Features;
