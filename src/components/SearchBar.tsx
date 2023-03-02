import { TextField, Grid, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar() {
  return (
    <>
      <Grid container alignContent="center" justifyContent="center">
        <Grid item xs={8}>
          <TextField
            sx={{ marginTop: "10vh", marginBottom: "10vh" }}
            id="search-bar"
            label="Search for amazing photos!"
            variant="outlined"
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
      </Grid>
    </>
  );
}
export default SearchBar;
