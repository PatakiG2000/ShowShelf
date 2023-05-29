import * as React from "react";
import { Link } from "react-router-dom";

export interface IRecommendedCardProps {}

export default function RecommendedCard() {
  return (
    <div className="recommended-foryou">
      <div className="recommendation-available-container"></div>
      <div className="recommendation-title-container">
        <h1 className="recommendation-title">BRIDGERTON</h1>
      </div>
      <div className="recommend-btn-container">
        <Link
          to={"https://www.netflix.com/browse?jbv=80232398"}
          target="_blank"
          className="recommend-btn"
        >
          Watch it on Netflix
        </Link>
      </div>
    </div>
  );
}
