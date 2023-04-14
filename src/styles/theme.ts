import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5', // Customize the primary color
    },
    secondary: {
      main: '#f50057', // Customize the secondary color
    },
    background: {
      default: '#f3f3f3', // Customize the background color
    },
    text: {
      primary: '#212121', // Customize the primary text color
      secondary: '#757575', // Customize the secondary text color
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: 'inherit',
          transition: 'filter 0.3s ease-in-out',
          '&:hover': {
            filter: 'brightness(1.1)',
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
    fontFamily: "'Roboto', 'Raleway', 'Manrope', 'Plus Jakarta Sans', 'Nanum Gothic', 'Helvetica', 'Arial', sans-serif", // Customize the font family
    button: {
      textTransform: 'none',
    },
    h1: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '1.75rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 500,
    },
    h5: {
      fontSize: '1rem',
      fontWeight: 500,
    },
    h6: {
      fontSize: '0.875rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '0.875rem',
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
    }
  }
});

export default theme;