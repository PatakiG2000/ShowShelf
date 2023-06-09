import * as React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export interface IWatchlistRecommendationProps {}

export default function WatchlistRecommendation() {
  const watchlist = useSelector((state: any) => state.watchlistHandler.value);

  const randomItem = watchlist[Math.floor(Math.random() * watchlist.length)]
    ? watchlist[Math.floor(Math.random() * watchlist.length)]
    : {
        title: "Add your first item",
      };

  return (
    <div className="upcoming-episode-card">
      <div className="upcoming-img-container">
        <img
          src={randomItem?.img ? randomItem?.img : "/placeholderimage.webp"}
          alt=""
        />
      </div>

      <div className="upcoming-episode-card-content">
        <p className="continue-title">Start this from your watchlist</p>
        <p className="continue-episode">
          {randomItem.title
            ? randomItem.title
            : "Add your first item to watchlist"}
        </p>
        <Link to="/watchlist" className="continue-btn down">
          Go to watchlist
        </Link>
      </div>
    </div>
  );
}
