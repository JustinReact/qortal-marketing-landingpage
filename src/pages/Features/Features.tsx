import { useState } from "react";
import {
  BGShape,
  Container,
  FeaturesTextContainer,
  FeaturesTitleText,
  FlexRow,
  MainFeaturesCol,
  MainFeaturesRow,
  MainFeaturesText,
  TabButton,
  TabsButtonsRow,
  TabsRow,
  Divider,
  FeaturesBodyContainer,
  FeaturesBodyText,
  FeaturesImg,
  FeatureCardBody
} from "./Features-styles";
import { FeatureTabs } from "./FeatureTabs";
import QChatFeature1 from "../../images/Features/QChatFeature1.png";
import QChatFeature2 from "../../images/Features/QChatFeature2.png";
import QChatFeature3 from "../../images/Features/QChatFeature3.png";

interface FeatureInfo {
  title: string;
  text: string;
  image: string;
  smallTitle: string;
  smallText: React.ReactNode;
}

type FeatureKey = "feature1" | "feature2" | "feature3";

export interface FeatureData {
  [key: string]: FeatureInfo;
}

export const Features = () => {
  // Enum for the three features
  enum FeaturesEnum {
    QChat = "Q-Chat",
    QApps = "Q-Apps",
    Wallet = "Wallet"
  }

  // State for the current ,
  const [currentFeature, setCurrentFeature] = useState<FeaturesEnum>(
    FeaturesEnum.QChat
  );
  // State for the active tab
  const [activeTab, setActiveTab] = useState<FeatureKey>("feature1");

  const currentFeatureText = Object.freeze({
    [FeaturesEnum.QApps]: {
      feature1: {
        title: "Q-Chat Feature 1",
        text: "Q-Chat is a decentralized application store that allows developers to create and publish their own applications. Q-Chat is a decentralized application store that allows developers to create and publish their own applications. 244245 ",
        image: QChatFeature1,
        smallTitle: "Boilerplate",
        smallText: "This is boiler plate text !!"
      },
      feature2: {
        title: "Q-Apps Feature 2",
        text: "Q-Apps is a decentralized application store that allows developers to create and publish their own applications. Q-Apps is a decentralized application store that allows developers to create and publish their own applications.wfd  vsv d fds ",
        image: QChatFeature2,
        smallTitle: "Boilerplate",
        smallText: "This is boiler plate text !!"
      },
      feature3: {
        title: "Q-Apps Feature 3",
        text: "Q-Apps is a decentralized application store that allows developers to create and publish their own applications. Q-Apps is a decentralized application store that allows developers to create and publish their own applications. vdsdssdvsvvd",
        image: QChatFeature3,
        smallTitle: "Boilerplate",
        smallText: "This is boiler plate text !!"
      }
    },
    [FeaturesEnum.QChat]: {
      feature1: {
        title:
          "Decentralized Chatting, Directly on the Blockchain: Experience Q-Chat",
        text: "Dive into a truly decentralized chat experience with Q-Chat, seamlessly integrated into the Qortal blockchain. Exchange messages that stay active for a day and enjoy the added security of encrypted private messages, ensuring they're only seen by the intended recipient.",
        image: QChatFeature1,
        smallTitle: "Decentralized Chat",
        smallText: (
          <FeatureCardBody>
            <li>Encrypted private messages</li>
            <li>Messages stay active for a day</li>
          </FeatureCardBody>
        )
      },
      feature2: {
        title: "Join Niche Communities Tailored to Your Interests",
        text: "Discover like-minded individuals or create your own community within Qortal's Q-Chat. Whether you're an app developer or simply looking to connect with locals from a certain part of the world, there's a group waiting for you. Sending group invites by link is also very easy, allowing you to quickly grow your community!",
        image: QChatFeature2,
        smallTitle: "Find Your Tribe",
        smallText: (
          <FeatureCardBody>
            <li>Join or create niche communities tailored to your interests</li>
            <li>Easily share group invites</li>
          </FeatureCardBody>
        )
      },
      feature3: {
        title: "Q-Chat Feature 3",
        text: "Q-Chat is a decentralized application store that allows developers to create and publish their own applications. Q-Chat is a decentralized application store that allows developers to create and publish their own applications. vdsdssdvsvvd",
        image: QChatFeature3,
        smallTitle: "Boilerplate",
        smallText: "This is boiler plate text !!"
      }
    },
    [FeaturesEnum.Wallet]: {
      feature1: {
        title: "Wallet Feature 1",
        text: "Wallet is a decentralized application store that allows developers to create and publish their own applications. Wallet is a decentralized application store that allows developers to create and publish their own applications. 244245 ",
        image: QChatFeature1,
        smallTitle: "Boilerplate",
        smallText: "This is boiler plate text !!"
      },
      feature2: {
        title: "Wallet Feature 2",
        text: "Wallet is a decentralized application store that allows developers to create and publish their own applications. Wallet is a decentralized application store that allows developers to create and publish their own applications.wfd  vsv d fds ",
        image: QChatFeature2,
        smallTitle: "Boilerplate",
        smallText: "This is boiler plate text !!"
      },
      feature3: {
        title: "Wallet Feature 3",
        text: "Wallet is a decentralized application store that allows developers to create and publish their own applications. Wallet is a decentralized applicati on store that allows developers to create and publish their own applications. vdsdssdvsvvd",
        image: QChatFeature3,
        smallTitle: "Boilerplate",
        smallText: "This is boiler plate text !!"
      }
    }
  });

  return (
    <Container>
      <TabsRow>
        <TabsButtonsRow>
          <FlexRow>
            <TabButton
              className={
                currentFeature === FeaturesEnum.QChat ? "tabButtonActive" : ""
              }
              onClick={() => {
                if (currentFeature === FeaturesEnum.QChat) {
                  return;
                }
                setCurrentFeature(FeaturesEnum.QChat);
                setActiveTab("feature1");
              }}
            >
              <p>Q-Chat</p>
            </TabButton>
            <TabButton
              className={
                currentFeature === FeaturesEnum.QApps ? "tabButtonActive" : ""
              }
              onClick={() => {
                if (currentFeature === FeaturesEnum.QApps) {
                  return;
                }
                setCurrentFeature(FeaturesEnum.QApps);
                setActiveTab("feature1");
              }}
            >
              <p>Q-Apps</p>
            </TabButton>
            <TabButton
              className={
                currentFeature === FeaturesEnum.Wallet ? "tabButtonActive" : ""
              }
              onClick={() => {
                if (currentFeature === FeaturesEnum.Wallet) {
                  return;
                }
                setCurrentFeature(FeaturesEnum.Wallet);
                setActiveTab("feature1");
              }}
            >
              <p>Wallet</p>
            </TabButton>
          </FlexRow>
        </TabsButtonsRow>
      </TabsRow>
      <MainFeaturesRow container>
        <MainFeaturesCol xs={12} sm={6} style={{ padding: "0 20px 0 40px" }}>
          <FeaturesTextContainer>
            <FeaturesTitleText>
              {currentFeature === FeaturesEnum.QApps
                ? "Q-Apps"
                : currentFeature === FeaturesEnum.QChat
                ? "Q-Chat"
                : "Wallet"}
            </FeaturesTitleText>
            <Divider />
            <MainFeaturesText>
              {currentFeatureText[currentFeature][activeTab].title}
            </MainFeaturesText>
          </FeaturesTextContainer>
          <FeaturesBodyContainer>
            <FeaturesBodyText>
              {currentFeatureText[currentFeature][activeTab].text}
            </FeaturesBodyText>
          </FeaturesBodyContainer>
        </MainFeaturesCol>
        <MainFeaturesCol
          xs={12}
          sm={6}
          style={{ flexDirection: "row-reverse", alignSelf: "center" }}
        >
          <FeaturesImg
            src={currentFeatureText[currentFeature][activeTab].image}
            alt="feature-image"
          />
          <BGShape />
        </MainFeaturesCol>
      </MainFeaturesRow>
      <FeatureTabs
        featureData={currentFeatureText[currentFeature]}
        activeTab={activeTab}
        onTabChange={(tab: string) => setActiveTab(tab as FeatureKey)}
      />
    </Container>
  );
};
