import { useEffect, useState } from "react";
import { fetchAPI } from "../api/Api";
import { Stack, Box, Typography } from "@mui/material";
import Formatnumber from "../formatNumber/FormatNumber";

function RecomendedVideos({ id }) {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    fetchAPI(`video/related-contents/?id=${id}`).then((response) =>
      setContents(response.contents)
    );
  }, [id]);
  //   console.log(contents);

  return (
    <Box sx={{ marginTop: "20px" }}>
      {contents &&
        contents.map((content) => {
          const { video } = content;
          console.log(video);
          console.log(video.stats.views);

          return (
            <Stack sx={{ flexDirection: "row", color: "#ffff", gap: 2 }}>
              {/* -----thumnail---- */}
              <Box sx={{ borderRadius: "10px", width: "220px" }}>
                <img
                  src={video?.thumbnails[1]?.url}
                  alt=""
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    borderRadius: "10px",
                  }}
                />
              </Box>
              {/* ----content----- */}
              <Box sx={{ width: "45%" }}>
                {/* -------video---title----- */}
                <Typography varient={"h3"}>
                  {video?.title.slice(0, 50) + "..."}
                </Typography>
                {/* ----video---author---title---- */}
                <Typography>{video?.author?.title}</Typography>

                  {/* ---video---publicationDate & views----------- */}
                <Typography>
                  <Formatnumber numbers={video.stats.views} />
                  <span>.</span>
                  <span>{video?.publishedTimeText}</span>
                </Typography>
              </Box>
            </Stack>
          );
        })}
    </Box>
  );
}

export default RecomendedVideos;
