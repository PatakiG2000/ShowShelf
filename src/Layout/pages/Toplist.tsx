import * as React from "react";
import ToplistCard from "../../Components/Cards/toplist/ToplistCard";
import { useSelector, useDispatch } from "react-redux";
import ToplistPlaceholderCard from "../../Components/Cards/toplist/ToplistPlaceholderCard";

export interface IToplistProps {}

export default function Toplist(props: IToplistProps) {
  const toplist = useSelector((state: any) => state.toplistHandler?.value);

  const currentToplist = toplist.map((show: any) => {
    return (
      <ToplistCard
        title={show.title}
        id={show.id}
        img={show.img}
        year={show.year}
        genre={show.genre}
        description={show.description}
        time={show.time}
        imdbLink={show.imdbLink}
        formData={show.formData}
      />
    );
  });

  return (
    <div>
      {" "}
      {currentToplist.length === 0 ? (
        <ToplistPlaceholderCard />
      ) : (
        currentToplist
      )}
    </div>
  );
}
