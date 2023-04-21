import { configureStore } from "@reduxjs/toolkit";
import watchlistReducer from "../features/watchlist/watchlistSlice";
import toplistReducer from "../features/toplist/toplistSlice";

export const store = configureStore({
  reducer: {
    watchlistHandler: watchlistReducer,
    toplistHandler: toplistReducer,
  },
});

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});
