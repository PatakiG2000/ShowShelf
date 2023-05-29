import * as React from "react";
import { useDispatch } from "react-redux";
import { deleteFromWatchlist } from "../../../features/watchlist/watchlistSlice";
import { addToTracklist } from "../../../features/tracklist/tracklistSlice";
import useFormatText from "../../../hooks/useFormatText";
import RateButton from "../../buttons/RateButton";

export interface IAppProps {
  title: string;
  id: number;
  year: string;
  genre: string;
  time: number;
  img: string;
  date: number;
  description: string;
  imdbLink: string;
}

export default function WatchlistCard({
  title,
  id,
  year,
  genre,
  time,
  img,
  date,
  description,
  imdbLink,
}: IAppProps) {
  const dispatch = useDispatch();
  const text = useFormatText(description);
  const movieData = {
    title,
    id,
    year,
    genre,
    time,
    img,
    date,
  };

  function handleClick(id: number): void {
    dispatch(deleteFromWatchlist(id));
  }

  return (
    <div className="card">
      <div className="card_left">
        <div className="card_datails">
          <h1>{title} </h1>
          <div className="card_cat">
            <p className="PG">PG-15</p>
            <p className="year">{year} </p>
            <p className="genre"> {genre} </p>
            <p className="time">{time} </p>
          </div>
          <p className="disc">{text}</p>
          <a href={`https://www.imdb.com/title/${imdbLink}/`} target="_blank">
            Read More
          </a>
          <div className="btn-container">
            <button
              className="btn"
              onClick={() => {
                dispatch(
                  addToTracklist({
                    ...movieData,
                    seenEpisodes: [],
                    seenSeason: [],
                  })
                );
                dispatch(deleteFromWatchlist(id));
              }}
            >
              Start Watching
            </button>
            <RateButton movieData={movieData} />
            <button className="btn" onClick={() => handleClick(id)}>
              Remove
            </button>
          </div>
        </div>
      </div>
      <div className="card_right">
        <div className="img_container">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
}
