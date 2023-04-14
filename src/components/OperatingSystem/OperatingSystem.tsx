import { Divider } from "@mui/material";
import { BackButton, MainContainer } from "./OperatingSystem-styles";
import { FC } from "react";
import WindowsSteps from "../TutorialSteps/Windows/WindowsSteps";
import LinuxSteps from "../TutorialSteps/Linux/LinuxSteps";

interface OperatingSystemOptions {
  operatingSystem: string;
  setOperatingSystem: React.Dispatch<React.SetStateAction<string>>;
}

const OperatingSystem: FC<OperatingSystemOptions> = ({
  operatingSystem,
  setOperatingSystem,
}) => {
  return (
    <MainContainer container>
      <BackButton onClick={() => setOperatingSystem("")}>Back Home</BackButton>
      <Divider
        component="div"
        role="presentation"
        orientation="horizontal"
        style={{ height: "1px", width: "95%", backgroundColor: "#e4dede73" }}
      />
      {operatingSystem === "windows" ? <WindowsSteps /> : <LinuxSteps />}
    </MainContainer>
  );
};

export default OperatingSystem;
