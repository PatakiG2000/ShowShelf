import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ToplistState {
  value: any;
}

const persistedStateString = localStorage.getItem("reduxState");
const persistedState = persistedStateString
  ? JSON.parse(persistedStateString)
  : [
      {
        title: "asd",
        year: 2013,
        genre: "horror",
        time: "4h12m",
        description: "lorem asd asa ds asdklas  adsjiosd aias jd aos daisd ",
        imdbLink: "tt564656",
        img: "https://images.unsplash.com/photo-1681696559487-264354658add?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        id: 123,
      },
    ];

const initialState: ToplistState = {
  value: persistedState.toplistHandler?.value
    ? persistedState.toplistHandler?.value
    : [{ title: "asd" }],
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
export const { addToToplist, decrement, deleteFromToplist } =
  toplistSlice.actions;

export default toplistSlice.reducer;
