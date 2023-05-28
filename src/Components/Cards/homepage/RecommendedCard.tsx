import * as React from "react";
import { Link } from "react-router-dom";

export interface IRecommendedCardProps {}

export default function RecommendedCard(props: IRecommendedCardProps) {
  return (
    <div className="recommended-foryou">
      <div className="recommendation-available-container">
        <p>Available on: Netflix </p>
      </div>
      <div className="recommendation-title-container">
        <h1 className="recommendation-title">BRIDGERTON</h1>
      </div>
      <div className="recommend-btn-container">
        <button className="recommend-btn">Track the show</button>
        <button className="recommend-btn">Add to watchlist</button>
        <button className="recommend-btn">Rate the show</button>
        <Link
          to={"https://www.netflix.com/browse?jbv=80232398"}
          target="_blank"
          className="recommend-btn"
        >
          Watch
        </Link>
      </div>
    </div>
  );
}
