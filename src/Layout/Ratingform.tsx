import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToToplist } from "../features/toplist/toplistSlice";

export interface IAppProps {
  movieData: {
    title: string;
  };
}

export default function Ratingform(props: IAppProps) {
  const movieData = props.movieData;
  const dispatch = useDispatch();

  function formSubmit(e: SubmitEvent): void {
    e.preventDefault();
    const target = e.target;
    const data = new FormData(target);
    const formData: any = {};

    for (const [name, value] of data.entries()) {
      formData[name] = value;
    }
    console.log(formData);
    dispatch(
      addToToplist({
        title: movieData.title,
        formData,
      })
    );
  }
  /* : IAppProps */

  return (
    <div className="rating">
      <h1 className="rating-title">How did you enjoy {movieData.title}?</h1>
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
          <button className="rate-btn">Rate</button>
        </form>
      </div>
    </div>
  );
}
