import * as React from "react";
import { useDispatch } from "react-redux";
import { deleteFromWatchlist } from "../../../features/watchlist/watchlistSlice";
import { addToTracklist } from "../../../features/tracklist/tracklistSlice";
import useFormatText from "../../../Hooks/useFormatText";
import RateButton from "../../buttons/RateButton";

/* export interface IAppProps {} */

export default function WatchlistCard(props: any /* props: IAppProps */) {
  const dispatch = useDispatch();
  const text = useFormatText(props.description);
  const movieData = {
    title: props.title,
    id: props.id,
    year: props.year,
    genre: props.genre,
    time: props.time,
    img: props.img,
    date: props.date,
  };

  function handleClick(id: number): void {
    dispatch(deleteFromWatchlist(id));
  }

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
          <p className="disc">{text}</p>
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
              onClick={() => handleClick(props.id)}
            >
              Remove
            </button>
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
                dispatch(deleteFromWatchlist(props.id));
              }}
            >
              Start Watching
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
