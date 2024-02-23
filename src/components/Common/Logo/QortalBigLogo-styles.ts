import { styled, keyframes } from "@mui/system";
import { Box } from "@mui/material";

export const floatAnimation = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(15px);
  }
  100% {
    transform: translateY(0px);
  }
`;

export const LogoContainer = styled(Box)(({theme}) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width:"100%",
  height: "350px",
  flexDirection: "column",
  zIndex: 1,
  [theme.breakpoints.only("xl")]: {
    paddingTop: "50px"
  }  
}));

export const QortalImg = styled("img")(({theme}) => ({
  width: "70%",
  objectFit: "cover",
  userSelect: "none",
  animation: `${floatAnimation} 3s ease-in-out infinite`,
  filter: theme.palette.mode === "light" ? "drop-shadow(0px 220px 70px rgba(0, 0, 0, 0.2))" : "drop-shadow(0px 220px 70px #312e2e33)",
  overflow: "visible",
  [theme.breakpoints.down("sm")]: {
    width: "-webkit-fill-available",
    height: "300px",
    objectFit: "cover",
  }
}));

