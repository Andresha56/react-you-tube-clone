import Paper from "@mui/material/Paper";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import MicNoneOutlinedIcon from "@mui/icons-material/MicNoneOutlined";

//Api
import { fetchAPI } from "../api/Api";
import React, { useState } from "react";
import { useSearchContext } from "../../context/SearchContext/SearchContext";


function NavSearch() {
  

  const inputStyle = {
    border: 0,
    outline: 0,
    padding: "7px 10px",
    borderRadius: "500px",
    backgroundColor: "transparent",
    color: "#ffffff",
    width: "100%",
  };
  const{setSearchQuery}=useSearchContext();

  // ----------input--state-------
  const [searchedVideo, setSearchedVideo] = useState("");
  // -------search---state------
  const [searchContent, setSearchContent] = useState([]);

  // ------------handelSearchItem----------
  const handelSearchItem = (e) => {
    setSearchedVideo(e.target.value);
  };

  // -----------handelSearchSubmit-----------
  const handelSearchSubmit = (event) => {
    event.preventDefault();

    fetchAPI(`search/?q=${searchedVideo}`).then((response) =>{

      setSearchContent(response)

      // -----set---search-Content---to--search--context---state----
      setSearchQuery(response)
    }
     
    );
    //set---search-Contents---to--context---
    searchContent ? setSearchQuery(searchContent) :console.log("iy is a null")
   
  };
  return (
    <Box sx={{ display: "flex" }}>
      <Paper
        sx={{
          background: "transparent",
          border: "0.1px solid #808080",
          borderRadius: "50px",
          width: "400px",
          display: "flex",
        }}
      >
        <form
          onSubmit={handelSearchSubmit}
          style={{ display: "flex", width: "100%", borderRadius: "50px" }}
        >
          {/* -------search---input------- */}
          <input
            type="text"
            placeholder="search"
            value={searchedVideo}
            onChange={handelSearchItem}
            style={inputStyle}
          />
          {/* ---search----icon----------- */}
          <button
            type="submit"
            style={{
              backgroundColor: "#383535",
              borderTopRightRadius: "15px",
              borderBottomRightRadius: "15px",
              paddingLeft: "10px",
              display: "flex",
              alignItems: "center",
              outline: "0",
              border: "0",
            }}
          >
            <SearchIcon sx={{ color: "#ffffff", marginRight: "10px" }} />
          </button>
        </form>
      </Paper>
      {/* ------mic---- */}
      <Avatar
        sx={{
          width: "2rem",
          height: "2rem",
          marginLeft: 2,
          backgroundColor: "#383535",
        }}
      >
        {" "}
        {/*  //greyCol*/}
        <MicNoneOutlinedIcon />
      </Avatar>
    </Box>
  );
}

export default NavSearch;
