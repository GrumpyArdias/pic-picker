import React, { useState } from "react";
import { Card, Box } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

interface CardProps {
  id: string;
  description: string | null;
  img: string;
  likes: number;
  width: number;
  height: number;
  download: string;
}

function Tarjeta(data: CardProps) {
  const description = data.description ?? "No description available";
  const [liked, setLiked] = useState(false);
  const handleDownloadClick = () => {
    window.location.href = data.download;
  };

  const handelClick = () => {
    setLiked(!liked);
  };

  return (
    <Card
      variant="outlined"
      sx={{
        mb: "10vh",
        flexGrow: 1,
        flexBasis: "calc((100% - 60px) / 4)",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        margin: "10px",
        transition: "transform 0.3s, border 0.3s",
        "&:hover": {
          borderColor: "#4371B5",
          transform: "translateY(-2px)",
        },
        "& > *": {
          minWidth: "clamp(0px, (320px - 100%) * 999,100%)",
          maxWidth: "100%",
          maxHeight: "100%",
        },
        "@media (max-width: 768px)": {
          flexBasis: "100%",
          maxWidth: "100%",
        },
        flexWrap: "wrap",
      }}
    >
      <img src={data.img} alt={description} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "5%",
          marginBottom: "5%",
        }}
      >
        <CloudDownloadIcon
          sx={{ marginLeft: "3%" }}
          fontSize="large"
          onClick={handleDownloadClick}
        />

        <Box onClick={handelClick}>
          {liked ? (
            <FavoriteIcon
              sx={{ marginRight: "3%", color: "red" }}
              fontSize="large"
            />
          ) : (
            <FavoriteBorderIcon sx={{ marginRight: "3%" }} fontSize="large" />
          )}
        </Box>
      </div>
    </Card>
  );
}

export default Tarjeta;
