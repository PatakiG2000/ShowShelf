import * as React from "react";
import { useDispatch } from "react-redux";
import { addToTracklist } from "../../features/tracklist/tracklistSlice";
import { deleteFromWatchlist } from "../../features/watchlist/watchlistSlice";
import { MovieData } from "../../interfaces/interfaces";
import { setAlert } from "../../features/alerts/alertSlice";

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
            setAlert(`Successfully added ${movieData.title} to your tracklist!`)
          );
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
