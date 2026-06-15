import { lineHeight, styled, textTransform } from "@mui/system";
import { Box } from "@mui/material";
import { oxygen } from "../../app/fonts";
import { ChevronLeftSVG } from "../Common/Icons/ChevronLeftSVG";
import { ChevronRightSVG } from "../Common/Icons/ChevronRightSVG";
import { BackArrowSVG } from "../Common/Icons/BackArrowSVG";

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
  padding: "15px",
}));

export const MobileSectionListContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  gap: "34px",
  marginBottom: "80px",
}));

export const MobileHeaderActions = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "18px",
  flexShrink: 0
});

export const MobileSearchButton = styled("button")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "32px",
  height: "32px",
  padding: 0,
  border: "none",
  borderRadius: "4px",
  backgroundColor: "transparent",
  color: theme.palette.text.primary,
  cursor: "pointer",
  transition: "background-color 0.2s ease-in-out",
  "&:hover": {
    backgroundColor: theme.palette.mode === "dark" ? "#1a2332" : "#f3f3f3"
  }
}));

export const MobileSearchOverlay = styled(Box)(({ theme }) => ({
  position: "fixed",
  inset: 0,
  zIndex: 1300,
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  padding: "20px 15px",
  backgroundColor: theme.palette.background.default,
  overflowY: "auto"
}));

export const MobileSearchOverlayHeader = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%"
});

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

export const TopOfPageRef = styled("div")({
  position: "absolute",
  top: "0px",
  height: "1px"
});

export const ScrollToTopButton = styled("div")(({ theme }) => ({
  position: "fixed",
  bottom: "20px",
  right: "20px",
  backgroundColor: theme.palette.customBlue.main,
  width: "45px",
  height: "45px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.3s ease-in-out",
  zIndex: 20,
  "&:hover": {
    cursor: "pointer",
    transform: "scale(1.05)"
  }
}));

export const TopArrow = styled(BackArrowSVG)(({ theme }) => ({
  rotate: "90deg"
}));
