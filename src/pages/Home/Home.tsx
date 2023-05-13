import { useState, FC } from "react";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { QortalBigLogo } from "../../components/Common/Logo/QortalBigLogo";
import { Lines } from "../../components/Common/Lines/Lines";
import {
  Wrapper,
  StyledButton,
  HeaderText,
  SubHeaderText,
  HeaderNav,
  DiscordButton,
  TriangleIcon,
  TriangleContainer,
  ThemeSelectRow,
  ButtonRow,
  QortalLogoContainer,
  FooterRow,
} from "./Home-styles";
import { LightModeSVG } from "../../components/Common/Icons/LightModeSVG";
import { DarkModeSVG } from "../../components/Common/Icons/DarkModeSVG";
import OperatingSystem from "../../components/OperatingSystem/OperatingSystem";
import QortalLogo from "../../images/Logo/QortalLogo.png";
import { WindowsSVG } from "../../components/Common/Icons/WindowsSVG";
import { LinuxSVG } from "../../components/Common/Icons/LinuxSVG";
import { AppleSVG } from "../../components/Common/Icons/AppleSVG";
// Define your component's props interface here
interface HomeProps {
  setTheme: (val: string) => void;
}

// Define your component here
const Home: FC<HomeProps> = ({ setTheme }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [operatingSystem, setOperatingSystem] = useState<string>("");

  return (
    <Wrapper>
      <Lines />
      <HeaderNav>
        <ThemeSelectRow>
          {theme.palette.mode === "dark" ? (
            <LightModeSVG
              onClickFunc={() => setTheme("light")}
              color="white"
              height="22"
              width="22"
            />
          ) : (
            <DarkModeSVG
              onClickFunc={() => setTheme("dark")}
              color="black"
              height="22"
              width="22"
            />
          )}
          <QortalLogoContainer
            src={QortalLogo}
            alt="Qblog Logo"
            onClick={() => {
              navigate(`/`);
            }}
          />
        </ThemeSelectRow>
        <DiscordButton
          onClick={() => {
            window.open("https://discord.gg/nNvqGAamjb", "_blank");
          }}
        >
          Join Discord
          <TriangleContainer>
            <TriangleIcon />
          </TriangleContainer>
        </DiscordButton>
      </HeaderNav>
      <HeaderText  variant="h1">
        <span style={{ color: theme.palette.secondary.main }}>
          Build Javascript Applications
        </span>{" "}
        on the First {!isMobile && <br />}
        Fully Decentralized Blockchain Platform: Qortal
      </HeaderText>
      <SubHeaderText variant="h2">
        {!operatingSystem
          ? "Fast installation, and faster app deployment! Firstly, which OS are you using?"
          : operatingSystem === "windows"
          ? "Windows Guide"
          : operatingSystem === "linux" ? "Linux Guide"
          : operatingSystem === "mac" ? "Mac Guide"
          : null
        }
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
          </>
        ) : (
          <OperatingSystem
            operatingSystem={operatingSystem}
            setOperatingSystem={setOperatingSystem}
          />
        )}
      </FooterRow>
    </Wrapper>
  );
};

export default Home;
