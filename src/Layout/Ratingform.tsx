import * as React from "react";

/* export interface IAppProps {
} */

export default function Ratingform /* /* props */() {
  /* : IAppProps */

  return (
    <div className="rating">
      <h1 className="rating-title">How did you enjoy Tomb Raider?</h1>
      <div>
        <form className="form" action="">
          <label htmlFor="story">Story</label>
          <input type="range" name="story" />
          <label htmlFor="story">Story</label>
          <input type="range" name="story" />
          <label htmlFor="story">Story</label>
          <input type="range" name="story" />
          <label htmlFor="story">Story</label>
          <input type="range" name="story" />
          <label htmlFor="story">Story</label>
          <input type="range" name="story" />
          <label htmlFor="">What are your toughts?</label>
          <textarea
            placeholder="Write your experience with..."
            name=""
            id=""
            cols={15}
            rows={5}
          ></textarea>
          <button className="rate-btn">Rate</button>
        </form>
      </div>
    </div>
  );
}
