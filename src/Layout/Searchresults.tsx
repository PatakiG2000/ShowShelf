import * as React from "react";
import SearchCard from "../Components/SearchCard";

export default function Searchresults(props: any) {
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
      {renderedCards}
    </div>
  );
}
