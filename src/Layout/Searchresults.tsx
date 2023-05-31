import * as React from "react";
import SearchCard from "../Components/Cards/SearchCard";
import useControlledShows from "../hooks/useControlledShows";
import CircularProgress from "@mui/material/CircularProgress";

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
        ended: number;
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
        top: 50,
        bottom: 0,
        left: 0,
        right: 0,
      }}
      onClick={() => {
        props.showing();
      }}
    >
      {renderedCards.length > 0 ? (
        renderedCards
      ) : (
        <div className="spinner-container">
          <CircularProgress sx={{ zIndex: 99, margin: "0 auto" }} />
        </div>
      )}
    </div>
  );
}
