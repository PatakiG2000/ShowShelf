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

export interface ISeasonAccordionProps {
  season: number | string;
  episodes: any[];
  showTitle: string;
}

export default function SeasonAccordion(props: ISeasonAccordionProps) {
  const episodes = props.episodes;
  const dispatch = useDispatch();
  const showTitle = props.showTitle;
  const season = `${showTitle}${props.season}`;

  const tracklistItems = useSelector(
    (state: any) => state.tracklistHandler?.value?.tracklistItems
  );

  const currentShow = tracklistItems.find(
    (show: { title: string }) => show.title === showTitle
  );

  const seenSeasons = currentShow.seenSeason;
  const isSeasonSeen = seenSeasons.includes(season);

  const allEpisodesSeen = episodes.every((episode: { id: number }) =>
    currentShow.seenEpisodes.includes(episode.id)
  );

  useEffect(() => {
    if (allEpisodesSeen && !isSeasonSeen) {
      dispatch(
        handleSeenSeason({
          showTitle: showTitle,
          season: season,
        })
      );
      console.log("yo");
    } else if (!allEpisodesSeen && isSeasonSeen) {
      dispatch(
        handleSeenSeason({
          showTitle: showTitle,
          season: season,
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
        key={episode.id}
        showTitle={props.showTitle}
        seasonSeen={isSeasonSeen}
        season={season}
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
            onClick={(e) => {
              e.stopPropagation();

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
                  season: season,
                })
              );
            }}
          />
          <Typography>{props.season} </Typography>
        </AccordionSummary>
        <AccordionDetails>{renderedEpisodeAccordions}</AccordionDetails>
      </Accordion>
    </div>
  );
}
