import * as React from "react";

import Searchresults from "../Layout/Searchresults";

export interface SearchBoxProps {}

export default function SearchBox(props: SearchBoxProps) {
  const [isShowing, setIsShowing] = React.useState(false);
  const [searchResults, setSearchResults] = React.useState<[] | null>([]);

  function hideSearch() {
    setIsShowing(false);
  }

  function searching(searchterm: string): void {
    setSearchResults([]);
    fetch(`https://api.tvmaze.com/search/shows?q=${searchterm}`)
      .then((res) => res.json())
      .then((data) => {
        setSearchResults(data);
      });
  }

  function onChange(e: React.FormEvent<HTMLInputElement>): void {
    const target = e.target as HTMLInputElement;
    const joinedTarget = target.value.split(" ").join("");
    if (!target.value) {
      setIsShowing(false);
    } else {
      setIsShowing(true);
      searching(joinedTarget);
    }
  }

  return (
    <>
      <div className="search-bar-container">
        <input
          onInput={(e) => onChange(e)}
          type="search"
          className="searchbar"
          placeholder="Search for a show..."
        />
      </div>

      <Searchresults
        show={isShowing ? "block" : "none"}
        results={searchResults}
        showing={hideSearch}
      />
    </>
  );
}
