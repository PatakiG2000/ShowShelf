import * as React from "react";
import SeasonAccordion from "./SeasonAccordion";
import { useSelector, useDispatch } from "react-redux";
import { deleteFromTracklist } from "../features/tracklist/tracklistSlice";
import { useState, useEffect } from "react";
import useFormattedEpisodes from "../Hooks/useFormattedEpisodes";
import ProgressBar from "./ProgressBar";

export interface ITracklistCardProps {
  title: string;
  id: number;
}

export default function TracklistCard(props: ITracklistCardProps) {
  const dispatch = useDispatch()
  const tracklistItems = useSelector(
    (state: any) => state.tracklistHandler?.value?.tracklistItems
  );

  const currentShow = tracklistItems.find((show: {title: string} )=> show.title === props.title )
 const seenEpisodes = currentShow.seenEpisodes
 
const [seriesInfos,loading,error, overallEpisodeNumber] = useFormattedEpisodes(props.title)


const progress = seenEpisodes.length / overallEpisodeNumber


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

  //seasonoket kinyerni az azt tartalmazó arrayekkel, propokkal lemegy a seasonbe ahol lerendereli majd az epizódokat

  return (
    <>
      <div className="card">
        <h1>{props.title}</h1>
        <div className="seasons">{renderedAccordions}</div>
        <button onClick={() => dispatch(deleteFromTracklist(props.id))}>
          Remove
        </button>
        <ProgressBar progress={progress * 100}/>
      </div>
    </>
  );
}
