
import {Stack} from '@mui/material';
import { Box } from '@mui/material';
import Sidebar from '../sidebar/Sidebar';
import Videos from '../videos/Videos';



function Feed() {
  return (
   <Stack sx={{flexDirection:{sx:"column" , sm:"row",marginTop:"30px"}}}>
    <Box sx={{height:{sx:"auto",md:"calc(100vh - 64px)"},px:{sx:0,md:2},backgroundColor:"#181717"}}>
        <Sidebar/>
    </Box>
    <>
      <Videos/>
    </>
   
   </Stack>
  )
}

export default Feed
