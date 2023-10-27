import { Stack, Button, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchAPI } from "../api/Api";
import { useParams } from "react-router-dom";
import SortIcon from "@mui/icons-material/Sort";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined"; //outline up
import ThumbUpIcon from "@mui/icons-material/ThumbUp"; //
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt"; // outline down
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt"; //
import SortBy from "./sortBy/SortBy";

function Comments({ comments }) {
  const [comment, setComment] = useState([]);
  const [disLike, setDislike] = useState(false);
  const [like, setLike] = useState(false);
  const [commentSortBy, setCommentSortBy] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchAPI(`video/comments/?id=${id}`).then((response) => {
      console.log(response);
      setCommentSortBy(response.filters);
      setComment(response.comments);
    }).catch((e)=>{console.log(e)});
  }, [id]);

  //   -------------likes-------
  const handelLike = () => {
    setLike(true);
  };
  //   ---disLike----
  const handelDislike = () => {
    setDislike(true);
  };

  return (
    <Stack>
      <Stack sx={{ flexDirection: "row", marginBottom: "10px" ,marginTop:"20px",alignItems:"Center",gap:"20px"}}>
        <h3 style={{color:"white",fontSize:"20px"}}>
          {comments}
          <span style={{marginLeft:"10px"}}>Comments</span>
        </h3>
        <Box sx={{display:"flex",alignItems:"Center"}}>
        <SortIcon style={{ color: "white" }} />
        <SortBy sortBy={commentSortBy ? commentSortBy : ""} />
        </Box>
      </Stack>
      {/* ----------comments----- */}
      {comment &&
        comment.map((value) => {
          return (
            <Stack  key={value.commentId} sx={{ flexDirection: "row", gap:2,marginBottom:"20px",width:"80%"}}>
              <Avatar
                alt="Cindy Baker"
                src={comment ? value?.author?.avatar[0]?.url : ""}
              />
              <Stack>
                <div>
                  <Link>
                    {comment ? value?.author.title : ""}
                    {comment ? value.publishedTimeText : ""}
                  </Link>
                </div>
                <Box sx={{color:"white"}}>{comment? value.content: ""}</Box>

                <Stack sx={{ flexDirection: "row" }}>
                  <Box sx={{ flexDirection: "row" }}>
                  
                    <Button
                      sx={{
                        border: "0px",
                        color: "white",
                        borderRadius: "100px",

                        "&:hover": {
                          border: "0",
                          backgroundColor: "#4a474775",
                        },
                      }}
                      onClick={handelLike}
                    >
                      {like ? <ThumbUpIcon fontSize="23px"/> : <ThumbUpOutlinedIcon fontSize="23px"/>}
                      {comment ? value.stats.votes : ""}
                    </Button>
                    <Button
                      sx={{
                        border: "0px",
                        color: "white",
                        borderRadius: "50px",

                        "&:hover": {
                          border: "0",
                          backgroundColor: "#4a474775",
                        },
                      }}
                      onClick={handelDislike}
                    >
                      {disLike ? <ThumbDownAltIcon fontSize="23px"/> : <ThumbDownOffAltIcon fontSize="23px"/>}
                    </Button>
                  </Box>
                  <Button
                    sx={{
                      border: "0px",
                      color: "white",
                      borderRadius: "50px",
                      height: "100%",
                      "&:hover": {
                        border: "0",
                        backgroundColor: "#4a474775",
                      },
                    }}
                  >
                    reply
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          );
        })}
    </Stack>
  );
}

export default Comments;
