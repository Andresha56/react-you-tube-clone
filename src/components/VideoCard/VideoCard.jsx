import Grid from "@mui/material/Grid";
import * as React from "react";
import {Link} from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  Avatar,
  Typography,
  Box,
  Stack,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import VideoLength from "../videoLength/VideoLength";
import FormatNumber from "../formatNumber/FormatNumber";


function VideoCard({ video }) {

  return (
    <Grid item xs={6} md={4}>
     <Link to={`/video-id-page/${video?.video?.videoId}`}>
     <Card
        sx={{
          maxWidth: 345,
          border: 0,
          height: "260px",
          backgroundColor: "#181717",
        }}
      >
        <Box sx={{ position: "relative" }}>
          <CardMedia
            component="img"
            height="170"
            image={video?.video?.thumbnails[0].url}
            alt="Video Thumbnail"
            sx={{objectFit:"contain",marginBottom:"10px"}}
          />
          {video?.video?.lengthSeconds && (
            <VideoLength videoLen={video?.video?.lengthSeconds} />
          )}
        </Box>
        <CardContent
          sx={{ display: "flex", p: 0.3, backgroundColor: "#181717", gap: 2 }}
        >
          {/* ---------------avatar------------- */}
          <Avatar alt="Remy Sharp" src={video?.video?.author?.avatar[0]?.url} />

          <div>
            {/* -----------video-deatil---------- */}
            <Typography
              color="white"
              sx={{ fontSize: "12px", color: "#f1f1f1", objectFit: "contain" }}
            >
              {video?.video?.title.slice(0, 50) + "..."}
            </Typography>
            {/* --------------author----detail------------ */}
            <Stack
              variant="subtitle1"
              color="#aaa"
              sx={{
                fontSize: "14px",
                flexDirection: "row",
                gap: "5px",
                alignItems: "center",
              }}
            >
              {video?.video?.author?.title}
              <span>
                {video?.video?.author?.badges[0]?.type ===
                  "VERIFIED_CHANNEL" && <CheckCircleIcon fontSize="20px" />}
              </span>
            </Stack>

            {/* ------------views----upload--date----- */}
            <Stack sx={{ flexDirection: "row",alignItems:"center", color:"#aaa"}}>
              {video?.video?.stats?.views && (
                <FormatNumber numbers={video?.video?.stats?.views} />
              )}
              {video?.video?.publishedTimeText}
            </Stack>
          </div>
        </CardContent>
      </Card>
     </Link>
    </Grid>
  );
}

export default VideoCard;
