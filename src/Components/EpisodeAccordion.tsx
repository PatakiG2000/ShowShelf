import * as React from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handleSeenEpisode,
  handleSeenSeason,
} from "../features/tracklist/tracklistSlice";

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

export default function EpisodeAccordion(props: IEpisodeAccordionProps) {
  const [episodeSeen, setEpisodeSeen] = useState(props.seen);
  const dispatch = useDispatch();
  const episodeId = props.episodeId;
  const showTitle = props.showTitle;
  const checkedInput = episodeSeen;
  const season = props.season;

  const tracklistItems = useSelector(
    (state: any) => state.tracklistHandler?.value?.tracklistItems
  );

  const currentShow = tracklistItems.find(
    (show: { title: string }) => show.title === showTitle
  );
  const seenEpisodes = currentShow.seenEpisodes;

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
            onClick={(e) => {
              e.stopPropagation();
              dispatch(
                handleSeenEpisode({ showTitle: showTitle, ep: episodeId })
              );
            }}
            checked={seenEpisodes.includes(episodeId)}
          />
          <Typography>{props.episodeTitle} </Typography>
        </AccordionSummary>
        <AccordionDetails>{props.description}</AccordionDetails>
      </Accordion>
    </div>
  );
}
