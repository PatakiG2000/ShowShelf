import React from "react";
import NewsFeedCard from "../Components/Cards/homepage/NewsFeedCard";

export interface INewsFeedProps {}

export default function NewsFeed(props: INewsFeedProps) {
  const key = import.meta.env.VITE_NEWS_API_KEY;
  const [news, setNews] = React.useState([
    {
      title: "failed to fetch news",
      urlToImage: "idevmibasichibakep",
      url: "homepageurl",
    },
  ]);

  //fetching news to feed

  React.useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=netflix&apiKey=${key}`)
      .then((res) => res.json())
      .then((data) => {
        const slicedNews = data?.articles.slice(0, 10);
        setNews(slicedNews);
      })
      .catch((err) => {
        setNews([
          {
            title: "failed to fetch news",
            urlToImage: "idevmibasichibakep",
            url: "homepageurl",
          },
        ]);
      });
  }, []);

  const newsFeedElements = news.map(
    (item: { title: string; urlToImage: string; url: string }) => {
      return (
        <NewsFeedCard
          title={item.title}
          link={item.url}
          img={item.urlToImage}
        />
      );
    }
  );

  return <>{newsFeedElements}</>;
}
