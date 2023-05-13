import React from "react";
import { useSelector } from "react-redux";

const useTracklistShow = (title: string, episodes: []) => {
  const tracklistItems = useSelector(
    (state: any) => state.tracklistHandler?.value?.tracklistItems
  );

  const currentShow = tracklistItems.find(
    (show: { title: string }) => show.title === title
  );

  const seenEpisodes = currentShow.seenEpisodes;
  const seenSeasons = currentShow.seenSeason;

  const thisId = seenEpisodes[seenEpisodes.length - 1];
  const thisEpPosition = episodes.findIndex(
    (ep: { id: number }) => ep.id === thisId
  );
  const nextEpisode = episodes[thisEpPosition + 1];

  return [currentShow, seenEpisodes, seenSeasons, nextEpisode];
};

export default useTracklistShow;
