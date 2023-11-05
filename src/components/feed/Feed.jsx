

import {Box} from '@mui/material';
import Sidebar from '../sidebar/Sidebar';
import Videos from '../videos/Videos';



function Feed() {
  return (
   <Box sx={{ display:"grid", gridTemplateColumns:"auto 1fr",gridTemplateRows:"auto", padding:"15px 0"
   }}>
    <Box sx={{px:{sx:0,md:2},backgroundColor:"#181717"}}>
      <Sidebar/>
    </Box>
      
      <>
      <Videos/>
      </>
      
   </Box>                                          
  )
}

export default Feed
