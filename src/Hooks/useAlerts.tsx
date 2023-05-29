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

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 600);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      if (tracklistItems.length > tracklength) {
        setAlert("Successfully added to your tracklist");
        setTrackLength(tracklistItems.length);
        setTimeout(() => {
          setAlert(null);
        }, 1300);
      }

      if (tracklistItems.length < tracklength) {
        setAlert("Successfully removed from your tracklist");
        setTrackLength(tracklistItems.length);
        setTimeout(() => {
          setAlert(null);
        }, 1300);
      }
    }
  }, [tracklistItems]);

  useEffect(() => {
    if (!isLoading) {
      if (toplist.length > toplistLength) {
        setAlert("Successfully added to your toplist");
        setToplistLength(toplist.length);
        setTimeout(() => {
          setAlert(null);
        }, 1300);
      }

      if (toplist.length < toplistLength) {
        setAlert("Successfully removed from your toplist");
        setToplistLength(toplist.length);
        setTimeout(() => {
          setAlert(null);
        }, 1300);
      }
    }
  }, [toplist]);

  useEffect(() => {
    if (!isLoading) {
      if (watchlist.length > watchlistLength) {
        setAlert("Successfully added to your watchlist");
        setWatchlistLength(watchlist.length);
        setTimeout(() => {
          setAlert(null);
        }, 1300);
      }

      if (watchlist.length < watchlistLength) {
        setAlert("Successfully removed from your watchlist");
        setWatchlistLength(watchlist.length);
        setTimeout(() => {
          setAlert(null);
        }, 1300);
      }
    }
  }, [watchlist]);

  return alert;
};

export default useAlerts;
