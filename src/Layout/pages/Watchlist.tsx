import { useSelector } from "react-redux";

import WatchlistCard from "../../Components/Cards/watchlist/WatchlistCard";
import WatchlistPlaceholderCard from "../../Components/Cards/watchlist/WatchlistPlaceholderCard";

export default function Watchlist() {
  const watchlist = useSelector((state: any) => state.watchlistHandler.value);

  const currentWatchlist = watchlist.map((show: any) => {
    return (
      <WatchlistCard
        title={show.title}
        id={show.id}
        img={show.img}
        year={show.year}
        genre={show.genre}
        description={show.description}
        time={show.time}
        imdbLink={show.imdbLink}
        date={show.date}
        key={show.key}
      />
    );
  });

  return (
    <div className="watchlist">
      <div className="watchlist-nav"></div>
      <div>
        {currentWatchlist.length === 0 ? (
          <WatchlistPlaceholderCard />
        ) : (
          currentWatchlist
        )}
      </div>
    </div>
  );
}
