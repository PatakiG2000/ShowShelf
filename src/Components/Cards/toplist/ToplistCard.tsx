import * as React from "react";
import { useDispatch } from "react-redux";
import { deleteFromToplist } from "../../../features/toplist/toplistSlice";
import { setAlert } from "../../../features/alerts/alertSlice";

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
    overallRating: number;
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

  const { music, story, ending, acting, experience, overallRating } = formData;
  return (
    <div className="card toplist-card">
      <div className="card_left toplist-left">
        <div className="card_details toplist-details">
          <h1>{title}</h1>
          <div className="card_cat"></div>

          <p className="disc toplist-experience">{experience}</p>

          <a
            href={`https://www.imdb.com/title/${imdbLink}/`}
            target="_blank"
            className="readmore"
          >
            Read More
          </a>

          <div className="btn-container toplist-btn-container">
            <button
              className="btn"
              aria-label="Decrement value"
              onClick={() => {
                dispatch(deleteFromToplist(id));
                dispatch(
                  setAlert(`Successfully removed ${title} from your toplist!`)
                );
              }}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
      <div className="toplist-ratings">
        <p className="time">
          <i className="fa-solid fa-ranking-star"></i> Your overall rating:{" "}
          {overallRating}%
        </p>
        <p className="year">
          <i className="fa-solid fa-music"></i> Music: {music} %
        </p>
        <p className="genre">
          <i className="fa-solid fa-book"></i> Story: {story} %
        </p>
        <p className="genre">
          <i className="fa-solid fa-masks-theater"></i> Acting: {acting} %
        </p>
        <p className="genre">
          <i className="fa-solid fa-forward-fast"></i> Ending: {ending} %
        </p>
      </div>

      <div className="card_right">
        <div className="img_container toplist-img-container">
          <img
            src={img}
            alt={`Poster of ${title}`}
            className="toplist-card-img"
          />
        </div>
      </div>
    </div>
  );
}
