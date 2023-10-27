import { useState, useEffect } from "react";
import { useSearchContext } from "../../context/SearchContext/SearchContext";
import VideoSuggesterStruct from "../VideoSuggesterStruct/VideoSuggesterStruct";
import { Container } from "@mui/material";

function SearchVideos() {
  // ---- search content state ----
  const [content, setContent] = useState([]);
  const { searchQuery } = useSearchContext();

  // Use useEffect to update content when searchQuery changes
  useEffect(() => {
    if (searchQuery.length !== 0) {
      console.log(searchQuery, );
      setContent(searchQuery.contents);
    }
    else{
      console.log("loading")
    }
  }, [searchQuery]);

  // videoId,
  // thumbnail,
  // videoTitle,
  // authorTitle,
  // authorbadge,
  // views,
  // publishedTimeText,

  return (
    <Container>
      {content &&
        content.map((videos) => {
          const { video } = videos;
          return (
            <div key={video?.videoId}>
              <VideoSuggesterStruct
                videoId={video?.videoId}
                thumbnail={video?.thumbnails[1]?.url}
                videoTitle={video?.title}
                authorTitle={video?.author?.title}
                views={video?.stats?.views}
                publishedTimeText={video?.publishedTimeText}
                avatar={video?.author?.avatar[0]?.url}

              />
            </div>
          );
        })}
    </Container>
  );
}

export default SearchVideos;
