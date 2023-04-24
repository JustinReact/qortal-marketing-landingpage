import { useState, FC } from "react";
import { Grid, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  Wrapper,
  Column,
  StyledButton,
  HeaderText,
  SubHeaderText,
  HeaderNav,
  QblogLogoContainer,
  DiscordButton,
  TriangleIcon,
  TriangleContainer,
  ThemeSelectRow,
} from "./Home-styles";
import { LightModeSVG } from "../Common/Icons/LightModeSVG";
import { DarkModeSVG } from "../Common/Icons/DarkModeSVG";
import OperatingSystem from "../OperatingSystem/OperatingSystem";
import QortalLogo from "../../images/Logo/QortalLogo.png";

// Define your component's props interface here
interface HomeProps {
  setTheme: (val: string) => void;
}

// Define your component here
const Home: FC<HomeProps> = ({ setTheme }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [operatingSystem, setOperatingSystem] = useState<string>("");

  return (
    <Wrapper>
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
          <QblogLogoContainer
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
      <HeaderText>
        <span style={{ color: theme.palette.secondary.main }}>
          Build Javascript Applications
        </span>{" "}
        on the First <br /> Fully Decentralized Blockchain Platform: Qortal
      </HeaderText>
      <SubHeaderText variant="h2">
        {!operatingSystem
          ? "Fast installation, and faster app deployment! Firstly, which OS are you using?"
          : operatingSystem === "windows"
          ? "Windows Guide"
          : "Linux Guide"}
      </SubHeaderText>
      <Grid container spacing={2}>
        {!operatingSystem ? (
          <>
            <Column item xs={12} sm={6}>
              <StyledButton
                onClick={() => setOperatingSystem("windows")}
                variant="contained"
                color="primary"
                size="large"
              >
                Windows
              </StyledButton>
            </Column>
            <Column item xs={12} sm={6}>
              <StyledButton
                onClick={() => setOperatingSystem("linux")}
                variant="contained"
                color="primary"
                size="large"
              >
                Linux
              </StyledButton>
            </Column>
          </>
        ) : (
          <OperatingSystem
            operatingSystem={operatingSystem}
            setOperatingSystem={setOperatingSystem}
          />
        )}
      </Grid>
    </Wrapper>
  );
};

export default Home;
