"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  CoinImg,
  FAQCard,
  FAQCardContainer,
  FAQCardContainerRow,
  FAQCardRow,
  FAQCardRowBody,
  FAQCardRowText,
  FAQNumberBubble,
  MainContainer,
  MainRow,
  MainTitle,
  SubText,
  SubTextRow,
  SubTitleDesc,
  SubTitleRow,
  ThirdContainer,
  URLWord,
  Wrapper,
  YoutubeVideoContainer,
  FeatureContainer,
  FeatureTitle,
  TopFoldButtonRow,
  CTAButton1,
  CTAButton2,
  FeatureDescription,
  FeatureCol,
  FeatureSubContainer,
  FeatureImg,
  TopFoldButtonCol,
  TradeOgreCTAButton
} from "./QORTPage-styles";
import ReactGA from "react-ga4";
import { NorthEastSVG } from "../Common/Icons/NorthEastSVG";
import { SouthEastSVG } from "../Common/Icons/SouthEastSVG";
import { useMediaQuery, useTheme } from "@mui/material";
import { YoutubePlaceholder } from "../YouTube/YoutubePlaceholder";
import { StaggeredFadeIn } from "../Common/Wrappers/StaggeredFadeIn";
import { ScrollToTopButton, TopArrow } from "../Wiki/Wiki-styles";
import { TopOfPageRef } from "../LandingPage/LandingPage-styles";

