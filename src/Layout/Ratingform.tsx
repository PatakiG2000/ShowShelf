import * as React from "react";
import { useDispatch } from "react-redux";
import { addToToplist } from "../features/toplist/toplistSlice";
import { handleModal } from "../features/toplist/modalHandler";
import { deleteFromWatchlist } from "../features/watchlist/watchlistSlice";
import { deleteFromTracklist } from "../features/tracklist/tracklistSlice";
import { MovieData } from "../interfaces/interfaces";
import { useState } from "react";
import Slider from "@mui/material/Slider";
import { setAlert } from "../features/alerts/alertSlice";

export interface IRatingFormProps {
  movieData: MovieData;
}

export default function Ratingform({ movieData }: IRatingFormProps) {
  const dispatch = useDispatch();

  const [inputValues, setInputValues] = useState({
    story: 50,
    music: 50,
    acting: 50,
    ending: 50,
  });

  const handleInputChange = (event: any) => {
    const { name, value } = event.target as HTMLInputElement;
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [name]: Number(value),
    }));
  };

  function handleClose() {
    dispatch(handleModal({ open: false, movieData: {} }));
  }
  const date = new Date();
  const timestamp = date.getTime();

  const { title, year, genre, time, img, id, key, imdbLink } = movieData;

  function formSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    handleClose();
    const { music, story, ending, acting } = inputValues;
    const formData = {
      music,
      story,
      ending,
      acting,
      experience: "",
      overallRating: 0,
    };
    formData.overallRating = Math.floor((music + story + ending + acting) / 4);
    const target = e.target as typeof e.target & {
      experience: { value: string };
    };
    formData.experience = target.experience.value;

    dispatch(setAlert(`Successfully added ${title} to your toplist!`));

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
          <label htmlFor="story">
            Story <span>{inputValues.story}%</span>
          </label>
          <Slider
            name="story"
            aria-label="story"
            defaultValue={50}
            color="secondary"
            value={inputValues.story}
            onChange={handleInputChange}
          />

          <label htmlFor="music">
            Music <span>{inputValues.music}%</span>
          </label>

          <Slider
            name="music"
            aria-label="music"
            defaultValue={50}
            color="secondary"
            value={inputValues.music}
            onChange={handleInputChange}
          />
          <label htmlFor="acting">
            Acting <span>{inputValues.acting}%</span>
          </label>
          <Slider
            name="acting"
            aria-label="acting"
            defaultValue={50}
            color="secondary"
            value={inputValues.acting}
            onChange={handleInputChange}
          />
          <label htmlFor="ending">
            Ending <span>{inputValues.ending}%</span>
          </label>
          <Slider
            name="ending"
            aria-label="ending"
            defaultValue={50}
            color="secondary"
            value={inputValues.ending}
            onChange={handleInputChange}
          />

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
