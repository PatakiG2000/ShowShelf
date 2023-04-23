import * as React from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

export interface IEpisodeAccordionProps {
  description: string;
  episodeNumber: number;
  episodeTitle: string;
  seen: boolean;
}

export default function EpisodeAccordion(props: IEpisodeAccordionProps) {
  const [episodeSeen, setEpisodeSeen] = useState(props.seen);

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
            }}
            checked={episodeSeen}
          />
          <Typography>{props.episodeTitle} </Typography>
        </AccordionSummary>
        <AccordionDetails>{props.description}</AccordionDetails>
      </Accordion>
    </div>
  );
}
