"use client";
import { useRef, useState } from "react";
import ReactGA from "react-ga4";
import {
  CTAButton1,
  CTAButton2,
  Container,
  ExtensionScreenshotsImg,
  Header,
  QortalWalletCard,
  QortalWalletCardImage,
  QortalWalletCards,
  QortalWalletDescription,
  QortalWalletHeader,
  QortalWalletSection,
  QortalWalletText,
  QortalWalletText2,
  SubHeader,
  SubHeaderBox,
  SubHeaderBoxImage,
  TopCard1,
  TopCard2,
  TopCard3,
  TopCardImage,
  TopCardSubContainer,
  TopCardSubTitle,
  TopCardTitle,
  TopFold,
  TopFoldButtonRow,
  TopFoldCol,
  TopFoldRow,
  TopFoldWordCol,
  TopCardRow,
  VideoBox
} from "../../components/LandingPage/LandingPage-styles";
import { YoutubeVideoContainer } from "../Qort/QORTPage-styles";
import { YoutubePlaceholder } from "../YouTube/YoutubePlaceholder";
import { BridgeSVG } from "../Common/Icons/BridgeSVG";
import { Typography, useTheme } from "@mui/material";
import QonnectFour from "../QonnectFour/QonnectFour";
import Features from "../Features/Features";
import { useRouter } from "next/navigation";

