import * as React from "react";

export interface INewsFeedCardProps {
  title: string;
  link: string;
  img: string;
}

export default function NewsFeedCard({ img, link, title }: INewsFeedCardProps) {
  function redirectToNews() {
    window.open(link, "_blank");
  }

  return (
    <div className="newsfeed-card" onClick={redirectToNews}>
      <div className="newsfeed-card-title">
        <p>{title}</p>
      </div>
      <img src="/external-link.png" alt="" className="external-icon" />
      <div className="newsfeed-card-img-container">
        <img src={img} alt="" className="news-main-image" />
      </div>
    </div>
  );
}
