import * as React from "react";
import EpisodeAccordion from "./EpisodeAccordion";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export interface ISeasonAccordionProps {
  season: number | string;
  episodes: [];
}

export default function SeasonAccordion(props: ISeasonAccordionProps) {
  const episodes = props.episodes;

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
            }}
          />
          <Typography>Season {props.season} </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <EpisodeAccordion></EpisodeAccordion>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
