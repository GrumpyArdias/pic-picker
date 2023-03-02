import Tarjeta from "./Tarjeta";
import { Grid } from "@mui/material";

function CardsGrid() {
  return (
    <>
      <Grid
        container
        sx={{
          mb: 8,
          gridTemplateColumns:
            "repeat(auto-fill, minmax(280px, 1fr)) !important",
        }}
      >
        <Grid item>
          <Tarjeta />
        </Grid>
      </Grid>
    </>
  );
}

export default CardsGrid;
