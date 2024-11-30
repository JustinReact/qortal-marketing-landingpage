import { display, keyframes, styled } from "@mui/system";
import {
  Box,
  Slider,
  Typography
} from "@mui/material";
import { fredokaOne, futura } from "../../app/fonts";
import { DoubleCaretRightSVG } from "../Common/Icons/DoubleCaretRightSVG";

const doubleCaretRightAnimation = keyframes`
    0%, 100% {
      fill: #ffffff05;
    }
    50% {
      fill: #0085FF;
  }
`;

export const QonnectFourSection = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  gap: "100px",
  [theme.breakpoints.down("lg")]: {
    gap: "15px"
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  }
}));

export const QonnectFourHeader = styled(Typography)(({ theme }) => ({
  fontFamily: futura.style.fontFamily,
  fontSize: "48px",
  fontWeight: 500,
  lineHeight: "63.91px",
  color: theme.palette.text.primary,
  userSelect: "none",
  "& a": {
    cursor: "pointer",
    color: theme.palette.customBlue.main,
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
  fontFamily: futura.style.fontFamily,
  fontWeight: 300,
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
  [theme.breakpoints.down("md")]: {
    width: "auto",
    gap: "10px",
    height: "fit-content"
  },
  [theme.breakpoints.down("sm")]: {
    gap: "5px"
  }
}));

export const BubbleCard = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "50px",
  width: "50px",
  background: theme.palette.mode === "dark" ? "#ffffff05" : "#D9D9D9",
  borderRadius: "50%",
  fontFamily: fredokaOne.style.fontFamily,
  fontWeight: 500,
  fontSize: "35px",
  lineHeight: "48.4px",
  textAlign: "center",
  color: "#FCA6A6",
  [theme.breakpoints.down("md")]: {
    fontSize: "35px",
    width: "47px",
    height: "47px"
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "25px",
    width: "30px",
    height: "30px"
  }
}));

export const BubbleCardColored = styled(Box)(({ theme }) => ({
  height: "50px",
  width: "50px",
  background: "#FCA6A6",
  boxShadow: "0px 0px 25.8px -1px #F29999",
  borderRadius: "50%",
  [theme.breakpoints.down("md")]: {
    width: "47px",
    height: "47px"
  },
  [theme.breakpoints.down("sm")]: {
    width: "30px",
    height: "30px"
  }
}));

export const SliderContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "35px",
  width: "378px",
  [theme.breakpoints.down("sm")]: {
    alignItems: "flex-start",
    gap: "45px",
  },
  "@media(max-width: 415px)": {
    width: "300px"
  }
}));

export const StyledSlider = styled(Slider)(({ theme }) => ({
  " &.MuiSlider-root": {
    width: "80% !important",
  },
  " & .MuiSlider-thumb": {
    width: "77px",
    height: "77px",
    transform: 'translateX(5px) translateY(-40px)',
    zIndex: 2,
    background: "#E19A00",
    "&:hover": {
      boxShadow: "none !important"
    },
    "&.Mui-active": {
      boxShadow: "none !important"
    },
    "&.Mui-focusVisible": {
      boxShadow: "none !important"
    },
    "&.mui-18ue8vk-MuiSlider-root": {
      width: "80%",
    }
  },
  "& .MuiSlider-rail": {
    width: "378px",
    height: "87px",
    background: "#2B2B2B",
    borderRadius: "50px",
    transform: "translateY(-45px)",
    "@media(max-width: 415px)": {
      width: "300px"
    }
  },
  "& .MuiSlider-track": {
    display: "none",
  },
}));

export const DoubleCaretRightIcon = styled(DoubleCaretRightSVG)(
  ({ theme }) => ({
    position: "absolute",
    top: "50px",
    left: "140px",
    userSelect: "none",
    animation: `${doubleCaretRightAnimation} 6s infinite`,
    animationDelay: "0s",
    [theme.breakpoints.down("sm")]: {
      left: "100px",
      top: "60px",
    }
  })
);

export const DoubleCaretRightIcon2 = styled(DoubleCaretRightSVG)(
  ({ theme }) => ({
    position: "absolute",
    top: "50px",
    left: "240px",
    userSelect: "none",
    animation: `${doubleCaretRightAnimation} 6s infinite`,
    animationDelay: "2s",
    [theme.breakpoints.down("sm")]: {
      top: "60px",
      left: "200px"
    },
    "@media(max-width: 415px)": {
      left: "170px"
    }
  })
);

export const DoubleCaretRightIcon3 = styled(DoubleCaretRightSVG)(
  ({ theme }) => ({
    position: "absolute",
    top: "50px",
    left: "340px",
    userSelect: "none",
    animation: `${doubleCaretRightAnimation} 6s infinite`,
    animationDelay: "4s",
    [theme.breakpoints.down("sm")]: {
      top: "60px",
      left: "300px"
    },
    "@media(max-width: 415px)": {
      left: "250px"
    }
  })
);

export const SliderText = styled(Typography)(({ theme }) => ({
  fontFamily: fredokaOne.style.fontFamily,
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "19.36px",
  textAlign: "left",
  color: theme.palette.text.primary,
  marginLeft: "85px",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    textAlign: "center",
    marginLeft: "0"
  }
}));