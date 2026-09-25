"use client";

import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import { inter, oxygen } from "../../app/fonts";
import { LeadMagnetForm } from "../LeadMagnet/LeadMagnetForm";

const FreeGuide = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === "dark";

  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        minHeight: "calc(100vh - 160px)",
        px: { xs: "20px", sm: "40px", md: "72px" },
        py: { xs: "72px", md: "120px" },
        background: isDarkMode
          ? "linear-gradient(180deg, #020713 0%, #07111f 100%)"
          : theme.palette.background.default
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          alignItems: "center",
          gap: { xs: "40px", md: "80px" },
          width: "100%",
          maxWidth: "1100px"
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
            textAlign: { xs: "center", md: "left" }
          }}
        >
          <Box
            sx={{
              width: { xs: "180px", md: "220px" },
              mb: "28px",
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: isDarkMode
                ? "0 16px 40px rgba(0, 0, 0, 0.4)"
                : "0 16px 40px rgba(8, 17, 34, 0.18)"
            }}
          >
            <Image
              src="/lead-magnets/qortal-free-guide-cover.png"
              alt="Cover of Your Favorite Apps, Reimagined on Qortal"
              width={800}
              height={1035}
              style={{ display: "block", width: "100%", height: "auto" }}
            />
          </Box>
          <Typography
            sx={{
              m: 0,
              fontFamily: oxygen.style.fontFamily,
              fontWeight: 500,
              fontSize: { xs: "14px", md: "18px" },
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: theme.palette.customBlue.main
            }}
          >
            FREE GUIDE
          </Typography>
          <Typography
            component="h1"
            sx={{
              mt: "16px",
              mb: 0,
              fontFamily: oxygen.style.fontFamily,
              fontWeight: 500,
              fontSize: { xs: "32px", sm: "40px", md: "52px" },
              lineHeight: 1.15,
              color: theme.palette.text.primary
            }}
          >
            Your favorite apps, reimagined on Qortal
          </Typography>
          <Typography
            sx={{
              mt: "18px",
              fontFamily: inter.style.fontFamily,
              fontSize: { xs: "16px", md: "18px" },
              lineHeight: 1.5,
              color: isDarkMode
                ? "rgba(218, 229, 243, 0.72)"
                : "rgba(8, 17, 34, 0.68)",
              maxWidth: "460px"
            }}
          >
            Discover peer-to-peer alternatives for video, messaging, file
            sharing, blogging, shopping, and crowdfunding. See what you can do
            with Q-Apps and how to get started with Qortal.
          </Typography>
        </Box>
        <Box
          sx={{
            position: "relative",
            p: { xs: "28px 22px", md: "40px 36px" },
            borderRadius: "10px",
            border: isDarkMode ? "1px solid #F5F5F5" : "1px solid #000000",
            backgroundColor: theme.palette.background.default
          }}
        >
          <LeadMagnetForm
            variant="full"
            source="free-guide-page"
            title="Get Your Free Copy"
            submitLabel="Send me the free guide"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default FreeGuide;
