import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isVisible: false,
    notification: null,
  },
  reducers: {
    toggleVisibility(state) {
      state.isVisible = !state.isVisible;
    },
    showNotification(state, action) {
      state.notification = {
        title: action.payload.title,
        message: action.payload.message,
        status: action.payload.status,
      };
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
