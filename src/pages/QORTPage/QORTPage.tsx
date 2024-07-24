import { FC, useEffect, useRef, useState } from "react";
import {
  ArrowSVG,
  CoinImg,
  CoinImgRow,
  CoinLogo,
  CoinLogoCol,
  CoinLogoName,
  CoinLogosRow,
  FAQCard,
  FAQCardContainer,
  FAQCardContainerRow,
  FAQCardRow,
  FAQCardRowBody,
  FAQCardRowText,
  FAQNumberBubble,
  InstallationWord,
  MainContainer,
  MainRow,
  MainSubRow,
  MainTitle,
  MobileOwlImageContainer,
  MobileOwlLogo,
  OwlImageContainer,
  OwlImageWrapper,
  OwlLogo,
  UseCasesContainer,
  SocialButton,
  SubText,
  SubTextRow,
  SubTitle,
  SubTitleDesc,
  SubTitleRow,
  ThirdContainer,
  URLWord,
  UseCard,
  UseCardRow,
  UseColDesc,
  UseColImg,
  UseColRow,
  UseColTitle,
  Wrapper,
  YoutubeVideoContainer,
  TradingPortalContainer,
  TradingPortalSubTitle,
  TradingPortalTitle,
  TradingPortalCol,
  UseColNumber,
  TradingPortalButton,
  TradingPortalCard
} from "./QORTPage-styles";
import ReactGA from "react-ga4";
import QORTCoin from "../../images/QORT/QORTCoin.webp";
import QShopLogo from "../../images/QORT/Q-ShopLogo.png";
import NamesMarket from "../../images/QORT/NamesMarket.png";
import TradePortal from "../../images/QORT/TradePortal.png";
import QORTOwlMascot from "../../images/QORT/QORTOwlMascot.webp";
import QORTOwlMascotHead from "../../images/QORT/QORTOwlMascotHead.webp";
import BTCLogo from "../../images/QORT/btc.webp";
import DOGELogo from "../../images/QORT/doge.webp";
import LTCLogo from "../../images/QORT/ltc.webp";
import DGBLogo from "../../images/QORT/dgb.webp";
import ARRRLogo from "../../images/QORT/arrr.webp";
import RVNLogo from "../../images/QORT/rvn.webp";
import YoutubeThumbnail from "../../images/Youtube/TradeLTCForQORTThumbnail.png";
import { NorthEastSVG } from "../../components/Common/Icons/NorthEastSVG";
import { SouthEastSVG } from "../../components/Common/Icons/SouthEastSVG";
import { AnimatePresence, motion } from "framer-motion";
import { DiscordSVG } from "../../components/Common/Icons/DiscordSVG";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UAParser } from "ua-parser-js";
import { setOS } from "../../state/features/osSlice";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { YoutubePlaceholder } from "../../components/YouTube/YoutubePlaceholder";

export interface QORTPageProps {
  setTheme: (val: string) => void;
}

