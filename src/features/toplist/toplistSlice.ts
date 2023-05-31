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
    addToToplist: (
      state,
      action: PayloadAction<{
        id: number;
        title: string;
        year: number;
        genre: string;
        time: number;
        img: string;
        formData: any;
        key: string;
        imdbLink: string;
      }>
    ) => {
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
    sorting: (state, action: PayloadAction<string>) => {
      //számoljon majd overallt
      /* const newState = state.value.sort((a, b) => a - b); */
      console.log(initialState);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToToplist, deleteFromToplist, sorting } =
  toplistSlice.actions;

export default toplistSlice.reducer;
