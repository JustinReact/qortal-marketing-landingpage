import { styled, keyframes } from "@mui/system";
import { Box, Typography } from "@mui/material";

export const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const MainContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  gap: "20px",
  marginTop: "150px",
  marginLeft: "105px"
});

export const MainTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "Protest Strike",
  lineHeight: "180px",
  fontSize: "210px",
  fontWeight: 700,
  color: "#ffffff",
  letterSpacing: "0px",
  userSelect: "none",
  transform: "translateX(-105px) translateY(-50px)",
}));

export const CoinImgRow = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "flex-end",
});

export const CoinImg = styled("img")({
  width: "400px",
  height: "400px",
  objectFit: "cover",
  userSelect: "none",
  animation: `${spinAnimation} 20s linear infinite`,
  filter: "drop-shadow(0px 65px 70px rgba(0, 0, 0, 0.2))",
  overflow: "visible",
  zIndex: 1,
});

export const MainText = styled(Box)({
  textAlign: "center",
  fontFamily: "Raleway",
  fontWeight: "500",
  fontSize: "25px",
  letterSpacing: "0.3px",
  userSelect: "none",
  lineHeight: "33px",
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