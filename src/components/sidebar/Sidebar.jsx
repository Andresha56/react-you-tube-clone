import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useState } from "react";
// ---Guide--icons------
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";
import CodeIcon from "@mui/icons-material/Code";
import PodcastsIcon from "@mui/icons-material/Podcasts";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import FitnessCenterOutlinedIcon from "@mui/icons-material/FitnessCenterOutlined";
import WifiTetheringOutlinedIcon from "@mui/icons-material/WifiTetheringOutlined";
import WhatshotIcon from "@mui/icons-material/Whatshot";
// ---XXX----

// ------reder---video---based--on--guide------
import { UseVideo } from "../../context/videoRenderByGuide/RenderVideo";

const guideButtonStyle = {
  width: "100%",
  padding: "7px 15px",
  border: 0,
  color: "#ffffff",
  backgroundColor: "transparent",
  cursor: "pointer",
  borderRadius: "50px",
  display:"flex",
  alignItems:"center",
};
function Sidebar() {
  //---id of hoverd guide button---
  const [hoveredId, setHoveredId] = useState(null);
  const guideSection = [
    { id: 1, guideEntry: "Home", guideIcons: <HomeOutlinedIcon sx={{ fontSize: 20 ,marginRight:"7px"}} /> },
    { id: 2, guideEntry: "Music", guideIcons: <MusicNoteOutlinedIcon sx={{ fontSize: 20 ,marginRight:"7px"}} /> },
    { id: 3, guideEntry: "Coding", guideIcons: <CodeIcon sx={{ fontSize: 20,marginRight:"7px" }} /> },
    { id: 4, guideEntry: "Podcast", guideIcons: <PodcastsIcon sx={{ fontSize: 20 ,marginRight:"7px"}} /> },
    { id: 5, guideEntry: "Education", guideIcons: <SchoolOutlinedIcon sx={{ fontSize: 20 ,marginRight:"7px"}} /> },
    { id: 6, guideEntry: "News", guideIcons: <NewspaperOutlinedIcon sx={{ fontSize: 20 ,marginRight:"7px"}} /> },
    { id: 7, guideEntry: "Motivation", guideIcons: <PsychologyOutlinedIcon sx={{ fontSize: 20 ,marginRight:"7px"}} /> },
    { id: 8, guideEntry: "Food", guideIcons: <LocalDiningIcon sx={{ fontSize: 20 ,marginRight:"7px"}} /> },
    { id: 9, guideEntry: "Fitness", guideIcons: <FitnessCenterOutlinedIcon sx={{ fontSize: 20 ,marginRight:"7px"}} /> },
    { id: 10, guideEntry: "Live", guideIcons: <WifiTetheringOutlinedIcon sx={{ fontSize: 20 ,marginRight:"7px"}} /> },
    { id: 11, guideEntry: "Trending", guideIcons: <WhatshotIcon sx={{ fontSize: 20 ,marginRight:"7px"}} /> },
  ];
 
// ------reder---video---based--on--guide--logic----
  const{setRentderVideo}=UseVideo()

   const handelGuide =(guide)=>{
    setRentderVideo(guide)
  }
  return (
    <>
      <Stack sx={{ gap: 1 }}>
        {guideSection.map((values) => {
          const { id, guideEntry, guideIcons } = values;
          return (
            <Box key={id}>
              <button
                style={{
                  ...guideButtonStyle,
                  backgroundColor: hoveredId === id ? "#383535" : "transparent",
                }}
                onMouseEnter={() => {
                  setHoveredId(id);
                }}
                onMouseLeave={() => {
                  setHoveredId(null);
                }}
                onClick={(()=>handelGuide(guideEntry))}
              >
                {guideIcons}
                {guideEntry}
              </button>
            </Box>
          );
        })}
      </Stack>
    </>
  );
}

export default Sidebar;
