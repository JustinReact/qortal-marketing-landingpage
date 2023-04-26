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
}

export const Container = styled(Grid)({
  display: "grid",
  gridTemplateColumns: "1fr 2fr",
  width: " 100%",
  gridGap: "20px",
  "@media (max-width: 600px)": {
    gridTemplateColumns: "1fr",
    gridGap: "20px",
  },
});

export const StepsColumn = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
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
}));

export const StepDiv = styled(Grid)<StepDivProps>(({ selected, theme }) => ({
  padding: "8px 20px",
  transition: "all 0.3s ease-in-out",
  boxShadow:
    selected && theme.palette.mode === "light"
      ? `0px 0px 5px ${theme.palette.secondary.main}`
      : selected && theme.palette.mode === "dark"
      ? "0px 0px 5px #abaeb7"
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
        ? "0px 0px 5px #abaeb7"
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
  fontFamily: "Cambon Light",
  fontWeight: "400",
  letterSpacing: "0.3px",
  fontSize: "16.5px",
  userSelect: "none",
});

export const StepCard = styled(Grid)({
  display: "flex",
  padding: "5px 15px 5px 15px",
  alignItems: "center",
  borderRadius: "5px",
  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
  backgroundColor: "white",
});

export const StepColumn = styled(Grid)({
  gap: "15px",
  padding: "5px 15px",
  "@media (max-width: 600px)": {
    padding: "20px",
  },
});

export const DownloadButton = styled(Button)({
  backgroundColor: "cornflowerblue",
  borderRadius: "50px",
  alignSelf: "center",
  fontFamily: "Roboto, sans-serif",
  fontSize: "18px",
  boxShadow: "none",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    cursor: "pointer",
    backgroundColor: "cornflowerblue",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
  },
});

export const Screenshot = styled("img")({
  width: "100%",
  height: "350px",
  borderRadius: "5px",
  objectFit: "cover",
});

export const ModalScreenshot = styled("img")({
  width: "100%",
  height: "100%",
  borderRadius: "5px",
  objectFit: "contain",
});

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

export const NextButton = styled(Button)<StepDivProps>(({ shiny }) => ({
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
      : "rgba(0, 0, 0, 0.1) 0px 4px 12px",
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
  objectFit: "cover",
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
    backgroundColor: "#6495ed",
  },
}));

export const LeftArrow = styled(KeyboardArrowLeftIcon)({
  color: "black",
  fontSize: "25px",
  padding: "3px 6px",
  borderRadius: "50%",
  backgroundColor: "#d7d7d7",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    cursor: "pointer",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
    backgroundColor: "#cecbcb",
  },
});

export const RightArrow = styled(KeyboardArrowRightIcon)({
  color: "black",
  fontSize: "27px",
  padding: "3px 6px",
  borderRadius: "50%",
  backgroundColor: "#d7d7d7",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    cursor: "pointer",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
    backgroundColor: "#cecbcb",
  },
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
});

export const LinuxStepColumn = styled(Grid)({
  display: "flex",
  justifyContent: "center",
  width: "100%",
});

export const DownloadOptionCard = styled(Box)<StepDivProps>(
  ({ downloadOption }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "85%",
    width: "100%",
    padding: "10px",
    height: "50px",
    borderRadius: "8px",
    backgroundColor: downloadOption ? "#e17eff" : "whitesmoke",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
    transition: "all 0.3s ease-in-out",
    "&: hover": {
      cursor: "pointer",
      backgroundColor: "#f0eeee",
    },
  })
);
