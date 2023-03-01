import React from "react";
import { ReactDOM } from "react";
import logo from "../img/logo.jpg";
import likePhotos from "../img/like.png";
import { AppBar, Box, CssBaseline, Toolbar } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { bgcolor, border, width, height, display } from "@mui/system";

function Header() {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative" sx={{ bgcolor: "white" }}>
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <img src={logo} style={{ maxWidth: "50px" }} alt="logo img" />
          <Box
            sx={{
              bgcolor: "#4371B5",
              borderRadius: "50%",
              width: 30,
              height: 30,
            }}
          >
            <FavoriteIcon></FavoriteIcon>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
