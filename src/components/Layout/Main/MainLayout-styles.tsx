import { styled } from "@mui/system";

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
          ? `url(/images/Home/HexagonBG.png)`
          : `url(/images/Home/HexagonBGLight.png)`,
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
        ? `url(${"/images/Promo/BlurryBGDarkMode.webp"})`
        : `url(${"/images/Promo/BlurryBGLightMode.webp"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    [theme.breakpoints.down("lg")]: {
      backgroundImage:
        theme.palette.mode === "dark"
          ? `url(${"/images/Promo/BlurryBGDarkModeMobile.webp"})`
          : `url(${"/images/Promo/BlurryBGLightModeMobile.webp"})`,
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
      backgroundImage: `url(${"/images/Features/FeaturesHexagonBG.png"})`,
      backgroundRepeat: "no-repeat",
      opacity: 0.1,
      zIndex: -1
    }
  },
  "&.BGQORTPage": {
    padding: "2rem 0 0 0",
    // background: "radial-gradient(circle at 250px top, rgba(20,198,238,1) 0%, rgba(97,71,235,1) 29%, rgba(11,23,41,1) 69%)",
    background:
      "linear-gradient(45deg, rgba(51,40,70,1) 0%, rgba(148,84,253,1) 50%, rgba(31,25,61,1) 100%)",
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
      backgroundImage: `url(${"/images/Extension/ExtensionBackground.png"})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "40% auto",
      backgroundPosition: "top -100px left -100px",
      filter: "grayscale(100%) opacity(45%)",
      opacity: 0.1,
      zIndex: -1
    }
  },
  [theme.breakpoints.down("sm")]: {
    padding: "1rem"
  }
}));
