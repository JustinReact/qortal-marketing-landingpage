import { useState, FC } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { QortalBigLogo } from "../../components/Common/Logo/QortalBigLogo";
import { Lines } from "../../components/Common/Lines/Lines";
import {
  StyledButton,
  HeaderText,
  SubHeaderText,
  FooterRow,
  ButtonRow
} from "./Home-styles";
import OperatingSystem from "../../components/OperatingSystem/OperatingSystem";
import { WindowsSVG } from "../../components/Common/Icons/WindowsSVG";
import { LinuxSVG } from "../../components/Common/Icons/LinuxSVG";
import { AppleSVG } from "../../components/Common/Icons/AppleSVG";

const Home: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [operatingSystem, setOperatingSystem] = useState<string>("");

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
          </>
        ) : (
          <OperatingSystem
            operatingSystem={operatingSystem}
            setOperatingSystem={setOperatingSystem}
          />
        )}
      </FooterRow>
    </>
  );
};

export default Home;
