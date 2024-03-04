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
  MainSubRow,
  MainTitle,
  MobileOwlImageContainer,
  MobileOwlLogo,
  OwlImageContainer,
  OwlImageWrapper,
  OwlLogo,
  SecondContainer,
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
  Wrapper
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
import { NorthEastSVG } from "../../components/Common/Icons/NorthEastSVG";
import { SouthEastSVG } from "../../components/Common/Icons/SouthEastSVG";
import { AnimatePresence, motion } from "framer-motion";
import { DiscordSVG } from "../../components/Common/Icons/DiscordSVG";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UAParser } from "ua-parser-js";
import { setOS } from "../../state/features/osSlice";
import { useMediaQuery, useTheme } from "@mui/material";

export interface QORTPageProps {
  setTheme: (val: string) => void;
}

export const QORTPage: FC<QORTPageProps> = ({ setTheme }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const parser = new UAParser();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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

  const useCasesRef = useRef<HTMLDivElement | null>(null);

  const scrollToFunc = () => {
    if (useCasesRef?.current) {
      useCasesRef?.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    }
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
        <CoinImgRow>
          <CoinImg src={QORTCoin} alt="QORT Coin" />
          <MainTitle>
            get
            <br />
            some
            <br />
            QORT
          </MainTitle>
        </CoinImgRow>
        <MainSubRow>
          <SubTextRow>
            <SubText>
              QORT is more than just a coin!
              <br /> Learn how it powers the Qortal ecosystem.
            </SubText>
            <ArrowSVG className="arrows" onClick={scrollToFunc}>
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
      </MainContainer>
      <SecondContainer>
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
      </SecondContainer>
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
                      using the Qortal Trade Portal. Firstly, following the
                      installation guide{" "}
                      <InstallationWord
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
                        here
                      </InstallationWord>{" "}
                      to set up your Qortal node, then you can use the Trade
                      Portal to buy QORT with BTC, LTC, DGB, RVN, ARRR and DOGE.
                      The trading pair with the most volume is Litecoin at the
                      moment, therefore is the most recommended to use to buy
                      QORT.
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
                        href="https://discord.gg/YKdxYUSqZR"
                        target="_blank"
                        rel="noreferrer"
                      >
                        here.
                      </URLWord>{" "}
                      and ask any questions you may have. We also have a Wiki
                      with all the technical specifications{" "}
                      <URLWord
                        href="https://wiki.qortal.org"
                        target="_blank"
                        rel="noreferrer"
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
