import * as React from "react";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const useControlledShows = (id: number) => {
  const [where, setWhere] = useState("");
  const tracklistItems = useSelector(
    (state: any) => state.tracklistHandler?.value?.tracklistItems
  );
  const watchlist = useSelector((state: any) => state.watchlistHandler?.value);

  const toplist = useSelector((state: any) => state.toplistHandler?.value);

  const allShows = [...toplist, ...watchlist, ...tracklistItems];

  //checking whether you can find a show somewhere
  if (allShows.some((show: { id: number }) => show.id === id)) {
    if (watchlist.some((show: { id: number }) => show.id === id)) {
      setWhere("Watchlist");
    }
    if (toplist.some((show: { id: number }) => show.id === id)) {
      setWhere("Toplist");
    }
    if (tracklistItems.some((show: { id: number }) => show.id === id)) {
      setWhere("Tracklist");
    }
  }

  return [tracklistItems, watchlist, toplist, allShows, where];
};

export default useControlledShows;
