import { styled } from "@mui/system";
import {
  Box,
  Button,
  Grid,
  Slider,
  Typography,
  keyframes
} from "@mui/material";
import { DoubleCaretRightSVG } from "../Common/Icons/DoubleCaretRightSVG";
import Image from "next/image";

const doubleCaretRightAnimation = keyframes`
    0%, 100% {
      fill: #ffffff05;
    }
    50% {
      fill: #0085ff;
  }
`;

export const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "80px",
  padding: "128px 80px 14px 80px",
  [theme.breakpoints.down("lg")]: {
    padding: "50px 20px 14px 20px"
  }
}));

export const TopFold = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  flexWrap: "nowrap",
  gap: "50px",
  '@media (max-width: 1143px)': {
    flexDirection: "column",
    gap: "20px"
  }
}));

export const TopFoldCol = styled(Grid)({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  gap: "10px",
  width: "100%"
});

export const TopFoldRow = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  [theme.breakpoints.down("lg")]: {
    justifyContent: "center"
  }
}));

export const TopFoldButtonRow = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  marginTop: "25px",
  gap: "30px",
  [theme.breakpoints.down("lg")]: {
    justifyContent: "center"
  },
  [theme.breakpoints.down("sm")]: {
    marginBottom: "30px"
  }
}));

export const Header = styled(Typography)(({ theme }) => ({
  fontFamily: "Monoton",
  fontSize: "64px",
  fontWeight: 400,
  lineHeight: "73px",
  letterSpacing: "0.09em",
  color: theme.palette.text.primary,
  userSelect: "none",
  "@media (max-width: 1533px)": {
    whiteSpace: "normal"
  },
  [theme.breakpoints.down("lg")]: {
    textAlign: "center",
    whiteSpace: "normal"
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "48px",
    lineHeight: "55px"
  }
}));

export const SubHeader = styled(Typography)(({ theme }) => ({
  fontFamily: "Futura",
  fontSize: "64px",
  fontWeight: 400,
  lineHeight: "73px",
  letterSpacing: "0.09em",
  userSelect: "none",
  color: theme.palette.text.primary,
  [theme.breakpoints.down("lg")]: {
    textAlign: "center"
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "48px",
    lineHeight: "55px"
  }
}));

export const CTAButton1 = styled(Button)(({ theme }) => ({
  fontFamily: "Futura",
  fontWeight: 500,
  fontSize: "16px",
  lineHeight: "21.3px",
  width: "181px",
  height: "43px",
  padding: "10px 30px 10px 30px",
  gap: "7px",
  borderRadius: "30px",
  border: `1px solid ${theme.palette.text.primary}`,
  color: theme.palette.text.primary,
  backgroundColor: "transparent",
  boxShadow: "1px 4px 10.5px 0px #0000004D",
  cursor: "pointer",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    backgroundColor: "#0085FF",
    border: `1px solid #0085FF`,
    color: "#ffffff"
  }
}));

export const CTAButton2 = styled(Button)(({ theme }) => ({
  fontFamily: "Futura",
  fontWeight: 500,
  fontSize: "16px",
  lineHeight: "21.3px",
  width: "181px",
  height: "43px",
  padding: "10px 30px 10px 30px",
  gap: "7px",
  borderRadius: "30px",
  border: "1px solid #0085FF",
  color: "#ffffff",
  backgroundColor: "#0085FF",
  cursor: "pointer",
  boxShadow: "1px 4px 10.5px 0px #0000004D",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    backgroundColor: "#0085FF",
    color: "#ffffff",
    boxShadow:
      /* offset-x | offset-y | blur-radius | spread-radius | color */
      "0px 12px 17px 2px hsla(0,0%,0%,0.14), 0px 5px 22px 4px hsla(0,0%,0%,0.12), 0px 7px 8px -4px hsla(0,0%,0%,0.2)"
  }
}));

export const ExtensionDesignImage = styled("img")(({ theme }) => ({
  width: "456px",
  height: "456px",
  alignSelf: "center",
  [theme.breakpoints.down("md")]: {
    width: "300px",
    height: "300px"
  }
}));

export const QonnectFourSection = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  gap: "100px",
  [theme.breakpoints.down("lg")]: {
    gap: "15px"
  },
  [theme.breakpoints.down("md")]: {}
}));

export const QonnectFourHeader = styled(Typography)(({ theme }) => ({
  fontFamily: "Futura",
  fontSize: "48px",
  fontWeight: 500,
  lineHeight: "63.91px",
  color: theme.palette.text.primary,
  userSelect: "none",
  "& a": {
    cursor: "pointer",
    color: "#0085FF",
    textDecoration: "none"
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "35px",
    lineHeight: "52.27px",
    textAlign: "center"
  }
}));

export const QonnectFourMainCol = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "100px",
  width: "100%",
  [theme.breakpoints.down("lg")]: {
    gap: "25px"
  }
}));

export const QonnectFourCol = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
  width: "100%"
});

export const QonnectFourMainRow = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: "50px",
  width: "100%",
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column"
  }
}));

export const QonnectFourRow = styled(Box)({
  display: "flex",
  flexDirection: "row",
  gap: "50px",
  width: "100%"
});

export const QonnectFourText = styled(Typography)(({ theme }) => ({
  fontFamily: "Futura Light",
  fontSize: "32px",
  lineHeight: "41.39px",
  letterSpacing: "0.05em",
  color: theme.palette.text.primary,
  userSelect: "none",
  [theme.breakpoints.down("md")]: {
    fontSize: "25px",
    lineHeight: "32.39px",
    textAlign: "center"
  }
}));

