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
  useEffect(() => {
    setTimeout(() => {
      setLoding(false);
    }, 3000);
  }, [loding]);

  useEffect(() => {
    if (renderVideo === "Home") {
      setRentderVideo("New");
    }
    fetchAPI(`search/?q=${renderVideo}`).then((response) => {
      setVideos(response?.contents);
    });
  }, [renderVideo, setRentderVideo]);
  return (
    <Grid container spacing={2} sx={{ width: "100%", padding: "0 30px" }}>
      {videos.length !== 0
        ? videos.map((video, index) => {
            return loding ? (
              <SkeletonLoding key={index} />
            ) : (
              <VideoCard key={index} video={video} />
            );
          })
        :""}
    </Grid>
    
  );
}

export default Videos;
