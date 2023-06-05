import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
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
  const tracklistLength = useSelector(
    (state: any) => state.tracklistHandler?.value?.tracklistItems.length
  );

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
          if (tracklistLength !== 5) {
            dispatch(
              setAlert(
                `Successfully added ${movieData.title} to your tracklist!`
              )
            );
          }
        }}
        className="btn"
      >
        {text}
      </button>
    </>
  );
}