const Qort = () => {
  const theme = useTheme();
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down("sm"));

  const topOfPageRef = useRef<HTMLDivElement | null>(null);

  const [showButton, setShowButton] = useState<boolean>(false);
  const [showVideoPlayer, setShowVideoPlayer] = useState<boolean>(false);
  const [faqsOpen, setFaqsOpen] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false
  });

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname,
      title: "API"
    });
  }, []);

  const useCasesRef = useRef<HTMLDivElement | null>(null);

  const scrollToUseCasesFunc = () => {
    if (useCasesRef?.current) {
      useCasesRef?.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    }
  };

  const handleVideoClick = () => {
    setShowVideoPlayer((prevState) => !prevState);
  };

  const features = [
    {
      title: "Powering the New Internet",
      description:
        "QORT isn’t just a coin. It’s the native currency of a peer-to-peer, alternative internet that replaces the infrastructure of the traditional internet. From hosting, to publishing, to apps, QORT powers it all!",
      image: "/images/QORT/Spaceship.png"
    },
    {
      title: "Earn by Supporting the Network",
      description:
        "No staking. No locked tokens. Earn QORT by becoming a minter and supporting the chain with your own node. No special hardware required!",
      image: "/images/QORT/QORTCoins.png"
    },
    {
      title: "Real Utility Through Q-Apps",
      description:
        "Use QORT to buy and sell on Q-Shop, support creators on Q-Tube, raise funds with Q-Fund, or chat privately in encrypted groups—all without middlemen.",
      image: "/images/QORT/Monitor.png"
    },
    {
      title: "Trustless Trading with 6+ Coins",
      description:
        "Q-Trade lets you swap QORT for assets like LTC, ARRR, DOGE, RVN, DGB and BTC, directly from your wallet. That means you remain in full control of your assets the entire time, without intermediaries. Just pure, on-chain, peer-to-peer trading secured by cross-chain atomic trades.",
      image: "/images/QORT/Graph.png"
    }
  ];

  // Intersection observer to show scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      if (!useCasesRef.current) return;
      const rect = useCasesRef.current?.getBoundingClientRect();
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
    <Wrapper>
      <TopOfPageRef ref={topOfPageRef} />
      <MainContainer>
        <MainRow>
          <MainTitle variant="h1">
            Unlocking
            <br />
            <span>Web</span>3<br /> 1 <span>QORT</span>
            <br /> at a time
          </MainTitle>
          <CoinImg
            src={"/images/QORT/QORTCoin.webp"}
            alt="QORT Coin"
            width={500}
            height={500}
          />
        </MainRow>
        <SubTextRow>
          <SubText>
            QORT isn’t just another coin! It's the very <strong>essence</strong>{" "}
            of an alternative internet. It fuels real peer-to-peer apps,
            incentivizes contributors, and powers the parallel economy found on
            Qortal!
          </SubText>
        </SubTextRow>
        <TopFoldButtonCol>
          <TopFoldButtonRow>
            <CTAButton1
              onClick={() => {
                ReactGA.event({
                  category: "User",
                  action: "Clicked Learn How Button",
                  label: "Learn How Button"
                });
                scrollToUseCasesFunc();
              }}
            >
              LEARN HOW
            </CTAButton1>
            <CTAButton2
              onClick={() => {
                ReactGA.set({ dimension1: "Landing Page Download Button" });
                ReactGA.event({
                  category: "User",
                  action: "Clicked Main Download CTA Button",
                  label: "Clicked Main Download CTA Button"
                });
                window.open(
                  "https://link.qortal.dev/buy",
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
            >
              BUY QORT
            </CTAButton2>
          </TopFoldButtonRow>
          <TradeOgreCTAButton
            type="button"
            aria-label="Buy QORT from TradeOgre exchange"
            onClick={() => {
              ReactGA.event({
                category: "User",
                action: "Clicked TradeOgre Button",
                label: "Clicked TradeOgre Button"
              });
              window.open(
                "https://link.qortal.dev/tradeogre",
                "_blank",
                "noopener,noreferrer"
              );
            }}
          >
            BUY FROM TRADEOGRE
          </TradeOgreCTAButton>
        </TopFoldButtonCol>
      </MainContainer>
      <YoutubeVideoContainer>
        {showVideoPlayer ? (
          <iframe
            src="https://www.youtube.com/embed/pgJybhuQGYI?si=m_tl_lHEQOi8ObEn&autoplay=1&rel=0"
            loading="lazy"
            title="Obtain QORT Using Litecoin From A Centralized Exchange"
            allowFullScreen
            allow="autoplay"
          ></iframe>
        ) : (
          <YoutubePlaceholder
            isModal={false}
            onClick={handleVideoClick}
            YoutubeThumbnail={"/images/Youtube/ObtainQORT.png"}
            YoutubeTitle="Obtain QORT Using Litecoin From A Centralized Exchange"
          />
        )}
      </YoutubeVideoContainer>
      <FeatureContainer ref={useCasesRef}>
        {features.map((feature, index) => (
          <StaggeredFadeIn delayOrder={index} key={feature.title}>
            <FeatureSubContainer>
              <FeatureImg
                quality={100}
                height={250}
                width={250}
                src={feature.image}
                alt=""
              />
              <FeatureCol>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
              </FeatureCol>
            </FeatureSubContainer>
          </StaggeredFadeIn>
        ))}
      </FeatureContainer>
      <ThirdContainer>
        <SubTitleRow>
          <FeatureTitle>FAQ</FeatureTitle>
          <SubTitleDesc>
            Here are some Frequently Asked Questions about <strong>QORT</strong>{" "}
            and how it pertains to Qortal
          </SubTitleDesc>
        </SubTitleRow>
        <FAQCardContainer>
          <FAQCardContainerRow>
            <FAQNumberBubble>
              <span>1</span>
            </FAQNumberBubble>
            <FAQCard
              onClick={() => {
                setFaqsOpen({ ...faqsOpen, 1: !faqsOpen[1] });
              }}
            >
              <FAQCardRow>
                <FAQCardRowText>
                  What is <strong>QORT</strong>?
                </FAQCardRowText>
                {faqsOpen[1] ? (
                  <SouthEastSVG
                    color={theme.palette.text.primary}
                    height={isMobile ? "25" : "22"}
                    width={isMobile ? "25" : "22"}
                  />
                ) : (
                  <NorthEastSVG
                    color={theme.palette.text.primary}
                    height={isMobile ? "25" : "22"}
                    width={isMobile ? "25" : "22"}
                  />
                )}
              </FAQCardRow>
              <FAQCardRowBody
                style={{ display: faqsOpen[1] ? "flex" : "none" }}
              >
                <p>
                  QORT is the native coin of the Qortal blockchain. Unlike
                  typical crypto tokens, QORT powers a decentralized
                  infrastructure that supports peer-to-peer apps, private
                  communication, and data exchange, all without relying on
                  centralized servers or any third parties.
                </p>
                <p>
                  It's earned by the minters for validation transactions on the
                  blockchain, and is used across the Qortal ecosystem!
                </p>
              </FAQCardRowBody>
            </FAQCard>
          </FAQCardContainerRow>
          <FAQCardContainerRow>
            <FAQNumberBubble>2</FAQNumberBubble>
            <FAQCard
              onClick={() => {
                setFaqsOpen({ ...faqsOpen, 2: !faqsOpen[2] });
              }}
            >
              <FAQCardRow>
                <FAQCardRowText>
                  Can I purchase some <strong>QORT</strong> at the moment?
                </FAQCardRowText>
                {faqsOpen[2] ? (
                  <SouthEastSVG
                    color={theme.palette.text.primary}
                    height={isMobile ? "25" : "22"}
                    width={isMobile ? "25" : "22"}
                  />
                ) : (
                  <NorthEastSVG
                    color={theme.palette.text.primary}
                    height={isMobile ? "25" : "22"}
                    width={isMobile ? "25" : "22"}
                  />
                )}
              </FAQCardRow>

              <FAQCardRowBody
                style={{ display: faqsOpen[2] ? "flex" : "none" }}
              >
                <p>
                  Yes! You can buy QORT directly from within Qortal. Simply
                  install any of the Qortal user interfaces—Qortal Hub, Qortal
                  Go, or the Qortal Browser Extension—and create a new Qortal
                  account.
                </p>
                <p>
                  Upon creating your account, you’ll automatically get a
                  Litecoin (LTC) wallet address. You can purchase LTC from any
                  centralized exchange like Coinbase or Binance, then send it to
                  your new wallet. Once you have LTC in your Qortal wallet, use
                  the Q-Trade app (available within the UI) to trade LTC for
                  QORT through a secure, trustless cross-chain atomic swap.
                </p>
                <p>
                  There is no KYC, no wrapped tokens, and no third-party
                  custody—just real peer-to-peer trading on the Qortal
                  blockchain.
                </p>
              </FAQCardRowBody>
            </FAQCard>
          </FAQCardContainerRow>
          <FAQCardContainerRow>
            <FAQNumberBubble>3</FAQNumberBubble>
            <FAQCard
              onClick={() => {
                setFaqsOpen({ ...faqsOpen, 3: !faqsOpen[3] });
              }}
            >
              <FAQCardRow>
                <FAQCardRowText>
                  Can I buy <strong>QORT</strong> on a centralized exchange?
                </FAQCardRowText>
                {faqsOpen[3] ? (
                  <SouthEastSVG
                    color={theme.palette.text.primary}
                    height={isMobile ? "25" : "22"}
                    width={isMobile ? "25" : "22"}
                  />
                ) : (
                  <NorthEastSVG
                    color={theme.palette.text.primary}
                    height={isMobile ? "25" : "22"}
                    width={isMobile ? "25" : "22"}
                  />
                )}
              </FAQCardRow>
              <FAQCardRowBody
                style={{ display: faqsOpen[3] ? "flex" : "none" }}
              >
                <p>
                  Yes, QORT is currently listed on TradeOgre, a centralized
                  exchange that allows trading QORT against USDT. TradeOgre does
                  not require KYC, making it one of the few centralized
                  exchanges where you can still trade privately.
                </p>
                <p>
                  However, for maximum security and decentralization, we
                  recommend using Q-Trade, which is Qortal’s built-in
                  peer-to-peer exchange, to buy QORT directly with LTC inside
                  your own wallet. Q-Trade requires no sign-up, no personal
                  info, and avoids the risks of centralized custody or exchange
                  shutdowns.
                </p>
              </FAQCardRowBody>
            </FAQCard>
          </FAQCardContainerRow>
          <FAQCardContainerRow>
            <FAQNumberBubble>4</FAQNumberBubble>
            <FAQCard
              onClick={() => {
                setFaqsOpen({ ...faqsOpen, 4: !faqsOpen[4] });
              }}
            >
              <FAQCardRow>
                <FAQCardRowText>
                  Why should I buy <strong>QORT</strong>? What are the benefits?
                </FAQCardRowText>
                {faqsOpen[4] ? (
                  <SouthEastSVG
                    color={theme.palette.text.primary}
                    height={isMobile ? "25" : "22"}
                    width={isMobile ? "25" : "22"}
                  />
                ) : (
                  <NorthEastSVG
                    color={theme.palette.text.primary}
                    height={isMobile ? "25" : "22"}
                    width={isMobile ? "25" : "22"}
                  />
                )}
              </FAQCardRow>

              <FAQCardRowBody
                style={{ display: faqsOpen[4] ? "flex" : "none" }}
              >
                <p>
                  QORT is the ideal cryptocurrency for those who want to invest
                  in a project which is sticking to the ideals of Web3: Complete
                  decentralization (your only connection to the normal internet
                  is your Internet Service Provider), complete privacy (no
                  tracking, no censorship, no cookies, no ads, no data
                  collection), and complete security (no hacking, no phishing,
                  no malware).
                </p>
                <p>
                  It is also a blockchain with no centralized nodes, everything
                  is peer-to-peer (P2P). The entire codebase is also open-source
                  and transparent. This makes it the ideal internet replacement,
                  and the ideal cryptocurrency to invest in!
                </p>
              </FAQCardRowBody>
            </FAQCard>
          </FAQCardContainerRow>
          <FAQCardContainerRow>
            <FAQNumberBubble>5</FAQNumberBubble>
            <FAQCard
              onClick={() => {
                setFaqsOpen({ ...faqsOpen, 5: !faqsOpen[5] });
              }}
            >
              <FAQCardRow>
                <FAQCardRowText>
                  Where can I learn more about <strong>QORT</strong> and Qortal?
                </FAQCardRowText>
                {faqsOpen[5] ? (
                  <SouthEastSVG
                    color={theme.palette.text.primary}
                    height={isMobile ? "25" : "22"}
                    width={isMobile ? "25" : "22"}
                  />
                ) : (
                  <NorthEastSVG
                    color={theme.palette.text.primary}
                    height={isMobile ? "25" : "22"}
                    width={isMobile ? "25" : "22"}
                  />
                )}
              </FAQCardRow>
              <FAQCardRowBody
                style={{ display: faqsOpen[5] ? "flex" : "none" }}
              >
                <p>
                  The best way to learn more about Qortal and QORT and to see
                  its true power, is to install Qortal, run a node, and start
                  using it on your own! However, if you want to learn more about
                  the project before doing so, you can join our Discord{" "}
                  <URLWord
                    onClick={(e) => {
                      e.stopPropagation();
                      ReactGA.event({
                        category: "User",
                        action: "Clicked Discord Button FAQ",
                        label: "Discord Button FAQ"
                      });
                      window.open("https://discord.gg/YKdxYUSqZR", "_blank");
                    }}
                  >
                    here.
                  </URLWord>{" "}
                  and ask any questions you may have.
                </p>
                <p>
                  We also have a Wiki with all the technical specifications{" "}
                  <URLWord
                    onClick={(e) => {
                      e.stopPropagation();
                      ReactGA.event({
                        category: "User",
                        action: "Clicked Wiki Button FAQ",
                        label: "Clicked Wiki Button FAQ"
                      });
                      window.open(
                        "https://qortal.dev/wiki",
                        "_blank",
                        "noopener,noreferrer"
                      );
                    }}
                  >
                    here.
                  </URLWord>
                </p>
              </FAQCardRowBody>
            </FAQCard>
          </FAQCardContainerRow>
        </FAQCardContainer>
      </ThirdContainer>
      {showButton && (
        <ScrollToTopButton onClick={scrollToTop}>
          <TopArrow
            color={theme.palette.text.primary}
            height={"25"}
            width={"25"}
          />
        </ScrollToTopButton>
      )}
    </Wrapper>
  );
};

export default Qort;
