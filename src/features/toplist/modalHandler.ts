import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ToplistState {
  value: any;
}

const initialState = {
  value: {
    isOpen: false,
    movieData: {},
  },
};

export const toplistModalSlice = createSlice({
  name: "toplistModal",
  initialState,
  reducers: {
    handleModal: (
      state,
      action: PayloadAction<{
        open: boolean;
        movieData: { id: number };
      }>
    ) => {
      console.log("ased", action.payload);
      state.value.isOpen = action.payload.open;
      state.value.movieData = action.payload.movieData;
    },
  
  },
});

export const { handleModal } = toplistModalSlice.actions;

export default toplistModalSlice.reducer;
