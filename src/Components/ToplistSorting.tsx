import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useSelector, useDispatch } from "react-redux";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import { sorting } from "../../src/features/toplist/toplistSlice";
import { useState } from "react";

export interface IToplistSortingProps {}
const theme = createTheme({
  palette: {
    primary: {
      main: "#e9ebf0",
    },
    secondary: {
      main: "#e9ebf0",
    },
  },
});
export default function ToplistSorting(props: IToplistSortingProps) {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const handleChange = (event: SelectChangeEvent) => {
    const target = event.target.value as string;
    setValue(target);
    dispatch(sorting(target));
  };

  return (
    <Box
      sx={{
        minWidth: "10%",
        maxWidth: "400px",
        margin: "0 auto",
      }}
    >
      <ThemeProvider theme={theme}>
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
            sx={{
              color: "white",
              ".MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(228, 219, 233, 0.25)",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(228, 219, 233, 0.25)",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(228, 219, 233, 0.25)",
              },
              ".MuiSvgIcon-root ": {
                fill: "white !important",
              },
            }}
          >
            <MenuItem value={"hightolow"}>Rating: High to low</MenuItem>
            <MenuItem value={"lowtohigh"}>Rating: Low to high</MenuItem>
            <MenuItem value={"newest"}>Time: Newest</MenuItem>
            <MenuItem value={"oldest"}>Time: Oldest</MenuItem>
          </Select>
        </FormControl>
      </ThemeProvider>
    </Box>
  );
}
