import * as React from "react";
import TracklistCard from "../../Components/Cards/tracklist/TracklistCard";
import { useSelector } from "react-redux";
import TracklistPlaceholderCard from "../../Components/Cards/tracklist/TracklistPlaceholderCard";
import { motion } from "framer-motion";

export interface ITracklistProps {}

export default function Tracklist(props: ITracklistProps) {
  const tracklist = useSelector(
    (state: any) => state.tracklistHandler?.value?.tracklistItems
  );

  const currentTracklist = tracklist.map((show: any) => {
    return (
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
        <TracklistCard
          title={show.title}
          id={show.id}
          year={show.year}
          genre={show.genre}
          time={show.time}
          img={show.img}
          date={show.date}
          key={show.key}
        />
      </motion.div>
    );
  });

  return (
    <motion.div
      className="tracklist"
      initial={{ opacity: 0, width: 0 }}
      animate={{ opacity: 1, width: "100%" }}
      exit={{ opacity: 0, x: window.innerWidth, transition: { duration: 0.2 } }}
    >
      {currentTracklist.length === 0 ? (
        <TracklistPlaceholderCard />
      ) : (
        currentTracklist
      )}
    </motion.div>
  );
}
