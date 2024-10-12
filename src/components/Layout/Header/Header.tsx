"use client";
import { useState } from "react";
import ReactGA from "react-ga4";
import {
  HeaderNav,
  ChromeStoreButton,
  TriangleIcon,
  TriangleContainer,
  ThemeSelectRow,
  QortalLogoContainer,
  HeaderButtonsRow,
  Docs,
  HamburgerIcon,
  BackHomeButton,
  DocsNavContainer,
  BlogButton,
  QORTButton,
  QortalText
} from "./Header-styles";
import { useMediaQuery, useTheme } from "@mui/material";
import { LightModeSVG } from "../../Common/Icons/LightModeSVG";
import { DarkModeSVG } from "../../Common/Icons/DarkModeSVG";
import { MobileDrawer } from "./MobileDrawer";
import { motion, AnimatePresence } from "framer-motion";
import { DocsSVG } from "../../Common/Icons/DocsSVG";
import { BackArrowSVG } from "../../Common/Icons/BackArrowSVG";
import { BlogSVG } from "../../Common/Icons/BlogSVG";
import { QortalSVG } from "../../Common/Icons/QortalSVG";
import { HomeSVG } from "../../Common/Icons/HomeSVG";
import { QortalWhiteLogoSVG } from "../../Common/Icons/QortalWhiteLogoSVG";
import { QortalBlackLogoSVG } from "../../Common/Icons/QortalBlackLogoSVG";
import { PuzzleSVG } from "../../Common/Icons/PuzzleSVG";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { setTheme } from "../../../state/theme/themeSlice";
import { useDispatch } from "react-redux";
import { ChromeStoreSVG } from "../../Common/Icons/ChromeStoreSVG";

