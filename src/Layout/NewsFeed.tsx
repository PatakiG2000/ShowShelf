import React from "react";
import NewsFeedCard from "../Components/Cards/homepage/NewsFeedCard";
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { v4 as uuidv4 } from "uuid";

export interface INewsFeedProps {}

export default function NewsFeed(props: INewsFeedProps) {
  const key = import.meta.env.VITE_NEWS_API_KEY;

  const [newsfeedElements, setNewsfeedElements] = useState<any>();

  //fetching news to feed

  React.useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=netflix&apiKey=${key}`)
      .then((res) => res.json())
      .then((data) => {
        const slicedNews = data?.articles.slice(0, 10);

        const news = slicedNews.map(
          (item: { title: string; urlToImage: string; url: string }) => {
            return (
              <NewsFeedCard
                title={item.title}
                link={item.url}
                img={item.urlToImage}
                key={uuidv4()}
              />
            );
          }
        );
        setNewsfeedElements(news);
      })
      .catch((err) => {
        setNewsfeedElements([
          {
            title: "failed to fetch news",
            urlToImage: "idevmibasichibakep",
            url: "homepageurl",
          },
        ]);
      });
  }, []);

  return <>{newsfeedElements || <CircularProgress />}</>;
}
