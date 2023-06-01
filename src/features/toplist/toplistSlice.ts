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
        timestamp: number;
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
      const newState = [...state.value];
      if (action.payload === "lowtohigh") {
        newState.sort(
          (
            a: { formData: { overallRating: number } },
            b: { formData: { overallRating: number } }
          ) => {
            return a.formData.overallRating - b.formData.overallRating;
          }
        );

        state.value = newState;
      }
      if (action.payload === "hightolow") {
        newState.sort(
          (
            a: { formData: { overallRating: number } },
            b: { formData: { overallRating: number } }
          ) => {
            return b.formData.overallRating - a.formData.overallRating;
          }
        );
        console.log(newState);
        state.value = newState;
      }
      if (action.payload === "newest") {
        newState.sort((a: { timestamp: number }, b: { timestamp: number }) => {
          return b.timestamp - a.timestamp;
        });
        console.log(newState);
        state.value = newState;
      }
      if (action.payload === "oldest") {
        newState.sort((a: { timestamp: number }, b: { timestamp: number }) => {
          return a.timestamp - b.timestamp;
        });
        console.log(newState);
        state.value = newState;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToToplist, deleteFromToplist, sorting } =
  toplistSlice.actions;

export default toplistSlice.reducer;
