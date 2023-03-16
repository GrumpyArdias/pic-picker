import logo from "../img/logo.jpg";
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
          <img
            src={logo}
            style={{ maxWidth: "50px", marginBottom: "2vh", marginTop: "1vh" }}
            alt="logo img"
          />
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
