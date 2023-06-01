import * as React from "react";
import ToplistCard from "../../Components/Cards/toplist/ToplistCard";
import { useSelector, useDispatch } from "react-redux";
import ToplistPlaceholderCard from "../../Components/Cards/toplist/ToplistPlaceholderCard";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import { sorting } from "../../features/toplist/toplistSlice";
import { useState } from "react";
import { motion } from "framer-motion";

export interface IToplistProps {}

export default function Toplist() {
  const toplist = useSelector((state: any) => state.toplistHandler?.value);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const handleChange = (event: SelectChangeEvent) => {
    const target = event.target.value as string;
    setValue(target);
    dispatch(sorting(target));
  };

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
      <Box
        sx={{
          minWidth: "10%",
          maxWidth: "400px",
          margin: "0 auto",
        }}
      >
        <FormControl fullWidth>
          <InputLabel
            id="demo-simple-select-label"
            sx={{
              color: "white",
            }}
          >
            Sort by:
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={"hightolow"}>Rating: High to low</MenuItem>
            <MenuItem value={"lowtohigh"}>Rating: Low to high</MenuItem>
            <MenuItem value={"newest"}>Time: Newest</MenuItem>
            <MenuItem value={"oldest"}>Time: Oldest</MenuItem>
          </Select>
        </FormControl>
      </Box>{" "}
      {currentToplist.length === 0 ? (
        <ToplistPlaceholderCard />
      ) : (
        currentToplist
      )}
    </motion.div>
  );
}
