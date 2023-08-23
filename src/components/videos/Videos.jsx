import React, { useEffect, useState } from "react";
import { fetchAPI } from "../api/Api";
import { UseVideo } from "../../context/videoRenderByGuide/RenderVideo";

function Videos() {
  const { setRentderVideo, renderVideo } = UseVideo();
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    if (renderVideo === "Home") {
      setRentderVideo("New");
    }
    fetchAPI(`search?part=snippet&q=${renderVideo}`)
    .then(response => setVideos(response.items)
    );
  }, [renderVideo, setRentderVideo]);

  return <div></div>;
}

export default Videos;
