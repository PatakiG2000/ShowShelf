import * as React from "react";
import { useDispatch } from "react-redux";
import { addToToplist } from "../features/toplist/toplistSlice";
import { handleModal } from "../features/toplist/modalHandler";
import { deleteFromWatchlist } from "../features/watchlist/watchlistSlice";
import { deleteFromTracklist } from "../features/tracklist/tracklistSlice";
import { MovieData } from "../interfaces/interfaces";

export interface IRatingFormProps {
  movieData: MovieData;
}

export default function Ratingform({ movieData }: IRatingFormProps) {
  const dispatch = useDispatch();

  function handleClose() {
    dispatch(handleModal({ open: false, movieData: {} }));
  }
  const date = new Date();
  const timestamp = date.getTime();
  console.log("timestamp", timestamp);

  const { title, year, genre, time, img, id, key, imdbLink } = movieData;

  function formSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const data = new FormData(target);
    const formData: any = {};
    handleClose();
    for (const [name, value] of data.entries()) {
      formData[name] = value;
    }
    const { music, story, ending, acting } = formData;
    formData.overallRating = Math.floor(
      (parseInt(music) +
        parseInt(story) +
        parseInt(ending) +
        parseInt(acting)) /
        4
    );

    dispatch(
      addToToplist({
        title,
        year,
        genre,
        time,
        img,
        formData,
        id,
        key,
        imdbLink,
        timestamp,
      })
    );
  }

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
            placeholder={`Write your experience with ${movieData.title}...`}
            name="experience"
            id="experience"
            cols={15}
            rows={5}
            maxLength={300}
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
