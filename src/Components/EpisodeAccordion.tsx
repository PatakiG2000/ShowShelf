import * as React from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleSeenEpisode } from "../features/tracklist/tracklistSlice";

export interface IEpisodeAccordionProps {
  description: string;
  episodeNumber: number;
  episodeTitle: string;
  seen: boolean;
  episodeId: number;
}

export default function EpisodeAccordion(props: IEpisodeAccordionProps) {
  const [episodeSeen, setEpisodeSeen] = useState(props.seen);
  const dispatch = useDispatch();
  const episodeId = props.episodeId;

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
              setEpisodeSeen(!episodeSeen);
            
              dispatch(handleSeenEpisode(episodeId));
            }}
            defaultChecked={episodeSeen}
          />
          <Typography>{props.episodeTitle} </Typography>
        </AccordionSummary>
        <AccordionDetails>{props.description}</AccordionDetails>
      </Accordion>
    </div>
  );
}
