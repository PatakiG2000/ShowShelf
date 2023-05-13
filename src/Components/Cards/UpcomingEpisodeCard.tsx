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
      <div className="upcoming-episode-card-content">
        <p className="continue-title">Continue watching: {randomItem.title}</p>

        <p className="continue-episode">
          Your upcoming episode is:{" "}
          {nextEpisode?.name
            ? nextEpisode?.name
            : "You finished, you may add it to your toplist now!"}
        </p>

        <button className="continue-btn">Go to tracklist</button>
      </div>
    </div>
  );
}
