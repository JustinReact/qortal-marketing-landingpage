"use client";
import { useEffect, useRef, useState } from "react";
import ReactGA from "react-ga4";
import {
  CTAButton1,
  CTAButton2,
  Container,
  Header,
  QortalFeaturesSection,
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
  VideoBox,
  TopOfPageRef,
  MiddleOfPageRef,
  ScrollToTopButton,
  TopCard4,
  GroupSection,
  SectionCol,
  GroupSectionImgBox,
  SectionImg,
  SectionHeader,
  SectionHeaderCol,
  SectionHeaderSubtitle,
  SectionHeaderTitle,
  SectionLinesImg,
  SectionDescriptionCol,
  SectionDescriptionTitle,
  SectionDescription,
  GroupSectionImgBox2,
  QAppsSection,
  QAppsSectionImgBox,
  SectionDownloadLink,
  QAppsLogosRow,
  QAppsLogo,
  QAppsSectionRow,
  QTradeSection,
  QTradeSectionImgBox
} from "../../components/LandingPage/LandingPage-styles";
import { YoutubeVideoContainer } from "../Qort/QORTPage-styles";
import { YoutubePlaceholder } from "../YouTube/YoutubePlaceholder";
import { Box, Typography, useTheme } from "@mui/material";
import Features from "../Features/Features";
import { useRouter } from "next/navigation";

