import * as React from "react";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const useAlerts = () => {
  const [alert, setAlert] = useState<null | string>(null);
  const [tracklength, setTrackLength] = useState(0);
  const [watchlistLength, setWatchlistLength] = useState(0);
  const [toplistLength, setToplistLength] = useState(0);

  const tracklistItems = useSelector(
    (state: any) => state.tracklistHandler?.value?.tracklistItems
  );
  const watchlist = useSelector((state: any) => state.watchlistHandler?.value);

  const toplist = useSelector((state: any) => state.toplistHandler?.value);

  useEffect(() => {
    setToplistLength(toplist.length);
    setWatchlistLength(watchlist.length);
    setTrackLength(tracklistItems.length);
  }, []);

  useEffect(() => {
    if (tracklistItems.length > tracklength) {
      setAlert("Succesfully added to your tracklist");
      setTrackLength(tracklistItems.length);
      setTimeout(() => {
        setAlert(null);
      }, 1300);
    }

    if (tracklistItems.length < tracklength) {
      setAlert("Succesfully removed from your tracklist");
      setTrackLength(tracklistItems.length);
      setTimeout(() => {
        setAlert(null);
      }, 1300);
    }
  }, [tracklistItems]);

  useEffect(() => {
    if (watchlist.length > watchlistLength) {
      setAlert("Succesfully added to your watchlist");
      setWatchlistLength(watchlist.length);
      setTimeout(() => {
        setAlert(null);
      }, 1300);
    }

    if (tracklistItems.length < tracklength) {
      setAlert("Succesfully removed from your watchlist");
      setWatchlistLength(watchlist.length);
      setTimeout(() => {
        setAlert(null);
      }, 1300);
    }
  }, [watchlist]);

  return alert;
};

export default useAlerts;
