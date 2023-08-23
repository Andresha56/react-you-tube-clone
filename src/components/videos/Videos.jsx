import React, { useEffect, useState } from "react";
import { fetchAPI } from "../api/Api";
import { UseVideo } from "../../context/videoRenderByGuide/RenderVideo";
import SkeletonLoding from "../skeletonLoding/SkeletonLoding";
import VideoCard from "../VideoCard/VideoCard";
import Grid from "@mui/material/Grid";

function Videos() {
  const { setRentderVideo, renderVideo } = UseVideo();
  const [videos, setVideos] = useState([]);
  const [loding, setLoding] = useState(true);

  // -----loding----
  useEffect(()=>{
    setTimeout(() => {
      setLoding(false)
    },3000);
  },[loding])

  useEffect(() => {
    if (renderVideo === "Home") {
      setRentderVideo("New");
    }
    fetchAPI(`search?part=snippet&q=${renderVideo}`).then((response) =>
      setVideos(response.items)
    );
  }, [renderVideo, setRentderVideo]);

  return (
    <Grid container columnSpacing={2} sx={{ width: "100%"}}>
      {videos.length !== 0
        ? videos.map((video, index) => {
            return loding ? (
              <SkeletonLoding key={index} />
            ) : (
              <VideoCard key={index} />
            );
          })
        : ""}
    </Grid>
  );
}

export default Videos;
