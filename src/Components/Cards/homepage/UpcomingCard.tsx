import * as React from "react";
import { Link } from "react-router-dom";

export interface IUpcomingCardProps {}

export default function UpcomingCard(props: IUpcomingCardProps) {
  return (
    <div className="main-recommendation">
      <div className="recommendation-available-container">
        <h1 className="upcoming-title">Upcoming show on Netflix</h1>

        <Link
          to={
            "https://www.netflix.com/tudum/articles/black-mirror-season-6-release-date"
          }
          target="_blank"
          className="upcoming-btn"
        >
          Read more
        </Link>
      </div>

      <div className="recommendation-title-container">
        <h1 className="recommendation-title">Black mirror: season 6</h1>
      </div>
      <p className="arrives">Arrives in June</p>
    </div>
  );
}
