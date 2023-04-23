import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface TracklistState {
  value: any;
}

const persistedState: any = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {
      title: "asd",
      year: 2013,
      genre: "horror",
      time: "4h12m",
      description: "lorem asd asa ds asdklas  adsjiosd aias jd aos daisd ",
      imdbLink: "tt564656",
      img: "https://images.unsplash.com/photo-1681696559487-264354658add?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      id: 123,
      seenByUser: {},
    };

console.log("persisted", persistedState);

const initialState: TracklistState = {
  value: persistedState.tracklistHandler?.value
    ? persistedState.tracklistHandler?.value
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
          seasons: [],
          episodes: [],
          seenByUser: {},
        },
      ],
};

export const tracklistSlice = createSlice({
  name: "tracklist",
  initialState,
  reducers: {
    addToTracklist: (state, action: PayloadAction<{}>) => {
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

    deleteFromTracklist: (state, action: PayloadAction<number>) => {
      const newState = state.value.filter(
        (show: any) => show.id !== action.payload
      );
      state.value = newState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToTracklist, deleteFromTracklist } = tracklistSlice.actions;

export default tracklistSlice.reducer;
