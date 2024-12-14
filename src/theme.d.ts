import {
  Palette as MuiPallete,
  PaletteOptions as MuiPaletteOptions,
} from '@mui/material/styles/createPalette';

declare module '@mui/material/styles/createPalette' {
  interface Palette extends MuiPallete {
    customBlue: {main: string};
  }

  interface PaletteOptions extends MuiPaletteOptions {
    customBlue?: {main: string};
  }
}