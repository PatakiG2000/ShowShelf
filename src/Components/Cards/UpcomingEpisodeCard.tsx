import * as React from "react";
import useControlledShows from "../../Hooks/useControlledShows";
import useFormattedEpisodes from "../../Hooks/useFormattedEpisodes";
import useTracklistShow from "../../Hooks/useTracklistShow";

export interface IUpcomingEpisodeCardProps {}

export default function UpcomingEpisodeCard(props: IUpcomingEpisodeCardProps) {
  const [tracklistItems, watchlist, toplist, allShows, where] =
    useControlledShows(0);

  const randomItem =
    tracklistItems[Math.floor(Math.random() * tracklistItems.length)];

  //hokokba legyen az üres handling

  const [seriesInfos, loading, error, overallEpisodeNumber, episodes] =
    useFormattedEpisodes(randomItem.title);

  const [currentShow, seenEpisodes, seenSeasons, nextEpisode] =
    useTracklistShow(randomItem.title, episodes);

  return (
    <div className="upcoming-episode-card">
      <img src={randomItem.img} alt="" />
      <p>Continue watching</p>
      <p>{randomItem.title}</p>
      <p>
        Your upcoming episode is:{" "}
        {nextEpisode?.name
          ? nextEpisode?.name
          : "You finished, you may add it to your toplist now!"}
      </p>
      <p>Watch it on: </p>
      <button className="continue-btn">Go to tracklist</button>
    </div>
  );
}