export const Header = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const location = usePathname();
  const router = useRouter();

  const [openMobileDrawer, setOpenMobileDrawer] = useState<boolean>(false);

  const renderHeader = () => {
    // Check the current path and render the corresponding header nav
    if (location === "/") {
      return (
        <HeaderNav>
          <ThemeSelectRow>
            {theme.palette.mode === "dark" ? (
              <LightModeSVG
                onClickFunc={() => {
                  console.log("here11");
                  dispatch(setTheme("light"));
                }}
                color="white"
                height="22"
                width="22"
              />
            ) : (
              <DarkModeSVG
                onClickFunc={() => {
                  console.log("here12");
                  dispatch(setTheme("dark"));
                }}
                color="black"
                height="22"
                width="22"
              />
            )}
            <QortalLogoContainer href="/">
              <>
                {theme.palette.mode === "light" ? (
                  <QortalBlackLogoSVG width="45" height="55" color="none" />
                ) : (
                  <QortalWhiteLogoSVG width="45" height="55" color="none" />
                )}
              </>{" "}
              <QortalText>ortal</QortalText>
              <QortalText style={{ marginTop: "10px", fontSize: "25px" }}>
                .dev
              </QortalText>
            </QortalLogoContainer>
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
              <QORTButton
                className="active"
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
                <HomeSVG
                  color={theme.palette.text.primary}
                  height={"22"}
                  width={"22"}
                />
              </QORTButton>
              <QORTButton
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
                <QortalSVG
                  color={theme.palette.text.primary}
                  height={"22"}
                  width={"22"}
                />
              </QORTButton>
              <BlogButton
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
                <BlogSVG
                  color={theme.palette.text.primary}
                  height={"22"}
                  width={"22"}
                />
              </BlogButton>
              <Docs
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
                <DocsSVG
                  color={theme.palette.text.primary}
                  height={"22"}
                  width={"22"}
                />
              </Docs>
              <ChromeStoreButton
                onClick={() => {
                  ReactGA.event({
                    category: "User",
                    action: "Clicked Install Qortal Header Desktop",
                    label: "Clicked Install Qortal Header Desktop"
                  });
                  window.open("https://bit.ly/qortal-chrome-extension", "_blank");
                }}
              >
                Install
                <ChromeStoreSVG
                  color={"transparent"}
                  height={"20"}
                  width={"25"}
                />
              </ChromeStoreButton>
            </HeaderButtonsRow>
          )}
        </HeaderNav>
      );
    } else if (location === "/docs/extension" || location === "/docs/q-apps") {
      return (
        <DocsNavContainer>
          <BackHomeButton
            onClick={() => {
              router.push("/");
            }}
          >
            <BackArrowSVG color={"#ffffff"} height={"22"} width={"22"} />
            Back Home
          </BackHomeButton>
        </DocsNavContainer>
      );
    } else if (location === "/qort") {
      return (
        <HeaderNav>
          <QortalLogoContainer href="/">
            <>
              {theme.palette.mode === "light" ? (
                <QortalBlackLogoSVG width="45" height="55" color="none" />
              ) : (
                <QortalWhiteLogoSVG width="45" height="55" color="none" />
              )}
            </>
            <QortalText>ortal</QortalText>
            <QortalText style={{ marginTop: "10px", fontSize: "25px" }}>
              .dev
            </QortalText>
          </QortalLogoContainer>
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
              <QORTButton
                onClick={() => {
                  ReactGA.event({
                    category: "User",
                    action: "Clicked Home Button",
                    label: "Home Button"
                  });
                }}
                href={"/"}
              >
                Home
                <HomeSVG
                  color={theme.palette.text.primary}
                  height={"22"}
                  width={"22"}
                />
              </QORTButton>
              <QORTButton
                className="active"
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
                <QortalSVG
                  color={theme.palette.text.primary}
                  height={"22"}
                  width={"22"}
                />
              </QORTButton>
              <BlogButton
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
                <BlogSVG
                  color={theme.palette.text.primary}
                  height={"22"}
                  width={"22"}
                />
              </BlogButton>
              <Docs
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
                <DocsSVG
                  color={theme.palette.text.primary}
                  height={"22"}
                  width={"22"}
                />
              </Docs>
              <ChromeStoreButton
                onClick={() => {
                  ReactGA.event({
                    category: "User",
                    action: "Clicked Install Qortal Header from QORT page",
                    label: "Clicked Install Qortal Header from QORT page"
                  });
                  window.open("https://bit.ly/qortal-chrome-extension", "_blank");
                }}
              >
                Install
                <ChromeStoreSVG
                  color={"transparent"}
                  height={"20"}
                  width={"25"}
                />
              </ChromeStoreButton>
            </HeaderButtonsRow>
          )}
        </HeaderNav>
      );
    } else {
      return (
        <HeaderNav>
          <ThemeSelectRow>
            {theme.palette.mode === "dark" ? (
              <LightModeSVG
                onClickFunc={() => dispatch(setTheme("light"))}
                color="white"
                height="22"
                width="22"
              />
            ) : (
              <DarkModeSVG
                onClickFunc={() => dispatch(setTheme("dark"))}
                color="black"
                height="22"
                width="22"
              />
            )}
            <QortalLogoContainer href="/">
              <>
                {theme.palette.mode === "light" ? (
                  <QortalBlackLogoSVG width="45" height="55" color="none" />
                ) : (
                  <QortalWhiteLogoSVG width="45" height="55" color="none" />
                )}
              </>{" "}
              <QortalText>ortal</QortalText>
              <QortalText style={{ marginTop: "10px", fontSize: "25px" }}>
                .dev
              </QortalText>
            </QortalLogoContainer>
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
                <HomeSVG
                  color={theme.palette.text.primary}
                  height={"22"}
                  width={"22"}
                />
              </QORTButton>
              <QORTButton
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
                <QortalSVG
                  color={theme.palette.text.primary}
                  height={"22"}
                  width={"22"}
                />
              </QORTButton>
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
                <BlogSVG
                  color={theme.palette.text.primary}
                  height={"22"}
                  width={"22"}
                />
              </BlogButton>
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
                <DocsSVG
                  color={theme.palette.text.primary}
                  height={"22"}
                  width={"22"}
                />
              </Docs>
              <ChromeStoreButton
                onClick={() => {
                  ReactGA.event({
                    category: "User",
                    action: "Clicked Install Qortal Header Desktop",
                    label: "Clicked Install Qortal Header Desktop"
                  });
                  window.open("https://bit.ly/qortal-chrome-extension", "_blank");
                }}
              >
                Install
                <ChromeStoreSVG
                  color={"transparent"}
                  height={"20"}
                  width={"25"}
                />
              </ChromeStoreButton>
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
