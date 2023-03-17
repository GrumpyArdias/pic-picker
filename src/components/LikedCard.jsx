import { Card as BasicCard, Box } from "@mui/material";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { useDispatch } from "react-redux";
import { deleteFromLiked } from "./LikedSlice";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { saveAs } from "file-saver";
import { picDescriptionEdit } from "./LikedSlice";
import { useState, useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function LikedCard({ data }) {
  const [open, setOpen] = useState(false);

  const dateString = data.created_at;
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString().slice(-2);
  const formattedDate = `${day}/${month}/${year}`;

  const [description, setDescription] = useState("");

  useEffect(() => {
    let rawDescription = data.description || data.alt_description || "";
    let newDescription =
      rawDescription.length > 25
        ? `${rawDescription.slice(0, 25)}...`
        : rawDescription;
    setDescription(newDescription);
  }, [data.description, data.alt_description]);

  const dispatch = useDispatch();

  const handleDeletePic = (pic) => {
    dispatch(deleteFromLiked(pic));
  };

  const handleDownload = (link) => {
    saveAs(link);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    //console.log(`esto es el description ${description}`);
  };

  const handleOpen = () => {
    dispatch(picDescriptionEdit({ id: data.id, description: description }));
    setOpen((open) => !open);

    //console.log(open);
  };

  return (
    <BasicCard
      variant="outlined"
      sx={{
        margin: "10px",
        display: "flex",
        flexDirection: "column",
        height: "550px",
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
          flexDirection: "column",
        }}
      >
        {!description ? (
          <div style={{ margin: "5px" }}>
            {open ? (
              <>
                <textarea
                  value={""}
                  onChange={handleDescriptionChange}
                  placeholder={"No description available"}
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                />
                <SaveIcon
                  onClick={() => handleOpen(true)}
                  style={{ cursor: "pointer", color: "#4371B5" }}
                />
              </>
            ) : (
              <>
                {description}
                <EditIcon
                  onClick={() => handleOpen(true)}
                  style={{ cursor: "pointer" }}
                />
              </>
            )}
          </div>
        ) : (
          <div
            className="wrapper"
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "5px",
              alignItems: "center",
              fontFamily: "Oxygen",
              textOverflow: "fade",
            }}
          >
            <div>
              {open ? (
                <>
                  <textarea
                    value={description}
                    onChange={handleDescriptionChange}
                    sx={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  />
                  <SaveIcon
                    onClick={() => handleOpen()}
                    style={{ cursor: "pointer", color: "#4371B5" }}
                  />
                </>
              ) : (
                <>
                  {description}
                  <EditIcon
                    onClick={() => handleOpen()}
                    style={{ cursor: "pointer" }}
                  />
                </>
              )}
            </div>
          </div>
        )}
        <div
          className="wrapper"
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "5px",
            alignItems: "center",
            fontFamily: "Oxygen",
          }}
        >
          <div> Date: {formattedDate}</div>
          <div>
            {data.width} x {data.height}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {data.likes}
            <ThumbUpIcon sx={{ marginLeft: "5px", color: "#5590E7" }} />
          </div>
        </div>
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
            sx={{ marginLeft: "3%", color: "#5590E7" }}
            fontSize="large"
            onClick={() => handleDownload(data.urls.raw)}
          />

          <Box onClick={() => handleDeletePic(data.id)}>
            <DeleteForeverIcon
              sx={{ marginRight: "10%", color: "red" }}
              fontSize="large"
            />
          </Box>
        </div>
      </div>
    </BasicCard>
  );
}

export default LikedCard;
