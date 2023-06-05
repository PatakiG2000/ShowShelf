import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AlertState {
  value: string;
}

const initialState: AlertState = {
  value: "",
};

export const alertSlice = createSlice({
  name: "alerts",
  initialState,
  reducers: {
    setAlert: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setAlert } = alertSlice.actions;

export default alertSlice.reducer;
