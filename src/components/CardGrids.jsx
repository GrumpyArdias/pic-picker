import Card from "./Card";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { Snackbar, Alert } from "@mui/material";
import { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function CardsGrid() {
  let pic = useSelector((state) => state.searchPic.list);
  const likedPics = useSelector((state) => state.likedpic.list);
  const [open, setOpen] = useState(false);
  const [likedPicsLength, setLikedPicsLength] = useState(likedPics.length);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    console.log("esto es dentro del useffect");
    if (likedPics.length > likedPicsLength) {
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
    function handleScroll() {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  // console.log(`esto es pics ${pic}`);
  return (
    <>
      <IconButton
        sx={{
          display: showButton ? "block" : "none",
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
          zIndex: "1000",
          backgroundColor: "#4371B5",
        }}
        onClick={handleClick}
        aria-label="back to top"
      >
        <KeyboardArrowUpIcon />
      </IconButton>
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
      <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
        <Alert severity="success">Added to favorites!</Alert>
      </Snackbar>
    </>
  );
}

export default CardsGrid;
