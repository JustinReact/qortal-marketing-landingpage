import { FC, useState } from "react";
import ReactGA from "react-ga4";
import { useLocation, useNavigate } from "react-router-dom";
import {
  HeaderNav,
  DiscordButton,
  TriangleIcon,
  TriangleContainer,
  ThemeSelectRow,
  QortalLogoContainer,
  HeaderButtonsRow,
  Docs,
  HamburgerIcon,
  BackHomeButton,
  DocsNavContainer
} from "./Header-styles";
import { useMediaQuery, useTheme, Typography } from "@mui/material";
import { LayoutProps } from "../Main/MainLayout";
import { LightModeSVG } from "../../Common/Icons/LightModeSVG";
import { DarkModeSVG } from "../../Common/Icons/DarkModeSVG";
import { MobileDrawer } from "./MobileDrawer";
import { motion, AnimatePresence } from "framer-motion";
import { DocsSVG } from "../../Common/Icons/DocsSVG";
import { BackArrowSVG } from "../../Common/Icons/BackArrowSVG";
import QortalLogo from "../../../images/Logo/QortalLogo.png";
import QortalLogoDarkTheme from "../../../images/Logo/QortalLogoDarkTheme.webp";

export const Header: FC<LayoutProps> = ({ setTheme }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();

  const [openMobileDrawer, setOpenMobileDrawer] = useState<boolean>(false);

  const renderHeader = () => {
    // Check the current path and render the corresponding header nav
    if (location.pathname === "/") {
      return (
        <HeaderNav>
          <ThemeSelectRow>
            {theme.palette.mode === "dark" ? (
              <LightModeSVG
                onClickFunc={() => setTheme("light")}
                color="white"
                height="22"
                width="22"
              />
            ) : (
              <DarkModeSVG
                onClickFunc={() => setTheme("dark")}
                color="black"
                height="22"
                width="22"
              />
            )}
            <QortalLogoContainer
              src={
                theme.palette.mode === "light"
                  ? QortalLogo
                  : QortalLogoDarkTheme
              }
              alt="Qblog Logo"
              onClick={() => {
                navigate(`/`);
              }}
            />
          </ThemeSelectRow>
          {isMobile ? (
            <HamburgerIcon
              color={theme.palette.text.primary}
              height={"32"}
              width={"32"}
              onClickFunc={() => setOpenMobileDrawer(!openMobileDrawer)}
              rotated={{ isOn: openMobileDrawer ? true : false }}
            />
          ) : (
            <HeaderButtonsRow>
              <Docs
                onClick={() => {
                  ReactGA.event({
                    category: "User",
                    action: "Clicked Docs Button",
                    label: "Docs Button"
                  });
                  navigate("/docs/api");
                }}
              >
                Developer
                <DocsSVG color={"#ffffff"} height={"22"} width={"22"} />
              </Docs>
              <DiscordButton
                onClick={() => {
                  ReactGA.event({
                    category: "User",
                    action: "Clicked Discord Button Header",
                    label: "Discord Button Header"
                  });
                  window.open("https://discord.gg/9hgNdBj4aC", "_blank");
                }}
              >
                Join Discord
                <TriangleContainer>
                  <TriangleIcon />
                </TriangleContainer>
              </DiscordButton>
            </HeaderButtonsRow>
          )}
        </HeaderNav>
      );
    } else if (location.pathname === "/docs/api") {
      return (
        <DocsNavContainer>
          <BackHomeButton
            onClick={() => {
              navigate("/");
            }}
          >
            <BackArrowSVG color={"#ffffff"} height={"22"} width={"22"} />
            Back Home
          </BackHomeButton>
        </DocsNavContainer>
      );
    } else if (location.pathname === "/promo") {
      return (
        <HeaderNav>
          <ThemeSelectRow>
            {theme.palette.mode === "dark" ? (
              <LightModeSVG
                onClickFunc={() => setTheme("light")}
                color="white"
                height="22"
                width="22"
              />
            ) : (
              <DarkModeSVG
                onClickFunc={() => setTheme("dark")}
                color="black"
                height="22"
                width="22"
              />
            )}
            <QortalLogoContainer
              src={
                theme.palette.mode === "light"
                  ? QortalLogo
                  : QortalLogoDarkTheme
              }
              alt="Qblog Logo"
              onClick={() => {
                navigate(`/`);
              }}
            />
          </ThemeSelectRow>
          {isMobile ? (
            <HamburgerIcon
              color={theme.palette.text.primary}
              height={"32"}
              width={"32"}
              onClickFunc={() => setOpenMobileDrawer(!openMobileDrawer)}
              rotated={{ isOn: openMobileDrawer ? true : false }}
            />
          ) : (
            <HeaderButtonsRow>
              <Docs
                onClick={() => {
                  ReactGA.event({
                    category: "User",
                    action: "Clicked Docs Button",
                    label: "Docs Button"
                  });
                  navigate("/docs/api");
                }}
              >
                Documentation
                <DocsSVG color={"#ffffff"} height={"22"} width={"22"} />
              </Docs>
            </HeaderButtonsRow>
          )}
        </HeaderNav>
      );
    }
  };

  // Variants for the framer-motion transition

  const mobileDrawerVariants = {
    opened: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 95
      }
    },
    closed: {
      opacity: 0.2,
      x: -100,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <>
      {renderHeader()}
      <AnimatePresence>
        {openMobileDrawer && (
          <motion.div
            animate={"opened"}
            initial={"closed"}
            exit={{ opacity: 0 }}
            variants={mobileDrawerVariants}
            style={{
              top: "115px",
              position: "absolute",
              left: "0",
              right: "0",
              width: "100%",
              height: "auto",
              zIndex: 5,
              backgroundColor: "white"
            }}
          >
            <MobileDrawer
              setOpenMobileDrawer={() => setOpenMobileDrawer(!openMobileDrawer)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
