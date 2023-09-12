import { Box, Stack, Container, Avatar, Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { fetchAPI } from "../api/Api";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import Formatnumber from "../formatNumber/FormatNumber";
import { PiShareFatLight } from "react-icons/pi";
import Comments from "../comments/Comments";

function VideoID() {
  const [video, setVideo] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchAPI(`video/details/?id=${id}`).then((response) => {
      setVideo(response);
      console.log(response);
    });
  }, [id]);

  // -----------handelLikes---------
  const [likes, setLikes] = useState(false);
  const handelLikes = () => {
    setLikes(true);
  };
  // -----handelDisLikes-----
  const [dislikes, setDisLikes] = useState(false);
  const handelDisLikes = () => {
    setDisLikes(true);
  };

  return video.length !== 0 ? (
    <Box>
      <Box>
        <Stack
          sx={{
            height: "400px",
            width: "100%",
            background: "#000000",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            controls
            height="100%"
            weight="60%"
          />
        </Stack>
      </Box>
      <Container maxWidth="1200px">
        <Stack sx={{ flexDirection: "column" }}>
          <Stack sx={{ marginTop: 2 }}>
            <h1 style={{ color: "#f1f1f1", fontSize: "18px" }}>
              {video?.title}
            </h1>

            <Stack sx={{ marginTop: "10px" }}>
              <Stack
                sx={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Stack
                  sx={{ flexDirection: "row", alignItems: "center", gap: 1 }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src={video?.author?.avatar[1]?.url}
                  />

                  <Stack sx={{ flexDirection: "column", color: "#aaa" }}>
                    <Stack sx={{ alignItems: "center", flexDirection: "row" }}>
                      <Link>{video?.author?.title}</Link>

                      {video?.author?.badges[0]?.type ? (
                        <CheckCircleIcon
                          fontSize="20px"
                          sx={{ marginLeft: "5px" }}
                        />
                      ) : (
                        ""
                      )}
                    </Stack>
                    <span>{video?.author?.stats?.subscribersText}</span>
                  </Stack>
                  <Box sx={{ marginLeft: "20px" }}>
                    <button
                      style={{
                        borderRadius: "50px",
                        border: 0,
                        padding: "8px 10px",
                        fontWeight: "bold",
                        color: "black",
                      }}
                    >
                      Subscribe
                    </button>
                  </Box>
                </Stack>
                <Stack>
                  <Stack
                    sx={{
                      flexDirection: "row",
                      justifyContent: "center",
                      gap: 2,
                    }}
                  >
                    <Stack
                      sx={{
                        backgroundColor: "#272727",
                        borderRadius: "50px",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <Button
                        sx={{
                          border: "0px",
                          color: "white",
                          height: "100%",
                          width: "100%",
                          borderTopLeftRadius: "20px",
                          borderBottomLeftRadius: "20px",
                          "&:hover": {
                            border: "0",
                            backgroundColor: "#4a474775",
                          },
                        }}
                        variant="outlined"
                        onClick={handelLikes}
                        startIcon={
                          likes ? <ThumbUpIcon /> : <ThumbUpOutlinedIcon />
                        }
                      >
                        <Formatnumber numbers={video?.stats?.likes} />
                      </Button>
                      <span style={{ color: "#aaa" }}>|</span>
                      <Button
                        sx={{
                          border: "0px",
                          color: "white",
                          borderTopRightRadius: "15px",
                          borderBottomRightRadius: "15px",
                          height: "100%",
                          "&:hover": {
                            border: "0",
                            backgroundColor: "#4a474775",
                          },
                        }}
                        variant="outlined"
                        onClick={handelDisLikes}
                        startIcon={
                          dislikes ? (
                            <ThumbDownAltIcon />
                          ) : (
                            <ThumbDownOffAltIcon />
                          )
                        }
                      ></Button>
                    </Stack>
                    <Button
                      sx={{
                        color: "#fff",
                        backgroundColor: "#272727",
                        height: "100%",
                        borderRadius: "50px",
                        "&:hover": {
                          border: "0",
                          backgroundColor: "#4a474775",
                        },
                      }}
                    >
                      <PiShareFatLight />
                      Share
                    </Button>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>

          <Stack></Stack>
        </Stack>
        <Comments comments={video?.stats?.comments ? video?.stats?.comments  :""}/>
      </Container>
    </Box>
  ) : (
    ""
  );
}

export default VideoID;