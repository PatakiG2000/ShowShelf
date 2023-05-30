import * as React from "react";
import UpcomingCard from "../../Components/Cards/homepage/UpcomingCard";
import UpcomingEpisodeCard from "../../Components/Cards/homepage/UpcomingEpisodeCard";
import RecommendedCard from "../../Components/Cards/homepage/RecommendedCard";
import NewsFeed from "../NewsFeed";
import WatchlistRecommendation from "../../Components/Cards/homepage/WatchlistRecommendation";

export default function Home() {
  return (
    <div className="home">
      <div className="home-leftside">
        <NewsFeed />
      </div>
      <div className="home-rightside">
        <UpcomingCard />

        <div className="continue-watching">
          <UpcomingEpisodeCard />
          <WatchlistRecommendation />
        </div>
        <RecommendedCard />
      </div>
    </div>
  );
}
