import * as React from "react";
import ToplistCard from "../../Components/Cards/toplist/ToplistCard";
import { useSelector } from "react-redux";
import ToplistPlaceholderCard from "../../Components/Cards/toplist/ToplistPlaceholderCard";

export interface IToplistProps {}

export default function Toplist() {
  const toplist = useSelector((state: any) => state.toplistHandler?.value);

  const currentToplist = toplist.map(
    ({
      title,
      id,
      img,
      year,
      genre,
      description,
      time,
      imdbLink,
      formData,
      key,
    }: any) => {
      return (
        <ToplistCard
          title={title}
          id={id}
          img={img}
          year={year}
          genre={genre}
          description={description}
          time={time}
          imdbLink={imdbLink}
          formData={formData}
          key={key}
        />
      );
    }
  );

  return (
    <div className="toplist">
      {" "}
      {currentToplist.length === 0 ? (
        <ToplistPlaceholderCard />
      ) : (
        currentToplist
      )}
    </div>
  );
}
