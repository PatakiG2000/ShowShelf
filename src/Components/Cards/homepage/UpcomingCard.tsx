import * as React from "react";

export interface IUpcomingCardProps {}

export default function UpcomingCard(props: IUpcomingCardProps) {
  return (
    <div className="main-recommendation">
      <div className="recommendation-available-container">
       
        <h1>Upcoming show</h1>
        <p>Available on: </p>
        <button className="upcoming-btn">Read more</button>
      </div>
      <div className="recommendation-title-container">
        <h1 className="recommendation-title">OPPENHEIMER</h1>
      </div>
    </div>
  );
}
