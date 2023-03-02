import logo from "../img/logo.jpg";
import { AppBar, Box, CssBaseline, Toolbar } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

function Header() {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative" sx={{ bgcolor: "white" }}>
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <img
            src={logo}
            style={{ maxWidth: "50px", marginBottom: "2vh", marginTop: "1vh" }}
            alt="logo img"
          />
          <Box
            sx={{
              bgcolor: "#4371B5",
              borderRadius: "50%",
              width: 50,
              height: 50,
            }}
          >
            <FavoriteIcon
              fontSize="large"
              style={{ margin: "7px" }}
            ></FavoriteIcon>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
