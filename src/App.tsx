import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { lightTheme, darkTheme } from "./styles/theme";
import Home from "./pages/Home/Home";
import Api from "./pages/Docs/Api/Api";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <CssBaseline />
      <Routes>
      <Route
          path="/docs/api"
          element={<Api setTheme={(val: string) => setTheme(val)} />}
        />
        <Route
          path="/"
          element={<Home setTheme={(val: string) => setTheme(val)} />}
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
