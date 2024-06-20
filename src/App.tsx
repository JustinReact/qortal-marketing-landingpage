import ReactGA from "react-ga4";
import { Provider } from "react-redux";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { lightTheme, darkTheme } from "./styles/theme";
import Home from "./pages/Home/Home";
import { NotFound } from "./pages/NotFound/NotFound";
import Api from "./pages/Docs/Api/Api";
import { MainLayoutRoute } from "./components/Layout/Main/MainLayout";
import { store } from "./state/store";
import { Promo } from "./pages/Promo/Promo";
import { Features } from "./pages/Features/Features";
import { QORTPage } from "./pages/QORTPage/QORTPage";
import { Privacy } from "./pages/Privacy/Privacy";
import { Support } from "./pages/Support/Support";
import { Extension } from "./pages/Extension/Extension";

// Initialize Google Analytics
ReactGA.initialize("G-E1BB62FVTN");

function App() {
  const [theme, setTheme] = useState<string>("dark");

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <CssBaseline />
        <Routes>
          <Route
            element={
              <MainLayoutRoute setTheme={(val: string) => setTheme(val)} />
            }
          >
            <Route path="/" element={<Home />} />
            <Route path="/qort" element={<QORTPage setTheme={(val: string) => setTheme(val)} />} />
            <Route path="/extension" element={<Extension setTheme={(val: string) => setTheme(val)} />} />
            <Route
              path="/docs/api"
              element={<Api setTheme={(val: string) => setTheme(val)} />}
            />
            <Route path="/promo" element={<Promo />} />
            <Route path="/features" element={<Features />} />
            <Route path="/support" element={<Support />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