const LandingPage = () => {
  const theme = useTheme();
  const router = useRouter();
  const qortalFeaturesRef = useRef<HTMLDivElement | null>(null);
  const topOfPageRef = useRef<HTMLDivElement | null>(null);
  const middleOfPageRef = useRef<HTMLDivElement | null>(null);

  const [showVideoPlayer, setShowVideoPlayer] = useState<boolean>(false);
  const [showButton, setShowButton] = useState(false);

  const scrollToExplanation = () => {
    if (qortalFeaturesRef?.current) {
      qortalFeaturesRef?.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    }
  };

  const handleVideoClick = () => {
    setShowVideoPlayer((prevState) => !prevState);
  };

  // Intersection observer to show scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      if (!middleOfPageRef.current) return;
      const rect = middleOfPageRef.current?.getBoundingClientRect();
      const isScrolledPast = rect && rect.top < 0; // Element is above the viewport
      const notAtTop = window.scrollY > 0; // User is not at the top of the page

      // Show button only if the user has scrolled past the element and is not at the top
      setShowButton(isScrolledPast && notAtTop);
    };

    // Listen for scroll events
    window.addEventListener("scroll", handleScroll);

    // Run on mount to initialize state
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    if (topOfPageRef.current) {
      topOfPageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Container>
      <TopOfPageRef ref={topOfPageRef} />
      <TopFold>
        <TopFoldCol>
          <TopFoldRow>
            <Header>QORTAL</Header>
          </TopFoldRow>
          <TopFoldRow>
            <Header style={{ color: theme.palette.customBlue.main }}>
              ECOSYSTEM
            </Header>
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
            src={"/images/LandingPage/Q-TradeScreenshot.png"}
            alt="Qortal Q-Trade Screenshot"
            width={1000}
            height={600}
            quality={100}
          />
        </TopCard3>
        <TopCard4>
          <TopCardSubContainer>
            <TopCardTitle>OPEN SOURCE</TopCardTitle>
            <TopCardSubTitle>Open Source Codebase</TopCardSubTitle>
          </TopCardSubContainer>
          <TopCardImage
            src={"/images/Downloads/TrifectaScreenshot1.png"}
            alt="Qortal Q-Apps Screenshot"
            width={1000}
            height={600}
            quality={100}
          />
        </TopCard4>
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
      {/* <Features /> */}

      <QortalFeaturesSection ref={qortalFeaturesRef}>
        <MiddleOfPageRef ref={middleOfPageRef} />
        <GroupSection>
          <SectionCol>
            <GroupSectionImgBox>
              <SectionImg
                src={"/images/LandingPage/Q-ChatScreenshot.png"}
                alt="Qortal Group Encrypted Chat Screenshot"
                width={1000}
                height={600}
                quality={100}
              />
            </GroupSectionImgBox>
            <SectionHeader>
              <SectionLinesImg
                src={"/images/LandingPage/GreenLines.png"}
                alt=""
                width={40}
                height={63}
                quality={100}
              />
              <SectionHeaderCol>
                <SectionHeaderSubtitle>COMMUNICATION</SectionHeaderSubtitle>
                <SectionHeaderTitle>Group-Encrypted Mailing</SectionHeaderTitle>
              </SectionHeaderCol>
            </SectionHeader>
            <SectionDescriptionCol style={{ margin: "98px 145px 0 49px" }}>
              <SectionDescriptionTitle>Q-Mail</SectionDescriptionTitle>
              <SectionDescription>
                Say goodbye to snoopy inboxes. With Q-Mail, your messages are
                fully private and stay between you and your recipient—no
                middleman, no data mining, just you in control.
              </SectionDescription>
            </SectionDescriptionCol>
          </SectionCol>
          <SectionCol>
            <SectionHeader style={{ justifyContent: "center" }}>
              <SectionLinesImg
                src={"/images/LandingPage/GreenLines.png"}
                alt=""
                width={40}
                height={63}
                quality={100}
              />
              <SectionHeaderCol>
                <SectionHeaderSubtitle>COMMUNICATION</SectionHeaderSubtitle>
                <SectionHeaderTitle>Group-Encrypted Chats</SectionHeaderTitle>
              </SectionHeaderCol>
            </SectionHeader>
            <SectionDescriptionCol style={{ marginLeft: "193px" }}>
              <SectionDescriptionTitle>Q-Chat</SectionDescriptionTitle>
              <SectionDescription>
                Fully encrypted, group-friendly, and built right into Qortal.
                Stay connected without compromising your privacy.
              </SectionDescription>
              <SectionDownloadLink href="/downloads">
                Download 🠪
              </SectionDownloadLink>
            </SectionDescriptionCol>
            <GroupSectionImgBox2>
              <SectionImg
                src={"/images/LandingPage/Q-MailScreenshot.png"}
                alt="Qortal Q-Mail Screenshot"
                width={1000}
                height={600}
                quality={100}
              />
            </GroupSectionImgBox2>
          </SectionCol>
        </GroupSection>
        <QAppsSection>
          <QAppsSectionRow>
            <SectionCol>
              <QAppsSectionImgBox style={{ marginBottom: 0 }}>
                <SectionImg
                  src={"/images/Downloads/TrifectaScreenshot1.png"}
                  alt="Qortal Q-Apps Screenshot"
                  width={1000}
                  height={600}
                  quality={100}
                />
              </QAppsSectionImgBox>
            </SectionCol>
            <SectionCol>
              <SectionHeader style={{ justifyContent: "center" }}>
                <SectionLinesImg
                  src={"/images/LandingPage/BlueLines.png"}
                  alt=""
                  width={40}
                  height={63}
                  quality={100}
                />
                <SectionHeaderCol>
                  <SectionHeaderSubtitle>
                    SOFTWARE DEVELOPMENT
                  </SectionHeaderSubtitle>
                  <SectionHeaderTitle>Q-Apps</SectionHeaderTitle>
                </SectionHeaderCol>
              </SectionHeader>
              <SectionDescriptionCol style={{ marginLeft: "185px" }}>
                <SectionDescription>
                  Build, share, and run apps directly on the Qortal blockchain.
                  Whether it’s tools, games, or new ideas, Q-Apps lets you go
                  decentralized—with just a touch of JavaScript know-how.
                </SectionDescription>
                <SectionDownloadLink href="/downloads">
                  Download 🠪
                </SectionDownloadLink>
              </SectionDescriptionCol>
            </SectionCol>
          </QAppsSectionRow>
          <QAppsLogosRow>
            <QAppsLogo
              src={
                theme.palette.mode === "dark"
                  ? "/images/LandingPage/Q-TradeDark.png"
                  : "/images/LandingPage/Q-TradeLight.png"
              }
              alt="Q-Trade Logo"
              width={272}
              height={80}
              quality={100}
            />
            <QAppsLogo
              src={theme.palette.mode === "dark" ? "/images/LandingPage/Q-AppsLibraryDark.png" : "/images/LandingPage/Q-AppsLibraryLight.png"}
              alt="Q-Apps Library Logo"
              width={272}
              height={80}
              quality={100}
            />
            <QAppsLogo
              src={theme.palette.mode === "dark" ? "/images/LandingPage/Q-TubeDark.png" : "/images/LandingPage/Q-TubeLight.png"}
              alt="Q-Tube Logo"
              width={272}
              height={80}
              quality={100}
            />
          </QAppsLogosRow>
        </QAppsSection>
        <QTradeSection>
          <SectionCol>
            <QTradeSectionImgBox>
              <SectionImg
                src={"/images/LandingPage/Q-TradeScreenshot.png"}
                alt="Qortal Q-Trade Screenshot"
                width={1000}
                height={600}
                quality={100}
              />
            </QTradeSectionImgBox>
          </SectionCol>
        </QTradeSection>
      </QortalFeaturesSection>
      {showButton && (
        <ScrollToTopButton onClick={scrollToTop}>
          BACK TO THE TOP
        </ScrollToTopButton>
      )}
    </Container>
  );
};

export default LandingPage;
