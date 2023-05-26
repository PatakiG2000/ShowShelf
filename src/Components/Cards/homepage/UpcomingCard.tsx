import * as React from "react";

export interface IUpcomingCardProps {}

export default function UpcomingCard(props: IUpcomingCardProps) {
  return (
    <div className="main-recommendation">
      <div className="recommendation-available-container">
        <h1 className="upcoming-title">Upcoming show on Netflix</h1>
        <p>Arrives in June</p>
        <button className="upcoming-btn">Read more</button>
      </div>
      <div className="recommendation-title-container">
        <h1 className="recommendation-title">Black mirror season 6</h1>
      </div>
    </div>
  );
}
