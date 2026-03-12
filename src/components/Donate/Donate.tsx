"use client";
import { useEffect, useState } from "react";
import {
  Container,
  LinkButton,
  LinksContainer,
  LinksTitle,
  MainCol,
  QortalImg,
  PatreonIcon,
  QORTIcon,
  DonateButton,
  LTCIcon,
  DonateRow,
  DonateText,
  CopyButton,
  DonateCol,
  CheckmarkIcon,
  StyledDialogTitle,
  StyledDialogRow,
  StyledCloseIcon
} from "./Donate-styles";
import {
  Box,
  Dialog,
  DialogContent,
  IconButton,
  Typography,
  useTheme
} from "@mui/material";
import {
  QORTAL_DONATIONS_QORT_ADDRESS,
  QORTAL_DONATIONS_LTC_ADDRESS
} from "@/constants/addresses";
import { CommonModal } from "../Common/CommonModal/CommonModal";
import Image from "next/image";
import { CopySVG } from "../Common/Icons/CopySVG";
import { CheckmarkSVG } from "../Common/Icons/CheckmarkSVG";
import CloseIcon from "@mui/icons-material/Close";

type DonateProps = {
  address: string;
  qrCode: string;
};

const Donate = () => {
  const theme = useTheme();
  const [QORTDetails, setQORTDetails] = useState<DonateProps | null>(null);
  const [LTCDetails, setLTCDetails] = useState<DonateProps | null>(null);
  const [openDonateModal, setOpenDonateModal] = useState(false);
  const [copied, setCopied] = useState<boolean>(false);

  const copyToClipboard = (address: string): void => {
    setCopied(true);
    navigator.clipboard.writeText(address);
  };

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 4000);
    }
  }, [copied]);

  const closeModalFunc = () => {
    setOpenDonateModal(false);
    setQORTDetails(null);
    setLTCDetails(null);
  };

  return (
    <Container>
      <MainCol>
        <QortalImg
          src="/images/Links/QortalLogo.png"
          alt="Qortal Logo"
          width={147}
          height={147}
          quality={100}
        />
        <LinksTitle>
          Your contribution helps fund marketing, infrastructure, and the tools
          used to grow the Qortal network. Thank you for your support!
        </LinksTitle>
        <LinksContainer>
          <LinkButton
            href="https://link.qortal.dev/patreon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PatreonIcon
              height="24"
              width="24"
              color={theme.palette.text.primary}
            />
            Donate On Patreon
          </LinkButton>
          <DonateButton
            onClick={() => {
              setOpenDonateModal(true);
              setQORTDetails({
                address: QORTAL_DONATIONS_QORT_ADDRESS,
                qrCode: "/images/Donate/QORTAddress.png"
              });
            }}
          >
            <QORTIcon
              height="24"
              width="24"
              color={theme.palette.text.primary}
            />
            Donate Using QORT
          </DonateButton>
          <DonateButton
            onClick={() => {
              setOpenDonateModal(true);
              setLTCDetails({
                address: QORTAL_DONATIONS_LTC_ADDRESS,
                qrCode: "/images/Donate/LTCAddress.png"
              });
            }}
          >
            <LTCIcon
              height="24"
              width="24"
              color={theme.palette.text.primary}
            />
            Donate Using LTC
          </DonateButton>
        </LinksContainer>
      </MainCol>
      <>
        <Dialog
          open={openDonateModal}
          onClose={closeModalFunc}
          maxWidth="md"
          fullWidth
        >
          <StyledDialogRow>
            <StyledDialogTitle>
              {QORTDetails ? "Donate QORT" : LTCDetails ? "Donate LTC" : null}
            </StyledDialogTitle>
            <StyledCloseIcon onClick={closeModalFunc}>
              <CloseIcon />
            </StyledCloseIcon>
          </StyledDialogRow>
          <DialogContent>
            {QORTDetails ? (
              <DonateCol>
                <DonateRow>
                  <DonateText>QORT Address: {QORTDetails.address}</DonateText>
                  <CopyButton
                    onClick={() => copyToClipboard(QORTDetails.address)}
                  >
                    Copy
                    {!copied ? (
                      <CopySVG color={"#ffffff"} height="22" width="22" />
                    ) : (
                      <CheckmarkIcon>
                        <CheckmarkSVG
                          height="18"
                          width="18"
                          color={"#ffffff"}
                        />
                      </CheckmarkIcon>
                    )}
                  </CopyButton>
                </DonateRow>
                <Image
                  src={QORTDetails.qrCode}
                  alt="QORT QR Code"
                  width={150}
                  height={150}
                />
              </DonateCol>
            ) : LTCDetails ? (
              <DonateCol>
                <DonateRow>
                  <DonateText>LTC Address: {LTCDetails.address}</DonateText>
                  <CopyButton
                    onClick={() => copyToClipboard(LTCDetails.address)}
                  >
                    Copy
                    {!copied ? (
                      <CopySVG color={"#ffffff"} height="22" width="22" />
                    ) : (
                      <CheckmarkIcon>
                        <CheckmarkSVG
                          height="18"
                          width="18"
                          color={"#ffffff"}
                        />
                      </CheckmarkIcon>
                    )}
                  </CopyButton>
                </DonateRow>
                <Image
                  src={LTCDetails.qrCode}
                  alt="QORT QR Code"
                  width={150}
                  height={150}
                />
              </DonateCol>
            ) : null}
          </DialogContent>
        </Dialog>
      </>
    </Container>
  );
};

export default Donate;
