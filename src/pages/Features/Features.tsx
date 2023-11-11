import { useState, useRef } from "react";
import { UAParser } from "ua-parser-js";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
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
  HexagonShape,
  GatewayButton,
  FeaturesImgContainer,
  InstallQortalButton
} from "./Features-styles";
import { FeatureTabs } from "./FeatureTabs";
import QChatFeature1 from "../../images/Features/QChatFeature1.png";
import QChatFeature2 from "../../images/Features/QChatFeature2.png";
import QChatFeature3 from "../../images/Features/QChatFeature3.png";
import QFundScreenshot from "../../images/Features/QFundScreenshot.png";
import QShopScreenshot from "../../images/Home/Q-ShopScreenshot.png";
import QBlogScreenshot from "../../images/Features/BlogScreenshot.png";
import WalletScreenshot from "../../images/Features/WalletScreenshot.png";
import TradePortalScreenshot from "../../images/Features/TradePortalScreenshot.png";
import AutoBuyScreenshot from "../../images/Features/AutoBuyScreenshot.png";
import { setOS } from "../../state/features/osSlice";

interface FeatureInfo {
  title: string;
  text: string;
  image: string;
  smallTitle: string;
  smallText: React.ReactNode;
  buttonComponent: React.ReactNode | null;
}

type FeatureKey = "feature1" | "feature2" | "feature3";

export interface FeatureData {
  [key: string]: FeatureInfo;
}

