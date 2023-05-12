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
  const [currentShow, seenEpisodes] = useTracklistShow(props.title);
  const [seriesInfos, loading, error, overallEpisodeNumber, episodes] =
    useFormattedEpisodes(props.title);

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

  //POZICIÓJÁT MEGNÉZNI NEM AZ ID-HOZ ADNI
  //EZT ÁTIRNI

  const thisId = seenEpisodes[seenEpisodes.length - 1];
  const thisEpPosition = episodes.findIndex(
    (ep: { id: number }) => ep.id === thisId
  );
  const nextEpisode = episodes[thisEpPosition + 1];

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
