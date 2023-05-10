import * as React from "react";
import SearchCard from "../Components/Cards/SearchCard";
import useControlledShows from "../Hooks/useControlledShows";
import CircularProgress from '@mui/material/CircularProgress';
import zIndex from "@mui/material/styles/zIndex";

export default function Searchresults(props: any) {
  const [tracklistItems, watchlist, toplist, allShows] = useControlledShows(0);
  const [seen, setSeen] = React.useState(true);
  const renderedCards = props.results.map(
    (show: {
      show: {
        id: number;
        name: string;
        image: { medium: string };
        summary: string;
        averageRuntime: number;
        genres: [];
        ended: string;
        externals: {
          imdb: string;
        };
      };
    }) => {
      //If you have the show somewhere it won't show up in search results
      if (
        !allShows.some((result: { id: number }) => result.id === show.show.id)
      ) {
        return (
          <SearchCard
            title={show.show.name}
            img={show.show.image?.medium}
            description={show.show.summary}
            time={show.show.averageRuntime}
            genre={show.show.genres.join(" ")}
            year={show.show?.ended}
            imdbLink={show.show.externals.imdb}
            id={show.show.id}
            key={show.show.id}
          />
        );
      }
    }
  );
  const show = props.show;
  return (
    <div
      className="search-results"
      style={{
        display: seen ? show : "none",
        position: "fixed",
        top: 60,
        bottom: 0,
        left: 0,
        right: 0,
      }}
      onClick={() => {
        props.showing();
      }}
    >
      
      {renderedCards.length > 0 ? renderedCards :  <CircularProgress sx={{zIndex: 99}} />}
    </div>
  );
}
