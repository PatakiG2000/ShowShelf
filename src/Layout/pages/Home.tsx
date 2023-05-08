import * as React from "react";

export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  return (
    <div className="home">
      <div className="home-leftside">
        <div className="newsfeed-title">
          <h3 className="newsfeed-title">Newsfeed</h3>
        </div>
        <div className="newsfeed-card"></div>
        <div className="newsfeed-card"></div>
        <div className="newsfeed-card"></div>
      </div>
      <div className="home-rightside">
        <div className="main-recommendation">Upcoming</div>
        <div className="continue-watching"></div>
        <div className="Currently trending"></div>
      </div>
    </div>
  );
}
