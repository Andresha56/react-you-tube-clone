import Grid from "@mui/material/Grid";
import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

function VideoCard({video}) 
{
  // console.log(video.video);
  console.log(video);
  console.log("-------------clear------------");
  return (
    <Grid item xs={6} md={4}>
      <Card
        sx={{
          maxWidth: 345,
          border: 0,
          height: "260px",
          backgroundColor: "#181717",
        }}
      >
        <CardMedia component="img" height="175" image={""} alt="Paella dish" />

        <CardContent
          sx={{ display: "flex", p: 0.3, backgroundColor: "#181717" }}
        >
          <Avatar alt="Remy Sharp" />

          <div>
            <Typography
              variant="subtitle1"
              color="white"
              sx={{ fontSize: "14px" }}
            >
              {""}
            </Typography>

            <Typography
              color="white"
              sx={{ fontSize: "12px", color: "#383535" }}
            >
              {""}
            </Typography>
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default VideoCard;
