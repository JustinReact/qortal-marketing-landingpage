import { styled } from "@mui/system";
import { Box } from "@mui/material";

type MainContainerProps = {
  showInFullScreenMobile: boolean;
  isMobile: boolean;
}

export const WikiContainer = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 3fr",
  gap: "50px",
  padding: "50px",
  width: "100%",
}));

export const MainContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isExpanded"
})<MainContainerProps>(({ isMobile, showInFullScreenMobile, theme }) => ({
  display: !showInFullScreenMobile && isMobile ? "none" :  "flex",
  flexDirection: "column",
  padding: "15px",
  position: showInFullScreenMobile ? "fixed" : "relative",
  left: showInFullScreenMobile ? "0" : "unset",
  width: showInFullScreenMobile ? "100%" : "auto",
  height: showInFullScreenMobile ? "100vh" : "auto",
}));