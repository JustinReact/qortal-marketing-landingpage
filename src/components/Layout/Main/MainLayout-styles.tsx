import { styled } from "@mui/system";
import HexagonBG from "../../../images/Home/HexagonBG.png";
import HexagonBGLight from "../../../images/Home/HexagonBGLight.png";
import BlurryBGDarkMode from "../../../images/Promo/BlurryBGDarkMode.webp";
import BlurryBGDarkModeMobile from "../../../images/Promo/BlurryBGDarkModeMobile.webp";
import BlurryBGLightMode from "../../../images/Promo/BlurryBGLightMode.webp";
import BlurryBGLightModeMobile from "../../../images/Promo/BlurryBGLightModeMobile.webp";
import FeaturesHexagonBG from "../../../images/Features/FeaturesHexagonBG.png";
import ExtensionBackground from "../../../images/Extension/ExtensionBackground.png";

export const Wrapper = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  minHeight: "100vh",
  padding: "2rem 1rem",
  gap: "20px",
  "&.BGImageMain": {
    position: "relative",
    zIndex: 1,
    "&::before": {
      content: "''",
      position: "absolute",
      opacity: theme.palette.mode === "dark" ? 0.2 : 1,
      zIndex: -1,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage:
        theme.palette.mode === "dark"
          ? `url(${HexagonBG})`
          : `url(${HexagonBGLight})`,
      backgroundRepeat: "repeat-y",
      backgroundSize: "contain",
      "@media (max-width: 600px)": {
        backgroundPosition: "top",
        backgroundSize: "auto"
      }
    }
  },
  "&.BGImagePromo": {
    backgroundImage:
      theme.palette.mode === "dark"
        ? `url(${BlurryBGDarkMode})`
        : `url(${BlurryBGLightMode})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    [theme.breakpoints.down("lg")]: {
      backgroundImage:
        theme.palette.mode === "dark"
          ? `url(${BlurryBGDarkModeMobile})`
          : `url(${BlurryBGLightModeMobile})`,
      backgroundSize: "cover"
    }
  },
  "&.BGImageFeatures": {
    position: "relative",
    zIndex: 1,
    "&::before": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: `url(${FeaturesHexagonBG})`,
      backgroundRepeat: "no-repeat",
      opacity: 0.1,
      zIndex: -1
    }
  },
  "&.BGQORTPage": {
    padding: "2rem 0 0 0",
    // background: "radial-gradient(circle at 250px top, rgba(20,198,238,1) 0%, rgba(97,71,235,1) 29%, rgba(11,23,41,1) 69%)",
    background: "linear-gradient(45deg, rgba(51,40,70,1) 0%, rgba(148,84,253,1) 50%, rgba(31,25,61,1) 100%)",
    [theme.breakpoints.down("sm")]: {
      padding: "1rem"
    }
  },
  "&.BGExtensionPage": {
    position: "relative",
    zIndex: 1,
    "&::before": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: `url(${ExtensionBackground})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "45% auto",
      filter: "grayscale(100%) opacity(35%)",
      opacity: 0.1,
      zIndex: -1
    }
  },
  [theme.breakpoints.down("sm")]: {
    padding: "1rem"
  }
}));
