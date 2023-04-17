import * as React from "react";
import SearchCard from "../../Components/SearchCard";
import { useContext } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  addToWatchlist,
  deleteFromWatchlist,
} from "../../features/watchlist/watchlistSlice";
import WatchlistCard from "../../Components/WatchlistCard";

export interface IWatchlistProps {}

export default function Watchlist(props: IWatchlistProps) {
  const watchlist = useSelector((state: any) => state.watchlistHandler.value);
  const dispatch = useDispatch();

  const currentWatchlist = watchlist.map((show: any) => {
    return (
      <WatchlistCard
        title={show.title}
        id={show.id}
        img={show.img}
        year={show.year}
        genre={show.genre}
        description={show.description}
        time={show.time}
        imdbLink={show.imdbLink}
      />
    );
  });

  return (
    <div className="watchlist">
      <div className="watchlist-nav">
        <h1 className="watchlist-title">Your current watchlist:</h1>
        <select name="" id="">
          <option value="New">Recently Added</option>
          <option value="Old">Oldest</option>
        </select>
      </div>
      <div>
        {currentWatchlist.length === 0
          ? "add ur first card placeholder"
          : currentWatchlist}
      </div>
    </div>
  );
}