export const BubbleBoard = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(9, 1fr)",
  gridTemplateRows: "repeat(4, 1fr)",
  gap: "15px",
  width: "815px",
  height: "353px",
  [theme.breakpoints.down("md")]: {
    width: "auto",
    gap: "10px"
  }
}));

export const BubbleCard = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "77px",
  width: "77px",
  background: theme.palette.mode === "dark" ? "#ffffff05" : "#D9D9D9",
  borderRadius: "50%",
  fontFamily: "Fredoka One",
  fontWeight: 500,
  fontSize: "40px",
  lineHeight: "48.4px",
  textAlign: "center",
  color: theme.palette.text.primary,
  [theme.breakpoints.down("md")]: {
    fontSize: "35px",
    width: "47px",
    height: "47px"
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "25px",
    width: "35px",
    height: "35px"
  }
}));

export const BubbleCardColored = styled(Box)(({ theme }) => ({
  height: "77px",
  width: "77px",
  background: "#0085FF",
  boxShadow: "0px 0px 25.8px -1px #1C5A93",
  borderRadius: "50%",
  [theme.breakpoints.down("md")]: {
    width: "47px",
    height: "47px"
  },
  [theme.breakpoints.down("sm")]: {
    width: "35px",
    height: "35px"
  }
}));

export const SliderContainer = styled(Box)({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "42px",
  width: "378px"
});

export const StyledSlider = styled(Slider)(({ theme }) => ({
  " & .MuiSlider-thumb": {
    width: "77px",
    height: "77px",
    zIndex: 2,
    background: "#0085FF",
    [theme.breakpoints.down("md")]: {
      width: "67px",
      height: "67px",
      left: "5% !important"
    }
  },
  "& .MuiSlider-rail": {
    width: "378px",
    height: "87px",
    background: "#2B2B2B",
    borderRadius: "50px",
    boxShadow: "0px 0px 12.8px -1px #1C5A93"
  },
  "& .MuiSlider-track": {
    display: "none"
  }
}));

export const DoubleCaretRightIcon = styled(DoubleCaretRightSVG)(
  ({ theme }) => ({
    position: "absolute",
    top: "55px",
    left: "60px",
    userSelect: "none",
    animation: `${doubleCaretRightAnimation} 6s infinite`,
    animationDelay: "0s",
    [theme.breakpoints.down("md")]: {
      top: "65px"
    }
  })
);

export const DoubleCaretRightIcon2 = styled(DoubleCaretRightSVG)(
  ({ theme }) => ({
    position: "absolute",
    top: "55px",
    left: "165px",
    userSelect: "none",
    animation: `${doubleCaretRightAnimation} 6s infinite`,
    animationDelay: "2s",
    [theme.breakpoints.down("md")]: {
      top: "65px"
    }
  })
);

export const DoubleCaretRightIcon3 = styled(DoubleCaretRightSVG)(
  ({ theme }) => ({
    position: "absolute",
    top: "55px",
    left: "270px",
    userSelect: "none",
    animation: `${doubleCaretRightAnimation} 6s infinite`,
    animationDelay: "4s",
    [theme.breakpoints.down("md")]: {
      top: "65px"
    }
  })
);

export const SliderText = styled(Typography)(({ theme }) => ({
  fontFamily: "Fredoka One",
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "19.36px",
  textAlign: "left",
  color: theme.palette.text.primary
}));

export const QortalWalletSection = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  gap: "100px",
  [theme.breakpoints.down("lg")]: {
    gap: "15px"
  }
}));

export const QortalWalletHeader = styled(Typography)(({ theme }) => ({
  fontFamily: "Futura",
  fontSize: "48px",
  fontWeight: 500,
  lineHeight: "63.91px",
  letterSpacing: "0.05em",
  color: theme.palette.text.primary,
  userSelect: "none",
  "& a": {
    cursor: "pointer",
    color: "#0085FF",
    textDecoration: "none"
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "35px",
    lineHeight: "52.27px",
    textAlign: "center"
  }
}));

export const QortalWalletCards = styled(Grid)({});

export const QortalWalletCard = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}));

export const QortalWalletCardImage = styled(Image)(({ theme }) => ({
  width: "400px",
  height: "500px",
  [theme.breakpoints.down("md")]: {
    width: "250px",
    height: "350px"
  },
  [theme.breakpoints.down("sm")]: {
    width: "300px",
    height: "400px"
  }
}));

export const QortalWalletDescription = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "50px",
  width: "100%",
  [theme.breakpoints.down("lg")]: {
    gap: "25px"
  }
}));

export const QortalWalletText = styled(Typography)(({ theme }) => ({
  fontFamily: "Futura Light",
  fontSize: "32px",
  lineHeight: "42.27px",
  letterSpacing: "0.05em",
  color: theme.palette.text.primary,
  userSelect: "none",
  [theme.breakpoints.down("md")]: {
    fontSize: "25px",
    lineHeight: "32.27px",
    textAlign: "center"
  }
}));

export const QortalWalletText2 = styled(Typography)(({ theme }) => ({
  fontFamily: "Futura",
  fontSize: "48px",
  lineHeight: "63.91px",
  letterSpacing: "0.042em",
  color: theme.palette.text.primary,
  userSelect: "none",
  [theme.breakpoints.down("md")]: {
    fontSize: "35px",
    lineHeight: "52.27px",
    textAlign: "center"
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "25px",
    lineHeight: "32.27px"
  }
}));
