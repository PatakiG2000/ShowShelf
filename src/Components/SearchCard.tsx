import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToWatchlist } from "../features/watchlist/watchlistSlice";
import { addToTracklist } from "../features/tracklist/tracklistSlice";
/* export interface IAppProps {} */
import RateButton from "./buttons/RateButton";

export default function SearchCard(props: any /* props: IAppProps */) {
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
  return (
    <div className="card">
      <div className="card_left">
        <div className="card_datails">
          <h1>{props.title} </h1>
          <div className="card_cat">
            <p className="PG">PG-15</p>
            <p className="year">{props.year} </p>
            <p className="genre"> {props.genre} </p>
            <p className="time">{props.time} </p>
          </div>
          <p className="disc">{props.description}</p>
          <a
            href={`https://www.imdb.com/title/${props.imdbLink}/`}
            target="_blank"
          >
            Read More
          </a>
          <div className="btn-container">
            <button
              className="btn"
              aria-label="Decrement value"
              onClick={() =>
                dispatch(
                  addToWatchlist({
                    title: props.title,
                    year: props.year,
                    genre: props.genre,
                    time: props.time,
                    description: props.description,
                    imdbLink: props.imdbLink,
                    img: props.img,
                    id,
                  })
                )
              }
            >
              Watchlist
            </button>
            <button
              className="btn"
              onClick={() =>
                dispatch(
                  addToTracklist({
                    title: props.title,
                    year: props.year,
                    genre: props.genre,
                    time: props.time,
                    description: props.description,
                    imdbLink: props.imdbLink,
                    img: props.img,
                    id,
                    
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
