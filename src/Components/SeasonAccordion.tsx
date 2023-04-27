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

  const renderedEpisodeAccordions = episodes.map((episode: any, i) => {
    return (
      <EpisodeAccordion
        description={episode.summary}
        episodeNumber={i}
        episodeTitle={episode.name}
        seen={episode.seen}
        episodeId={episode.id}
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
            onClick={(e) => {
              e.stopPropagation();
            }}
          />
          <Typography>{props.season} </Typography>
        </AccordionSummary>
        <AccordionDetails>{renderedEpisodeAccordions}</AccordionDetails>
      </Accordion>
    </div>
  );
}
