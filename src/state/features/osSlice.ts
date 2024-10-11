import { createSlice } from "@reduxjs/toolkit";

interface OSTypes {
  os: string
}

const initialState: OSTypes = {
  os: '',
}

export const osSlice = createSlice({
  name: "OS",
  initialState,
  reducers: {
    setOS: (
      state,
      action
    ) => {
      state.os = action.payload;
    },
  },
});

export const { setOS } =
  osSlice.actions;

export default osSlice.reducer;
