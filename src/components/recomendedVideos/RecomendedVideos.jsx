import { useEffect, useState } from "react";
import { fetchAPI } from "../api/Api";
import {Box,} from "@mui/material";
import VideoSuggesterStruct from "../VideoSuggesterStruct/VideoSuggesterStruct";

function RecomendedVideos({ id }) {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    fetchAPI(`video/related-contents/?id=${id}`).then((response) =>
      setContents(response.contents)
    );
  }, [id]);
;

  return (
    <Box sx={{ marginTop: "20px" }}>
      {contents &&
        contents.map((content) => {
          const { video } = content;


          return (
            //recomended videos details
         <div key={video?.videoId}>
           <VideoSuggesterStruct 
          videoId={video?.videoId}
          thumbnail={video?.thumbnails[1]?.url}
           videoTitle={video?.title.slice(0, 50) + "..."}
          authorTitle={video?.author?.title}
          authorbadge={video?.author?.badges[0]?.type}
           views={video?.stats?.views}
          publishedTimeText={video?.publishedTimeText}
          />
         </div>

          );
           
          
        })}
    </Box>
  );
}

export default RecomendedVideos;
