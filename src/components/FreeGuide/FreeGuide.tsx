"use client";

import { Box, Typography, useTheme } from "@mui/material";
import { inter, oxygen } from "../../app/fonts";
import { BookSVG } from "../Common/Icons/BookSVG";
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
            aria-hidden="true"
            sx={{
              width: { xs: "88px", md: "112px" },
              height: { xs: "88px", md: "112px" },
              mb: "28px",
              display: "grid",
              placeItems: "center",
              borderRadius: "50%",
              color: "#35a8ff",
              background: isDarkMode
                ? "radial-gradient(circle at 48% 45%, rgba(57, 168, 255, 0.16), rgba(12, 72, 148, 0.08) 64%, rgba(6, 12, 24, 0.92) 100%)"
                : "radial-gradient(circle at 48% 45%, rgba(57, 168, 255, 0.12), rgba(17, 91, 197, 0.055) 68%, rgba(255, 255, 255, 0.82) 100%)",
              border: isDarkMode
                ? "1px solid rgba(95, 151, 255, 0.34)"
                : "1px solid rgba(17, 91, 197, 0.2)"
            }}
          >
            {/* Placeholder cover until real ebook art is provided */}
            <BookSVG color="currentColor" width="52" height="42" />
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
            Get the Qortal getting-started guide
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
            Placeholder: swap this for the real ebook pitch.
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
