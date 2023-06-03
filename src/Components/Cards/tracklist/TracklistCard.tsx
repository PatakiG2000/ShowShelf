import * as React from "react";
import SeasonAccordion from "../../SeasonAccordion";
import { useDispatch } from "react-redux";
import { deleteFromTracklist } from "../../../features/tracklist/tracklistSlice";
import RateButton from "../../buttons/RateButton";
import useFormattedEpisodes from "../../../hooks/useFormattedEpisodes";
import ProgressBar from "../../ProgressBar";
import useTracklistShow from "../../../hooks/useTracklistShow";
import { v4 } from "uuid";
import { MovieData } from "../../../interfaces/interfaces";

export default function TracklistCard({
  title,
  id,
  year,
  genre,
  time,
  img,
  date,
}: MovieData) {
  const movieData = {
    title,
    id,
    year,
    genre,
    time,
    img,
    date,
    key: v4(),
  };

  const dispatch = useDispatch();

  const [seriesInfos, loading, error, overallEpisodeNumber, episodes] =
    useFormattedEpisodes(title);
  const [currentShow, seenEpisodes, seenSeasons, nextEpisode] =
    useTracklistShow(title, episodes);

  const progress = seenEpisodes.length / overallEpisodeNumber;
  const seasons = Object.keys(seriesInfos);
  const renderedAccordions = seasons.map((season) => {
    const key = `${currentShow.id}${season}`;

    return (
      <SeasonAccordion
        season={season}
        episodes={seriesInfos[season]}
        showTitle={title}
        key={key}
      ></SeasonAccordion>
    );
  });

  return (
    <>
      <div className="tracklist-card">
        <div className="tracklist-head">
          <h1>{title}</h1>
          <div className="tracklist-buttons">
            <RateButton movieData={movieData} />
            <button
              onClick={() => dispatch(deleteFromTracklist(id))}
              className="btn"
            >
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
