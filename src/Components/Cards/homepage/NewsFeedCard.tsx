import * as React from "react";

export interface INewsFeedCardProps {
  title: string;
  link: string;
  img: string;
}

export default function NewsFeedCard(props: INewsFeedCardProps) {
  function redirectToNews() {
    window.open(props.link, "_blank");
  }

  return (
    <div className="newsfeed-card" onClick={redirectToNews}>
      <div className="newsfeed-card-title">
        <p>{props.title}</p>
      </div>
      <img src="/external-link.png" alt="" className="external-icon" />
      <div className="newsfeed-card-img-container">
        <img src={props.img} alt="" className="news-main-image" />
      </div>
    </div>
  );
}
