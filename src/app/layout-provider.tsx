"use client";
import ReactGA from "react-ga4";
import { Provider } from "react-redux";
import { useEffect } from "react";
import { CssBaseline } from "@mui/material";
import { Wrapper } from "../components/Layout/Main/MainLayout-styles";
import { store } from "../state/store";
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
  console.log(location);
  return (
    <Provider store={store}>
      <ThemeProviderWrapper>
        <CssBaseline />
        <Wrapper
          className={
            !location.includes("/docs") && !location.includes("/")
              ? "BGImageMain"
              : location === "/"
              ? "landingPage"
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
