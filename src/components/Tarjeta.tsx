import { Card } from "@mui/material";
import cat from "../img/cat1.jpg";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

function Tarjeta() {
  return (
    <>
      <Card
        variant="outlined"
        sx={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "10px",
          transition: "transform 0.3s, border 0.3s",
          "&:hover": {
            borderColor: "#4371B5",
            transform: "translateY(-2px)",
          },
          "& > *": { minWidth: "clamp(0px, (320px - 100%) * 999,100%)" },
        }}
      >
        <img
          src={cat}
          alt=""
          style={{ maxWidth: "100vh", maxHeight: "100vw" }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "5%",
            marginBottom: "5%",
          }}
        >
          <CloudDownloadIcon sx={{ marginLeft: "3%" }} fontSize="large" />
          <FavoriteBorderIcon sx={{ marginRight: "3%" }} fontSize="large" />
        </div>
      </Card>
    </>
  );
}

export default Tarjeta;
