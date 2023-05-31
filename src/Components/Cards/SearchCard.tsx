import * as React from "react";

import useFormatText from "../../hooks/useFormatText";
import { v4 as uuidv4 } from "uuid";
import TrackButton from "../buttons/TrackButton";
import WatchlistButton from "../buttons/WatchlistButton";

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
    key: uuidv4(),
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
            <WatchlistButton movieData={movieData} text="Add to watchlist" />
            <TrackButton movieData={movieData} text="Track show" />
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
