import * as React from "react";
import UpcomingCard from "../../Components/Cards/UpcomingCard";
import UpcomingEpisodeCard from "../../Components/Cards/UpcomingEpisodeCard";
import RecommendedCard from "../../Components/Cards/RecommendedCard";
import NewsFeedCard from "../../Components/Cards/NewsFeedCard";

export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  return (
    <div className="home">
      <div className="home-leftside">
        <div className="newsfeed-title">
          <h3 className="newsfeed-title">Newsfeed</h3>
        </div>
       <NewsFeedCard/>
       <NewsFeedCard/>
       <NewsFeedCard/>
       
      </div>
      <div className="home-rightside">
        <p>Upcoming:</p>
        <UpcomingCard />
        <p>Your upcoming episodes:</p>
        <div className="continue-watching">
          <UpcomingEpisodeCard/>
          <UpcomingEpisodeCard/>
        </div>
        <p>Recommended for you:</p>
        <RecommendedCard/>
      </div>
    </div>
  );
}
