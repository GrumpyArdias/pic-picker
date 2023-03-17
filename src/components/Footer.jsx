import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { AppBar, Box, CssBaseline, Toolbar } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

function Footer() {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative" sx={{ bgcolor: "white" }}>
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <Link
            to="/pic-picker/"
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
          <Box>
            <InstagramIcon
              sx={{ color: "#38393C" }}
              fontSize="large"
            ></InstagramIcon>
            <FacebookIcon
              sx={{ color: "#38393C" }}
              fontSize="large"
            ></FacebookIcon>
            <TwitterIcon
              sx={{ color: "#38393C" }}
              fontSize="large"
            ></TwitterIcon>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Footer;
