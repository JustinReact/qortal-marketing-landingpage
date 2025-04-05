import { FC } from "react";
import { Divider, useMediaQuery, useTheme } from "@mui/material";
import { BackArrowSVG } from "../Common/Icons/BackArrowSVG";
import {
  BackArrowIcon,
  BackButton,
  BackRow,
  DownArrowIcon,
  MainContainer,
  SubHeaderRow,
  SubHeaderText
} from "./OperatingSystem-styles";
import { WindowsSteps } from "../TutorialSteps/Windows/WindowsSteps";
import LinuxSteps from "../TutorialSteps/Linux/LinuxSteps";
import MacSteps from "../TutorialSteps/Mac/MacSteps";

interface OperatingSystemOptions {
  operatingSystem: string;
  setOperatingSystem: React.Dispatch<React.SetStateAction<string>>;
}

const OperatingSystem: FC<OperatingSystemOptions> = ({
  operatingSystem,
  setOperatingSystem
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <MainContainer container>
      <BackRow>
        <BackButton onClick={() => setOperatingSystem("")}>
          Back Home
        </BackButton>
        <SubHeaderText sx={{}}>
          <SubHeaderRow>
            <BackArrowIcon onClick={() => setOperatingSystem("")}>
              <BackArrowSVG color="#ffffff" height="25" width="25" />
            </BackArrowIcon>
            {operatingSystem === "windows" ? (
              <span>
                Follow through the steps below to install Qortal on{" "}
                <span style={{ color: theme.palette.secondary.main }}>
                  Windows
                </span>
              </span>
            ) : operatingSystem === "linux" ? (
              <span>
                Follow through the steps below to install Qortal on{" "}
                <span style={{ color: theme.palette.secondary.main }}>
                  Linux
                </span>
              </span>
            ) : operatingSystem === "mac" ? (
              <span>
                Follow through the steps below to install Qortal on{" "}
                <span style={{ color: theme.palette.secondary.main }}>
                  Mac OS
                </span>
              </span>
            ) : null}
            <DownArrowIcon
              color={theme.palette.text.primary}
              height={"32"}
              width={"32"}
            />
          </SubHeaderRow>
        </SubHeaderText>
      </BackRow>
      <Divider
        component="div"
        role="presentation"
        orientation="horizontal"
        style={{
          height: "1px",
          width: "95%",
          backgroundColor: "#e4dede73",
          display: isMobile ? "none" : "block"
        }}
      />
      {operatingSystem === "windows" ? (
        <WindowsSteps />
      ) : operatingSystem === "linux" ? (
        <LinuxSteps />
      ) : operatingSystem === "mac" ? (
        <MacSteps />
      ) : null}
    </MainContainer>
  );
};

export default OperatingSystem;
