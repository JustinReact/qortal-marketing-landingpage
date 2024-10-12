"use client";
import { FC, useRef, useState } from "react";
import ReactGA from "react-ga4";
import {
  BubbleBoard,
  BubbleCard,
  BubbleCardColored,
  CTAButton1,
  CTAButton2,
  Container,
  DoubleCaretRightIcon,
  DoubleCaretRightIcon2,
  DoubleCaretRightIcon3,
  ExtensionDesignImage,
  ExtensionScreenshotsImg,
  Header,
  QonnectFourCol,
  QonnectFourHeader,
  QonnectFourMainCol,
  QonnectFourMainRow,
  QonnectFourRow,
  QonnectFourSection,
  QonnectFourText,
  QortalWalletCard,
  QortalWalletCardImage,
  QortalWalletCards,
  QortalWalletDescription,
  QortalWalletHeader,
  QortalWalletSection,
  QortalWalletText,
  QortalWalletText2,
  SliderContainer,
  SliderText,
  StyledSlider,
  SubHeader,
  TopFold,
  TopFoldButtonRow,
  TopFoldCol,
  TopFoldRow,
  TopImageRow
} from "../../components/Extension/Extension-styles";
import { YoutubeVideoContainer } from "../../components/Qort/QORTPage-styles";
import { YoutubePlaceholder } from "../../components/YouTube/YoutubePlaceholder";
import { BridgeSVG } from "../Common/Icons/BridgeSVG";
import { useTheme } from "@mui/material";