export const QORTPage: FC<QORTPageProps> = ({ setTheme }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const parser = new UAParser();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const lessThanMediumScreen = useMediaQuery(theme.breakpoints.down("md"));

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

  useEffect(() => {
    // Set the theme color for this page
    setTheme("dark");
  }, []);

  const tradePortalRef = useRef<HTMLDivElement | null>(null);
  const useCasesRef = useRef<HTMLDivElement | null>(null);

  const scrollToTradePortalFunc = () => {
    if (tradePortalRef?.current) {
      tradePortalRef?.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    }
  };

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
          <YoutubeVideoContainer>
            {!lessThanMediumScreen && showVideoPlayer ? (
              <iframe
                src="https://www.youtube.com/embed/TnDrrbpRCDk?autoplay=1&rel=0"
                loading="lazy"
                title="Buy QORT Using Litecoin From A Centralized Exchange"
                allowFullScreen
                allow="autoplay"
              ></iframe>
            ) : !lessThanMediumScreen ? (
              <YoutubePlaceholder
                isModal={false}
                onClick={handleVideoClick}
                YoutubeThumbnail={YoutubeThumbnail}
                YoutubeTitle="Buy QORT Using Litecoin From A Centralized Exchange"
              />
            ) : null}
          </YoutubeVideoContainer>
          <CoinImgRow onClick={scrollToTradePortalFunc}>
            <CoinImg src={QORTCoin} alt="QORT Coin" />
            <MainTitle>
              get
              <br />
              some
              <br />
              QORT
            </MainTitle>
          </CoinImgRow>
        </MainRow>
        <MainSubRow>
          <SubTextRow>
            <SubText>
              QORT is more than just a coin!
              <br /> Learn how it powers the Qortal ecosystem.
            </SubText>
            <ArrowSVG className="arrows" onClick={scrollToUseCasesFunc}>
              <path className="a1" d="M0 0 L30 32 L60 0"></path>
              <path className="a2" d="M0 20 L30 52 L60 20"></path>
              <path className="a3" d="M0 40 L30 72 L60 40"></path>
            </ArrowSVG>
          </SubTextRow>
          <OwlImageWrapper>
            <OwlImageContainer>
              <OwlLogo src={QORTOwlMascot} alt="QORT Owl Mascot" />
              <SocialButton
                onClick={() => {
                  ReactGA.event({
                    category: "User",
                    action: "Clicked Discord Owl Desktop",
                    label: "Discord Button Owl Desktop"
                  });
                  window.open("https://discord.gg/YKdxYUSqZR", "_blank");
                }}
              >
                <DiscordSVG
                  color={"#000000"}
                  height={isMobile ? "30" : "35"}
                  width={isMobile ? "30" : "35"}
                />
                Join Discord
              </SocialButton>
            </OwlImageContainer>
          </OwlImageWrapper>
          <MobileOwlImageContainer>
            <MobileOwlLogo src={QORTOwlMascotHead} alt="QORT Owl Mascot Head" />
            <SocialButton
              onClick={() => {
                ReactGA.event({
                  category: "User",
                  action: "Clicked Mobile Discord Owl",
                  label: "Discord Mobile Button Owl"
                });
                window.open("https://discord.gg/YKdxYUSqZR", "_blank");
              }}
            >
              <DiscordSVG color={"#000000"} height={"35"} width={"35"} />
              Join Discord
            </SocialButton>
          </MobileOwlImageContainer>
        </MainSubRow>
        <YoutubeVideoContainer>
          {lessThanMediumScreen && showVideoPlayer ? (
            <iframe
              src="https://www.youtube.com/embed/TnDrrbpRCDk?autoplay=1&rel=0"
              loading="lazy"
              title="Buy QORT Using Litecoin From A Centralized Exchange"
              allowFullScreen
              allow="autoplay"
            ></iframe>
          ) : lessThanMediumScreen ? (
            <YoutubePlaceholder
              isModal={false}
              onClick={handleVideoClick}
              YoutubeThumbnail={YoutubeThumbnail}
              YoutubeTitle="Buy QORT Using Litecoin From A Centralized Exchange"
            />
          ) : null}
        </YoutubeVideoContainer>
      </MainContainer>
      <TradingPortalContainer ref={tradePortalRef}>
        <SubTitle>Trade Portal</SubTitle>
        <TradingPortalCol>
          <TradingPortalTitle>OWN QORT IN MINUTES:</TradingPortalTitle>
          <TradingPortalSubTitle>
            With just the{" "}
            <span style={{ fontStyle: "italic" }}>Qortal Extension</span>, start
            trading QORT instantly and securely.
          </TradingPortalSubTitle>
        </TradingPortalCol>
        <UseCardRow>
          <TradingPortalCard>
            <UseColNumber>1</UseColNumber>
            <UseColTitle>Extension</UseColTitle>
            <UseColDesc>
              Install the Qortal Extension via qortal.dev/extension or on the
              Google Chrome Store
            </UseColDesc>
            <TradingPortalButton
              onClick={() => {
                window.open("https://bit.ly/qortal-discord", "_blank");
                ReactGA.event({
                  category: "User",
                  action: "Clicked Download Extension Button on Extension Page",
                  label: "Clicked Download Extension Button on Extension Page"
                });
              }}
            >
              DOWNLOAD EXTENSION
            </TradingPortalButton>
          </TradingPortalCard>
          <TradingPortalCard>
            <UseColNumber>2</UseColNumber>
            <UseColTitle>Trade Portal</UseColTitle>
            <UseColDesc>Access our trading portal via qort.trade</UseColDesc>
            <TradingPortalButton
              onClick={() => {
                window.open("https://bit.ly/qort-trade-portal", "_blank");
                ReactGA.event({
                  category: "User",
                  action: "Clicked Visit Trade Portal Button on Extension Page",
                  label: "Clicked Visit Trade Portal Button on Extension Page"
                });
              }}
            >
              VISIT TRADE PORTAL
            </TradingPortalButton>
          </TradingPortalCard>
          <TradingPortalCard>
            <UseColNumber>3</UseColNumber>
            <UseColTitle>Buy QORT</UseColTitle>
            <UseColDesc>
              Buy and sell QORT directly from the Qortal blockchain!
            </UseColDesc>
            <TradingPortalButton
              onClick={() => {
                window.open("https://bit.ly/qort-trade-portal", "_blank");
                ReactGA.event({
                  category: "User",
                  action: "Clicked Visit Buy QORT Button on Extension Page",
                  label: "Clicked Visit Buy QORT Button on Extension Page"
                });
              }}
            >
              BUY QORT
            </TradingPortalButton>
          </TradingPortalCard>
        </UseCardRow>
      </TradingPortalContainer>
      <UseCasesContainer>
        <SubTitleRow ref={useCasesRef}>
          <SubTitle>Use Cases</SubTitle>
          <SubTitleDesc>
            These are some of the ways you can use QORT in the Qortal ecosystem.
            This is only the beginning!
          </SubTitleDesc>
        </SubTitleRow>
        <UseCardRow>
          <UseCard>
            <UseColImg src={QShopLogo} alt="Q-Shop Logo Design" />
            <UseColRow>
              <UseColTitle>Q-Shop</UseColTitle>
              <UseColDesc>
                Buy and sell goods and services with QORT directly on the Qortal
                blockchain!
              </UseColDesc>
            </UseColRow>
          </UseCard>
          <UseCard>
            <UseColImg src={NamesMarket} alt="Names Market Design" />
            <UseColRow>
              <UseColTitle>Names Market</UseColTitle>
              <UseColDesc>
                Register a name on the Qortal blockchain and use it as a unique
                identifier for your account. This currently costs{" "}
                <span style={{ fontWeight: "bold" }}>1.25 QORT</span>.
                <br />
                <br />
                You can also buy and sell names on the Names Market, along with
                all the data associated with them.
              </UseColDesc>
            </UseColRow>
          </UseCard>
          <UseCard>
            <UseColImg src={TradePortal} alt="Trade Portal Design" />
            <UseColRow>
              <UseColTitle>Trade Portal</UseColTitle>
              <UseColDesc>
                Trade QORT against 6 other coins directly on Qortal's Trade
                Portal.
                <br />
                <br />
                These are:
                <br />
              </UseColDesc>
            </UseColRow>
            <CoinLogosRow>
              <CoinLogoCol>
                <CoinLogoName>BTC</CoinLogoName>
                <CoinLogo src={BTCLogo} alt="Bitcoin Logo" />
              </CoinLogoCol>
              <CoinLogoCol>
                <CoinLogoName>LTC</CoinLogoName>
                <CoinLogo src={LTCLogo} alt="Litecoin Logo" />
              </CoinLogoCol>
              <CoinLogoCol>
                <CoinLogoName>DOGE</CoinLogoName>
                <CoinLogo src={DOGELogo} alt="Doge Logo" />
              </CoinLogoCol>
              <CoinLogoCol>
                <CoinLogoName>DGB</CoinLogoName>
                <CoinLogo src={DGBLogo} alt="DigiByte Logo" />
              </CoinLogoCol>
              <CoinLogoCol>
                <CoinLogoName>RVN</CoinLogoName>
                <CoinLogo src={RVNLogo} alt="Ravencoin Logo" />
              </CoinLogoCol>
              <CoinLogoCol>
                <CoinLogoName>ARRR</CoinLogoName>
                <CoinLogo src={ARRRLogo} alt="Pirate Chain Logo" />
              </CoinLogoCol>
            </CoinLogosRow>
          </UseCard>
        </UseCardRow>
      </UseCasesContainer>
      <ThirdContainer>
        <SubTitleRow>
          <SubTitle>FAQ</SubTitle>
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
                      </URLWord>.{" "}
                      At this point, you'll need to create a new Qortal Account,
                      which will automatically assign you a Litecoin (LTC)
                      private wallet address. You can use any of the popular
                      centralized exchanges to buy Litecoin, and send it to your new wallet. Once you have some
                      Litecoin, you can use the Qort.trade to trade LTC for
                      QORT, which will also be held in your new QORT wallet. This QORT wallet is also created automatically for you upon creating a new account in the extension.
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
