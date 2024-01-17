import { styled } from "@mui/system";
import { Box } from "@mui/material";
import { floatAnimation } from "../../components/Common/Logo/QortalBigLogo-styles";

export const MainContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  marginTop: "-20px",
  gap: "20px"
});

export const MainText = styled(Box)({
  textAlign: "center",
  fontFamily: "Raleway",
  fontWeight: "500",
  fontSize: "28px",
  letterSpacing: "0.3px",
  userSelect: "none",
});

export const LogoContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width:"60%",
  height: "auto",
  flexDirection: "column",
  zIndex: 1,
});

export const QortalImg = styled("img")(({theme}) => ({
  width: "70%",
  objectFit: "cover",
  userSelect: "none",
  animation: `${floatAnimation} 3s ease-in-out infinite`,
  filter: theme.palette.mode === "light" ? "drop-shadow(0px 65px 70px rgba(0, 0, 0, 0.2))" : "drop-shadow(0px 65px 70px #312e2e33)",
  overflow: "visible",
  [theme.breakpoints.down("sm")]: {
    width: "-webkit-fill-available",
    height: "300px",
    objectFit: "cover",
  }
}));

export const SocialButton = styled("button")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  borderRadius: "5px",
  gap: "15px",
  position: "relative",
  width: "300px",
  backgroundColor: theme.palette.mode === "dark" ? "#ffffff" : "#1300af",
  color: theme.palette.mode === "dark" ? "#1300af" : "#ffffff",
  fontFamily: "Montserrat",
  padding: "18px 20px",
  fontSize: "24px",
  letterSpacing: "0.9px",
  fontWeight: 500,
  border: "none",
  boxShadow:
    theme.palette.mode === "dark"
      ? "0px 4px 5px 0px hsla(0,0%,0%,0.14),  0px 1px 10px 0px hsla(0,0%,0%,0.12),  0px 2px 4px -1px hsla(0,0%,0%,0.2)"
      : "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    cursor: "pointer",
    boxShadow:
      theme.palette.mode === "dark"
        ? "0px 8px 10px 1px hsla(0,0%,0%,0.14), 0px 3px 14px 2px hsla(0,0%,0%,0.12), 0px 5px 5px -3px hsla(0,0%,0%,0.2)"
        : "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"
  }
}));

export const ButtonCol = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: "15px",
  width: "100%",
});