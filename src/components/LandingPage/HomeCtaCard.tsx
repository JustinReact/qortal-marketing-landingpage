"use client";

import { Box, Typography, useTheme } from "@mui/material";
import Link from "next/link";
import { ReactNode } from "react";

interface HomeCtaCardProps {
  ariaLabel: string;
  icon: ReactNode;
  title: string;
  subtitle: string;
  href: string;
  buttonLabel: string;
  buttonIcon?: ReactNode;
  onClick?: () => void;
}

export const HomeCtaCard = ({
  ariaLabel,
  icon,
  title,
  subtitle,
  href,
  buttonLabel,
  buttonIcon,
  onClick
}: HomeCtaCardProps) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  return (
    <Box
      component="article"
      aria-label={ariaLabel}
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: { xs: "column", sm: "row" },
        gap: { xs: "16px", sm: "30px" },
        minHeight: "102px",
        px: { xs: "22px", sm: "46px" },
        py: "24px",
        overflow: "hidden",
        width: "100%",
        boxSizing: "border-box",
        border: isDarkMode
          ? "1px solid rgba(132, 175, 240, 0.14)"
          : "1px solid rgba(17, 91, 197, 0.12)",
        borderRadius: "8px",
        background: isDarkMode
          ? "linear-gradient(180deg, rgba(11, 19, 34, 0.88), rgba(5, 11, 22, 0.94))"
          : "linear-gradient(180deg, rgba(255, 255, 255, 0.78), rgba(239, 245, 252, 0.86))",
        boxShadow: isDarkMode
          ? "inset 0 1px 0 rgba(255, 255, 255, 0.055), inset 0 -1px 0 rgba(12, 72, 148, 0.08), 0 24px 86px rgba(0, 0, 0, 0.22), 0 -14px 72px rgba(12, 72, 148, 0.035)"
          : "inset 0 1px 0 rgba(255, 255, 255, 0.72), 0 22px 64px rgba(17, 91, 197, 0.08)",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: "0",
          pointerEvents: "none",
          background: isDarkMode
            ? "radial-gradient(ellipse 36% 130% at 2% 50%, rgba(12, 72, 148, 0.14), transparent 70%), radial-gradient(ellipse 34% 120% at 94% 48%, rgba(12, 72, 148, 0.09), transparent 72%)"
            : "radial-gradient(ellipse 36% 130% at 2% 50%, rgba(17, 91, 197, 0.08), transparent 70%), radial-gradient(ellipse 34% 120% at 94% 48%, rgba(17, 91, 197, 0.055), transparent 72%)",
          opacity: isDarkMode ? 0.68 : 0.54
        },
        "&::after": {
          content: '""',
          position: "absolute",
          top: 0,
          right: "18px",
          left: "18px",
          height: "1px",
          pointerEvents: "none",
          background: isDarkMode
            ? "linear-gradient(90deg, transparent, rgba(132, 175, 240, 0.2) 18%, rgba(132, 175, 240, 0.14) 58%, transparent)"
            : "linear-gradient(90deg, transparent, rgba(17, 91, 197, 0.14) 18%, rgba(17, 91, 197, 0.09) 58%, transparent)"
        }
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          gap: "12px",
          minWidth: 0,
          width: { xs: "100%", sm: "auto" }
        }}
      >
        <Box
          aria-hidden="true"
          sx={{
            width: "50px",
            height: "50px",
            flex: "0 0 auto",
            display: "grid",
            placeItems: "center",
            borderRadius: "50%",
            color: "#35a8ff",
            background: isDarkMode
              ? "radial-gradient(circle at 48% 45%, rgba(57, 168, 255, 0.16), rgba(12, 72, 148, 0.08) 64%, rgba(6, 12, 24, 0.92) 100%)"
              : "radial-gradient(circle at 48% 45%, rgba(57, 168, 255, 0.12), rgba(17, 91, 197, 0.055) 68%, rgba(255, 255, 255, 0.82) 100%)",
            border: isDarkMode
              ? "1px solid rgba(95, 151, 255, 0.34)"
              : "1px solid rgba(17, 91, 197, 0.2)",
            boxShadow: isDarkMode
              ? "inset 0 1px 0 rgba(255, 255, 255, 0.07), 0 0 22px rgba(12, 72, 148, 0.18)"
              : "inset 0 1px 0 rgba(255, 255, 255, 0.74), 0 0 18px rgba(17, 91, 197, 0.08)"
          }}
        >
          {icon}
        </Box>
        <Box sx={{ minWidth: 0 }}>
          <Typography
            component="h2"
            sx={{
              m: 0,
              color: isDarkMode ? "#f5f9ff" : "#07111f",
              fontSize: "1rem",
              fontWeight: 800,
              lineHeight: 1.24,
              letterSpacing: 0
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              mt: "4px",
              color: isDarkMode
                ? "rgba(218, 229, 243, 0.64)"
                : "rgba(8, 17, 34, 0.58)",
              fontSize: "0.86rem",
              fontWeight: 500,
              lineHeight: 1.35,
              letterSpacing: 0
            }}
          >
            {subtitle}
          </Typography>
        </Box>
      </Box>
      <Box
        component={Link}
        href={href}
        onClick={onClick}
        sx={{
          position: "relative",
          zIndex: 1,
          flex: "0 0 auto",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          minWidth: { xs: "100%", sm: "168px" },
          height: "38px",
          px: "16px",
          borderRadius: "7px",
          color: "#ffffff",
          background: "linear-gradient(180deg, #2088f6 0%, #136fd8 100%)",
          border: "1px solid rgba(137, 197, 255, 0.28)",
          boxShadow:
            "0 10px 20px rgba(19, 118, 237, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
          textDecoration: "none",
          fontSize: "0.8rem",
          fontWeight: 800,
          lineHeight: 1,
          letterSpacing: 0,
          transition:
            "transform 150ms ease, box-shadow 150ms ease, filter 150ms ease, border-color 150ms ease",
          "&:focus-visible": {
            outline: "1px solid rgba(245, 248, 255, 0.72)",
            outlineOffset: "4px"
          },
          "@media (hover: hover) and (pointer: fine)": {
            "&:hover": {
              transform: "translateY(-1px)",
              filter: "brightness(1.04)",
              borderColor: "rgba(245, 248, 255, 0.58)",
              boxShadow:
                "0 16px 30px rgba(19, 118, 237, 0.22), inset 0 1px 0 rgba(255, 255, 255, 0.28)"
            }
          }
        }}
      >
        {buttonLabel}
        {buttonIcon}
      </Box>
    </Box>
  );
};
