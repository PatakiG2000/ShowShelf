import * as React from "react";
import { useDispatch } from "react-redux";
import { addToWatchlist } from "../../features/watchlist/watchlistSlice";
import { addToTracklist } from "../../features/tracklist/tracklistSlice";
import useFormatText from "../../hooks/useFormatText";

export interface ISearchCardProps {
  title: string;
  year: string;
  genre: string;
  time: string;
  description: string;
  imdbLink: string;
  img: string;
  id: number;
}

import RateButton from "../buttons/RateButton";

export default function SearchCard({
  title,
  year,
  genre,
  time,
  description,
  imdbLink,
  img,
  id,
}: ISearchCardProps) {
  const dispatch = useDispatch();

  const date = new Date();
  const timestamp = date.getTime();
  const movieData = {
    title,
    year,
    genre,
    description,
    imdbLink,
    img,
    id,
    time,
    date: timestamp,
  };

  const text = useFormatText(description);

  return (
    <div className="card">
      <div className="card_left">
        <div className="card_datails">
          <h1>{title} </h1>
          <div className="card_cat">
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
              aria-label="Decrement value"
              onClick={() => dispatch(addToWatchlist(movieData))}
            >
              Watchlist
            </button>
            <button
              className="btn"
              onClick={() =>
                dispatch(
                  addToTracklist({
                    ...movieData,
                    seenEpisodes: [],
                    seenSeason: [],
                  })
                )
              }
            >
              Track show
            </button>
            <RateButton movieData={movieData} />
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
