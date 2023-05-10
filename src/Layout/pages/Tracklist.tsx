import * as React from "react";
import TracklistCard from "../../Components/Cards/TracklistCard";
import { useSelector } from "react-redux";

export interface ITracklistProps {}

export default function Tracklist(props: ITracklistProps) {
  const tracklist = useSelector(
    (state: any) => state.tracklistHandler?.value?.tracklistItems
  );

  const currentTracklist = tracklist.map((show: any) => {
    return <TracklistCard title={show.title} id={show.id} />;
  });

  return (
    <div>
      <h1>This is Tracklist:</h1>
      {currentTracklist}
    </div>
  );
}
