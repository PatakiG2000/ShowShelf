import * as React from "react";
import TracklistCard from "../../Components/Cards/tracklist/TracklistCard";
import { useSelector } from "react-redux";
import TracklistPlaceholderCard from "../../Components/Cards/tracklist/TracklistPlaceholderCard";

export interface ITracklistProps {}

export default function Tracklist(props: ITracklistProps) {
  const tracklist = useSelector(
    (state: any) => state.tracklistHandler?.value?.tracklistItems
  );

  const currentTracklist = tracklist.map((show: any) => {
    return (
      <TracklistCard
        title={show.title}
        id={show.id}
        year={show.year}
        genre={show.genre}
        time={show.time}
        img={show.img}
        date={show.date}
      />
    );
  });

  return (
    <div>
      <h1>This is Tracklist:</h1>
      {currentTracklist.length === 0 ? (
        <TracklistPlaceholderCard />
      ) : (
        currentTracklist
      )}
    </div>
  );
}
