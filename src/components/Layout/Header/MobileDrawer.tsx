"use client";
import { FC } from "react";
import {
  Container,
  Divider,
  DownloadButton,
  DrawerButton
} from "./MobileDrawer-styles";
import { useMediaQuery, useTheme } from "@mui/material";
import { DocsSVG } from "../../Common/Icons/DocsSVG";
import { QortalSVG } from "../../Common/Icons/QortalSVG";
import ReactGA from "react-ga4";
import { HomeSVG } from "../../Common/Icons/HomeSVG";
import { useRouter } from "next/navigation";
import { BlogSVG } from "../../Common/Icons/BlogSVG";
import { DownloadSVG } from "../../Common/Icons/DownloadSVG";

interface MobileDrawerProps {
  setOpenMobileDrawer: () => void;
}

export const MobileDrawer: FC<MobileDrawerProps> = ({
  setOpenMobileDrawer
}) => {
  const theme = useTheme();
  const router = useRouter();

  return (
    <Container>
      <DrawerButton
        onClick={() => {
          ReactGA.event({
            category: "User",
            action: "Clicked Mobile Drawer Download Link",
            label: "Clicked Mobile Drawer Download Link"
          });
          setOpenMobileDrawer();
          router.push("/downloads");
        }}
      >
        Download
        <DownloadSVG
          color={"#000000"}
          height={"25"}
          width={"25"}
        />
      </DrawerButton>
      <Divider />
      <DrawerButton
        onClick={() => {
          setOpenMobileDrawer();
          router.push("/");
        }}
      >
        Home
        <HomeSVG
          color={"#000000"}
          height={"25"}
          width={"25"}
        />
      </DrawerButton>
      <Divider />
      <DrawerButton
        onClick={() => {
          setOpenMobileDrawer();
          router.push("/qort");
        }}
      >
        QORT
        <QortalSVG
          color={"#000000"}
          height={"25"}
          width={"25"}
        />
      </DrawerButton>
      <Divider />
      <DrawerButton
        onClick={() => {
          setOpenMobileDrawer();
          router.push("/docs/q-apps");
        }}
      >
        Documentation
        <DocsSVG
          color={"#000000"}
          height={"25"}
          width={"25"}
        />
      </DrawerButton>
      <Divider />
      <DrawerButton
        onClick={() => {
          ReactGA.event({
            category: "User",
            action: "Clicked Mobile Blog Reddit Link",
            label: "Clicked Mobile Blog Reddit Link"
          });
          setOpenMobileDrawer();
          router.push("/blog");
        }}
      >
        Blog
        <BlogSVG
          color={"#000000"}
          height={"25"}
          width={"25"}
        />
      </DrawerButton>
    </Container>
  );
};
