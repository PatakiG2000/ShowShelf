import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface TracklistState {
  value: any;
}

const persistedStateString = localStorage.getItem("reduxState");
const persistedState: any = persistedStateString
  ? JSON.parse(persistedStateString)
  : { tracklistItems: ["asd"] };

const initialState: TracklistState = {
  value: persistedState.tracklistHandler?.value
    ? persistedState.tracklistHandler?.value
    : {
        tracklistItems: [
          {
            title: "asd",
            year: 2013,
            genre: "horror",
            time: "4h12m",
            description:
              "lorem asd asa ds asdklas  adsjiosd aias jd aos daisd ",
            imdbLink: "tt564656",
            img: "https://images.unsplash.com/photo-1681696559487-264354658add?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            id: 123,
            seasons: [],
            seenByUser: {},
            progress: 0,
            seenEpisodes: [],
            seenSeason: [],
          },
        ],
      },
};

export const tracklistSlice = createSlice({
  name: "tracklist",
  initialState,
  reducers: {
    addToTracklist: (
      state,
      action: PayloadAction<{
        id: number;
        seenEpisodes: number[];
        seenSeason: string[];
      }>
    ) => {
      let alreadyOnList = false;
      state.value.tracklistItems.forEach((show: any) => {
        if (show.id === action.payload.id) {
          alreadyOnList = true;
        }
      });
      if (!alreadyOnList) {
        state.value.tracklistItems.push(action.payload);
      } else {
        alert("This item is already on your watchlist");
      }
    },

    deleteFromTracklist: (state, action: PayloadAction<number>) => {
      const newState = state.value.tracklistItems.filter(
        (show: any) => show.id !== action.payload
      );
      state.value.tracklistItems = newState;
    },
    handleSeenEpisode: (
      state,
      action: PayloadAction<{ showTitle: string; ep: number }>
    ) => {
      state.value.tracklistItems.forEach(
        (item: { title: string; seenEpisodes: number[] }) => {
          if (item.title === action.payload.showTitle) {
            if (!item.seenEpisodes.includes(action.payload.ep)) {
              item.seenEpisodes.push(action.payload.ep);
            } else {
              const newArr = item.seenEpisodes.filter(
                (ep) => ep !== action.payload.ep
              );
              item.seenEpisodes = newArr;
            }
          }
        }
      );
    },
    handleSeenSeason: (
      state,
      action: PayloadAction<{ showTitle: string; season: string }>
    ) => {
      const show = state.value.tracklistItems.find(
        (show: { title: string }) => show.title === action.payload.showTitle
      );

      if (!show.seenSeason.includes(action.payload.season)) {
        show.seenSeason.push(action.payload.season);
      } else {
        const filteredArr = show.seenSeason.filter(
          (season: string) => season !== action.payload.season
        );
        show.seenSeason = filteredArr;
      }
    },
    addToSeenEpisode: (
      state,
      action: PayloadAction<{ showTitle: string; ep: number }>
    ) => {
      const show = state.value.tracklistItems.find(
        (show: { title: string }) => show.title === action.payload.showTitle
      );
      if (!show.seenEpisodes.includes(action.payload.ep)) {
        show.seenEpisodes.push(action.payload.ep);
      }
    },
    removeFromSeenEpisode: (
      state,
      action: PayloadAction<{ showTitle: string; ep: number }>
    ) => {
      const show = state.value.tracklistItems.find(
        (show: { title: string }) => show.title === action.payload.showTitle
      );
      const filteredArr = show.seenEpisodes.filter(
        (ep: number) => ep !== action.payload.ep
      );
      show.seenEpisodes = filteredArr;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addToTracklist,
  deleteFromTracklist,
  handleSeenEpisode,
  handleSeenSeason,
  addToSeenEpisode,
  removeFromSeenEpisode,
} = tracklistSlice.actions;

export default tracklistSlice.reducer;
