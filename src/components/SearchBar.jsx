import { TextField, Grid, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState, useEffect } from "react";
import useDebounce from "../hooks/useDebounce";
import { useDispatch } from "react-redux";
import { getApiData } from "./SearchSlice";

function SearchBar() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);
  const dispatch = useDispatch();

  function handleInputChange(event) {
    setQuery(event.target.value);
  }

  //console.log(`esto es el debounce ${debouncedQuery}`);
  // console.log(`esto es el Input ${query}`);

  useEffect(() => {
    dispatch(getApiData(debouncedQuery));
  }, [debouncedQuery]);

  return (
    <>
      <Grid container alignContent="center" justifyContent="center">
        <Grid item xs={6}>
          <TextField
            className="inputRounded"
            sx={{
              marginTop: "10vh",
              marginBottom: "10vh",
              backgroundColor: "white",
            }}
            id="search-bar"
            label="The amazing awaits!"
            variant="outlined"
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            onChange={handleInputChange}
            value={query}
          />
        </Grid>
      </Grid>
    </>
  );
}
export default SearchBar;
