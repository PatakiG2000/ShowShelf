import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import WatchlistCard from "../../Components/Cards/watchlist/WatchlistCard";
import WatchlistPlaceholderCard from "../../Components/Cards/watchlist/WatchlistPlaceholderCard";

export default function Watchlist() {
  const watchlist = useSelector((state: any) => state.watchlistHandler.value);

  const currentWatchlist = watchlist.map((show: any) => {
    return (
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
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
      </motion.div>
    );
  });

  return (
    <motion.div
      className="watchlist"
      initial={{ opacity: 0, width: 0 }}
      animate={{ opacity: 1, width: "100%" }}
      exit={{ opacity: 0, x: window.innerWidth, transition: { duration: 0.2 } }}
    >
      <div className="watchlist-nav"></div>
      <div>
        {currentWatchlist.length === 0 ? (
          <WatchlistPlaceholderCard />
        ) : (
          currentWatchlist
        )}
      </div>
    </motion.div>
  );
}
