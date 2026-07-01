"use client";

import { GlobalStyles, Theme, useTheme } from "@mui/material";
import { ToastContainer, ToastOptions, Zoom } from "react-toastify";
import { inter } from "../../app/fonts";

export const FAQ_COPY_TOAST_CLASS = "faq-copy-toast";
export const FAQ_TOAST_CONTAINER_ID = "faq-copy-toast-container";

export const getFaqToastOptions = (theme: Theme): ToastOptions => ({
  position: "bottom-right",
  autoClose: 3500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: false,
  className: FAQ_COPY_TOAST_CLASS,
  containerId: FAQ_TOAST_CONTAINER_ID,
  theme: theme.palette.mode === "dark" ? "dark" : "light"
});

export const FaqToastStyles = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <>
      <GlobalStyles
        styles={{
          [`.${FAQ_COPY_TOAST_CLASS}.Toastify__toast`]: {
            fontFamily: `${inter.style.fontFamily} !important`,
            fontSize: "14px !important",
            lineHeight: "20px !important",
            padding: "8px 12px !important",
            minHeight: "unset !important",
            borderRadius: "8px !important",
            fontWeight: "400 !important",
            width: "auto !important",
            maxWidth: "320px !important",
            color: `${isDark ? "#ffffff" : "#000000"} !important`,
            background: `${isDark ? "#111112" : "#ffffff"} !important`,
            border: `1px solid ${
              isDark ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.12)"
            } !important`,
            boxShadow: isDark
              ? "0 4px 12px rgba(0, 0, 0, 0.35) !important"
              : "0 4px 12px rgba(0, 0, 0, 0.12) !important"
          },
          [`.${FAQ_COPY_TOAST_CLASS} .Toastify__toast-body`]: {
            padding: "0 !important",
            margin: "0 !important"
          },
          [`.${FAQ_COPY_TOAST_CLASS} .Toastify__close-button`]: {
            color: `${isDark ? "#ffffff" : "#000000"} !important`,
            opacity: 0.6
          },
          [`.${FAQ_COPY_TOAST_CLASS} .Toastify__progress-bar`]: {
            background: `${theme.palette.customBlue.main} !important`,
            height: "3px !important"
          }
        }}
      />
      <ToastContainer
        containerId={FAQ_TOAST_CONTAINER_ID}
        position="bottom-right"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable={false}
        limit={1}
        theme={isDark ? "dark" : "light"}
        transition={Zoom}
      />
    </>
  );
};
