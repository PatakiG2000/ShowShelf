import * as React from "react";
import { useDispatch } from "react-redux";
import { deleteFromWatchlist } from "../../../features/watchlist/watchlistSlice";
import { addToTracklist } from "../../../features/tracklist/tracklistSlice";
import useFormatText from "../../../hooks/useFormatText";
import RateButton from "../../buttons/RateButton";
import TrackButton from "../../buttons/TrackButton";
import { v4 as uuidv4 } from "uuid";

export interface IAppProps {
  title: string;
  id: number;
  year: number;
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
    key: uuidv4(),
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
            <p className="year">
              <i className="fa-solid fa-calendar-days"></i> {year}{" "}
            </p>
            <p className="genre">
              <i className="fa-solid fa-genderless"></i> {genre}{" "}
            </p>
            <p className="time">
              <i className="fa-regular fa-clock"></i> {time}
            </p>
          </div>
          {text}
          <a
            href={`https://www.imdb.com/title/${imdbLink}/`}
            target="_blank"
            className="readmore"
          >
            Read More
          </a>
          <div className="btn-container">
            <TrackButton movieData={movieData} text="Start watching" />
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
