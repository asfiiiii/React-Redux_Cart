import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isVisible: false,
  },
  reducers: {
    toggleVisibility(state) {
      state.isVisible = !state.isVisible;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
