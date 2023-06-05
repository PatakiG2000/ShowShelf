import * as React from "react";
import useControlledShows from "../../../Hooks/useControlledShows";
import useFormattedEpisodes from "../../../Hooks/useFormattedEpisodes";
import useTracklistShow from "../../../Hooks/useTracklistShow";
import { Link } from "react-router-dom";

export interface IUpcomingEpisodeCardProps {}

export default function UpcomingEpisodeCard() {
  const [tracklistItems, watchlist, toplist, allShows, where] =
    useControlledShows(0);

  const randomItem = tracklistItems[
    Math.floor(Math.random() * tracklistItems.length)
  ]
    ? tracklistItems[Math.floor(Math.random() * tracklistItems.length)]
    : {
        title: "There is no item on your tracklist! Add one now",
      };

  //hokokba legyen az üres handling

  const [seriesInfos, loading, error, overallEpisodeNumber, episodes] =
    useFormattedEpisodes(randomItem.title);

  const [currentShow, seenEpisodes, seenSeasons, nextEpisode] =
    useTracklistShow(randomItem.title, episodes);

  return (
    <div className="upcoming-episode-card">
      <div className="upcoming-img-container">
        <img
          src={randomItem.img ? randomItem.img : "./placeholderimage.webp"}
          alt=""
        />
      </div>

      <div className="upcoming-episode-card-content">
        <p className="continue-title">
          {randomItem.title && "Continue watching:"}
          <br />
          {randomItem.title
            ? randomItem.title
            : "There is no item on your tracklist! Add one now"}
        </p>

        <p className="continue-episode">
          {nextEpisode?.name && "Your upcoming episode is: "}
          <br></br>
          {randomItem?.title
            ? nextEpisode?.name
            : "You finished, you may add it to your toplist now!"}
        </p>

        <Link to="/tracklist" className="continue-btn">
          Go to tracklist
        </Link>
      </div>
    </div>
  );
}
