

import { useSelector, useDispatch } from "react-redux";

import WatchlistCard from "../../Components/Cards/WatchlistCard";

export interface IWatchlistProps {}

export default function Watchlist(props: IWatchlistProps) {
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
      />
    );
  });

  return (
    <div className="watchlist">
      <div className="watchlist-nav">
        <h1 className="watchlist-title">Your current watchlist:</h1>
        <select name="" id="">
          <option value="New">Recently Added</option>
          <option value="Old">Oldest</option>
        </select>
      </div>
      <div>
        {currentWatchlist.length === 0
          ? "add ur first card placeholder"
          : currentWatchlist}
      </div>
    </div>
  );
}
