import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { ExploreSection } from "./explore/Explore";

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
  // ------destructure explore---
 
// ------reder---video---based--on--guide--logic----
  const{setRentderVideo}=UseVideo()

   const handelGuide =(guide)=>{
    setRentderVideo(guide)
  }
  return (
    <>
      <Stack sx={{ gap: 1 ,  position:" sticky",top:"90px"}}>
        {ExploreSection.map((values) => {
          const { id, explore, exploreIcon } = values;
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
                onClick={(()=>handelGuide(explore))}
              >
                {exploreIcon}
                {explore}
              </button>
            </Box>
          );
        })}
      </Stack>
    </>
  );
}

export default Sidebar;
