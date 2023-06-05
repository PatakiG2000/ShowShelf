import * as React from "react";
import { useDispatch } from "react-redux";
import { addToWatchlist } from "../../features/watchlist/watchlistSlice";
import { MovieData } from "../../interfaces/interfaces";
import { setAlert } from "../../features/alerts/alertSlice";

export interface IRateButtonProps {
  movieData: MovieData;
  text: string;
}

export default function WatchlistButton({ movieData, text }: IRateButtonProps) {
  const dispatch = useDispatch();

  return (
    <>
      <button
        onClick={() => {
          dispatch(addToWatchlist(movieData));
          dispatch(
            setAlert(`Successfully added ${movieData.title} to your watchlist!`)
          );
        }}
        className="btn"
      >
        {text}
      </button>
    </>
  );
}
