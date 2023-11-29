import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "mode",
  initialState: false,
  reducers: {
    changeMode: (state: boolean) => {
      return !state;
    },
  },
});

export const { changeMode } = themeSlice.actions;

export default themeSlice.reducer;
