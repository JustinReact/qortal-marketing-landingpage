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
  QTradeSectionImgBox,
  OpenSourceSection,
  OpenSourceSectionImgBox,
  OpenSourceBox,
  OpenSourceImg,
  FinalText,
  GroupEncryptedHeader,
  QMailDescriptionCol,
  QMailDescriptionCol as QChatDescriptionCol,
  QTradeDescriptionCol,
  QORTDescriptionCol,
  OpenSourceDescriptionCol,
  TopCardLockIcon,
  TopCardSubContainerCrypto,
  QAppsDescriptionCol
} from "../../components/LandingPage/LandingPage-styles";
import { YoutubeVideoContainer } from "../Qort/QORTPage-styles";
import { YoutubePlaceholder } from "../YouTube/YoutubePlaceholder";
import { Typography, useTheme } from "@mui/material";
import Features from "../Features/Features";
import { useRouter } from "next/navigation";
import QonnectFour from "../QonnectFour/QonnectFour";
import Modal from "../Common/Modal/Modal";

const LandingPage = () => {
  const theme = useTheme();
  const router = useRouter();
  const topCard1Feature = useRef<HTMLDivElement | null>(null);
  const topCard2Feature = useRef<HTMLDivElement | null>(null);
  const topCard3Feature = useRef<HTMLDivElement | null>(null);
  const topCard4Feature = useRef<HTMLDivElement | null>(null);
  const topOfPageRef = useRef<HTMLDivElement | null>(null);
  const middleOfPageRef = useRef<HTMLDivElement | null>(null);

  const [showVideoPlayer, setShowVideoPlayer] = useState<boolean>(false);
  const [showButton, setShowButton] = useState(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [lockedTop, setLockedTop] = useState<boolean>(true);
  const [locked, setLocked] = useState<boolean>(true);
  const [showOpenSourceText, setShowOpenSourceText] = useState<boolean>(false);

  const scrollToTopCard1Feature = () => {
    if (topCard1Feature?.current) {
      topCard1Feature?.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    }
  };

  const scrollToTopCard2Feature = () => {
    if (topCard2Feature?.current) {
      topCard2Feature?.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    }
  };

  const scrollToTopCard3Feature = () => {
    if (topCard3Feature?.current) {
      topCard3Feature?.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    }
  };

  const scrollToTopCard4Feature = () => {
    if (topCard4Feature?.current) {
      topCard4Feature?.current.scrollIntoView({
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
              <Typography style={{ fontWeight: 300 }}>REDEFINING</Typography>
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
              <Typography style={{ fontWeight: 300 }}>PIONEERING</Typography>
              <Typography style={{ fontWeight: "bold" }}>
                THE NEW INTERNET
              </Typography>
            </SubHeader>
          </TopFoldRow>
        </TopFoldWordCol>
      </TopFold>
      <TopCardRow>
        <TopCard1
          role="button"
          aria-label="Group-Encrypted Chats - COMMUNICATION"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              scrollToTopCard1Feature();
            }
          }}
          onClick={() => {
            scrollToTopCard1Feature();
          }}
        >
          <TopCardSubContainer>
            <TopCardTitle>COMMUNICATION</TopCardTitle>
            <TopCardSubTitle>Group-Encrypted Chats</TopCardSubTitle>
          </TopCardSubContainer>
          <TopCardImage
            src={"/images/LandingPage/GroupEncryptedChats.webp"}
            alt="Qortal Group Encrypted Chat Screenshot"
            width={1920}
            height={1080}
            quality={100}
          />
        </TopCard1>
        <TopCard2
          role="button"
          aria-label="Qortal Q-Apps - SOFTWARE DEVELOPMENT"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              scrollToTopCard2Feature();
            }
          }}
          onClick={() => {
            scrollToTopCard2Feature();
          }}
        >
          <TopCardSubContainer>
            <TopCardTitle>SOFTWARE DEVELOPMENT</TopCardTitle>
            <TopCardSubTitle>Q-Apps</TopCardSubTitle>
          </TopCardSubContainer>
          <TopCardImage
            src={"/images/LandingPage/QAppsScreenshot.webp"}
            alt="Qortal Q-Apps Screenshot"
            width={1920}
            height={1080}
            quality={100}
          />
        </TopCard2>
        <TopCard3
          role="button"
          aria-label="Trading Platform and QORT - CRYPTO"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              scrollToTopCard3Feature();
            }
          }}
          onClick={() => {
            scrollToTopCard3Feature();
          }}
        >
          <TopCardSubContainerCrypto>
            <TopCardTitle>CRYPTO</TopCardTitle>
            <TopCardSubTitle>Trading Platform & QORT</TopCardSubTitle>
          </TopCardSubContainerCrypto>
          <TopCardImage
            src={"/images/LandingPage/Q-TradeScreenshot.webp"}
            alt="Qortal Q-Trade Screenshot"
            width={1920}
            height={1080}
            quality={100}
          />
        </TopCard3>
        <TopCard4
          role="button"
          aria-label="Code Transparency - OPEN SOURCE"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              scrollToTopCard4Feature();
            }
          }}
          onClick={() => {
            scrollToTopCard4Feature();
          }}
          onMouseEnter={() => {
            setLockedTop(false);
          }}
          onMouseLeave={() => {
            setLockedTop(true);
          }}
        >
          <TopCardSubContainer>
            <TopCardTitle>FULL TRANSPARENCY</TopCardTitle>
            <TopCardSubTitle>Open Source Codebase</TopCardSubTitle>
          </TopCardSubContainer>
          <TopCardImage
            src={"/images/LandingPage/BlueRectangleTop.png"}
            alt="Qortal Q-Apps Screenshot"
            width={1920}
            height={1080}
            quality={100}
          />
          <TopCardLockIcon
            src={
              lockedTop
                ? "/images/LandingPage/DarkRedLock.png"
                : "/images/LandingPage/RedLockUnlocked.png"
            }
            alt=""
            width={70}
            height={90}
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
            scrollToTopCard1Feature();
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
      {/* <Features /> */}

      <QortalFeaturesSection>
        <MiddleOfPageRef ref={middleOfPageRef} />
        <GroupSection ref={topCard1Feature}>
          <SectionCol style={{alignItems: "flex-start"}}>
            <GroupSectionImgBox>
              <SectionImg
                src={"/images/LandingPage/Q-ChatScreenshot.webp"}
                alt="Qortal Group Encrypted Chat Screenshot"
                width={1920}
                height={1080}
                quality={100}
                onClick={() => {
                  setOpenModal(true);
                  setSelectedImage("/images/LandingPage/Q-ChatScreenshot.webp");
                }}
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
            <QMailDescriptionCol>
              <SectionDescriptionTitle>Q-Mail</SectionDescriptionTitle>
              <SectionDescription>
                Say goodbye to snoopy inboxes. With Q-Mail, your messages are
                fully private and stay between you and your recipient—no
                middleman, no data mining, just you in control.
              </SectionDescription>
            </QMailDescriptionCol>
          </SectionCol>
          <SectionCol style={{alignItems: "flex-start"}}>
            <GroupEncryptedHeader>
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
            </GroupEncryptedHeader>
            <QChatDescriptionCol>
              <SectionDescriptionTitle>Q-Chat</SectionDescriptionTitle>
              <SectionDescription>
                Fully encrypted, group-friendly, and built right into Qortal.
                Stay connected without compromising your privacy.
              </SectionDescription>
              <SectionDownloadLink href="/downloads">
                Download 🠪
              </SectionDownloadLink>
            </QChatDescriptionCol>
            <GroupSectionImgBox2>
              <SectionImg
                src={"/images/LandingPage/QMailScreenshot.webp"}
                alt="Qortal Q-Mail Screenshot"
                width={1920}
                height={1080}
                quality={100}
                onClick={() => {
                  setOpenModal(true);
                  setSelectedImage("/images/LandingPage/QMailScreenshot.webp");
                }}
              />
            </GroupSectionImgBox2>
          </SectionCol>
        </GroupSection>
        <QAppsSection ref={topCard2Feature}>
          <QAppsSectionRow>
            <SectionCol>
              <QAppsSectionImgBox style={{ marginBottom: 0 }}>
                <SectionImg
                  src={"/images/LandingPage/QAppsScreenshot.webp"}
                  alt="Qortal Q-Apps Screenshot"
                  width={1920}
                  height={1080}
                  quality={100}
                  onClick={() => {
                    setOpenModal(true);
                    setSelectedImage(
                      "/images/LandingPage/QAppsScreenshot.webp"
                    );
                  }}
                />
              </QAppsSectionImgBox>
            </SectionCol>
            <SectionCol style={{alignItems: "flex-start"}}>
              <SectionHeader>
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
              <QAppsDescriptionCol>
                <SectionDescription>
                  Build, share, and run apps directly on the Qortal blockchain.
                  Whether it’s tools, games, or new ideas, Q-Apps lets you go
                  decentralized—with just a touch of JavaScript know-how.
                </SectionDescription>
                <SectionDownloadLink href="/downloads">
                  Download 🠪
                </SectionDownloadLink>
              </QAppsDescriptionCol>
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
              src={
                theme.palette.mode === "dark"
                  ? "/images/LandingPage/Q-AppsLibraryDark.png"
                  : "/images/LandingPage/Q-AppsLibraryLight.png"
              }
              alt="Q-Apps Library Logo"
              width={272}
              height={80}
              quality={100}
            />
            <QAppsLogo
              src={
                theme.palette.mode === "dark"
                  ? "/images/LandingPage/Q-TubeDark.png"
                  : "/images/LandingPage/Q-TubeLight.png"
              }
              alt="Q-Tube Logo"
              width={272}
              height={80}
              quality={100}
            />
          </QAppsLogosRow>
        </QAppsSection>
        <QTradeSection ref={topCard3Feature}>
          <SectionCol style={{alignItems: "flex-start"}}>
            <SectionHeader>
              <SectionLinesImg
                src={"/images/LandingPage/YellowLines.png"}
                alt=""
                width={40}
                height={63}
                quality={100}
              />
              <SectionHeaderCol>
                <SectionHeaderSubtitle>CRYPTO</SectionHeaderSubtitle>
                <SectionHeaderTitle>Trading Platform</SectionHeaderTitle>
              </SectionHeaderCol>
            </SectionHeader>
            <QTradeDescriptionCol>
              <SectionDescriptionTitle>Q-Trade</SectionDescriptionTitle>
              <SectionDescription>
                Trade crypto the Qortal way—peer-to-peer, secure, and no
                middlemen. Swap QORT and other supported coins directly on our
                decentralized trading platform.
              </SectionDescription>
            </QTradeDescriptionCol>
            <QonnectFour />
          </SectionCol>
          <SectionCol style={{alignItems: "flex-start"}}>
            <QTradeSectionImgBox>
              <SectionImg
                src={"/images/LandingPage/Q-TradeScreenshot.webp"}
                alt="Qortal Q-Trade Screenshot"
                width={1920}
                height={1080}
                quality={100}
                onClick={() => {
                  setOpenModal(true);
                  setSelectedImage("/images/LandingPage/Q-TradeScreenshot.webp");
                }}
              />
            </QTradeSectionImgBox>
            <SectionHeader>
              <SectionLinesImg
                src={"/images/LandingPage/YellowLines.png"}
                alt=""
                width={40}
                height={63}
                quality={100}
              />
              <SectionHeaderCol>
                <SectionHeaderSubtitle>CRYPTO</SectionHeaderSubtitle>
                <SectionHeaderTitle>Currency</SectionHeaderTitle>
              </SectionHeaderCol>
            </SectionHeader>
            <QORTDescriptionCol>
              <SectionDescriptionTitle>QORT</SectionDescriptionTitle>
              <SectionDescription>
                Fuel the Qortal ecosystem with QORT! Use it to trade, tip,
                donate, and even bet in games. It’s more than a coin; it’s your
                key to a decentralized world.
              </SectionDescription>
              <SectionDownloadLink
                href="https://qort.trade"
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy 🠪
              </SectionDownloadLink>
            </QORTDescriptionCol>
          </SectionCol>
        </QTradeSection>
        <OpenSourceSection ref={topCard4Feature}>
          <SectionCol>
            <OpenSourceSectionImgBox>
              <OpenSourceBox
                style={{ cursor: !showOpenSourceText ? "pointer" : "auto" }}
                role="button"
                tabIndex={0}
                aria-label="Open Source Codebase"
                onMouseEnter={() => setLocked(false)}
                onMouseLeave={() => setLocked(true)}
                onClick={() => {
                  setShowOpenSourceText(true);
                }}
                showOpenSourceText={showOpenSourceText}
              >
                {!showOpenSourceText && (
                  <OpenSourceImg
                    src={
                      locked
                        ? "/images/LandingPage/Lock.png"
                        : "/images/LandingPage/WhiteLock.png"
                    }
                    alt="Lock icon"
                    width={70}
                    height={90}
                    quality={100}
                    hovered={locked}
                  />
                )}
                <SectionCol
                  style={{
                    zIndex:  !showOpenSourceText ? 1 : 10,
                    filter: !showOpenSourceText ? "blur(10px)" : "blur(0px)"
                  }}
                >
                  <SectionHeader>
                    <SectionLinesImg
                      src={"/images/LandingPage/RedLines.png"}
                      alt=""
                      width={40}
                      height={63}
                      quality={100}
                    />
                    <SectionHeaderCol>
                      <SectionHeaderSubtitle style={{ color: "#ffffff" }}>
                        FULL TRANSPARENCY
                      </SectionHeaderSubtitle>
                      <SectionHeaderTitle style={{ color: "#ffffff" }}>
                        Open Source
                      </SectionHeaderTitle>
                    </SectionHeaderCol>
                  </SectionHeader>
                  <OpenSourceDescriptionCol>
                    <SectionDescription style={{ color: "#ffffff" }}>
                      Built on open-source code, Qortal ensures full
                      transparency. No secrets, no hidden agendas. Just a
                      blockchain you can trust.
                    </SectionDescription>
                    <SectionDownloadLink href="https://github.com/Qortal" target="_blank" rel="noopener noreferrer">
                      GitHub 🠪
                    </SectionDownloadLink>
                  </OpenSourceDescriptionCol>
                </SectionCol>
              </OpenSourceBox>
            </OpenSourceSectionImgBox>
            <SectionHeader>
              <FinalText>
                Experience the future of decentralization with Qortal, where the
                power of WEB3 meets the convenience of WEB2
              </FinalText>
            </SectionHeader>
          </SectionCol>
        </OpenSourceSection>
      </QortalFeaturesSection>
      {showButton && (
        <ScrollToTopButton onClick={scrollToTop}>
          BACK TO THE TOP
        </ScrollToTopButton>
      )}
      {openModal && (
        <Modal
          images={[selectedImage]}
          openModal={openModal}
          onClickFunc={() => {
            setOpenModal(false);
            setSelectedImage("");
          }}
        ></Modal>
      )}
    </Container>
  );
};

export default LandingPage;
