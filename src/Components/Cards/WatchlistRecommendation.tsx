import * as React from "react";
import { useSelector } from "react-redux";

export interface IWatchlistRecommendationProps {}

export default function WatchlistRecommendation(
  props: IWatchlistRecommendationProps
) {
  const watchlist = useSelector((state: any) => state.watchlistHandler.value);

  const randomItem = watchlist[Math.floor(Math.random() * watchlist.length)];

  return (
    <div className="upcoming-episode-card">
      <img src={randomItem?.img ? randomItem?.img : "none"} alt="" />
      <div className="upcoming-episode-card-content">
        <p className="continue-title">Start this from your watchlist</p>
        <p className="continue-episode">
          {randomItem.title
            ? randomItem.title
            : "Add your first item to watchlist"}
        </p>

        <button className="continue-btn">Go to watchlist</button>
      </div>
    </div>
  );
}
