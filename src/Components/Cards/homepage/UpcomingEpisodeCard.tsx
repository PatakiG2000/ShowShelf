import * as React from "react";
import useControlledShows from "../../../hooks/useControlledShows";
import useFormattedEpisodes from "../../../hooks/useFormattedEpisodes";
import useTracklistShow from "../../../hooks/useTracklistShow";
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
          src={
            randomItem.img
              ? randomItem.img
              : "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80"
          }
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
