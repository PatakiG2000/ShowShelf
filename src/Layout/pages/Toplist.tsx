import * as React from "react";
import ToplistCard from "../../Components/Cards/toplist/ToplistCard";
import { useSelector } from "react-redux";
import ToplistPlaceholderCard from "../../Components/Cards/toplist/ToplistPlaceholderCard";
import ToplistSorting from "../../Components/ToplistSorting";

import { motion } from "framer-motion";

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
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
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
        </motion.div>
      );
    }
  );

  return (
    <motion.div
      className="toplist"
      initial={{ opacity: 0, width: 0 }}
      animate={{ opacity: 1, width: "100%" }}
      exit={{ opacity: 0, x: window.innerWidth, transition: { duration: 0.2 } }}
    >
      <ToplistSorting />
      {currentToplist.length === 0 ? (
        <ToplistPlaceholderCard />
      ) : (
        currentToplist
      )}
    </motion.div>
  );
}
