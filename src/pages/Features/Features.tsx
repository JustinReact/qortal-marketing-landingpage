import { useState, useRef } from "react";
import { Box } from "@mui/material";
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
  FeatureCardBody,
  TriangleShape,
  HexagonShape
} from "./Features-styles";
import { FeatureTabs } from "./FeatureTabs";
import QChatFeature1 from "../../images/Features/QChatFeature1.png";
import QChatFeature2 from "../../images/Features/QChatFeature2.png";
import QChatFeature3 from "../../images/Features/QChatFeature3.png";
import QFundScreenshot from "../../images/Features/QFundScreenshot.png";
import QShopScreenshot from "../../images/Home/Q-ShopScreenshot.png";
import QBlogScreenshot from "../../images/Features/QBlogScreenshot.png";

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

  const topPageRef = useRef<HTMLDivElement>(null);

  // State for the current ,
  const [currentFeature, setCurrentFeature] = useState<FeaturesEnum>(
    FeaturesEnum.QChat
  );
  // State for the active tab
  const [activeTab, setActiveTab] = useState<FeatureKey>("feature1");

  const currentFeatureText = Object.freeze({
    [FeaturesEnum.QApps]: {
      feature1: {
        title:
          "Empower Your Projects with Qortal's Transparent and Censorship-Resistant Q-Fund",
        text: "Q-Fund allows your to crowdsource funds for your projects and ideas. In a world where financial control and transparency are more important than ever, Q-Fund offers a completely decentralized platform for crowdfunding. Say goodbye to middlemen and hello to 100% of your funds going directly to your cause. With every transaction recorded on Qortal's immutable Data Network, contributors have clear visibility into their donations, fostering an environment of trust and honesty. Whether it's for an innovative startup, a community project, or a personal cause, your fundraising on Qortal is resilient against any form of censorship, ensuring that your voice can't be silenced based on the nature of your campaign.",
        image: QFundScreenshot,
        smallTitle: "Transparent, direct, and uncensored fundraising",
        smallText: (
          <FeatureCardBody>
            <li>
              Direct and Decentralized: Funds go directly to the campaign owner
              without intermediaries.
            </li>
            <li>
              Full Transparency: Every contribution is recorded on the
              blockchain, ensuring transparency and preventing fraud.
            </li>
            <li>
              Anti-Censorship: Raise funds for any cause without the fear of
              censorship or platform restrictions.
            </li>
          </FeatureCardBody>
        )
      },
      feature2: {
        title: "Q-Shop: A Private, Secure, Decentralized Marketplace",
        text: "Welcome to Q-Shop, a marketplace revolution within the Qortal ecosystem, where the power of purchase and sale resides securely in your hands. In an era where privacy is a premium, Q-Shop stands out by ensuring every order is encrypted, every transaction is private, and every exchange is conducted on a trustless, decentralized platform. Whether you're buying home-grown produce or unique goods like Australian Natural Zeolite Powder, Q-Shop offers a seamless, safe, and completely private shopping experience. With Q-Shop, say goodbye to prying eyes and embrace a marketplace that respects your anonymity while providing a rich array of products and services.",
        image: QShopScreenshot,
        smallTitle:
          "A decentralized marketplace for secure, private transactions",
        smallText: (
          <FeatureCardBody>
            <li>
              Privacy-Centric Shopping: All orders are encrypted, protecting
              your purchase details.
            </li>
            <li>
              Decentralized Transactions: Buy and sell without the oversight of
              central authorities.
            </li>
            <li>
              Secure Exchanges: Conduct business in a safe environment with
              trustless transactions.
            </li>
            <li>
              Freedom of Commerce: Enjoy a marketplace uncensored and open to
              all kinds of products.
            </li>
          </FeatureCardBody>
        )
      },
      feature3: {
        title: "Q-Apps Feature 3",
        text: "Q-Apps is a decentralized application store that allows developers to create and publish their own applications. Q-Apps is a decentralized application store that allows developers to create and publish their own applications. vdsdssdvsvvd",
        image: QBlogScreenshot,
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
        title: "Instant Photo Sharing in Total Privacy",
        text: "Capture and share moments instantly within the Qortal network. With Q-Chat, you can swiftly send photos to friends or groups knowing there's no middle-man peering over. Your shared memories remain between you and your chosen recipients, thanks to the platform's direct peer-to-peer connection. Furthermore, you can also easily find pictures that have been sent previously by yourself or others using the image history feature.",
        image: QChatFeature3,
        smallTitle: "Quick Photo Sharing: Privacy First",
        smallText: (
          <FeatureCardBody>
            <li>
              Direct Peer-to-Peer Transfers: Send images directly to your
              contacts with no intermediaries.
            </li>
            <li>
              Seamless Integration: Share photos as easily as sending a text
              message within the chat.
            </li>
          </FeatureCardBody>
        )
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
    <Container ref={topPageRef}>
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
          <Box style={{ position: "relative" }}>
            <FeaturesImg
              src={currentFeatureText[currentFeature][activeTab].image}
              alt="feature-image"
            />
            {activeTab === "feature1" ? (
              <BGShape />
            ) : activeTab === "feature2" ? (
              <TriangleShape />
            ) : (
              <HexagonShape />
            )}
          </Box>
        </MainFeaturesCol>
      </MainFeaturesRow>
      <FeatureTabs
        featureData={currentFeatureText[currentFeature]}
        activeTab={activeTab}
        onTabChange={(tab: string) => {
          setActiveTab(tab as FeatureKey);
          if (topPageRef.current) {
            topPageRef.current.scrollIntoView({ behavior: "smooth" });
          }
        }}
      />
    </Container>
  );
};
