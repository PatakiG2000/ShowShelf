import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface WatchlistState {
  value: any;
}

const persistedState: any = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};

const initialState: WatchlistState = {
  value: persistedState.watchlistHandler?.value
    ? persistedState.watchlistHandler?.value
    : [],
};

export const watchlistSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addToWatchlist: (state, action: PayloadAction<{ id: number }>) => {
      let alreadyOnList = false;
      state.value.forEach((show: any) => {
        if (show.id === action.payload.id) {
          alreadyOnList = true;
        }
      });
      if (!alreadyOnList) {
        state.value.push(action.payload);
      } else {
        alert("This item is already on your watchlist");
      }
    },
    decrement: (state) => {
      state.value -= 1;
    },
    deleteFromWatchlist: (state, action: PayloadAction<number>) => {
      const newState = state.value.filter(
        (show: any) => show.id !== action.payload
      );
      state.value = newState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToWatchlist, decrement, deleteFromWatchlist } =
  watchlistSlice.actions;

export default watchlistSlice.reducer;
