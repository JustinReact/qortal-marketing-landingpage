import { useState, useEffect } from "react";
import { Box, useTheme } from "@mui/material";
import {
  CheckmarkIcon,
  CopyButton,
  LinuxTerminalContainer,
  ScreenshotRow,
} from "./LinuxTerminal-styles";
import { CopySVG } from "../../../Common/Icons/CopySVG";
import {
  MagnifyingGlass,
  ModalScreenshot,
  MuseoFont,
  Screenshot,
  ScreenshotContainer,
} from "../../Steps-styles";
import { CheckmarkSVG } from "../../../Common/Icons/CheckmarkSVG";
import TerminalScreenshot from "../../../../images/Linux/LinuxTerminal.png";
import Modal from "../../../Common/Modal/Modal";

export const LinuxTerminal = () => {
  const theme = useTheme();
  const [linuxCommand] = useState<string>(
    "cd && cd Desktop && curl -L -O https://github.com/Qortal/qortal-ui/releases/latest/download/Qortal-Setup-amd64.AppImage && mv Qortal-Setup*.AppImage Qortal-UI && chmod +x Qortal-UI"
  );
  const [copied, setCopied] = useState<boolean>(false);
  const [openModal, setOpenModal] = useState<boolean>(false);

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
    <>
      <MuseoFont variant="h3" sx={{ margin: "15px 0 20px 0" }}>
        You can download the Qortal UI by copying the wget script below and
        running it in your terminal!
      </MuseoFont>
      <Box sx={{ position: "relative", marginBottom: "15px" }}>
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
      </Box>
      <ScreenshotRow>
        <ScreenshotContainer onClick={() => setOpenModal(true)}>
          <Screenshot
            sx={{ objectFit: "contain" }}
            src={TerminalScreenshot}
            alt="step1"
          />
          <MagnifyingGlass id="magnifying-glass" />
        </ScreenshotContainer>
      </ScreenshotRow>
      {openModal && (
        <Modal openModal={openModal} onClickFunc={() => setOpenModal(false)}>
          <ModalScreenshot
            src={TerminalScreenshot}
            alt="step1"
          ></ModalScreenshot>
        </Modal>
      )}
    </>
  );
};
