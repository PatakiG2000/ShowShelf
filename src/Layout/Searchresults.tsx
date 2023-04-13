import * as React from "react";
import SearchCard from "../Components/SearchCard";

export default function Searchresults(props: any) {
  const renderedCards = props.results.map(
    (show: {
      show: {
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
      return (
        <SearchCard
          title={show.show.name}
          img={show.show.image?.medium}
          description={show.show.summary}
          time={show.show.averageRuntime}
          genre={show.show.genres.join(" ")}
          year={show.show?.ended}
          imdbLink={show.show.externals.imdb}
        />
      );
    }
  );
  const show = props.show;
  return (
    <div
      className="search-results"
      style={{
        display: show,
        position: "fixed",
        top: 60,
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      {renderedCards}
    </div>
  );
}

