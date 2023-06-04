import * as React from "react";
import EpisodeAccordion from "./EpisodeAccordion";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useSelector, useDispatch } from "react-redux";
import {
  addToSeenEpisode,
  handleSeenSeason,
  removeFromSeenEpisode,
} from "../features/tracklist/tracklistSlice";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export interface ISeasonAccordionProps {
  season: string;
  episodes: any[];
  showTitle: string;
}

export default function SeasonAccordion({
  episodes,
  showTitle,
  season,
}: ISeasonAccordionProps) {
  const dispatch = useDispatch();
  const seasonName = `${showTitle} ${season}`;

  const tracklistItems = useSelector(
    (state: any) => state.tracklistHandler?.value?.tracklistItems
  );

  const currentShow = tracklistItems.find(
    (show: { title: string }) => show.title === showTitle
  );

  const seenSeasons = currentShow.seenSeason;
  const isSeasonSeen = seenSeasons.includes(seasonName);

  const allEpisodesSeen = episodes.every((episode: { id: number }) =>
    currentShow.seenEpisodes.includes(episode.id)
  );

  useEffect(() => {
    if (allEpisodesSeen && !isSeasonSeen) {
      dispatch(
        handleSeenSeason({
          showTitle: showTitle,
          season: seasonName,
        })
      );
    } else if (!allEpisodesSeen && isSeasonSeen) {
      dispatch(
        handleSeenSeason({
          showTitle: showTitle,
          season: seasonName,
        })
      );
    }
  }, [currentShow.seenEpisodes]);

  const renderedEpisodeAccordions = episodes.map((episode: any, i) => {
    return (
      <EpisodeAccordion
        description={episode.summary}
        episodeNumber={i}
        episodeTitle={episode.name}
        seen={episode.seen}
        episodeId={episode.id}
        key={uuidv4()}
        showTitle={showTitle}
        seasonSeen={isSeasonSeen}
        season={seasonName}
      />
    );
  });

  return (
    <div className="accordion">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <input
            type="checkbox"
            checked={isSeasonSeen || allEpisodesSeen}
            onChange={(e) => {
              episodes.forEach((episode: { id: number }) => {
                if (!isSeasonSeen) {
                  dispatch(
                    addToSeenEpisode({ showTitle: showTitle, ep: episode.id })
                  );
                } else {
                  dispatch(
                    removeFromSeenEpisode({
                      showTitle: showTitle,
                      ep: episode.id,
                    })
                  );
                }
              });
              dispatch(
                handleSeenSeason({
                  showTitle: showTitle,
                  season: seasonName,
                })
              );
            }}
            onClick={(e) => {
              e.stopPropagation();
            }}
          />
          <Typography>Season {season.replace(/[^0-9]/g, "")} </Typography>
        </AccordionSummary>
        <AccordionDetails>{renderedEpisodeAccordions}</AccordionDetails>
      </Accordion>
    </div>
  );
}
