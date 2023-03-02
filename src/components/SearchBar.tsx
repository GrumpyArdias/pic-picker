import { TextField, Grid, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar() {
  return (
    <>
      <Grid container alignContent="center" justifyContent="center">
        <Grid item xs={6}>
          <TextField
            sx={{ marginTop: "10vh", marginBottom: "10vh" }}
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
          />
        </Grid>
      </Grid>
    </>
  );
}
export default SearchBar;
