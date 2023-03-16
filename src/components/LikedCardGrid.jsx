import { Grid, Typography } from "@mui/material";
import LikedCard from "./LikedCard";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function LikedCardGrid() {
  const likedPics = useSelector((state) => state.likedpic.list);

  console.log(`esto es likePiks ${likedPics}`);

  useEffect(() => {
    console.log("Liked pics changed", likedPics);
  }, [likedPics]);

  return (
    <>
      {likedPics.length > 0 ? (
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
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {likedPics.map((item) => {
              return <LikedCard key={item.id} data={item} />;
            })}
          </Grid>
        </Grid>
      ) : (
        <Typography
          variant="h2"
          align="center"
          fontFamily="Quicksand"
          fontWeight="700"
          color="#38393C"
        >
          No liked pics
        </Typography>
      )}
    </>
  );
}

export default LikedCardGrid;
