"use client";
import { FC } from "react";
import { Container, DrawerButton } from "./MobileDrawer-styles";
import { useMediaQuery, useTheme } from "@mui/material";
import { DocsSVG } from "../../Common/Icons/DocsSVG";
import { QortalSVG } from "../../Common/Icons/QortalSVG";
import ReactGA from "react-ga4";
import { HomeSVG } from "../../Common/Icons/HomeSVG";
import { usePathname, useRouter } from "next/navigation";
import { BlogSVG } from "../../Common/Icons/BlogSVG";
import { DownloadSVG } from "../../Common/Icons/DownloadSVG";

interface MobileDrawerProps {
  setOpenMobileDrawer: () => void;
}

export const MobileDrawer: FC<MobileDrawerProps> = ({
  setOpenMobileDrawer
}) => {
  const router = useRouter();
  const location = usePathname();
  return (
    <Container>
      <DrawerButton
        onClick={() => {
          ReactGA.event({
            category: "User",
            action: "Clicked Mobile Home Drawer Link",
            label: "Clicked Mobile Home Drawer Link"
          });
          setOpenMobileDrawer();
          router.push("/");
        }}
        active={location === "/" ? true : false}
      >
        Home
      </DrawerButton>
      <DrawerButton
        onClick={() => {
          ReactGA.event({
            category: "User",
            action: "Clicked Mobile Documentation Drawer Link",
            label: "Clicked Mobile Documentation Drawer Link"
          });
          setOpenMobileDrawer();
          router.push("/docs/q-apps");
        }}
        active={(location === "/docs/q-apps" || location === "/docs/extension") ? true : false}
      >
        Documentation
      </DrawerButton>
      <DrawerButton
        onClick={() => {
          ReactGA.event({
            category: "User",
            action: "Clicked Mobile News Drawer Link",
            label: "Clicked Mobile News Drawer Link"
          });
          setOpenMobileDrawer();
          router.push("/news");
        }}
        active={location.includes("/news") ? true : false}
      >
        News
      </DrawerButton>
      <DrawerButton
        onClick={() => {
          ReactGA.event({
            category: "User",
            action: "Clicked Mobile Blog Drawer Link",
            label: "Clicked Mobile Blog Drawer Link"
          });
          setOpenMobileDrawer();
          router.push("/blog");
        }}
        active={location.includes("/blog") ? true : false}
      >
        Blog
      </DrawerButton>
      <DrawerButton
        onClick={() => {
          ReactGA.event({
            category: "User",
            action: "Clicked Mobile Download Drawer Link",
            label: "Clicked Mobile Download Drawer Link"
          });
          setOpenMobileDrawer();
          router.push("/downloads");
        }}
        active={location === "/downloads" ? true : false}
      >
        Downloads
      </DrawerButton>
      <DrawerButton
        onClick={() => {
          ReactGA.event({
            category: "User",
            action: "Clicked Mobile Wiki Drawer Link",
            label: "Clicked Mobile Wiki Drawer Link"
          });
          setOpenMobileDrawer();
          router.push("/wiki");
        }}
        active={location.includes("/wiki") ? true : false}
      >
        Wiki
      </DrawerButton>
      <DrawerButton
        onClick={() => {
          ReactGA.event({
            category: "User",
            action: "Clicked Mobile Ebook Drawer Link",
            label: "Clicked Mobile Ebook Drawer Link"
          });
          setOpenMobileDrawer();
          router.push("/ebook");
        }}
        active={location.includes("/ebook") ? true : false}
      >
        Ebook
      </DrawerButton>
    </Container>
  );
};
