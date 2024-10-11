"use client";
import React, { FC } from "react";
import { ThemeProvider } from "@emotion/react";
import { RootState } from "../state/store";
import { useSelector } from "react-redux";
import { lightTheme, darkTheme } from "../styles/theme";

interface ThemeProviderWrapperProps {
  children: React.ReactNode;
}

const ThemeProviderWrapper: FC<ThemeProviderWrapperProps> = ({ children }) => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderWrapper;