const Extension = () => {
  const theme = useTheme();
  const extensionExplanationRef = useRef<HTMLDivElement | null>(null);

  const [sliderValue, setSliderValue] = useState<number>(0);
  const [showVideoPlayer, setShowVideoPlayer] = useState<boolean>(false);

  const handleSlideChange = async (event: any, value: number | number[]) => {
    const newValue = typeof value === "number" ? value : value[0];
    if (sliderValue < 95) {
      setSliderValue(0);
    } else {
      setSliderValue(newValue as number);
      ReactGA.event({
        category: "User",
        action: "Slid Qonnect Four slider",
        label: "Slid Qonnect Four slider"
      });
      window.open("https://www.qort.games", "_blank");
    }
  };

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
      <TopFold container>
        <TopFoldCol item md={12} lg={7}>
          <TopFoldRow>
            <SubHeader>INTRODUCING THE</SubHeader>
          </TopFoldRow>
          <TopFoldRow>
            <Header>QORTAL BROWSER EXTENSION</Header>
          </TopFoldRow>
        </TopFoldCol>
        <TopImageRow>
          <ExtensionScreenshotsImg
            src="/images/Extension/ExtensionScreenshots.png"
            alt="Screenshots of the Qortal Browser Extension"
            width={500}
            height={500}
          />
          <TopFoldCol>
            <TopFoldRow>
              <SubHeader>ITS MISSION:</SubHeader>
            </TopFoldRow>
            <TopFoldRow style={{ gap: "5px" }}>
              <SubHeader style={{ color: "#0085FF" }}>WEB2</SubHeader>
              <BridgeSVG
                height={"70"}
                width={"70"}
                color={theme.palette.text.primary}
              />
              <SubHeader style={{ color: "#0085FF" }}>WEB3</SubHeader>
            </TopFoldRow>
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
                  window.open(
                    "https://bit.ly/qortal-chrome-extension",
                    "_blank"
                  );
                }}
              >
                INSTALL
              </CTAButton2>
            </TopFoldButtonRow>
          </TopFoldCol>
        </TopImageRow>
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
      </TopFold>
      <QonnectFourSection>
        <QonnectFourHeader>
          Play{" "}
          <a
            href="https://www.qort.games"
            aria-label="Visit qort games official website"
            target="_blank"
            rel="noopener noreferrer"
          >
            QORT Games
          </a>
          : The Ultimate Web2 and Web3 Fusion Games!
        </QonnectFourHeader>
        <QonnectFourMainRow>
          <QonnectFourMainCol>
            <BubbleBoard>
              {/* Row 1 */}
              <BubbleCard />
              <BubbleCardColored />
              <BubbleCard>F</BubbleCard>
              <BubbleCard />
              <BubbleCard />
              <BubbleCard />
              <BubbleCard />
              <BubbleCard />
              <BubbleCard />
              {/* Row 2 */}
              <BubbleCard />
              <BubbleCard>Q</BubbleCard>
              <BubbleCardColored />
              <BubbleCard>N</BubbleCard>
              <BubbleCard>N</BubbleCard>
              <BubbleCard>E</BubbleCard>
              <BubbleCard>C</BubbleCard>
              <BubbleCard>T</BubbleCard>
              <BubbleCard />
              {/* Row 3 */}
              <BubbleCard />
              <BubbleCard />
              <BubbleCard>U</BubbleCard>
              <BubbleCardColored />
              <BubbleCard />
              <BubbleCard />
              <BubbleCard />
              <BubbleCard />
              <BubbleCard />
              {/* Row 4 */}
              <BubbleCard />
              <BubbleCard />
              <BubbleCard>R</BubbleCard>
              <BubbleCard />
              <BubbleCardColored />
              <BubbleCard />
              <BubbleCard />
              <BubbleCard />
              <BubbleCard />
            </BubbleBoard>
            <SliderContainer>
              <SliderText>SWIPE TO PLAY</SliderText>
              <StyledSlider
                value={sliderValue}
                onChange={(event, value) =>
                  setSliderValue(typeof value === "number" ? value : value[0])
                }
                onChangeCommitted={handleSlideChange}
                aria-labelledby="continuous-slider"
              />
              <DoubleCaretRightIcon height="38px" width="38px" color="none" />
              <DoubleCaretRightIcon2 height="38px" width="38px" color="none" />
              <DoubleCaretRightIcon3 height="38px" width="38px" color="none" />
            </SliderContainer>
          </QonnectFourMainCol>
          <QonnectFourCol>
            <QonnectFourRow>
              <QonnectFourText>
                Dive into <span style={{ fontWeight: "bold" }}>QONNECT4</span>,
                a thrilling Connect Four game crafted from scratch by our team.
              </QonnectFourText>
            </QonnectFourRow>
            <QonnectFourRow>
              <QonnectFourText>
                To <span style={{ fontWeight: "bold" }}>PLAY</span>, simply
                connect to your Qortal Wallet to approve a 0.25 QORT payment.
                The winner of a best-of-three match takes the total pot of 0.50
                QORT.
              </QonnectFourText>
            </QonnectFourRow>
            <QonnectFourRow>
              <QonnectFourText>
                Experience the seamless integration of Web2 entertainment and
                Web3 innovation, all powered by the{" "}
                <span style={{ fontStyle: "italic" }}>Qortal Blockchain</span>.
              </QonnectFourText>
            </QonnectFourRow>
          </QonnectFourCol>
        </QonnectFourMainRow>
      </QonnectFourSection>
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
        <QortalWalletCards >
          <QortalWalletCard>
            <QortalWalletCardImage
              src={"/images/Extension/QortalExtensionScreenshot1.png"}
              alt="Qortal Extension Screenshot"
              width={500}
              height={500}
            />
          </QortalWalletCard>
          <QortalWalletCard>
            <QortalWalletCardImage
              src={"/images/Extension/QortalExtensionScreenshot2.png"}
              alt="Second Qortal Extension Screenshot"
              width={500}
              height={500}
            />
          </QortalWalletCard>
          <QortalWalletCard>
            <QortalWalletCardImage
              src={"/images/Extension/QortalExtensionScreenshot3.png"}
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
              src={"/images/Extension/QortalExtensionScreenshot4.png"}
              alt="Fourth Extension Screenshot"
              width={500}
              height={500}
            />
          </QortalWalletCard>
          <QortalWalletCard>
            <QortalWalletCardImage
              src={"/images/Extension/QortalExtensionScreenshot5.png"}
              alt="Fifth Qortal Extension Screenshot"
              width={500}
              height={500}
            />
          </QortalWalletCard>
          <QortalWalletCard>
            <QortalWalletCardImage
              src={"/images/Extension/QortalExtensionScreenshot6.png"}
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

export default Extension;
