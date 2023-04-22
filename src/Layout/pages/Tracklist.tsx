import * as React from "react";
import TracklistCard from "../../Components/TracklistCard";

export interface ITracklistProps {}

export default function Tracklist(props: ITracklistProps) {
  return (
    <div>
      <h1>This is Tracklist:</h1>
      <TracklistCard></TracklistCard>
    </div>
  );
}
