"use client";
import { useState, FC, useEffect, useRef } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import { QortalBigLogo } from "../components/Common/Logo/QortalBigLogo";
import {
  StyledButton,
  HeaderText,
  SubHeaderText,
  FooterRow,
  ButtonRow,
  VideoRow,
  VideoTitle,
  MainRow,
  MainCol,
  QortalWordLogo,
  JoinDiscordRow,
  CustomDiscordButton,
  CustomDiscordImg,
  QORTPromoModal,
  FlexCol,
  DiscordLogo,
  CustomRedirectQORTButton,
  CustomQORTSVG,
  CustomDiscordSVG,
  QORTPromoFont
} from "../components/Home/Home-styles";
import OperatingSystem from "../components/OperatingSystem/OperatingSystem";
import ReactGA from "react-ga4";
import { WindowsSVG } from "../components/Common/Icons/WindowsSVG";
import { LinuxSVG } from "../components/Common/Icons/LinuxSVG";
import { AppleSVG } from "../components/Common/Icons/AppleSVG";
import { CommonModal } from "../components/Common/CommonModal/CommonModal";
import { YoutubePlaceholder } from "../components/YouTube/YoutubePlaceholder";
import { Showcase } from "../components/Showcase/Showcase";
import { RootState } from "../state/store";
import { useSelector, useDispatch } from "react-redux";
import { setOS } from "../state/features/osSlice";
import { UAParser } from "ua-parser-js";
import { useRouter } from "next/navigation";

