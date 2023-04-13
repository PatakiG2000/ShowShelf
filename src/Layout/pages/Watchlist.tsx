import * as React from "react";
import SearchCard from "../../Components/SearchCard";

export interface IWatchlistProps {}

export default function Watchlist(props: IWatchlistProps) {
  return (
    <div className="watchlist">
      <div className="watchlist-nav">
        <h1 className="watchlist-title">Your current watchlist:</h1>
        <select name="" id="">
          <option value="New">Recently Added</option>
          <option value="Old">Oldest</option>
        </select>
      </div>
      <SearchCard></SearchCard>
      <SearchCard></SearchCard>
      <SearchCard></SearchCard>
      <SearchCard></SearchCard>
      <SearchCard></SearchCard>
      <SearchCard></SearchCard>
    </div>
  );
}
