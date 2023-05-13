import * as React from "react";
import SeasonAccordion from "../SeasonAccordion";
import { useDispatch } from "react-redux";
import { deleteFromTracklist } from "../../features/tracklist/tracklistSlice";

import useFormattedEpisodes from "../../Hooks/useFormattedEpisodes";
import ProgressBar from "../ProgressBar";
import useTracklistShow from "../../Hooks/useTracklistShow";

export interface ITracklistCardProps {
  title: string;
  id: number;
}

export default function TracklistCard(props: ITracklistCardProps) {
  const dispatch = useDispatch();
  const [seriesInfos, loading, error, overallEpisodeNumber, episodes] =
    useFormattedEpisodes(props.title);
  const [currentShow, seenEpisodes, seenSeasons, nextEpisode] =
    useTracklistShow(props.title, episodes);

  const progress = seenEpisodes.length / overallEpisodeNumber;
  const seasons = Object.keys(seriesInfos);
  const renderedAccordions = seasons.map((season) => {
    //itt lehet baj
    return (
      <SeasonAccordion
        season={season}
        episodes={seriesInfos[season]}
        key={props.id}
        showTitle={props.title}
      ></SeasonAccordion>
    );
  });

  return (
    <>
      <div className="tracklist-card">
        <div className="tracklist-head">
          <h1>{props.title}</h1>
          <div>
            <button>Add to toplist</button>
            <button onClick={() => dispatch(deleteFromTracklist(props.id))}>
              Remove
            </button>
          </div>
        </div>
        <div className="seasons">{renderedAccordions}</div>
        <ProgressBar
          progress={progress * 100}
          epTitle={
            nextEpisode?.name
              ? nextEpisode?.name
              : "You finished, you may add it to your toplist now!"
          }
        />
      </div>
    </>
  );
}
