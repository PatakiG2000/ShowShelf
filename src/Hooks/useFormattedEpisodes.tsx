import * as React from "react";
import { useEffect, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteFromTracklist } from "../features/tracklist/tracklistSlice";
//EZ MAJD CSAK RENDEZZE EL A LEKÉRÉS LEGYEN A REDUXBA

const useFormattedEpisodes = (title: string) => {
  const dispatch = useDispatch();
  const [showData, setShowData] = useState("breakingbad");
  const [seriesInfos, setSeriesInfos]: any = useState({
    season1: [{}],
  });
  const tracklistItems = useSelector(
    (state: any) => state.tracklistHandler?.value?.tracklistItems
  );

  const currentShow = tracklistItems.find(
    (show: { title: string }) => show.title === title
  )
    ? tracklistItems.find((show: { title: string }) => show.title === title)
    : {
        title: "",
      };
  const seenEpisodes = currentShow.seenEpisodes
    ? currentShow.seenEpisodes
    : [123];
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [overallEpisodeNumber, setOverallEpisodeNumber] = useState(0);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.tvmaze.com/singlesearch/shows?q=${title}&embed=episodes`
    ).then((res) =>
      res
        .json()
        .then((data) => {
          if (data._embedded.episodes.length > 1500) {
            alert("You can't add a show with more than 1500 episodes for now");
            dispatch(deleteFromTracklist(currentShow.id));
            throw new Error();
          } else {
            setShowData(data);
            setEpisodes(data._embedded.episodes);

            //Organizing the series data by seasons and episodes
            setOverallEpisodeNumber(data._embedded.episodes.length);
            const seasonNumber =
              data._embedded.episodes[data._embedded.episodes.length - 1]
                ?.season;

            const seriesObject: any = {};

            for (let i = 1; i < seasonNumber + 1; i++) {
              seriesObject[`season${i}`] = [];
              data._embedded.episodes.forEach((episode: any) => {
                if (episode.season == i) {
                  if (seenEpisodes.includes(episode.id)) {
                    episode.seen = true;
                  } else {
                    episode.seen = false;
                  }

                  seriesObject[`season${i}`] = [
                    ...seriesObject[`season${i}`],
                    episode,
                  ];
                }
              });
            }

            setSeriesInfos(seriesObject);
          }
        })
        .catch()
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const memoizedSeriesInfos = useMemo(() => seriesInfos, [seriesInfos]);
  const memoizedEpisodes = useMemo(() => episodes, [episodes]);
  if (overallEpisodeNumber > 1500) {
    alert("Max episode you can track is 1500");
  }
  return [
    memoizedSeriesInfos,
    loading,
    error,
    overallEpisodeNumber,
    memoizedEpisodes,
  ];
};

export default useFormattedEpisodes;