export const Features = () => {
  // Determine which OS they're on
  const parser = new UAParser();

  const dispatch = useDispatch();

  const navigate = useNavigate();

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
        title: "Q-Fund: Transparent and Censorship-Resistant Crowdfunding",
        text: "Q-Fund allows your to crowdsource funds for your projects and ideas. In a world where financial control and transparency are more important than ever, Q-Fund offers a completely decentralized platform for crowdfunding. Say goodbye to middlemen and hello to 100% of your funds going directly to your cause. With every transaction recorded on Qortal's immutable Data Network, contributors have clear visibility into their donations, fostering an environment of trust and honesty. Whether it's for an innovative startup, a community project, or a personal cause, your fundraising on Qortal is resilient against any form of censorship, ensuring that your voice can't be silenced based on the nature of your campaign.",
        image: QFundScreenshot,
        smallTitle: "Q-Fund",
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
        ),
        buttonComponent: (
          <GatewayButton
            style={{ backgroundColor: "#584af8" }}
            onClick={() => {
              window.open("https://qortal.link/APP/Q-fund", "_blank");
            }}
          >
            Try Out Q-Fund
          </GatewayButton>
        )
      },
      feature2: {
        title: "Q-Shop: A Private, Secure, Decentralized Marketplace",
        text: "Welcome to Q-Shop, a marketplace revolution within the Qortal ecosystem, where the power of purchase and sale resides securely in your hands. In an era where privacy is a premium, Q-Shop stands out by ensuring every order is encrypted, every transaction is private, and every exchange is conducted on a trustless, decentralized platform. Whether you're buying home-grown produce or unique goods like Australian Natural Zeolite Powder, Q-Shop offers a seamless, safe, and completely private shopping experience. With Q-Shop, say goodbye to prying eyes and embrace a marketplace that respects your anonymity while providing a rich array of products and services.",
        image: QShopScreenshot,
        smallTitle: "Q-Shop",
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
        ),
        buttonComponent: (
          <GatewayButton
            style={{ backgroundColor: "#142eee" }}
            onClick={() => {
              window.open("https://qortal.link/APP/Q-shop", "_blank");
            }}
          >
            Try Out Q-Shop
          </GatewayButton>
        )
      },
      feature3: {
        title: "Q-Blog: The Decentralized Canvas for Your Thoughts",
        text: "Discover the new era of blogging with Q-Blog, where freedom of expression meets the cutting edge of decentralization. Share your voice, unhindered and unfiltered, on a platform that champions absolute privacy and peer-to-peer interactions. Q-Blog isn't just another blogging site; you can also use it as a simple website builder to share with the Qortal community!",
        image: QBlogScreenshot,
        smallTitle: "Q-Blog",
        smallText: (
          <FeatureCardBody>
            <li>
              Decentralized Publishing: Your words, your control. Without
              central oversight, your content remains yours, invulnerable to
              censorship.
            </li>
            <li>
              Integrated Web Builder: Go beyond traditional posts. Craft a
              single blog entry or weave an entire website with ease, sharing
              your full vision with the community.
            </li>
            <li>
              Multimedia-Ready: Enrich your narrative with images, files, audio,
              and videos, all seamlessly embedded into your personal blog space.
            </li>
          </FeatureCardBody>
        ),
        buttonComponent: (
          <GatewayButton
            style={{ backgroundColor: "#8356b1" }}
            onClick={() => {
              window.open("https://qortal.link/APP/Q-blog", "_blank");
            }}
          >
            Try Out Q-Blog
          </GatewayButton>
        )
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
        ),
        buttonComponent: null
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
        ),
        buttonComponent: null
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
        ),
        buttonComponent: null
      }
    },
    [FeaturesEnum.Wallet]: {
      feature1: {
        title: "All-in-One Decentralized Wallet",
        text: "The Qortal wallet page is a one-stop solution for crypto enthusiasts who value decentralization. With Qortal, you can effortlessly manage and trade up to seven different cryptocurrencies, ensuring that your portfolio is as diverse as it is secure. Experience seamless transactions with our user-friendly interface designed for both beginners and seasoned traders.",
        image: WalletScreenshot,
        smallTitle: "Qortal Wallet",
        smallText: (
          <FeatureCardBody>
            <li>
              Multi-Coin Support: Trade and store Bitcoin, Litecoin, Dogecoin,
              Digibyte, Ravencoin, Pirate Chain, and QORT with ease
            </li>
            <li>
              Decentralized: Fully decentralized trading ensures that you have
              complete control over your assets without any intermediaries.
            </li>
            <li>
              Transparent Transactions: Keep track of all your transactions with
              detailed information on payments, receipts, and automated
              transfers.
            </li>
          </FeatureCardBody>
        ),
        buttonComponent: null
      },
      feature2: {
        title: "Trade Portal: A Decentralized Exchange for Qortal",
        text: "Dive into the future of trading with Qortal's Trade Portal, where you can seamlessly exchange between seven different cryptocurrencies in a completely decentralized marketplace. Our cutting-edge platform empowers you to automatically buy QORT with LTC, offering unparalleled control and security over your trades. Bid farewell to centralized exchanges and embrace the autonomy of Qortal's Trade Portal.",
        image: TradePortalScreenshot,
        smallTitle: "Trade Portal",
        smallText: (
          <FeatureCardBody>
            <li>
              Direct Trading Pairs: Effortlessly exchange QORT with LTC, along
              with other available pairs, in just a few clicks.
            </li>
            <li>
              Decentralized Exchange: Enjoy trading with no middleman, ensuring
              your transactions are direct and secure.
            </li>
            <li>
              Transparent Order Book: Monitor open sell and buy orders with full
              visibility.
            </li>
          </FeatureCardBody>
        ),
        buttonComponent: null
      },
      feature3: {
        title: "Maximize Your Trading with Qortal's Auto Buy Feature",
        text: "Qortal introduces the Auto Buy feature, an innovative tool designed to enhance your trading strategy on the Trade Portal. This feature allows for the placement of private buy orders that remain visible only to you. Unlike public sell orders, Auto Buy orders are not recorded on the Qortal blockchain, ensuring your trading intentions stay discreet. Set your desired QORT amount and price, then let Auto Buy handle the rest - efficiently executing your trades, starting from the lowest price upwards, while you maintain full control.",
        image: AutoBuyScreenshot,
        smallTitle: "Auto-Buy",
        smallText: (
          <FeatureCardBody>
            <li>
              Private Buy Orders: Set buy orders that are visible to you alone
              for added privacy.
            </li>
            <li>
              User-Friendly Setup: Easily place Auto Buy orders by specifying
              the amount of QORT to buy and the maximum price you're willing to
              pay.
            </li>
            <li>
              Continuous Operation: Keep the UI running and Auto Buy active
              while you multitask, exploring other Qortal UI features.
            </li>
          </FeatureCardBody>
        ),
        buttonComponent: null
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
          <FeaturesImgContainer
            style={{
              flexDirection: currentFeature === "Q-Apps" ? "column" : "row",
              gap: currentFeature === "Q-Apps" ? "80px" : "0px"
            }}
          >
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
            {currentFeatureText[currentFeature][activeTab].buttonComponent && (
              <>
                {currentFeatureText[currentFeature][activeTab].buttonComponent}
              </>
            )}
          </FeaturesImgContainer>
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
      <Box>
        <InstallQortalButton
          onClick={() => {
            const userOS = parser.getOS().name;
            if (userOS?.includes("Android" || "iOS")) {
              navigate("/");
              dispatch(setOS(""));
            } else if (userOS?.includes("Mac")) {
              navigate("/");
              dispatch(setOS("mac"));
            } else if (userOS?.includes("Windows")) {
              navigate("/");
              dispatch(setOS("windows"));
            } else if (userOS?.includes("Linux")) {
              navigate("/");
              dispatch(setOS("linux"));
            } else {
              navigate("/");
              dispatch(setOS(""));
            }
          }}
        >
          Install Qortal
        </InstallQortalButton>
      </Box>
    </Container>
  );
};
