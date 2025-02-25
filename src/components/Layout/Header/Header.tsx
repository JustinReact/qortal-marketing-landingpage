"use client";
import { useState } from "react";
import ReactGA from "react-ga4";
import {
  HeaderNav,
  NewsButton,
  ThemeSelectRow,
  QortalLogoContainer,
  HeaderButtonsRow,
  Docs,
  HamburgerIcon,
  BlogButton,
  QORTButton,
  QortalText,
  Divider,
  QortalQBlack,
  QortalQWhite,
  QortalSmallerText,
  LightModeIcon,
  DarkModeIcon
} from "./Header-styles";
import { useMediaQuery, useTheme } from "@mui/material";
import { MobileDrawer } from "./MobileDrawer";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { setTheme } from "../../../state/theme/themeSlice";
import { useDispatch } from "react-redux";

export const Header = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width: 1193px)");
  const location = usePathname();
  const router = useRouter();

  const [openMobileDrawer, setOpenMobileDrawer] = useState<boolean>(false);

  const renderHeader = () => {
    if (location !== "/docs/extension" && location !== "/docs/q-apps") {
      return (
        <HeaderNav>
          <Divider />
          <ThemeSelectRow>
            {theme.palette.mode === "dark" ? (
              <LightModeIcon
                onClickFunc={() => dispatch(setTheme("light"))}
                color="white"
                height="41"
                width="40"
              />
            ) : (
              <DarkModeIcon
                onClickFunc={() => dispatch(setTheme("dark"))}
                color="black"
                height="41"
                width="40"
              />
            )}
            <QortalLogoContainer href="/">
              <>
                {theme.palette.mode === "light" ? (
                  <QortalQBlack width="79" height="90" color="none" />
                ) : (
                  <QortalQWhite width="79" height="90" color="none" />
                )}
              </>
              <>
                <QortalText>ortal</QortalText>
                <QortalSmallerText>
                  .dev
                </QortalSmallerText>
              </>
            </QortalLogoContainer>
          </ThemeSelectRow>
          {isMobile ? (
            <HamburgerIcon
              color={theme.palette.text.primary}
              height={"18"}
              width={"27"}
              onClickFunc={() => setOpenMobileDrawer(!openMobileDrawer)}
              rotated={{ isOn: openMobileDrawer ? true : false }}
            />
          ) : (
            <HeaderButtonsRow>
              <QORTButton
                className={location === "/" ? "active" : ""}
                onClick={() => {
                  ReactGA.event({
                    category: "User",
                    action: "Clicked Home Button",
                    label: "Home Button"
                  });
                }}
                href="/"
              >
                Home
              </QORTButton>
              {/* <QORTButton
                className={location === "/qort" ? "active" : ""}
                onClick={() => {
                  ReactGA.event({
                    category: "User",
                    action: "Clicked QORT Button",
                    label: "QORT Button"
                  });
                }}
                href={"/qort"}
              >
                QORT
              </QORTButton> */}
              <QORTButton
                className={location === "/downloads" ? "active" : ""}
                onClick={() => {
                  ReactGA.event({
                    category: "User",
                    action: "Clicked Downloads Button Header",
                    label: "Downloads Button"
                  });
                }}
                href={"/downloads"}
              >
                Downloads
              </QORTButton>
              <NewsButton
                onClick={() => {
                  ReactGA.event({
                    category: "User",
                    action: "Clicked News Qortal Header Desktop",
                    label: "Clicked News Qortal Header Desktop"
                  });
                }}
                href={"/news"}
              >
                News
              </NewsButton>
              <Docs
                className={
                  location === "/docs/extension" || location === "/docs/q-apps"
                    ? "active"
                    : ""
                }
                onClick={() => {
                  ReactGA.event({
                    category: "User",
                    action: "Clicked Docs Button",
                    label: "Docs Button"
                  });
                }}
                href={"/docs/q-apps"}
              >
                Documentation
              </Docs>
              <BlogButton
                className={location === "/Blog" ? "active" : ""}
                onClick={() => {
                  ReactGA.event({
                    category: "User",
                    action: "Clicked Blog Button",
                    label: "Blog Button"
                  });
                }}
                href={"/blog"}
              >
                Blog
              </BlogButton>
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
