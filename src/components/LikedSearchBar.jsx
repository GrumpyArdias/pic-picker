import {
  Grid,
  TextField,
  InputAdornment,
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";
import { findPic } from "./LikedSlice";
import { findPicBy } from "./LikedSlice";
import { useState } from "react";

function LikedSearchBar() {
  const [userInput, setUserInput] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");
  console.log(`esto es el estado del filtro selectedFilter`);

  const dispatch = useDispatch();

  console.log(`esto es el UserInput inicial ${userInput}`);

  const handleChange = (e) => {
    setUserInput(e.target.value);
    dispatch(findPic(e.target.value));
  };

  const handleFilterChange = (e) => {
    const filterBy = e.target.value;
    dispatch(findPicBy(filterBy));
    setSelectedFilter(e.target.value);
  };

  return (
    <div
      style={{
        marginTop: "10vh",
        marginBottom: "10vh",
        justifyContent: "space-between",
      }}
    >
      <Grid container alignContent="center" justifyContent="center" spacing={2}>
        <Grid item xs={4}>
          <TextField
            className="inputRounded"
            sx={{
              backgroundColor: "white",
            }}
            id="search-bar"
            label="The amazing awaits!"
            variant="outlined"
            onChange={handleChange}
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item></Grid>
        <Grid item xs={2}>
          <Box
            sx={{
              backgroundColor: "white",
            }}
            justifyContent="center"
            alignContent="center"
          >
            <FormControl fullWidth>
              <InputLabel id="filterId">Filter For</InputLabel>
              <Select
                labelId="filterId"
                id="filterId"
                label="filter"
                value={selectedFilter}
                onChange={handleFilterChange}
              >
                <MenuItem value="width">Width</MenuItem>
                <MenuItem value="height">Height</MenuItem>
                <MenuItem value="likes">Likes</MenuItem>
                <MenuItem value="date">Date</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default LikedSearchBar;
