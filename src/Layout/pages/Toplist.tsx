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

export interface IToplistProps {}

export default function Toplist() {
  const toplist = useSelector((state: any) => state.toplistHandler?.value);
  const [sortType, setSortType] = React.useState("");
  const dispatch = useDispatch();
  const handleChange = (event: SelectChangeEvent) => {
    setSortType(event.target.value as string);
    dispatch(sorting("asd"));
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
      <Box sx={{ minWidth: "10%", maxWidth: "400px", margin: "0 auto" }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Sort by:</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={sortType}
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
    </div>
  );
}
