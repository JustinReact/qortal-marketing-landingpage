import { Divider, useMediaQuery, useTheme } from "@mui/material";
import {
  BackArrowIcon,
  BackButton,
  MainContainer,
} from "./OperatingSystem-styles";
import { FC } from "react";
import WindowsSteps from "../TutorialSteps/Windows/WindowsSteps";
import LinuxSteps from "../TutorialSteps/Linux/LinuxSteps";
import { BackArrowSVG } from "../Common/Icons/BackArrowSVG";

interface OperatingSystemOptions {
  operatingSystem: string;
  setOperatingSystem: React.Dispatch<React.SetStateAction<string>>;
}

const OperatingSystem: FC<OperatingSystemOptions> = ({
  operatingSystem,
  setOperatingSystem,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <MainContainer container>
      <BackButton onClick={() => setOperatingSystem("")}>Back Home</BackButton>
      <BackArrowIcon onClick={() => setOperatingSystem("")}>
        <BackArrowSVG color="#ffffff" height="25" width="25" />
      </BackArrowIcon>
      <Divider
        component="div"
        role="presentation"
        orientation="horizontal"
        style={{
          height: "1px",
          width: "95%",
          backgroundColor: "#e4dede73",
          display: isMobile ? "none" : "block",
        }}
      />
      {operatingSystem === "windows" ? <WindowsSteps /> : <LinuxSteps />}
    </MainContainer>
  );
};

export default OperatingSystem;
