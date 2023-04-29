import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { lightTheme, darkTheme } from "./styles/theme";
import Home from "./pages/Home/Home";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <CssBaseline />
      <Routes>
        <Route
          path="/"
          element={<Home setTheme={(val: string) => setTheme(val)} />}
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
