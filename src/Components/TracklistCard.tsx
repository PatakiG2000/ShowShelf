import * as React from "react";
import SeasonAccordion from "./SeasonAccordion";
import { useSelector, useDispatch } from "react-redux";
import { deleteFromTracklist } from "../features/tracklist/tracklistSlice";
import { useState, useEffect } from "react";

export interface ITracklistCardProps {
  title: string;
  id: number;
}

export default function TracklistCard(props: ITracklistCardProps) {
  const dispatch = useDispatch();
  const [showData, setShowData] = useState("breakingbad");
  const [seriesInfos, setSeriesInfos]: any = useState({
    season1: [{}],
  }); //Minden seasonnek külön property amibe mennek az epizódok
  const seenEpisodes = useSelector(
    (state: any) => state.tracklistHandler?.value?.seenEpisodes
  );

  useEffect(() => {
    fetch(
      `https://api.tvmaze.com/singlesearch/shows?q=${props.title}&embed=episodes`
    ).then((res) =>
      res
        .json()
        .then((data) => {
          setShowData(data);

          //Organizing the series data by seasons and episodes
          const seasonNumber =
            data._embedded.episodes[data._embedded.episodes.length - 1]?.season;

          const seriesObject: any = {};

          for (let i = 1; i < seasonNumber + 1; i++) {
            seriesObject[`season${i}`] = [];
            data._embedded.episodes.forEach((episode: any) => {
              if (episode.season == i) {
                /* lásd 101 */
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
          setSeriesInfos(
            seriesObject
          ); /* seen Episode id-t arrayt csinálni a storeba amit lehet  settelni és ahogy csinálja lekérésnél a series objectet checkolja az EpisodeAccordion.seen-t onnan  */

          /* 101 */
          /* storeba kell igy egy dispatch function ami kezeli a látto részeket seasonoket */
        })
        .catch()
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const seasons = Object.keys(seriesInfos);
  const renderedAccordions = seasons.map((season) => {
    //itt lehet baj
    return (
      <SeasonAccordion
        season={season}
        episodes={seriesInfos[season]}
        key={props.id}
      ></SeasonAccordion>
    );
  });

  //seasonoket kinyerni az azt tartalmazó arrayekkel, propokkal lemegy a seasonbe ahol lerendereli majd az epizódokat

  return (
    <>
      <div className="card">
        <h1>{props.title}</h1>
        <div className="seasons">{renderedAccordions}</div>
        <button onClick={() => dispatch(deleteFromTracklist(props.id))}>
          Remove
        </button>
      </div>
    </>
  );
}
