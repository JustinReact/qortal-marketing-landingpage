import { styled } from "@mui/system";
import { Box, Button, Grid, LinearProgress, Typography } from "@mui/material";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

interface StepDivProps {
  selected?: boolean;
  shiny?: { isOn: boolean };
  downloadOption?: boolean;
  preventClick?: boolean;
}

export const Container = styled(Grid)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 2fr",
  width: " 100%",
  gridGap: "20px",
  [theme.breakpoints.down("md")]: {
    gridTemplateColumns: "1fr",
    gridGap: "20px",
  },
}));

export const StepsColumn = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  minHeight: "400px",
  minWidth: "330px",
  flex: 1,
  gap: "7px",
  padding: "2px 0",
  marginRight: "5px",
  height: "fit-content",
  backgroundColor:
    theme.palette.mode === "light"
      ? `${theme.palette.primary.main}`
      : `${theme.palette.secondary.dark}`,
  borderRadius: "3px",
  boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px;",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const StepDiv = styled(Grid)<StepDivProps>(({ selected, theme }) => ({
  padding: "8px 20px",
  transition: "all 0.3s ease-in-out",
  overflow: "hidden",
  boxShadow:
    selected && theme.palette.mode === "light"
      ? `0px 0px 5px ${theme.palette.secondary.main}`
      : selected && theme.palette.mode === "dark"
      ? "0px 0px 5px #5638fb"
      : "none",
  cursor: selected ? "default" : "pointer",
  borderTop:
    theme.palette.mode === "light"
      ? `1px solid ${theme.palette.primary.dark}`
      : `1px solid #cbd0d582`,
  borderBottom:
    theme.palette.mode === "light"
      ? `1px solid ${theme.palette.primary.dark}`
      : `1px solid #cbd0d582`,
  "&:hover": {
    boxShadow:
      selected && theme.palette.mode === "light"
        ? `0px 0px 5px ${theme.palette.secondary.main}`
        : selected && theme.palette.mode === "dark"
        ? "0px 0px 5px #5638fb"
        : theme.palette.mode === "light"
        ? "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
        : "0px 8px 10px 1px hsla(0,0%,0%,0.14), 0px 3px 14px 2px hsla(0,0%,0%,0.12), 0px 5px 5px -3px hsla(0,0%,0%,0.2)",
  },
  height: "70px",
}));

export const StepText = styled(Typography)({
  fontFamily: "Montserrat",
  fontWeight: "400",
  fontSize: "19.5px",
  userSelect: "none",
});

export const StepSubText = styled(Typography)({
  fontFamily: "Museo",
  fontWeight: "300",
  letterSpacing: "0.3px",
  fontSize: "17px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  maxWidth: "100%",
  userSelect: "none",
});

export const StepName = styled(Grid)(({ theme }) => ({
  overflow: "hidden",
  [theme.breakpoints.down("md")]: {
    display: "flex",
    justifyContent: "center",
    marginTop: "5px",
    padding: "5px",
    flexDirection: "column",
  },
}));

export const StepTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "Raleway",
  fontSize: "18px",
  fontWeight: "normal",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  maxWidth: "100%",
  userSelect: "none",
  [theme.breakpoints.down("md")]: {
    fontSize: "19px",
    textAlign: "center",
    fontWeight: "bold",
    whiteSpace: "normal",
  },
}));

export const StepInformationContainer = styled(Grid)(({ theme }) => ({
  minHeight: "500px",
  gap: "13px",
}));

export const StepInformation = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  gap: "35px",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const StepCard = styled(Grid)(({ theme }) => ({
  display: "flex",
  padding: "5px 15px 5px 15px",
  alignItems: "center",
  borderRadius: "5px",
  boxShadow:
    theme.palette.mode === "light"
      ? "rgba(149, 157, 165, 0.2) 0px 8px 24px"
      : "none",
  backgroundColor: theme.palette.mode === "light" ? "#fff" : "#1a1d2c",
}));

export const StepCardInnerContainer = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
  [theme.breakpoints.only("md")]: {
    gap: "15px",
  },
}));

export const StepColumn = styled(Grid)(({ theme }) => ({
  gap: "15px",
  padding: "5px 15px",
  height: "auto",
  overflowY: "auto",
  overflowX: "hidden",
  maxHeight: "350px",
  display: "flex",
  alignItems: "center",
  justifyContent: "flexStart",
  flexDirection: "column",
  flexWrap: "nowrap",
  "&::-webkit-scrollbar": {
    width: "16px",
    height: "10px",
    backgroundColor: "transparent",
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "transparent",
  },

  "&::-webkit-scrollbar-thumb": {
    backgroundColor:
      theme.palette.mode === "light"
        ? theme.palette.primary.main
        : theme.palette.secondary.light,
    borderRadius: "8px",
    backgroundClip: "content-box",
    border: "4px solid transparent",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    backgroundColor:
      theme.palette.mode === "light" ? theme.palette.primary.dark : "#4e50a1",
  },
  "@media (max-width: 600px)": {
    padding: "20px",
  },
  [theme.breakpoints.down("md")]: {
    maxHeight: "100%",
  },
}));

