import Card from "./Card";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

function CardsGrid() {
  let pic = useSelector((state) => state.searchPic.list);

  // console.log(`esto es pics ${pic}`);
  return (
    <>
      <Grid
        container
        sx={{
          mb: 8,
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          },
        }}
      >
        <Grid
          item
          sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
        >
          {pic.map((item) => (
            <Card data={item} key={item.id} />
          ))}
        </Grid>
      </Grid>
    </>
  );
}

export default CardsGrid;
