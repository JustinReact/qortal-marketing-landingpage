import { createTheme } from "@mui/material/styles";
import HexagonBG from "../images/Home/HexagonBG.png";
import HexagonBGLight from "../images/Home/HexagonBGLight.png";

const commonThemeOptions = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ':root': {
          padding: '0px',
          margin: '0px',
          boxSizing: 'border-box',
        }
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "inherit",
          transition: "filter 0.3s ease-in-out",
          "&:hover": {
            filter: "brightness(1.1)",
          },
        },
      },
      defaultProps: {
        disableElevation: true,
        disableRipple: true,
      },
    },
  },
  typography: {
    fontFamily: "'Museo', 'Raleway', 'Cairo',",
    button: {
      textTransform: "none",
    },
    h1: {
      fontSize: "40px",
    },
    h2: {
      fontSize: "30px",
    },
    h3: {
      fontSize: "21px",
    },
    h4: {
      fontSize: "18px",
    },
    h5: {
      fontSize: "16px",
    },
    h6: {
      fontSize: "14px",
    },
    body1: {
      fontSize: "1rem",
    },
    body2: {
      fontSize: "0.875rem",
    },
  },
  spacing: 8, // Customize the base spacing unit (default is 8)
  shape: {
    borderRadius: 4, // Customize the border radius of components
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

const lightTheme = createTheme({
  ...commonThemeOptions,
  palette: {
    mode: "light",
    primary: {
      main: "#eeeef4",
      dark: "#d6d6db",
      light: "#f4f4f8",
    },
    secondary: {
      main: "#115bc5",
      light: "#7f7cf5ff"
    },
    background: {
      default: "#fcfbfd",
    },
    text: {
      primary: "#000000",
      secondary: "#525252",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        'body': {
          backgroundImage: `url(${HexagonBGLight})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "80%",
          backgroundPosition: "center center",
          '@media (max-width: 600px)': {
            backgroundPosition: "20% center",
            backgroundSize: "auto",
          },
        },
         'body::-webkit-scrollbar-track': {
          backgroundColor: "#fcfbfd"
        },
        'body::-webkit-scrollbar-track:hover': {
          backgroundColor: "#fcfbfd"
        },
        'body::-webkit-scrollbar': {
          width: '16px',
          height: '10px',
          backgroundColor: '#fcfbfd',
        },
        'body::-webkit-scrollbar-thumb': {
          backgroundColor: '#115bc5',
          borderRadius: '8px',
          backgroundClip: 'content-box',
          border: '4px solid transparent',
        },
        'body::-webkit-scrollbar-thumb:hover': {
          backgroundColor: '#1153af',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow:
            "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;",
          borderRadius: "8px",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            cursor: "pointer",
            boxShadow:
              "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;",
          },
        },
      },
    },
    MuiIcon: {
      defaultProps: {
        style: {
          color: "#000000",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            cursor: "pointer",
            boxShadow:
              "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;",
          },
        },
      },
      defaultProps: {
        disableElevation: true,
        disableRipple: true,
      },
    },
  },
});

const darkTheme = createTheme({
  ...commonThemeOptions,
  palette: {
    mode: "dark",
    primary: {
      main: "#115bc5",
      dark: "#043596",
      light: "#a9cae9",
    },
    secondary: {
      main: "#359ff7ff",
      light: "#5657b1",
      dark: "#302F40"
    },
    background: {
      default: "#060a1e",
    },
    text: {
      primary: "#ffffff",
      secondary: "#525252",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        'body': {
          backgroundImage: `url(${HexagonBG})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "80%",
          backgroundPosition: "center center",
          '@media (max-width: 600px)': {
            backgroundPosition: "20% center",
            backgroundSize: "auto",
          },
        },
         'body::-webkit-scrollbar-track': {
          backgroundColor: "#060a1e"
        },
        'body::-webkit-scrollbar-track:hover': {
          backgroundColor: "#060a1e"
        },
        'body::-webkit-scrollbar': {
          width: '16px',
          height: '10px',
          backgroundColor: '#060a1e',
        },
        'body::-webkit-scrollbar-thumb': {
          backgroundColor: '#5657b1',
          borderRadius: '8px',
          backgroundClip: 'content-box',
          border: '4px solid transparent',
        },
        'body::-webkit-scrollbar-thumb:hover': {
          backgroundColor: '#4e50a1',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          borderRadius: "8px",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            cursor: "pointer",
            boxShadow:
            "0px 4px 5px 0px hsla(0,0%,0%,0.14), 0px 1px 10px 0px hsla(0,0%,0%,0.12), 0px 2px 4px -1px hsla(0,0%,0%,0.2)",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          transition: "filter 0.3s ease-in-out",
          "&:hover": {
            cursor: "pointer",
            backgroundColor: "inherit",
            boxShadow:
              "0px 4px 5px 0px hsla(0,0%,0%,0.14), 0px 1px 10px 0px hsla(0,0%,0%,0.12), 0px 2px 4px -1px hsla(0,0%,0%,0.2)",
          },
        },
      },
      defaultProps: {
        disableElevation: true,
        disableRipple: true,
      },
    },
  },
});

export { lightTheme, darkTheme };
