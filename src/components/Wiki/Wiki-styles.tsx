import { lineHeight, styled, textTransform } from "@mui/system";
import { Box } from "@mui/material";
import { oxygen } from "../../app/fonts";
import { ChevronLeftSVG } from "../Common/Icons/ChevronLeftSVG";
import { ChevronRightSVG } from "../Common/Icons/ChevronRightSVG";

type MainContainerProps = {
  showInFullScreenMobile: boolean;
  isMobile: boolean;
}

export const WikiContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "showInFullScreenMobile" && prop !== "isMobile",
})<MainContainerProps>(({ isMobile, showInFullScreenMobile, theme }) => ({
  display: "grid",
  gridTemplateColumns: isMobile && showInFullScreenMobile ? "1fr" : "1fr 3fr",
  gap: "50px",
  padding: "50px",
  width: "100%",
  [theme.breakpoints.down("lg")]: {
    padding: "50px 25px",
  },
  [theme.breakpoints.down("md")]: {
    padding: "50px 0",
  },
}));

export const MainContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "showInFullScreenMobile" && prop !== "isMobile",
})<MainContainerProps>(({ isMobile, showInFullScreenMobile, theme }) => ({
  display: !showInFullScreenMobile && isMobile ? "none" :  "flex",
  flexDirection: "column",
  alignItems: showInFullScreenMobile ? "center" : "flex-start",
  padding: "15px",
}));

export const MobileSectionListContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  gap: "34px",
  marginBottom: "80px",
}));

export const MobileSectionList = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "38px",
  width: "100%",
}));

export const SectionTitleMobile = styled(Box)(({ theme }) => ({
  textTransform: "uppercase",
  fontFamily: oxygen.style.fontFamily,
  fontSize: "20px",
  fontWeight: "bold",
  lineHeight: "27px",
  letterSpacing: 0,
  userSelect: "none",
  cursor: "pointer",
  color: theme.palette.text.primary,
}));

export const ChevronIcon = styled(ChevronLeftSVG)({
  marginTop: "5px",
  cursor: "pointer",
})

export const ChevronLeftIcon = styled(ChevronLeftSVG)({
  marginTop: "7px",
  cursor: "pointer",
})

export const ChevronRightIcon = styled(ChevronRightSVG)({
  marginTop: "7px",
  cursor: "pointer",
});

export const FooterRow = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
  paddingTop: "75px",
});

export const FooterSubRow = styled(Box)({
  display: "flex",
  flexDirection: "row",
  gap: "15px",
  alignItems: "center",
  cursor: "pointer",
  "& p": {
    fontFamily: oxygen.style.fontFamily,
    fontSize: "15px",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 0,
    lineHeight: "27px",
    userSelect: "none",
  }
});