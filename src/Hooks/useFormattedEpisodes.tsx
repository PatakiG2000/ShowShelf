import * as React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


const useFormattedEpisodes = (title: string)=> {
   
    const [showData, setShowData] = useState("breakingbad");
    const [seriesInfos, setSeriesInfos]: any = useState({
      season1: [{}],
    }); //Minden seasonnek külön property amibe mennek az epizódok
    const tracklistItems = useSelector(
        (state: any) => state.tracklistHandler?.value?.tracklistItems
      );
    
      const currentShow = tracklistItems.find((show: {title: string} )=> show.title === title )
     const seenEpisodes = currentShow.seenEpisodes
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
   const [overallEpisodeNumber, setOverallEpisodeNumber] = useState(0)
   
  
    useEffect(() => {
        fetch(
          `https://api.tvmaze.com/singlesearch/shows?q=${title}&embed=episodes`
        ).then((res) =>
          res
            .json()
            .then((data) => {
              setShowData(data);
    
              //Organizing the series data by seasons and episodes
              setOverallEpisodeNumber(data._embedded.episodes.length)
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
      }, [title]);
  
    return [seriesInfos, loading, error, overallEpisodeNumber];
}


export default useFormattedEpisodes