import { Grid, Typography, Snackbar, Alert } from "@mui/material";
import LikedCard from "./LikedCard";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function LikedCardGrid() {
  const likedPics = useSelector((state) => state.likedpic.list);
  const [likedPicsLength, setLikedPicsLength] = useState(likedPics.length);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log("esto es dentro del useffect");
    if (likedPics.length < likedPicsLength) {
      console.log("esto es dentro del if del useEffect");
      setOpen(true);
      setLikedPicsLength(likedPics.length);
    }
  }, [likedPics.length, likedPics]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    console.log(`esto es likePiks ${likedPics}`);
  }, [likedPics]);

  return (
    <>
      {likedPics.length > 0 ? (
        <>
          {" "}
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
          <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
            <Alert severity="error">Deleted from favorites!</Alert>
          </Snackbar>
        </>
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
