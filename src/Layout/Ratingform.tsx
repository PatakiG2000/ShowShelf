import * as React from "react";
import {  useDispatch } from "react-redux";
import { addToToplist } from "../features/toplist/toplistSlice";
import { handleModal } from "../features/toplist/modalHandler";
import { deleteFromWatchlist } from "../features/watchlist/watchlistSlice";
import { deleteFromTracklist } from "../features/tracklist/tracklistSlice";

export interface IRatingFormProps {
  movieData: {
    title: string;
    id: number;
    year: number;
    genre: string;
    time: number;
    img: string;
  };
}

export default function Ratingform(props: IRatingFormProps) {
  const dispatch = useDispatch();

  const movieData = props.movieData;
  function handleClose() {
    dispatch(handleModal({ open: false, movieData: {} }));
  }

  function formSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const data = new FormData(target);
    const formData: any = {};
    handleClose();
    for (const [name, value] of data.entries()) {
      formData[name] = value;
    }

    dispatch(
      addToToplist({
        title: movieData.title,
        year: movieData.year,
        genre: movieData.genre,
        time: movieData.time,
        img: movieData.img,
        formData,
        id: movieData.id,
      })
    );
  }
  /* : IAppProps */

  return (
    <div className="rating">
      <h1 className="rating-title">How did you enjoy "{movieData.title}" ?</h1>
      <div>
        <form id="form" className="form" action="" onSubmit={formSubmit}>
          <label htmlFor="story">Story</label>
          <input type="range" name="story" />
          <label htmlFor="music">Music</label>
          <input type="range" name="music" />
          <label htmlFor="acting">Acting</label>
          <input type="range" name="acting" />
          <label htmlFor="ending">Ending</label>
          <input type="range" name="ending" />

          <label htmlFor="">What are your toughts?</label>
          <textarea
            placeholder={`Write your experience with ${movieData.title}`}
            name="experience"
            id="experience"
            cols={15}
            rows={5}
          ></textarea>
          <button
            className="rate-btn"
            onClick={() => {
              dispatch(deleteFromWatchlist(movieData.id));
              dispatch(deleteFromTracklist(movieData.id));
            }}
          >
            Rate
          </button>
        </form>
      </div>
    </div>
  );
}
