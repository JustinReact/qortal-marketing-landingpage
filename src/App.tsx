import ReactGA from "react-ga4";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { lightTheme, darkTheme } from "./styles/theme";
import Home from "./pages/Home/Home";
import { NotFound } from "./pages/NotFound/NotFound";
import { ErrorElement } from "./components/Common/Error/ErrorElement";
import Api from "./pages/Docs/Api/Api";
import { MainLayoutRoute } from "./components/Layout/Main/MainLayout";
import { Promo } from "./pages/Promo/Promo";

// Initialize Google Analytics
ReactGA.initialize("G-E1BB62FVTN");

function App() {
  const [theme, setTheme] = useState("dark");
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const errorHandler = (e: ErrorEvent): void => {
      setError(e.error);
    };
    window.addEventListener("error", errorHandler);
    return () => {
      window.removeEventListener("error", errorHandler);
    };
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <CssBaseline />
      {error?.message ? (
        <ErrorElement message={error?.message} />
      ) : (
        <Routes>
          <Route
            element={
              <MainLayoutRoute setTheme={(val: string) => setTheme(val)} />
            }
          >
            <Route path="/" element={<Home />} />
            <Route
              path="/docs/api"
              element={<Api setTheme={(val: string) => setTheme(val)} />}
            />
            <Route
              path="/promo"
              element={<Promo setTheme={(val: string) => setTheme(val)} />}
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      )}
    </ThemeProvider>
  );
}

export default App;
