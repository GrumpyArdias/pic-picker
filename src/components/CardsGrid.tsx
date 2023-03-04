import Tarjeta from "./Tarjeta";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";

interface DataItem {
  id: string;
  description: string | null;
  urls: {
    full: string;
  };
  img: string;
  likes: number;
  width: number;
  height: number;
  links: {
    download: string;
  };
}

function CardsGrid() {
  const [data, setData] = useState<DataItem[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://api.unsplash.com/photos/?client_id=kM5-4Z3QqWMwwQdDA4wule5S-JsWi4E2_vILMegoDiI"
        );
        const dataJson = await response.json();
        setData(dataJson);
        console.log("Data:", dataJson);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
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
          {data.map((item) => (
            <Tarjeta
              id={item.id}
              key={item.id}
              description={item.description}
              img={item.urls.full}
              likes={item.likes}
              width={item.width}
              height={item.height}
              download={item.links.download}
            />
          ))}
        </Grid>
      </Grid>
    </>
  );
}

export default CardsGrid;
