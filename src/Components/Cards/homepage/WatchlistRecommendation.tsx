import * as React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export interface IWatchlistRecommendationProps {}

export default function WatchlistRecommendation(
  props: IWatchlistRecommendationProps
) {
  const watchlist = useSelector((state: any) => state.watchlistHandler.value);

  const randomItem = watchlist[Math.floor(Math.random() * watchlist.length)]
    ? watchlist[Math.floor(Math.random() * watchlist.length)]
    : {
        title: "asd",
      };

  return (
    <div className="upcoming-episode-card">
      <img
        src={
          randomItem?.img
            ? randomItem?.img
            : "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
        }
        alt=""
      />
      <div className="upcoming-episode-card-content">
        <p className="continue-title">Start this from your watchlist</p>
        <p className="continue-episode">
          {randomItem.title
            ? randomItem.title
            : "Add your first item to watchlist"}
        </p>
        <Link to="/watchlist" className="continue-btn">
          Go to watchlist
        </Link>
      </div>
    </div>
  );
}