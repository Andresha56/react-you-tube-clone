import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Avatar from '@mui/material/Avatar';
import {Link} from 'react-router-dom';
import ytLogo from "../../assets/yt-logo.png";
import { deepPurple } from '@mui/material/colors';
import NavSearch from "./NavSearch";
import { BiVideoPlus } from 'react-icons/bi';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';





function Nav() {
  return (
    <>
      <Box sx={{ position:"sticky",top:0,backgroundColor:"#181818",zIndex:999,padding:"0 20px"}}>
        <AppBar position="static" sx={{background:"transparent" }}>
          <Toolbar sx={{justifyContent:"space-between"}}>
          
          <Link to="./">
          <img
            width={90}

           src={ytLogo} alt="ytLogoMobile" />
          </Link>
          <NavSearch/>
            <Box sx={{display:"flex",alignItems:"center", width:"14%",justifyContent:"space-between"}}>
              <BiVideoPlus style={{ fontSize: '1.5rem' }}/>
              <NotificationsNoneIcon/>
            <Avatar sx={{ bgcolor: deepPurple[500] ,width: 30, height: 30 }}>AR</Avatar>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Nav;
