import { styled, keyframes } from "@mui/system";
import { Box } from "@mui/material";

const floatAnimation = keyframes`
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

export const LogoContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width:"100%",
  zIndex: 1,
});

export const QortalImg = styled("img")(({theme}) => ({
  width: "100%",
  height: "530px",
  objectFit: "contain",
  userselect: "none",
  animation: `${floatAnimation} 3s ease-in-out infinite`,
  filter: theme.palette.mode === "light" ? "drop-shadow(0px 350px 70px rgba(0, 0, 0, 0.2))" : "drop-shadow(0px 350px 70px #312e2e33)",
  [theme.breakpoints.down("sm")]: {
    width: "-webkit-fill-available",
    height: "300px",
    objectFit: "cover",
  }
}));

