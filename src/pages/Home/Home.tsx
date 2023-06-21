import { useState, FC, useEffect } from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { QortalBigLogo } from "../../components/Common/Logo/QortalBigLogo";
import { Lines } from "../../components/Common/Lines/Lines";
import {
  StyledButton,
  HeaderText,
  SubHeaderText,
  FooterRow,
  ButtonRow,
  VideoRow,
  VideoTitle
} from "./Home-styles";
import OperatingSystem from "../../components/OperatingSystem/OperatingSystem";
import { WindowsSVG } from "../../components/Common/Icons/WindowsSVG";
import { LinuxSVG } from "../../components/Common/Icons/LinuxSVG";
import { AppleSVG } from "../../components/Common/Icons/AppleSVG";
import { CommonModal } from "../../components/Common/CommonModal/CommonModal";
import { YoutubePlaceholder } from "../../components/YouTube/YoutubePlaceholder";

const Home: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [operatingSystem, setOperatingSystem] = useState<string>("");
  const [firstTimeVisitor, setFirstTimeVisitor] = useState<boolean>(false);
  const [showVideoPlayer, setShowVideoPlayer] = useState<boolean>(false);

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

  const handleVideoClick = () => {
    setShowVideoPlayer((prevState) => !prevState);
  };

  return (
    <>
      <Lines />
      <HeaderText variant="h1">
        <span style={{ color: theme.palette.secondary.main }}>
          Build Javascript Applications
        </span>{" "}
        on the First {!isMobile && <br />}
        Fully Decentralized Blockchain Platform: Qortal
      </HeaderText>
      <SubHeaderText variant="h2">
        Fast installation, and faster app deployment! Firstly, which OS are you
        using?
      </SubHeaderText>
      <FooterRow container>
        {!operatingSystem ? (
          <>
            <QortalBigLogo />
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
            <VideoRow>
              <VideoTitle variant="h2">
                Watch the Q-Apps Promotional Video!
              </VideoTitle>
              {showVideoPlayer && !firstTimeVisitor ? (
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
            handleVideoClick();
          }}
        >
          <Box
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              paddingBottom: "5px"
            }}
          >
            {showVideoPlayer ? (
              <iframe
                src="https://www.youtube.com/embed/X7l2R0LF_5U?autoplay=1"
                loading="lazy"
                title="Introducing Qortal Q-Apps"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  padding: "20px",
                  border: "none"
                }}
                allowFullScreen
                allow="autoplay"
              ></iframe>
            ) : (
              <YoutubePlaceholder isModal={true} onClick={handleVideoClick} />
            )}
          </Box>
        </CommonModal>
      )}
    </>
  );
};

export default Home;