const Home: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.only("xs"));
  const isSmallToMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const dispatch = useDispatch();
  const router = useRouter();

  // Determine which OS they're on
  const parser = new UAParser();

  // Scroll into view when they come from features section
  const osRef = useRef<HTMLDivElement>(null);

  // Props received from the features component to know which OS they're on
  const os = useSelector((state: RootState) => state.OS.os);

  const [operatingSystem, setOperatingSystem] = useState<string>("");
  const [firstTimeVisitor, setFirstTimeVisitor] = useState<boolean>(false);
  const [showVideoPlayer, setShowVideoPlayer] = useState<boolean>(false);

  // Redirect to /qort for mobile users
  useEffect(() => {
    const isFirstTimeVisitor = localStorage.getItem("isFirstTimeVisitor");
    const userOS = parser.getOS().name;

    if (!isFirstTimeVisitor) {
      // Perform actions for first-time visitors
      setFirstTimeVisitor(true);
      // Set the flag in localStorage
      localStorage.setItem("isFirstTimeVisitor", "false");
      // Redirect to /qort for mobile users
      if (userOS?.includes("Android") || userOS?.includes("iOS")) {
        router.push("/qort");
      }
    } else {
      return;
    }
  }, []);

  // Clear the OS passed props on unmount
  useEffect(() => {
    if (os) {
      setOperatingSystem(os);
      if (osRef.current) {
        osRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
    return () => {
      if (os) {
        dispatch(setOS(""));
      }
    };
  }, [os]);

  const handleVideoClick = () => {
    setShowVideoPlayer((prevState) => !prevState);
  };

  return (
    <>
      <MainRow container>
        <MainCol item xs={12} sm={7}>
          <HeaderText>
            <span style={{ color: theme.palette.secondary.main }}>
              The Future{" "}
            </span>
            <span>of the Internet is Here: </span>
            <QortalWordLogo src={"/images/Home/QortalWordLogo.svg"} alt="QortalWordLogoImg" width={200} height={200} />
          </HeaderText>
          <SubHeaderText>
            Join a Decentralized World Where You Have Complete Control!
          </SubHeaderText>
          <ButtonRow>
            <StyledButton
              onClick={() => setOperatingSystem("windows")}
              variant="contained"
            >
              <WindowsSVG color={"#ffffff"} height={"25"} width={"25"} />
              Windows
            </StyledButton>
            <StyledButton
              onClick={() => setOperatingSystem("mac")}
              variant="contained"
            >
              <AppleSVG color={"#ffffff"} height={"25"} width={"25"} />
              Mac
            </StyledButton>
            <StyledButton
              onClick={() => setOperatingSystem("linux")}
              variant="contained"
            >
              <LinuxSVG color={"#ffffff"} height={"25"} width={"25"} />
              Linux
            </StyledButton>
          </ButtonRow>
        </MainCol>
        <MainCol
          item
          xs={12}
          sm={5}
          style={{
            transform: !isMobile ? "translateY(-25px)" : "none"
          }}
        >
          <QortalBigLogo />
        </MainCol>
      </MainRow>
      {/* <JoinDiscordRow>
        <CustomDiscordButton
          onClick={() => {
                ReactGA.event({
                category: "User",
                action: "Clicked Discord Button With Custom Logo",
                label: "Discord Button With Custom Logo"
              });
              window.open("https://discord.gg/9hgNdBj4aC", "_blank");
          }}
        >
        </CustomDiscordButton>
          <CustomDiscordImg
            onClick={() => {
              ReactGA.event({
                category: "User",
                action: "Clicked Discord Button With Custom Logo",
                label: "Discord Button With Custom Logo"
              });
              window.open("https://discord.gg/9hgNdBj4aC", "_blank");
            }}
            src={CustomDiscordLogo}
            alt="Join Qortal Discord"
          />
      </JoinDiscordRow> */}
      {!operatingSystem && <Showcase osRef={osRef} />}
      <FooterRow container>
        {!operatingSystem ? (
          <>
            <VideoRow>
              <VideoTitle variant="h2">
                Watch the Q-Apps Intro Video!
              </VideoTitle>
              {showVideoPlayer ? (
                <iframe
                  src="https://www.youtube.com/embed/X7l2R0LF_5U?autoplay=1"
                  loading="lazy"
                  title="Introducing Qortal Q-Apps"
                  allowFullScreen
                  allow="autoplay"
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "none"
                  }}
                ></iframe>
              ) : (
                <YoutubePlaceholder
                  isModal={false}
                  onClick={handleVideoClick}
                  YoutubeThumbnail={"/images/Youtube/YoutubeThumbnail.webp"}
                  YoutubeTitle="Introducing Qortal Q-Apps"
                />
              )}
            </VideoRow>
          </>
        ) : (
          <OperatingSystem
            operatingSystem={operatingSystem}
            setOperatingSystem={setOperatingSystem}
          />
        )}
      </FooterRow>

      {firstTimeVisitor && (
        <CommonModal
          openModal={firstTimeVisitor}
          onClickFunc={() => {
            setFirstTimeVisitor(false);
          }}
          customStyles={{
            padding: 0,
            top: "10%",
            maxHeight: "500px",
            minHeight: isMobile
              ? "300px !important"
              : isSmallToMediumScreen && !isMobile
              ? "400px !important"
              : "500px",
            height: "-webkit-fill-available",
            width: isSmallToMediumScreen ? "90% !important" : "850px",
            minWidth: "auto",
            backgroundColor: "black"
          }}
        >
          <QORTPromoModal />
          <QORTPromoFont>
            Get in on the coin taking the internet by storm!
          </QORTPromoFont>
          <FlexCol>
            <CustomDiscordButton
              onClick={() => {
                ReactGA.event({
                  category: "User",
                  action: "Clicked Discord Button on homepage modal",
                  label: "Clicked Discord Button on homepage modal"
                });
                window.open("https://discord.gg/YKdxYUSqZR", "_blank");
              }}
            >
              <CustomDiscordSVG color={"#000000"} height={"62"} width={"62"} />
              <span>Join Discord</span>
            </CustomDiscordButton>
            <CustomRedirectQORTButton
              onClick={() => {
                ReactGA.event({
                  category: "User",
                  action: "Clicked Redirect to QORT Button on homepage modal",
                  label: "Clicked Redirect to QORT Button on homepage modal"
                });
                router.push("/qort");
              }}
            >
              <CustomQORTSVG color={"#000000"} height={"72"} width={"72"} />
              <span>Learn More</span>
            </CustomRedirectQORTButton>
          </FlexCol>
        </CommonModal>
      )}
    </>
  );
};

export default Home;
