import * as React from "react";
import { useDispatch } from "react-redux";
import { deleteFromToplist } from "../../../features/toplist/toplistSlice";

export interface IToplistProps {
  title: string;
  description: string;
  year: number;
  genre: string;
  time: string;
  formData: {
    experience: string;
    story: string;
    acting: string;
    music: string;
    ending: string;
  };
  imdbLink: string;
  id: number;
  img: string;
}

export default function ToplistCard({
  title,
  year,
  genre,
  time,
  formData,
  imdbLink,
  id,
  img,
}: IToplistProps) {
  const dispatch = useDispatch();
  const { music, story, ending, acting, experience } = formData;
  const overallScore = Math.floor(
    (parseInt(music) + parseInt(story) + parseInt(ending) + parseInt(acting)) /
      5
  );
  return (
    <div className="card">
      <div className="card_left toplist-left">
        <div className="card_datails">
          <h1>{title} </h1>
          <div className="card_cat"></div>

          <p className="disc toplist-experience">{experience}</p>

          <a href={`https://www.imdb.com/title/${imdbLink}/`} target="_blank">
            Read More
          </a>

          <div className="btn-container">
            <button
              className="btn"
              aria-label="Decrement value"
              onClick={() => dispatch(deleteFromToplist(id))}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
      <div className="toplist-ratings">
        <p className="time">Your overall rating: {overallScore}%</p>
        <p className="year">Music: {music} %</p>
        <p className="genre"> Story: {story} %</p>
        <p className="genre">Acting: {acting} %</p>
        <p className="genre">Ending: {ending} %</p>
      </div>

      <div className="card_right">
        <div className="img_container">
          <img src={img} alt={`Poster of ${title}`} />
        </div>
      </div>
    </div>
  );
}
