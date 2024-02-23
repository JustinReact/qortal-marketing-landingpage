import { FC, useEffect, useRef, useState } from "react";
import {
  ArrowSVG,
  CoinImg,
  CoinImgRow,
  FAQCard,
  FAQCardContainer,
  FAQCardContainerRow,
  FAQCardRow,
  FAQCardRowText,
  FAQNumberBubble,
  MainContainer,
  MainTitle,
  SecondContainer,
  SubText,
  SubTextRow,
  SubTitle,
  SubTitleDesc,
  SubTitleRow,
  ThirdContainer,
  UseCard,
  UseCardRow,
  UseColDesc,
  UseColImg,
  UseColRow,
  UseColTitle,
  Wrapper
} from "./QORTPage-styles";
import ReactGA from "react-ga4";
import QORTCoin from "../../images/QORT/QORTCoin.png";
import QShopLogo from "../../images/QORT/Q-ShopLogo.png";
import NamesMarket from "../../images/QORT/NamesMarket.png";
import TradePortal from "../../images/QORT/TradePortal.png";
import { NorthEastSVG } from "../../components/Common/Icons/NorthEastSVG";
import { SouthEastSVG } from "../../components/Common/Icons/SouthEastSVG";
import { AnimatePresence } from "framer-motion";

export interface QORTPageProps {
  setTheme: (val: string) => void;
}

export const QORTPage: FC<QORTPageProps> = ({ setTheme }) => {
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
    // Set the scrollbar color for this page
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
      x: 0,
      transition: {
        type: "spring",
        stiffness: 95
      }
    },
    closed: {
      opacity: 0.2,
      x: -100,
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
        <SubTextRow>
          <SubText>
            QORT is way more than a coin!
            <br /> Explore all the ways it powers the Qortal ecosystem.
          </SubText>
          <ArrowSVG className="arrows" onClick={scrollToFunc}>
            <path className="a1" d="M0 0 L30 32 L60 0"></path>
            <path className="a2" d="M0 20 L30 52 L60 20"></path>
            <path className="a3" d="M0 40 L30 72 L60 40"></path>
          </ArrowSVG>
        </SubTextRow>
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
                <span style={{ fontWeight: "bold" }}>
                  BTC, ETH, LTC, DGB, RVN, ARRR and DOGE
                </span>
              </UseColDesc>
            </UseColRow>
          </UseCard>
        </UseCardRow>
      </SecondContainer>
      <ThirdContainer>
        <SubTitleRow ref={useCasesRef}>
          <SubTitle>FAQ</SubTitle>
          <SubTitleDesc>
            Here are some Frequently Asked Questions about QORT and how it
            pertains to Qortal
          </SubTitleDesc>
        </SubTitleRow>
        <AnimatePresence>
        <FAQCardContainer>
          <FAQCardContainerRow>
            <FAQNumberBubble>1</FAQNumberBubble>
            <FAQCard onClick={() => {
              setFaqsOpen({ ...faqsOpen, 1: !faqsOpen[1] });
            }}>
              <FAQCardRow>
                <FAQCardRowText>What is QORT?</FAQCardRowText>
                {faqsOpen[1] ? (
                  <SouthEastSVG color={"#ffffff"} height={"22"} width={"22"} />
                ) : (
                  <NorthEastSVG color={"#ffffff"} height={"22"} width={"22"} />
                )}
              </FAQCardRow>
            </FAQCard>
          </FAQCardContainerRow>
        </FAQCardContainer>
        </AnimatePresence>
      </ThirdContainer>
    </Wrapper>
  );
};
