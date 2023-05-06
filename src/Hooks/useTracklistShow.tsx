import React from "react";
import {  useSelector } from "react-redux";

const useTracklistShow = (title: string) => {
  const tracklistItems = useSelector(
    (state: any) => state.tracklistHandler?.value?.tracklistItems
  );

  const currentShow = tracklistItems.find(
    (show: { title: string }) => show.title === title
  );

  const seenEpisodes = currentShow.seenEpisodes;
  const seenSeasons = currentShow.seenSeason;

  return [currentShow, seenEpisodes, seenSeasons];
};

export default useTracklistShow;
