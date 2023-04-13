import * as React from "react";

/* export interface IAppProps {} */

export default function SearchCard(props: any /* props: IAppProps */) {
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
            <button className="btn">Watchlist</button>
            <button className="btn">Track show</button>
            <button className="btn">Rate</button>
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
