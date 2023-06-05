import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface TracklistState {
  value: any;
}

const persistedStateString = localStorage.getItem("reduxState");
const persistedState: any = persistedStateString
  ? JSON.parse(persistedStateString)
  : {
      tracklistItems: [{}],
    };

const initialState: TracklistState = {
  value: persistedState.tracklistHandler?.value
    ? persistedState.tracklistHandler?.value
    : {
        tracklistItems: [],
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
        if (state.value.tracklistItems.length === 5) {
          alert("You can only have the maximum of 5 items on your tracklist");
          return;
        } else {
          state.value.tracklistItems.push(action.payload);
        }
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
