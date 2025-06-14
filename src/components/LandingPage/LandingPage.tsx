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
  QAppsDescriptionCol,
  RightArrow,
  RadioButtons,
  TopFoldMainCol,
  Header2,
  SubHeader2,
  SectionHeaderMobile,
  SectionMobileRow,
  SectionMobileHeader,
  QChatSectionCol,
  QTradeSectionCol,
  QonnectFourMobileCol,
  FinalTextContainer,
  OpenSourceMobileSection,
  EbookPromoTitle,
  EbookPromoSubTitle,
  EbookPromoContainer,
  EbookPromoButton,
  EbookPromoTextCol
} from "../../components/LandingPage/LandingPage-styles";
import { YoutubeVideoContainer } from "../Qort/QORTPage-styles";
import { YoutubePlaceholder } from "../YouTube/YoutubePlaceholder";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { useRouter } from "next/navigation";
import QonnectFour from "../QonnectFour/QonnectFour";
import Modal from "../Common/Modal/Modal";
import { ScrollToTopButton, TopArrow } from "../Wiki/Wiki-styles";
import { CommonModal } from "../Common/CommonModal/CommonModal";
import { DownloadSVG } from "../Common/Icons/DownloadSVG";
import { BookSVG } from "../Common/Icons/BookSVG";

const LandingPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const router = useRouter();
  const isSmallToMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

  const topCard1Feature = useRef<HTMLDivElement | null>(null);
  const topCard2Feature = useRef<HTMLDivElement | null>(null);
  const topCard3Feature = useRef<HTMLDivElement | null>(null);
  const topCard4Feature = useRef<HTMLDivElement | null>(null);
  const topOfPageRef = useRef<HTMLDivElement | null>(null);
  const middleOfPageRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const [showVideoPlayer, setShowVideoPlayer] = useState<boolean>(false);
  const [showButton, setShowButton] = useState(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [lockedTop, setLockedTop] = useState<boolean>(true);
  const [locked, setLocked] = useState<boolean>(true);
  const [showOpenSourceText, setShowOpenSourceText] = useState<boolean>(false);
  const [activeCard, setActiveCard] = useState(0);
  const [firstTimeVisitor, setFirstTimeVisitor] = useState<boolean>(false);

  // Display download ebook modal for first time visitors
  useEffect(() => {
    const isFirstTimeVisitor = localStorage.getItem("isFirstTimeVisitor");

    if (!isFirstTimeVisitor) {
      // Perform actions for first-time visitors
      setFirstTimeVisitor(true);
      // Set the flag in localStorage
      localStorage.setItem("isFirstTimeVisitor", "false");
    } else {
      return;
    }
  }, []);

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

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = cardRefs.findIndex(
            (ref) => ref.current === entry.target
          );
          setActiveCard(index);
        }
      });
    }, observerOptions);

    cardRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      cardRefs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [cardRefs]);

  return (
    <Container>
      <TopOfPageRef ref={topOfPageRef} />
      <TopFold>
        <TopFoldCol>
          <TopFoldRow>
            <Header>QORTAL</Header>
          </TopFoldRow>
          <TopFoldRow>
            <Header2 style={{}}>ECOSYSTEM</Header2>
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
            <SubHeader2>
              <Typography style={{ fontWeight: 300 }}>PIONEERING</Typography>
              <Typography style={{ fontWeight: "bold" }}>
                THE NEW INTERNET
              </Typography>
            </SubHeader2>
          </TopFoldRow>
        </TopFoldWordCol>
      </TopFold>
      <TopFoldMainCol>
        <TopCardRow>
          <TopCard1
            ref={cardRefs[0]}
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
            ref={cardRefs[1]}
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
            ref={cardRefs[2]}
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
            ref={cardRefs[3]}
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
        <RadioButtons>
          {[0, 1, 2, 3].map((index) => (
            <input
              key={index}
              type="radio"
              name="topCard"
              checked={activeCard === index}
              readOnly
              aria-label={`Card ${index + 1}`}
            />
          ))}
        </RadioButtons>
      </TopFoldMainCol>
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
            ReactGA.set({ dimension1: "Landing Page Download Button" }); // Event-level dimension
            ReactGA.event({
              category: "User",
              action: "Clicked Main Download CTA Button",
              label: "Clicked Main Download CTA Button"
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
      <QortalFeaturesSection>
        <MiddleOfPageRef ref={middleOfPageRef} />

        {/* Groups Section */}

        <GroupSection ref={topCard1Feature}>
          <SectionCol style={{ alignItems: "flex-start" }}>
            <SectionMobileHeader>Q-Mail</SectionMobileHeader>
            <GroupSectionImgBox>
              <SectionImg
                src={
                  isMobile
                    ? "/images/LandingPage/QMailScreenshotMobile.webp"
                    : "/images/LandingPage/Q-ChatScreenshot.webp"
                }
                alt={
                  isMobile
                    ? "Qortal Q-Mail Screenshot"
                    : "Qortal Group Encrypted Chat Screenshot"
                }
                width={1920}
                height={1080}
                quality={100}
                onClick={() => {
                  if (isMobile) return;
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
          <QChatSectionCol>
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
                Fully encrypted for private groups, user-friendly, and built
                right into Qortal. Stay connected without compromising your
                privacy.
              </SectionDescription>
              <SectionDownloadLink
                href="/downloads"
                onClick={() => {
                  ReactGA.set({ dimension1: "Landing Page Download Button" }); // Event-level dimension
                  ReactGA.event({
                    category: "User",
                    action: "Clicked Download Q-Chat Button",
                    label: "Clicked Download Q-Chat Button"
                  });
                }}
              >
                Download{" "}
                <RightArrow
                  height={"20"}
                  width="20"
                  color={theme.palette.customBlue.main}
                />
              </SectionDownloadLink>
            </QChatDescriptionCol>
            <GroupSectionImgBox2>
              <SectionImg
                src={
                  isMobile
                    ? "/images/LandingPage/Q-ChatScreenshotMobile.webp"
                    : "/images/LandingPage/QMailScreenshot.webp"
                }
                alt={
                  isMobile
                    ? "Qortal Group Encrypted Chat Screenshot"
                    : "Qortal Q-Mail Screenshot"
                }
                width={1920}
                height={1080}
                quality={100}
                onClick={() => {
                  if (isMobile) return;
                  setOpenModal(true);
                  setSelectedImage("/images/LandingPage/QMailScreenshot.webp");
                }}
              />
            </GroupSectionImgBox2>
            <SectionMobileHeader>Q-Chat</SectionMobileHeader>
            <SectionHeaderMobile>
              <SectionHeaderCol>
                <SectionMobileRow>
                  <SectionHeaderSubtitle>COMMUNICATION</SectionHeaderSubtitle>
                  <SectionLinesImg
                    src={"/images/LandingPage/GreenStripesMobile.png"}
                    alt=""
                    width={217}
                    height={10}
                    quality={100}
                  />
                </SectionMobileRow>
                <SectionHeaderTitle>Group-Encrypted Chats</SectionHeaderTitle>
              </SectionHeaderCol>
            </SectionHeaderMobile>
          </QChatSectionCol>
        </GroupSection>

        {/* Q-Apps Section */}

        <QAppsSection ref={topCard2Feature}>
          <SectionHeaderMobile>
            <SectionHeaderCol>
              <SectionHeaderSubtitle>
                SOFTWARE DEVELOPMENT
              </SectionHeaderSubtitle>
              <SectionLinesImg
                src={"/images/LandingPage/BlueStripesMobile.png"}
                alt=""
                width={174}
                height={4}
                quality={100}
              />
            </SectionHeaderCol>
          </SectionHeaderMobile>
          <QAppsSectionRow>
            <SectionMobileHeader>Q-Apps</SectionMobileHeader>
            <SectionCol>
              <QAppsSectionImgBox>
                <SectionImg
                  src={
                    isMobile
                      ? "/images/LandingPage/QAppsScreenshotMobile.webp"
                      : "/images/LandingPage/QAppsScreenshot.webp"
                  }
                  alt="Qortal Q-Apps Screenshot"
                  width={isMobile ? 440 : 1920}
                  height={isMobile ? 214 : 1080}
                  quality={100}
                  onClick={() => {
                    if (isMobile) return;
                    setOpenModal(true);
                    setSelectedImage(
                      "/images/LandingPage/QAppsScreenshot.webp"
                    );
                  }}
                />
              </QAppsSectionImgBox>
            </SectionCol>
            <SectionCol style={{ alignItems: "flex-start" }}>
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
                  Build, share, and run apps directly on the{" "}
                  <span style={{ fontWeight: "bold" }}>Qortal blockchain</span>.
                  Whether it’s tools, games, or new ideas, Q-Apps lets you go
                  decentralized—with just a touch of JavaScript know-how.
                </SectionDescription>
                <SectionDownloadLink
                  href="/downloads"
                  onClick={() => {
                    ReactGA.set({ dimension1: "Landing Page Download Button" }); // Event-level dimension
                    ReactGA.event({
                      category: "User",
                      action: "Clicked Download Q-Apps Button",
                      label: "Clicked Download Q-Apps Button"
                    });
                  }}
                >
                  Download{" "}
                  <RightArrow
                    height={"20"}
                    width="20"
                    color={theme.palette.customBlue.main}
                  />
                </SectionDownloadLink>
              </QAppsDescriptionCol>
            </SectionCol>
          </QAppsSectionRow>
          <QAppsLogosRow>
            <QAppsLogo
              style={{ display: isMobile ? "none" : "block" }}
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
              style={{ opacity: isMobile ? "0.5" : "1" }}
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
              style={{ display: isMobile ? "none" : "block" }}
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

        {/* Q-Trade Section */}

        <QTradeSection ref={topCard3Feature}>
          <QTradeSectionCol>
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
            {isMobile ? (
              <QORTDescriptionCol>
                <SectionDescriptionTitle>QORT</SectionDescriptionTitle>
                <SectionDescription>
                  Fuel the Qortal ecosystem with QORT! Use it to trade, tip,
                  donate, and even bet in games. It’s more than a coin; it’s
                  your key to a decentralized world.
                </SectionDescription>
                <SectionDownloadLink
                  href="https://qort.trade"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    ReactGA.event({
                      category: "User",
                      action: "Clicked Buy QORT Button",
                      label: "Clicked Buy QORT Button"
                    });
                  }}
                >
                  Buy{" "}
                  <RightArrow
                    height={"20"}
                    width="20"
                    color={theme.palette.customBlue.main}
                  />
                </SectionDownloadLink>
              </QORTDescriptionCol>
            ) : (
              <QTradeDescriptionCol>
                <SectionDescriptionTitle>Q-Trade</SectionDescriptionTitle>
                <SectionDescription>
                  Trade crypto the Qortal way—peer-to-peer, secure, and no
                  middlemen. Swap QORT and other supported coins directly on our
                  decentralized trading platform.
                </SectionDescription>
              </QTradeDescriptionCol>
            )}
            <QonnectFourMobileCol>
              <SectionMobileHeader>QORT</SectionMobileHeader>
              <QonnectFour />
            </QonnectFourMobileCol>
          </QTradeSectionCol>
          <SectionCol style={{ alignItems: "flex-start" }}>
            <SectionMobileHeader>Trading Platform</SectionMobileHeader>
            <QTradeSectionImgBox>
              <SectionImg
                src={
                  isMobile
                    ? "/images/LandingPage/Q-TradeScreenshotMobile.webp"
                    : "/images/LandingPage/Q-TradeScreenshot.webp"
                }
                alt="Qortal Q-Trade Screenshot"
                width={1920}
                height={1080}
                quality={100}
                onClick={() => {
                  if (isMobile) return;
                  setOpenModal(true);
                  setSelectedImage(
                    "/images/LandingPage/Q-TradeScreenshot.webp"
                  );
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
            {!isMobile ? (
              <QORTDescriptionCol>
                <SectionDescriptionTitle>QORT</SectionDescriptionTitle>
                <SectionDescription>
                  Fuel the Qortal ecosystem with QORT! Use it to trade, tip,
                  donate, and even bet in games. It’s more than a coin; it’s
                  your key to a decentralized world.
                </SectionDescription>
                <SectionDownloadLink
                  href="https://qort.trade"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buy{" "}
                  <RightArrow
                    height={"20"}
                    width="20"
                    color={theme.palette.customBlue.main}
                  />
                </SectionDownloadLink>
              </QORTDescriptionCol>
            ) : (
              <QTradeDescriptionCol>
                <SectionDescriptionTitle>Q-Trade</SectionDescriptionTitle>
                <SectionDescription>
                  Trade crypto the Qortal way—peer-to-peer, secure, and no
                  middlemen. Swap QORT and other supported coins directly on our
                  decentralized trading platform.
                </SectionDescription>
              </QTradeDescriptionCol>
            )}
          </SectionCol>
          <SectionHeaderMobile>
            <SectionHeaderCol>
              <SectionMobileRow>
                <SectionHeaderSubtitle>CRYPTO</SectionHeaderSubtitle>
                <SectionLinesImg
                  src={"/images/LandingPage/YellowStripesMobile.png"}
                  alt=""
                  width={217}
                  height={10}
                  quality={100}
                />
              </SectionMobileRow>
              <SectionHeaderTitle>Trading & Currency</SectionHeaderTitle>
            </SectionHeaderCol>
          </SectionHeaderMobile>
        </QTradeSection>

        {/* Open Source Section */}

        <OpenSourceSection ref={topCard4Feature}>
          <SectionCol>
            <SectionHeaderMobile>
              <SectionHeaderCol>
                <SectionHeaderSubtitle>FULL TRANSPARENCY</SectionHeaderSubtitle>
                <SectionLinesImg
                  src={"/images/LandingPage/RedStripesMobile.png"}
                  alt=""
                  width={141}
                  height={4}
                  quality={100}
                />
              </SectionHeaderCol>
            </SectionHeaderMobile>
            <SectionMobileHeader>Open Source</SectionMobileHeader>
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
                    zIndex: !showOpenSourceText ? 1 : 10,
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
                    <SectionDownloadLink
                      href="https://github.com/Qortal"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub{" "}
                      <RightArrow
                        height={"20"}
                        width="20"
                        color={theme.palette.customBlue.main}
                      />
                    </SectionDownloadLink>
                  </OpenSourceDescriptionCol>
                </SectionCol>
              </OpenSourceBox>
            </OpenSourceSectionImgBox>
            <OpenSourceMobileSection>
              <OpenSourceDescriptionCol>
                <SectionDescription style={{ color: "#ffffff" }}>
                  Built on open-source code, Qortal ensures full transparency.
                  No secrets, no hidden agendas. Just a blockchain you can
                  trust.
                </SectionDescription>
                <SectionDownloadLink
                  href="https://github.com/Qortal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub{" "}
                  <RightArrow
                    height={"20"}
                    width="20"
                    color={theme.palette.customBlue.main}
                  />
                </SectionDownloadLink>
              </OpenSourceDescriptionCol>
            </OpenSourceMobileSection>
            <FinalTextContainer>
              <FinalText>
                Experience the future of decentralization with Qortal, where the
                power of WEB3 meets the convenience of WEB2
              </FinalText>
            </FinalTextContainer>
          </SectionCol>
        </OpenSourceSection>
      </QortalFeaturesSection>
      {showButton && (
        <ScrollToTopButton onClick={scrollToTop}>
          <TopArrow
            color={theme.palette.text.primary}
            height={"25"}
            width={"25"}
          />
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
      {firstTimeVisitor && (
        <CommonModal
          openModal={firstTimeVisitor}
          onClickFunc={() => {
            setFirstTimeVisitor(false);
          }}
          customStyles={{
            padding: 0,
            top: "10%",
            maxHeight: "fit-content !important",
            height: "100% !important",
            backgroundColor:
              theme.palette.mode === "dark" ? "#111112" : "#D9D9D9",
            borderRadius: "10px"
          }}
        >
          <EbookPromoContainer>
            <BookSVG color={theme.palette.text.primary} height={"79"} width={"98"} />
            <EbookPromoTextCol>
              <EbookPromoTitle>
                DOWNLOAD OUR{" "}
                <span style={{ color: theme.palette.customBlue.main }}>
                  FREE
                </span>{" "}
                EBOOK!
              </EbookPromoTitle>
              <EbookPromoSubTitle>
                Learn how Qortal is leveraging the power of blockchain
                technology to revolutionize many industries on the normal
                internet.
              </EbookPromoSubTitle>
            </EbookPromoTextCol>
            <EbookPromoButton
              onClick={() => {
                ReactGA.event({
                  category: "User",
                  action: "Clicked Download Ebook Button on Homepage Modal",
                  label: "Clicked Download Ebook Button on Homepage Modal"
                });
                router.push("/ebook");
              }}
            >
              <DownloadSVG
                color={theme.palette.text.primary}
                height={"14"}
                width={"14"}
              />
              DOWNLOAD HERE
            </EbookPromoButton>
          </EbookPromoContainer>
        </CommonModal>
      )}
    </Container>
  );
};

export default LandingPage;
