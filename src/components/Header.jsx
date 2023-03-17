import { AppBar, Box, CssBaseline, Toolbar, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="relative" sx={{ bgcolor: "white" }}>
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <Link
            to="/home"
            style={{
              textDecoration: "none",
              color: "#4371B5",
            }}
          >
            <Typography
              variant="h3"
              sx={{ fontFamily: "Quicksand", fontWeight: "700" }}
            >
              Pic Picker
            </Typography>
          </Link>
          <Box
            sx={{
              bgcolor: "#4371B5",
              borderRadius: "50%",
              width: 50,
              height: 50,
            }}
          >
            <Box
              onClick={handleClick}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {liked ? (
                <Link to="/" style={{ textDecoration: "none" }}>
                  <FavoriteIcon
                    sx={{ color: "red", marginTop: "7px" }}
                    fontSize="large"
                  />
                </Link>
              ) : (
                <Link to="/favorites" style={{ textDecoration: "none" }}>
                  <FavoriteBorderIcon
                    fontSize="large"
                    sx={{ color: "black", marginTop: "7px" }}
                  />
                </Link>
              )}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
