import * as React from "react";
import SeasonAccordion from "./SeasonAccordion";
import { useSelector, useDispatch } from "react-redux";
import { deleteFromTracklist } from "../features/tracklist/tracklistSlice";
import { useState, useEffect } from "react";

export interface ITracklistCardProps {
  title: string;
  id: string;
}

export default function TracklistCard(props: ITracklistCardProps) {
  const dispatch = useDispatch();
  const [showData, setShowData] = useState("breakingbad");
  const [seriesInfos, setSeriesInfos] = useState({
    season1: [{}],
  }); //Minden seasonnek külön property amibe mennek az epizódok

  useEffect(() => {
    fetch(
      `https://api.tvmaze.com/singlesearch/shows?q=${props.title}&embed=episodes`
    ).then((res) =>
      res
        .json()
        .then((data) => {
          setShowData(data);
          console.log("asd", data._embedded.episodes);
          console.log(data);
          //Organizing the series data by seasons and episodes
          const seasonNumber =
            data._embedded.episodes[data._embedded.episodes.length - 1]?.season;
          console.log("seasonNumber", seasonNumber);
          const seriesObject: any = {};

          for (let i = 1; i < seasonNumber + 1; i++) {
            seriesObject[`season${i}`] = [];
            data._embedded.episodes.forEach((episode: any) => {
              if (episode.season == i) {
                episode.seen = false;

                seriesObject[`season${i}`] = [
                  ...seriesObject[`season${i}`],
                  episode,
                ];
              }
            });
          }
          setSeriesInfos(seriesObject);
        })
        .catch()
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("seriesinfos", seriesInfos);

  //seasonoket kinyerni az azt tartalmazó arrayekkel, propokkal lemegy a seasonbe ahol lerendereli majd az epizódokat

  return (
    <>
      <div className="card">
        <h1>{props.title}</h1>
        <SeasonAccordion season={1} episodes={{}}></SeasonAccordion>
        <button onClick={() => dispatch(deleteFromTracklist(props.id))}>
          Remove
        </button>
      </div>
    </>
  );
}
