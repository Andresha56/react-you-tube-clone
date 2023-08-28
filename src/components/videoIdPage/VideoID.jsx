import { Box ,Stack } from "@mui/material";
import { useParams } from "react-router-dom";
import { fetchAPI } from "../api/Api";
import { useEffect, useState } from "react";
import ReactPlayer from 'react-player'

function VideoID() {
  const [video,setVideo]=useState([])
  const { id } = useParams();
  useEffect(() => {
    fetchAPI(`video/details/?id=${id}`).then((response) => {
      setVideo(response)
      console.log(response)
    });
  },[id]);
  console.log(id);
  return (
    <Box>
      <Box>
        <Stack sx={{height:"400px",width:"100%",background:"#000000",justifyContent:"center",alignItems:"center"}}>
          <ReactPlayer 
          url={`https://www.youtube.com/watch?v=${id}`}
          controls
          height="100%"
          weight="60%"
          />
        </Stack>
      </Box>
    </Box>
  );
}

export default VideoID;
