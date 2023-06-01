import * as React from "react";
import UpcomingCard from "../../Components/Cards/homepage/UpcomingCard";
import UpcomingEpisodeCard from "../../Components/Cards/homepage/UpcomingEpisodeCard";
import RecommendedCard from "../../Components/Cards/homepage/RecommendedCard";
import NewsFeed from "../NewsFeed";
import WatchlistRecommendation from "../../Components/Cards/homepage/WatchlistRecommendation";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0, width: 0 }}
      animate={{ opacity: 1, width: "100%" }}
      exit={{ opacity: 0, x: window.innerWidth, transition: { duration: 0.2 } }}
    >
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
    </motion.div>
  );
}
