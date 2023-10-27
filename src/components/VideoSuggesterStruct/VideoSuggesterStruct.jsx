import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";
import { Stack, Box, Typography } from "@mui/material";
import Formatnumber from "../formatNumber/FormatNumber";
import Avatar from '@mui/material/Avatar';

function VideoSuggesterStruct({
  videoId,
  thumbnail,
  videoTitle,
  authorTitle,
  authorbadge,
  views,
  publishedTimeText,
  avatar,
}) {
  return (
    <Box sx={{ marginTop: "20px" }}>
      <Link to={`/video-id-page/${videoId}`}>
        <Stack
          sx={{
            flexDirection: "row",
            color: "#ffff",
            gap: 2,
            marginBottom: "15px",
          }}
        >
          {/* -----thumnail---- */}
          <Box sx={{ borderRadius: "10px", width: "220px" }}>
            <img
              src={thumbnail}
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
            <Typography varient={"h3"}>{videoTitle}</Typography>

            {/* -----avatar---- */}
              {avatar ?  (
                <Stack sx={{ display :"row"}}>
                <div><Avatar alt="Remy Sharp" src={avatar}  /></div>
                <div>{authorTitle}</div>
                </Stack>
              )
              
              
              :("")}

            {/* ----video---author---title---- */}
            <Typography sx={{ fontSize: "13px", color: "#909090" }}>
              {authorTitle}
              <span>
                {authorbadge === "VERIFIED_CHANNEL" ? (
                  <CheckCircleIcon fontSize="20px" />
                ) : (
                  ""
                )}
              </span>
            </Typography>

            {/* ---video---publicationDate & views----------- */}
            <Typography sx={{ fontSize: "13px", color: "#909090" }}>
              <Formatnumber numbers={views} />
              <span>.</span>
              <span>{publishedTimeText}</span>
            </Typography>
          </Box>
        </Stack>
      </Link>
    </Box>
  );
}

export default VideoSuggesterStruct;
