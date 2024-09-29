import { createContext, useContext } from "react";

// Define the type for the context
interface ThemeContextType {
  theme: string;
  setTheme: (val: string) => void;
}

// Create the context with an initial value of null
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Custom hook to access the ThemeContext
export const useThemeProvider = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
