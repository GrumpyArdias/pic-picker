import React, { useState } from "react";
import { Card as PicCard, Box } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { useDispatch } from "react-redux";
import { addToLiked, deleteFromLiked } from "./LikedSlice";
import { saveAs } from "file-saver";

function Card({ data }) {
  const description = data.description || "No description available";
  const [liked, setLiked] = useState(false);

  const dispatch = useDispatch();

  const handleDownload = (link) => {
    saveAs(link);
  };

  //console.log(description);

  const handleClick = (info) => {
    dispatch(addToLiked(info));
    setLiked(true);
  };

  function handleDeleteClick(info) {
    dispatch(deleteFromLiked(info));
    setLiked(false);
  }

  return (
    <PicCard
      variant="outlined"
      sx={{
        margin: "10px",
        display: "flex",
        flexDirection: "column",
        height: "500px",
        overflow: "hidden",
        "&:hover": {
          borderColor: "#4371B5",
          transform: "translateY(-2px)",
        },
      }}
    >
      <div>
        <img
          src={data.urls.small}
          alt={description}
          style={{ objectFit: "cover", height: "400px", width: "300px" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "5%",
          marginBottom: "5%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            height: "100px",
          }}
        >
          <CloudDownloadIcon
            sx={{ marginLeft: "3%", color: "#4371B5" }}
            fontSize="large"
            onClick={() => handleDownload(data.urls.raw)}
          />

          <Box
            onClick={
              liked ? () => handleDeleteClick(data) : () => handleClick(data)
            }
          >
            {liked ? (
              <FavoriteIcon
                sx={{ marginRight: "10%", color: "red" }}
                fontSize="large"
              />
            ) : (
              <FavoriteBorderIcon sx={{ marginRight: "6%" }} fontSize="large" />
            )}
          </Box>
        </div>
      </div>
    </PicCard>
  );
}

export default Card;
