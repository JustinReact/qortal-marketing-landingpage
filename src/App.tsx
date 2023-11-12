import { Provider } from "react-redux";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { lightTheme, darkTheme } from "./styles/theme";
import Api from "./pages/Docs/Api/Api";
import { store } from "./state/store";
import { MainLayoutRoute } from "./components/Layout/Main/MainLayout";

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
            <Route
              path="/"
              element={<Api setTheme={(val: string) => setTheme(val)} />}
            />
          </Route>
        </Routes>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