export const DownloadButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: "#fff",
  borderRadius: "50px",
  alignSelf: "center",
  fontFamily: "Roboto, sans-serif",
  fontSize: "18px",
  boxShadow: "none",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    cursor: "pointer",
    backgroundColor: theme.palette.secondary.main,
  },
}));

export const Screenshot = styled("img")(({ theme }) => ({
  width: "100%",
  height: "auto",
  borderRadius: "5px",
  objectFit: "contain",
  [theme.breakpoints.up("sm")]: {
    paddingLeft: "5px"
  }
}));

export const ModalScreenshot = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%",
  borderRadius: "5px",
  userSelect: "none",
  objectFit: "contain",
  maxHeight: "-webkit-fill-available",
  [theme.breakpoints.down("sm")]: {
    rotate: "90deg",
  },
}));

export const PreviousButton = styled(Button)({
  position: "relative",
  padding: "5px 10px",
  borderRadius: "6px",
  color: "black",
  backgroundColor: "#ffa53d",
  width: "auto",
  fontSize: "18px",
  fontFamily: "Roboto, sans-serif",
  fontWeight: 300,
  letterSpacing: "0.3px",
  boxShadow: "none",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    cursor: "pointer",
    backgroundColor: "#ffa53d",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
  },
});

export const NextButton = styled(Button)<StepDivProps>(({ shiny, theme }) => ({
  position: "relative",
  padding: "5px 10px",
  borderRadius: "6px",
  color: "black",
  backgroundColor: "#00c71b",
  width: "70px",
  fontSize: "18px",
  fontFamily: "Roboto, sans-serif",
  fontWeight: 300,
  letterSpacing: "0.3px",
  transition: "all 0.3s ease-in-out",
  boxShadow: shiny?.isOn ? "0 0 8px rgba(88, 243, 83, 0.8)" : "none",
  overflow: shiny?.isOn ? "hidden" : "visible",
  "&:hover": {
    cursor: "pointer",
    backgroundColor: "#00c71b",
    boxShadow: shiny?.isOn
      ? "0 0 20px rgba(255, 255, 255, 0.8)"
      : !shiny?.isOn && theme.palette.mode === "light"
      ? "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px"
      : !shiny?.isOn && theme.palette.mode === "dark"
      ? "0px 24px 38px 3px hsla(0,0%,0%,0.09), 0px 9px 46px 8px hsla(0,0%,0%,0.09), 0px 11px 14px -7px hsla(0,0%,0%,0.9);"
      : "none",
  },
  "&::before": {
    content: '""',
    position: "absolute",
    top: "-50%",
    left: "-50%",
    width: "200%",
    height: "200%",
    borderRadius: "50%",
    backgroundColor: "rgba(0, 255, 76, 0.3)",
    opacity: shiny?.isOn ? "1" : "0",
    transform: shiny?.isOn ? "scale(2)" : "scale(0)",
    transition: "opacity 0.3s ease-in-out, transform 0.3s ease-in-out",
    animation: shiny?.isOn ? "rotation 2s linear infinite" : "none",
  },
  "@keyframes rotation": {
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(360deg)" },
  },
}));

export const MagnifyingGlass = styled(ZoomInIcon)({
  opacity: 0,
  fontSize: "40px",
  color: "black",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translateX(-50%)",
  transition: "all 0.1s ease-in-out",
});

export const ScreenshotContainer = styled(Box)({
  position: "relative",
  userSelect: "none",
  "&:hover": {
    cursor: "pointer",
  },
  "&:hover  #magnifying-glass": {
    opacity: 1,
  },
});

export const ArrowDown = styled(ArrowDownwardIcon)({
  fontSize: "30px",
  color: "black",
});

export const ProceedButton = styled(Button)({
  backgroundColor: "#00c71b",
  color: "black",
  borderRadius: "5px",
  width: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  fontSize: "18px",
  fontFamily: "Roboto, sans-serif",
  fontWeight: 300,
  letterSpacing: "0.3px",
  "&:hover": {
    backgroundColor: "#00c71b",
    cursor: "pointer",
  },
});

