import { configureStore } from "@reduxjs/toolkit";
import watchlistReducer from "../features/watchlist/watchlistSlice";
import toplistReducer from "../features/toplist/toplistSlice";
import tracklistReducer from "../features/tracklist/tracklistSlice";

export const store = configureStore({
  reducer: {
    watchlistHandler: watchlistReducer,
    toplistHandler: toplistReducer,
    tracklistHandler: tracklistReducer,
  },
});

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});
