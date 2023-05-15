import { useState, useEffect } from "react";
import { Box, Grid, useTheme } from "@mui/material";
import {
  CheckmarkIcon,
  CopyButton,
  LinuxTerminalContainer,
  ScreenshotRow,
  ScriptCard,
} from "./LinuxTerminal-styles";
import { CopySVG } from "../../../Common/Icons/CopySVG";
import {
  MagnifyingGlass,
  ModalScreenshot,
  MuseoFont,
  Screenshot,
  ScreenshotContainer,
  StepColumn,
} from "../../Steps-styles";
import { CheckmarkSVG } from "../../../Common/Icons/CheckmarkSVG";
import Modal from "../../../Common/Modal/Modal";
import TerminalScreenshot from "../../../../images/Linux/LinuxTerminalScreenshot.png";

interface TerminalProps {
  setOpenModal: () => void;
}

export const LinuxTerminal: React.FC<TerminalProps> = ({ setOpenModal }) => {
  const theme = useTheme();
  const [linuxCommand] = useState<string>(
    "cd && cd Desktop && curl -L -O https://github.com/Qortal/qortal-ui/releases/latest/download/Qortal-Setup-amd64.AppImage && mv Qortal-Setup*.AppImage Qortal-UI && chmod +x Qortal-UI"
  );
  const [copied, setCopied] = useState<boolean>(false);

  const copyToClipboard = () => {
    setCopied(true);
    navigator.clipboard.writeText(linuxCommand);
  };

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 4000);
    }
  }, [copied]);

  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={6}>
        <MuseoFont variant="h3" sx={{ margin: "15px 0 20px 0" }}>
          You can download the Qortal UI by copying the wget script below and
          running it in your terminal!
        </MuseoFont>
        <MuseoFont variant="h3" sx={{ margin: "0px 0 20px 0" }}>
          Once the download is completed, the application shortcut will appear
          directly on your desktop. You can launch the UI directly from there!
        </MuseoFont>
        <ScriptCard>
          <CopyButton onClick={copyToClipboard}>
            Copy
            {!copied ? (
              <CopySVG color={"#ffffff"} height="22" width="22" />
            ) : (
              <CheckmarkIcon>
                <CheckmarkSVG height="18" width="18" color={"#ffffff"} />
              </CheckmarkIcon>
            )}
          </CopyButton>
          <LinuxTerminalContainer>{linuxCommand}</LinuxTerminalContainer>
        </ScriptCard>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={6}>
        <ScreenshotRow>
          <ScreenshotContainer
            sx={{ padding: "0 8px" }}
            onClick={() => setOpenModal()}
          >
            <Screenshot
              sx={{ objectFit: "contain" }}
              src={TerminalScreenshot}
              alt="step1"
            />
            <MagnifyingGlass id="magnifying-glass" />
          </ScreenshotContainer>
        </ScreenshotRow>
      </Grid>
    </Grid>
  );
};