const LandingPage = () => {
  const theme = useTheme();
  const router = useRouter();
  const extensionExplanationRef = useRef<HTMLDivElement | null>(null);

  const [showVideoPlayer, setShowVideoPlayer] = useState<boolean>(false);

  const scrollToExplanation = () => {
    if (extensionExplanationRef?.current) {
      extensionExplanationRef?.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    }
  };

  const handleVideoClick = () => {
    setShowVideoPlayer((prevState) => !prevState);
  };

  return (
    <Container>
      <TopFold>
        <TopFoldCol>
          <TopFoldRow>
            <Header>QORTAL</Header>
          </TopFoldRow>
          <TopFoldRow>
            <Header style={{ color: "#0085FF" }}>ECOSYSTEM</Header>
          </TopFoldRow>
        </TopFoldCol>
        <TopFoldWordCol>
          <TopFoldRow>
            <SubHeader>
              <Typography>REDEFINING</Typography>
              <SubHeaderBox>
                THE REGULAR INTERNET
                <SubHeaderBoxImage
                  src={"/images/LandingPage/SpellingMistakeLine.png"}
                  quality={100}
                  width={594}
                  height={43}
                  alt={""}
                />
              </SubHeaderBox>
            </SubHeader>
          </TopFoldRow>
          <TopFoldRow>
            <SubHeader>
              <Typography>PIONEERING</Typography>
              <Typography style={{ fontWeight: "bold" }}>
                THE NEW INTERNET
              </Typography>
            </SubHeader>
          </TopFoldRow>
        </TopFoldWordCol>
      </TopFold>
      <TopCardRow>
        <TopCard1>
          <TopCardSubContainer>
            <TopCardTitle>COMMUNICATION</TopCardTitle>
            <TopCardSubTitle>Group-Encrypted Chats</TopCardSubTitle>
          </TopCardSubContainer>
          <TopCardImage
            src={"/images/Features/GroupEncryptedChats.png"}
            alt="Qortal Group Encrypted Chat Screenshot"
            width={1000}
            height={600}
            quality={100}
          />
        </TopCard1>
        <TopCard2>
          <TopCardSubContainer>
            <TopCardTitle>SOFTWARE DEVELOPMENT</TopCardTitle>
            <TopCardSubTitle>Q-Apps</TopCardSubTitle>
          </TopCardSubContainer>
          <TopCardImage
            src={"/images/Downloads/TrifectaScreenshot1.png"}
            alt="Qortal Q-Apps Screenshot"
            width={1000}
            height={600}
            quality={100}
          />
        </TopCard2>
        <TopCard3>
          <TopCardSubContainer>
            <TopCardTitle>CRYPTO</TopCardTitle>
            <TopCardSubTitle>Trading Platform & QORT</TopCardSubTitle>
          </TopCardSubContainer>
          <TopCardImage
            src={"/images/Downloads/TrifectaScreenshot1.png"}
            alt="Qortal Q-Apps Screenshot"
            width={1000}
            height={600}
            quality={100}
          />
        </TopCard3>
        <TopCard3>
          <TopCardSubContainer>
            <TopCardTitle>CRYPTO</TopCardTitle>
            <TopCardSubTitle>Trading Platform & QORT</TopCardSubTitle>
          </TopCardSubContainer>
          <TopCardImage
            src={"/images/Downloads/TrifectaScreenshot1.png"}
            alt="Qortal Q-Apps Screenshot"
            width={1000}
            height={600}
            quality={100}
          />
        </TopCard3>
      </TopCardRow>
      <TopFoldButtonRow>
        <CTAButton1
          onClick={() => {
            ReactGA.event({
              category: "User",
              action: "Clicked Learn How Button",
              label: "Learn How Button"
            });
            scrollToExplanation();
          }}
        >
          LEARN HOW
        </CTAButton1>
        <CTAButton2
          onClick={() => {
            ReactGA.event({
              category: "User",
              action: "Clicked Download Extension Button",
              label: "Download Extension Button"
            });
            router.push("/downloads");
          }}
        >
          DOWNLOAD
        </CTAButton2>
      </TopFoldButtonRow>
      <VideoBox>
        <YoutubeVideoContainer>
          {showVideoPlayer ? (
            <iframe
              src="https://www.youtube.com/embed/kSXApJcOqZU?autoplay=1&rel=0"
              loading="lazy"
              title="Introducing the Qortal Browser Extension"
              allowFullScreen
              allow="autoplay"
            ></iframe>
          ) : (
            <YoutubePlaceholder
              isModal={false}
              onClick={handleVideoClick}
              YoutubeThumbnail={
                "/images/Youtube/QortalBrowserExtensionThumbnail.png"
              }
              YoutubeTitle="Introducing the Qortal Browser Extension"
            />
          )}
        </YoutubeVideoContainer>
      </VideoBox>
      {/* <QonnectFour /> */}
      <Features />
      <QortalWalletSection ref={extensionExplanationRef}>
        <QortalWalletHeader>
          <a
            href="https://bit.ly/qortal-chrome-extension"
            aria-label="Visit the Chrome Store to download the Qortal Extension"
            target="_blank"
            rel="noopener noreferrer"
          >
            Qortal Wallet
          </a>
          : Bridging WEB2 and WEB3
        </QortalWalletHeader>
        <QortalWalletCards>
          <QortalWalletCard>
            <QortalWalletCardImage
              src={"/images/LandingPage/QortalExtensionScreenshot1.png"}
              alt="Qortal Extension Screenshot"
              width={500}
              height={500}
            />
          </QortalWalletCard>
          <QortalWalletCard>
            <QortalWalletCardImage
              src={"/images/LandingPage/QortalExtensionScreenshot2.png"}
              alt="Second Qortal Extension Screenshot"
              width={500}
              height={500}
            />
          </QortalWalletCard>
          <QortalWalletCard>
            <QortalWalletCardImage
              src={"/images/LandingPage/QortalExtensionScreenshot3.png"}
              alt="Third Qortal Extension Screenshot"
              width={500}
              height={500}
            />
          </QortalWalletCard>
        </QortalWalletCards>
        <QortalWalletDescription>
          <QortalWalletText>
            Qortal Wallet is a cutting-edge Chromium-based extension designed to
            seamlessly connect WEB2 and WEB3. It enables users to make payments
            within the Qortal Blockchain directly through WEB2 applications.
            Operating within the familiar WEB2 environment, Qortal Wallet
            facilitates decentralized transactions on the Qortal Blockchain, a
            true WEB3 ecosystem.
          </QortalWalletText>
          <QortalWalletText>
            Current Main Feature:
            <br />•{" "}
            <span style={{ fontWeight: "bold" }}>
              Use QORT as a Payment Method
            </span>
            : Easily integrate QORT payments on your own website, offering a
            secure and decentralized payment solution
          </QortalWalletText>
          <QortalWalletText>
            Upcoming Feature:
            <br />•{" "}
            <span style={{ fontWeight: "bold" }}>
              Website Authentication/Log In
            </span>
            : Future updates will allow users to authenticate and log in to
            websites using the Qortal Wallet extension, enhancing security and
            streamlining user access.
          </QortalWalletText>
        </QortalWalletDescription>
        <QortalWalletCards>
          <QortalWalletCard>
            <QortalWalletCardImage
              src={"/images/LandingPage/QortalExtensionScreenshot4.png"}
              alt="Fourth Extension Screenshot"
              width={500}
              height={500}
            />
          </QortalWalletCard>
          <QortalWalletCard>
            <QortalWalletCardImage
              src={"/images/LandingPage/QortalExtensionScreenshot5.png"}
              alt="Fifth Qortal Extension Screenshot"
              width={500}
              height={500}
            />
          </QortalWalletCard>
          <QortalWalletCard>
            <QortalWalletCardImage
              src={"/images/LandingPage/QortalExtensionScreenshot6.png"}
              alt="Sixth Qortal Extension Screenshot"
              width={500}
              height={500}
            />
          </QortalWalletCard>
        </QortalWalletCards>
        <QortalWalletText2>
          Experience the future of decentralized finance with Qortal Wallet
          <br /> Where the power of WEB3 meets the convenience of WEB2
        </QortalWalletText2>
      </QortalWalletSection>
    </Container>
  );
};

export default LandingPage;