export const ProgressBar = styled(LinearProgress)(({ theme }) => ({
  height: "10px",
  borderRadius: "5px",
  overflow: "hidden",
  backgroundColor:
    theme.palette.mode === "light"
      ? `${theme.palette.primary.main}`
      : `${theme.palette.secondary.dark}`,
  "& .MuiLinearProgress-bar": {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export const LeftArrow = styled(KeyboardArrowLeftIcon)<StepDivProps>(
  ({ preventClick, theme }) => ({
    color: theme.palette.text.primary,
    opacity: preventClick && theme.palette.mode === "dark" ? 0.5 : 1,
    pointerEvents: preventClick ? "none" : "all",
    cursor: preventClick ? "not-allowed" : "pointer",
    fontSize: "25px",
    padding: "3px 6px",
    borderRadius: "50%",
    backgroundColor:
      theme.palette.mode === "light" && preventClick
        ? "#afafaf"
        : theme.palette.mode === "light" && !preventClick
        ? `${theme.palette.primary.main}`
        : theme.palette.mode === "dark" && preventClick
        ? `${theme.palette.secondary.dark}`
        : `${theme.palette.secondary.dark}`,
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      cursor: "pointer",
      boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
      backgroundColor:
        theme.palette.mode === "light"
          ? `${theme.palette.primary.dark}`
          : `${theme.palette.secondary.light}`,
    },
  })
);

export const StepNumberBubble = styled(Typography)(({ theme }) => ({
  fontFamily: "Museo",
  width: "fit-content",
  backgroundColor: theme.palette.secondary.main,
  color: "white",
  padding: "5px 10px",
  borderRadius: "18px",
  userSelect: "none",
}));

export const RightArrow = styled(KeyboardArrowRightIcon)<StepDivProps>(
  ({ preventClick, theme }) => ({
    color: theme.palette.text.primary,
    opacity: preventClick && theme.palette.mode === "dark" ? 0.5 : 1,
    pointerEvents: preventClick ? "none" : "all",
    cursor: preventClick ? "not-allowed" : "pointer",
    fontSize: "27px",
    padding: "3px 6px",
    borderRadius: "50%",
    backgroundColor:
      theme.palette.mode === "light" && preventClick
        ? "#afafaf"
        : theme.palette.mode === "light" && !preventClick
        ? `${theme.palette.primary.main}`
        : theme.palette.mode === "dark" && preventClick
        ? `${theme.palette.secondary.dark}`
        : `${theme.palette.secondary.dark}`,
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      cursor: "pointer",
      boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
      backgroundColor:
        theme.palette.mode === "light"
          ? `${theme.palette.primary.dark}`
          : `${theme.palette.secondary.light}`,
    },
  })
);

export const MuseoFont = styled(Typography)({
  fontFamily: "Museo",
  letterSpacing: "0.3px",
  lineHeight: "30px",
  userSelect: "none",
});

// Linux Steps

export const LinuxStepsContainer = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "0",
});

export const LinuxStepColumnsContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  width: "100%",
  gap: "15px",
});

export const LinuxStepColumn = styled(Grid)({
  display: "flex",
  justifyContent: "center",
  width: "100%",
});

export const DownloadOptionCard = styled(Button)<StepDivProps>(
  ({ downloadOption, theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "85%",
    width: "100%",
    padding: "5px 10px",
    height: "40px",
    borderRadius: "5px",
    backgroundColor:
      downloadOption && theme.palette.mode === "dark"
        ? "#5657b1"
        : !downloadOption && theme.palette.mode === "dark"
        ? "#47474e"
        : downloadOption && theme.palette.mode === "light"
        ? theme.palette.secondary.light
        : theme.palette.primary.dark,
    color:
      downloadOption && theme.palette.mode === "light"
        ? "#ffffff"
        : !downloadOption && theme.palette.mode === "light"
        ? " #000000"
        : "#ffffff",
    transition: "all 0.3s ease-in-out",
    "&: hover": {
      cursor: "pointer",
      backgroundColor:
        downloadOption && theme.palette.mode === "dark"
          ? "#5657b1"
          : !downloadOption && theme.palette.mode === "dark"
          ? "#47474e"
          : downloadOption && theme.palette.mode === "light"
          ? theme.palette.secondary.light
          : theme.palette.primary.dark,
    },
  })
);

export const ScreenshotColumn = styled(Grid)({
  objectFit: "contain",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
});

export const ImageToggleRow = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "12px",
});

export const ImageToggleDot = styled("div")<StepDivProps>(
  ({ selected, theme }) => ({
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor:
      selected && theme.palette.mode === "dark"
        ? "#cecaca"
        : selected && theme.palette.mode === "light"
        ? "#616161"
        : !selected && theme.palette.mode === "dark"
        ? "#616161"
        : "#cecaca",
    border: "none",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      cursor: "pointer",
      filter: selected ? "brightness(1)" : "brightness(0.8)",
    },
  })
);

export const MobileStepRow = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  "@media (min-width: 960px)": {
    display: "none",
  },
}));

export const MobileStepLine = styled(Box)(({ theme }) => ({
  fontFamily: "Museo",
  height: "1px",
  width: "100%",
  marginTop: "40px",
  marginBottom: "40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

export const MobileStepDot = styled("div")(({ theme }) => ({
  width: "38px",
  height: "38px",
  borderRadius: "50%",
  backgroundColor: "#f8fafb",
  border: "1px solid rgba(206, 203, 203, 0.432)",
  transition: "all 0.1s ease-in-out",
  color: "black",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  userSelect: "none",

  "&.StepInnerDot": {
    width: "38px",
    height: "38px",
    borderRadius: "50%",
    borderColor: theme.palette.secondary.light,
    background: theme.palette.secondary.light,
    color: "white",
    boxShadow: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    userSelect: "none",
  },
}));
