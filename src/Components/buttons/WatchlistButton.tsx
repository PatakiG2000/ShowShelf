import * as React from "react";
import { useDispatch } from "react-redux";
import { addToWatchlist } from "../../features/watchlist/watchlistSlice";
import { MovieData } from "../../interfaces/interfaces";

export interface IRateButtonProps {
  movieData: MovieData;
  text: string;
}

export default function WatchlistButton({ movieData, text }: IRateButtonProps) {
  const dispatch = useDispatch();

  return (
    <>
      <button
        onClick={() => dispatch(addToWatchlist(movieData))}
        className="btn"
      >
        {text}
      </button>
    </>
  );
}
