import * as React from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useDispatch, useSelector } from "react-redux";
import { handleSeenEpisode } from "../features/tracklist/tracklistSlice";
import useFormatText from "../hooks/useFormatText";
import { useState } from "react";

export interface IEpisodeAccordionProps {
  description: string;
  episodeNumber: number;
  episodeTitle: string;
  seen: boolean;
  episodeId: number;
  showTitle: string;
  seasonSeen: boolean;
  season: string;
}

export default function EpisodeAccordion({
  seen,
  episodeId,
  showTitle,
  description,
  episodeTitle,
}: IEpisodeAccordionProps) {
  const dispatch = useDispatch();

  const tracklistItems = useSelector(
    (state: any) => state.tracklistHandler?.value?.tracklistItems
  );

  const currentShow = tracklistItems.find(
    (show: { title: string }) => show.title === showTitle
  );
  const seenEpisodes = currentShow.seenEpisodes;

  const text = useFormatText(description);

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
            onChange={(e) => {
              e.stopPropagation();
              dispatch(
                handleSeenEpisode({ showTitle: showTitle, ep: episodeId })
              );
            }}
            checked={seenEpisodes.includes(episodeId)}
          />
          <Typography>{episodeTitle} </Typography>
        </AccordionSummary>
        <AccordionDetails>{text}</AccordionDetails>
      </Accordion>
    </div>
  );
}
