"use client";
import { useEffect, useRef, useState } from "react";
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
  FeatureImg
} from "./QORTPage-styles";
import ReactGA from "react-ga4";
import { NorthEastSVG } from "../Common/Icons/NorthEastSVG";
import { SouthEastSVG } from "../Common/Icons/SouthEastSVG";
import { AnimatePresence, motion } from "framer-motion";
import { useMediaQuery, useTheme } from "@mui/material";
import { YoutubePlaceholder } from "../YouTube/YoutubePlaceholder";

const Qort = () => {
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down("sm"));

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

  // FAQ Card Variants for animation

  const faqCardVariants = {
    opened: {
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 95
      }
    },
    closed: {
      opacity: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <Wrapper>
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
            QORT isn’t just another coin! It's the very<strong>essence</strong>{" "}
            of an alternative internet. It fuels real peer-to-peer apps,
            incentivizes contributors, and powers the parallel economy found on
            Qortal!
          </SubText>
        </SubTextRow>
        <TopFoldButtonRow>
          <CTAButton1
            onClick={() => {
              ReactGA.event({
                category: "User",
                action: "Clicked Learn How Button",
                label: "Learn How Button"
              });
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
            }}
          >
            BUY QORT
          </CTAButton2>
        </TopFoldButtonRow>
      </MainContainer>
      <YoutubeVideoContainer>
        {showVideoPlayer ? (
          <iframe
            src="https://www.youtube.com/watch?v=pgJybhuQGYI&t=135s?autoplay=1&rel=0"
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
      <FeatureContainer>
        <FeatureSubContainer>
          <FeatureImg
            quality={100}
            height={250}
            width={250}
            src={"/images/QORT/Spaceship.png"}
            alt=""
          />
          <FeatureCol>
            <FeatureTitle>Powering the New Internet</FeatureTitle>
            <FeatureDescription>
              QORT isn’t just a coin. It’s the native currency of a
              peer-to-peer, alternative internet that replaces the
              infrastructure of the traditional internet. From hosting, to
              publishing, to apps, QORT powers it all!
            </FeatureDescription>
          </FeatureCol>
        </FeatureSubContainer>
      </FeatureContainer>
      <ThirdContainer>
        <SubTitleRow>
          <FeatureTitle>FAQ</FeatureTitle>
          <SubTitleDesc>
            Here are some Frequently Asked Questions about QORT and how it
            pertains to Qortal
          </SubTitleDesc>
        </SubTitleRow>
        <FAQCardContainer>
          <FAQCardContainerRow>
            <FAQNumberBubble>
              <span style={{ padding: "5px" }}>1</span>
            </FAQNumberBubble>
            <FAQCard
              onClick={() => {
                setFaqsOpen({ ...faqsOpen, 1: !faqsOpen[1] });
              }}
            >
              <FAQCardRow>
                <FAQCardRowText>What is QORT?</FAQCardRowText>
                {faqsOpen[1] ? (
                  <SouthEastSVG
                    color={"#ffffff"}
                    height={isMobile ? "25" : "22"}
                    width={isMobile ? "25" : "22"}
                  />
                ) : (
                  <NorthEastSVG
                    color={"#ffffff"}
                    height={isMobile ? "25" : "22"}
                    width={isMobile ? "25" : "22"}
                  />
                )}
              </FAQCardRow>
              <AnimatePresence>
                {faqsOpen[1] && (
                  <motion.div
                    key={"faq1"}
                    animate={"opened"}
                    initial={"closed"}
                    variants={faqCardVariants}
                    exit="closed" // Use the same 'closed' variant for exit animation
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%"
                    }}
                  >
                    <FAQCardRowBody>
                      QORT is the native currency of the Qortal blockchain. It
                      is used for transaction fees, name registration, and as a
                      trading pair on the Qortal Trade Portal.
                    </FAQCardRowBody>
                  </motion.div>
                )}
              </AnimatePresence>
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
                  Can I purchase some QORT at the moment?
                </FAQCardRowText>
                {faqsOpen[2] ? (
                  <SouthEastSVG
                    color={"#ffffff"}
                    height={isMobile ? "25" : "22"}
                    width={isMobile ? "25" : "22"}
                  />
                ) : (
                  <NorthEastSVG
                    color={"#ffffff"}
                    height={isMobile ? "25" : "22"}
                    width={isMobile ? "25" : "22"}
                  />
                )}
              </FAQCardRow>
              <AnimatePresence>
                {faqsOpen[2] && (
                  <motion.div
                    key={"faq2"}
                    animate={"opened"}
                    initial={"closed"}
                    variants={faqCardVariants}
                    exit="closed" // Use the same 'closed' variant for exit animation
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%"
                    }}
                  >
                    <FAQCardRowBody>
                      Yes! It is already possible to buy QORT. You can do so by
                      installing the Qortal Browser Extension, and then visiting{" "}
                      <URLWord
                        onClick={() => {
                          ReactGA.event({
                            category: "User",
                            action:
                              "Clicked Qort.trade button in Qort Page FAQ",
                            label: "Clicked Qort.trade button in Qort Page FAQ"
                          });
                          window.open(
                            "https://bit.ly/qort-trade-portal",
                            "_blank"
                          );
                        }}
                      >
                        qort.trade
                      </URLWord>
                      . At this point, you'll need to create a new Qortal
                      Account, which will automatically assign you a Litecoin
                      (LTC) private wallet address. You can use any of the
                      popular centralized exchanges to buy Litecoin, and send it
                      to your new wallet. Once you have some Litecoin, you can
                      use the Qort.trade to trade LTC for QORT, which will also
                      be held in your new QORT wallet. This QORT wallet is also
                      created automatically for you upon creating a new account
                      in the extension.
                    </FAQCardRowBody>
                  </motion.div>
                )}
              </AnimatePresence>
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
                  Why should I buy QORT? What are the benefits?
                </FAQCardRowText>
                {faqsOpen[3] ? (
                  <SouthEastSVG
                    color={"#ffffff"}
                    height={isMobile ? "25" : "22"}
                    width={isMobile ? "25" : "22"}
                  />
                ) : (
                  <NorthEastSVG
                    color={"#ffffff"}
                    height={isMobile ? "25" : "22"}
                    width={isMobile ? "25" : "22"}
                  />
                )}
              </FAQCardRow>
              <AnimatePresence>
                {faqsOpen[3] && (
                  <motion.div
                    key={"faq3"}
                    animate={"opened"}
                    initial={"closed"}
                    variants={faqCardVariants}
                    exit="closed" // Use the same 'closed' variant for exit animation
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%"
                    }}
                  >
                    <FAQCardRowBody>
                      QORT is the ideal cryptocurrency for those who want to
                      invest in a project which is sticking to the ideals of
                      Web3: Complete decentralization (your only connection to
                      the normal internet is your Internet Service Provider),
                      complete privacy (no tracking, no censorship, no cookies,
                      no ads, no data collection), and complete security (no
                      hacking, no phishing, no malware). It is also a blockchain
                      with no centralized nodes, everything is peer-to-peer
                      (P2P). The entire codebase is also open-source and
                      transparent. This makes it the ideal internet replacement,
                      and the ideal cryptocurrency to invest in!
                    </FAQCardRowBody>
                  </motion.div>
                )}
              </AnimatePresence>
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
                  Where can I learn more about QORT and Qortal?
                </FAQCardRowText>
                {faqsOpen[4] ? (
                  <SouthEastSVG
                    color={"#ffffff"}
                    height={isMobile ? "25" : "22"}
                    width={isMobile ? "25" : "22"}
                  />
                ) : (
                  <NorthEastSVG
                    color={"#ffffff"}
                    height={isMobile ? "25" : "22"}
                    width={isMobile ? "25" : "22"}
                  />
                )}
              </FAQCardRow>
              <AnimatePresence>
                {faqsOpen[4] && (
                  <motion.div
                    key={"faq4"}
                    animate={"opened"}
                    initial={"closed"}
                    variants={faqCardVariants}
                    exit="closed" // Use the same 'closed' variant for exit animation
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%"
                    }}
                  >
                    <FAQCardRowBody>
                      The best way to learn more about Qortal and QORT and to
                      see its true power, is to install Qortal, run a node, and
                      start using it on your own! However, if you want to learn
                      more about the project before doing so, you can join our
                      Discord{" "}
                      <URLWord
                        onClick={() => {
                          ReactGA.event({
                            category: "User",
                            action: "Clicked Discord Button FAQ",
                            label: "Discord Button FAQ"
                          });
                          window.open(
                            "https://discord.gg/YKdxYUSqZR",
                            "_blank"
                          );
                        }}
                      >
                        here.
                      </URLWord>{" "}
                      and ask any questions you may have. We also have a Wiki
                      with all the technical specifications{" "}
                      <URLWord
                        onClick={() => {
                          ReactGA.event({
                            category: "User",
                            action: "Clicked Wiki Button FAQ",
                            label: "Discord Wiki FAQ"
                          });
                          window.open("https://wiki.qortal.org", "_blank");
                        }}
                      >
                        here.
                      </URLWord>
                    </FAQCardRowBody>
                  </motion.div>
                )}
              </AnimatePresence>
            </FAQCard>
          </FAQCardContainerRow>
        </FAQCardContainer>
      </ThirdContainer>
    </Wrapper>
  );
};

export default Qort;
