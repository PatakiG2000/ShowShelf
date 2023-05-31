import * as React from "react";
import { useDispatch } from "react-redux";
import { addToTracklist } from "../../features/tracklist/tracklistSlice";
import { deleteFromWatchlist } from "../../features/watchlist/watchlistSlice";
import { MovieData } from "../../interfaces/interfaces";

export interface IRateButtonProps {
  movieData: MovieData;
  text: string;
}

export default function TrackButton({ movieData, text }: IRateButtonProps) {
  const dispatch = useDispatch();

  return (
    <>
      <button
        onClick={() => {
          dispatch(deleteFromWatchlist(movieData.id));
          dispatch(
            addToTracklist({
              ...movieData,
              seenEpisodes: [],
              seenSeason: [],
            })
          );
        }}
        className="btn"
      >
        {text}
      </button>
    </>
  );
}
