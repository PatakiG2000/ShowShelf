import { useDispatch } from "react-redux";
import { deleteFromToplist } from "../../../features/toplist/toplistSlice";

export interface IAppProps {
  title: string;
  year: number;
  genre: string;
  time: string;
  formData: {
    experience: string;
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
}: IAppProps) {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <div className="card_left">
        <div className="card_datails">
          <h1>{title} </h1>
          <div className="card_cat">
            <p className="year">{year} </p>
            <p className="genre"> {genre} </p>
            <p className="time">Your overall rating: {time}%</p>
          </div>
          <p className="disc">{formData?.experience}</p>
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
      <div className="card_right">
        <div className="img_container">
          <img src={img} alt={`Poster of ${title}`} />
        </div>
      </div>
    </div>
  );
}
