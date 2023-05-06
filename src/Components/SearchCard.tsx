import * as React from "react";
import { useDispatch } from "react-redux";
import { addToWatchlist } from "../features/watchlist/watchlistSlice";
import { addToTracklist } from "../features/tracklist/tracklistSlice";

export interface ISearchCardProps {
  title: string;
  year: number;
  genre: string;
  time: number;
  description: string;
  imdbLink: string;
  img: string;
  id: number;
}

import RateButton from "./buttons/RateButton";

export default function SearchCard(props: ISearchCardProps) {
  const dispatch = useDispatch();
  const id = props.id;

  const movieData = {
    title: props.title,
    year: props.year,
    genre: props.genre,
    time: props.time,
    description: props.description,
    imdbLink: props.imdbLink,
    img: props.img,
    id,
  };

  const { title, year, genre, time, description, imdbLink, img } = movieData;

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
          <p className="disc">{description}</p>
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
          <img src={props.img} alt="" />
        </div>
      </div>
    </div>
  );
}
