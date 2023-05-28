import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ToplistState {
  value: any;
}

const persistedStateString = localStorage.getItem("reduxState");
const persistedState = persistedStateString
  ? JSON.parse(persistedStateString)
  : [];

const initialState: ToplistState = {
  value: persistedState.toplistHandler?.value
    ? persistedState.toplistHandler?.value
    : [],
};

export const toplistSlice = createSlice({
  name: "toplist",
  initialState,
  reducers: {
    addToToplist: (state, action: PayloadAction<{ id: string | number }>) => {
      let alreadyOnList = false;
      state.value.forEach((show: any) => {
        if (show.id === action.payload.id) {
          alreadyOnList = true;
        }
      });
      if (!alreadyOnList) {
        state.value.push(action.payload);
      } else {
        alert("This item is already on your toplist");
      }
    },

    deleteFromToplist: (state, action: PayloadAction<number>) => {
      const newState = state.value.filter(
        (show: any) => show.id !== action.payload
      );
      state.value = newState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToToplist, deleteFromToplist } = toplistSlice.actions;

export default toplistSlice.reducer;
