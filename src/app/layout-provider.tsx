"use client";
import ReactGA from "react-ga4";
import { Provider, useSelector } from "react-redux";
import { useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { Wrapper } from "../components/Layout/Main/MainLayout-styles";
import { RootState, store } from "../state/store";
import { usePathname } from "next/navigation";
import { Header } from "../components/Layout/Header/Header";
import { Footer } from "../components/Layout/Footer/Footer";
import ThemeProviderWrapper from "./theme-provider";

// Initialize Google Analytics
ReactGA.initialize("G-E1BB62FVTN");

function LayoutProvider({ children }: { children: React.ReactNode }) {
  const location = usePathname();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
      <Provider store={store}>
        <ThemeProviderWrapper>
          <CssBaseline />
          <Wrapper
            className={
              location === "/"
                ? "BGImageMain"
                : location === "/promo"
                ? "BGImagePromo"
                : location === "/features"
                ? "BGImageFeatures"
                : location === "/qort"
                ? "BGQORTPage"
                : location === "/extension"
                ? "BGExtensionPage"
                : ""
            }
          >
            <Header />
            {children}
            <Footer />
          </Wrapper>
        </ThemeProviderWrapper>
      </Provider>
  );
}

export default LayoutProvider;
