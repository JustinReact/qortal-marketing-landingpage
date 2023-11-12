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
  DocsNavContainer,
  FeaturesButton
} from "./Header-styles";
import { useMediaQuery, useTheme } from "@mui/material";
import { LayoutProps } from "../Main/MainLayout";
import { LightModeSVG } from "../../Common/Icons/LightModeSVG";
import { DarkModeSVG } from "../../Common/Icons/DarkModeSVG";
import { motion, AnimatePresence } from "framer-motion";
import { DocsSVG } from "../../Common/Icons/DocsSVG";
import { BackArrowSVG } from "../../Common/Icons/BackArrowSVG";
import QortalLogo from "../../../images/Logo/QortalLogo.png";
import QortalLogoDarkTheme from "../../../images/Logo/QortalLogoDarkTheme.webp";
import { FeaturesSVG } from "../../Common/Icons/FeaturesSVG";

export const Header: FC<LayoutProps> = () => {
  return <HeaderNav />;
};
