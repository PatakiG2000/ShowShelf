import * as React from "react";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const useAlerts = () => {
  const [alert, setAlert] = useState<boolean | string>(false);
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

  function triggerAlert(message: string): void {
    setAlert(message);
    setTrackLength(tracklistItems.length);
    setTimeout(() => {
      setAlert(false);
    }, 1300);
  }

  useEffect(() => {
    if (!isLoading) {
      if (tracklistItems.length > tracklength) {
        triggerAlert("Successfully added to your tracklist");
      }

      if (tracklistItems.length < tracklength) {
        triggerAlert("Successfully removed from your tracklist");
      }
    }
  }, [tracklistItems]);

  useEffect(() => {
    if (!isLoading) {
      if (toplist.length > toplistLength) {
        triggerAlert("Successfully added to your toplist");
      }

      if (toplist.length < toplistLength) {
        triggerAlert("Successfully removed from your toplist");
      }
    }
  }, [toplist]);

  useEffect(() => {
    if (!isLoading) {
      if (watchlist.length > watchlistLength) {
        triggerAlert("Successfully added to your watchlist");
      }

      if (watchlist.length < watchlistLength) {
        triggerAlert("Successfully removed from your watchlist");
      }
    }
  }, [watchlist]);

  return alert;
};

export default useAlerts;
