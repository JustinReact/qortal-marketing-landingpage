import { styled } from "@mui/system";
import { Box, Button, Grid } from "@mui/material";
import ZoomInIcon from "@mui/icons-material/ZoomIn";

interface StepDivProps {
  selected?: boolean;
  shiny?: { isOn: boolean };
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

export const StepsColumn = styled(Grid)({
  display: "grid",
  flex: 1,
  padding: "15px",
  marginRight: "5px",
  gridTemplateRows: "repeat(4, minmax(60px, 70px))",
  rowGap: "20px",
  backgroundColor: "#e9e7e7",
  borderRadius: "3px",
  boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px;",
});

export const StepDiv = styled(Grid)<StepDivProps>(({ selected }) => ({
  borderRadius: "5px",
  padding: "5px 10px",
  transition: "all 0.3s ease-in-out",
  boxShadow: selected ? "0px 0px 5px #183beb" : "none",
  cursor: selected ? "default" : "pointer",
  "&:hover": {
    boxShadow: selected
      ? "0px 0px 5px #183beb"
      : "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;",
  },
}));

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
  objectFit: "contain",
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
