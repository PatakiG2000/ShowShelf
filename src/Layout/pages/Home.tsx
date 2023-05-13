import * as React from "react";
import UpcomingCard from "../../Components/Cards/UpcomingCard";
import UpcomingEpisodeCard from "../../Components/Cards/UpcomingEpisodeCard";
import RecommendedCard from "../../Components/Cards/RecommendedCard";
import NewsFeed from "../NewsFeed";
import WatchlistRecommendation from "../../Components/Cards/WatchlistRecommendation";

export interface IHomeProps {}

export default function Home(props: IHomeProps) {
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
