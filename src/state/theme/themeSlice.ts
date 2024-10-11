import { createSlice } from "@reduxjs/toolkit";

export interface ThemeTypes {
  theme: "dark" | "light";
}

const initialState:ThemeTypes  = {
  theme: 'dark',
}

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (
      state,
      action
    ) => {
      console.log({ action });
      state.theme = action.payload;
    },
  },
});

export const { setTheme } =
  themeSlice.actions;

export default themeSlice.reducer;
