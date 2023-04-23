import * as React from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export interface IEpisodeAccordionProps {}

export default function EpisodeAccordion(props: IEpisodeAccordionProps) {
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
          <Typography>Episode 1 Accordion </Typography>
        </AccordionSummary>
        <AccordionDetails>ASDASDASDASDADADASD</AccordionDetails>
      </Accordion>
    </div>
  );
}
