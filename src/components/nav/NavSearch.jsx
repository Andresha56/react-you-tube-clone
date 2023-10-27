import Paper from "@mui/material/Paper";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import MicNoneOutlinedIcon from "@mui/icons-material/MicNoneOutlined";

//Api
import { fetchAPI } from "../api/Api";
import React, { useEffect, useState } from "react";
import { useSearchContext } from "../../context/SearchContext/SearchContext";
import { useNavigate } from "react-router-dom";

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
  const { setSearchQuery } = useSearchContext();
  const navigate = useNavigate(); // Import useNavigate from 'react-router-dom'
  // ----------input--state-------
  const [searchedVideo, setSearchedVideo] = useState("");


  const [isSearch,setIsSearch]=useState(false);

  // ------------handelSearchItem----------
  const handelSearchItem = (e) => {
    setSearchedVideo(e.target.value);
  };

  // -----------handelSearchSubmit-----------
  const handelSearchSubmit = (event) => {
    event.preventDefault();
    setIsSearch(true);
    // After handling the search, redirect to the search page
    navigate("/search-video");
  };

  useEffect(() => {
    if (isSearch) {
      fetchAPI(`search/?q=${searchedVideo}`)
        .then((response) => {
          // Ensure you handle potential errors here
          if (response) {
            // Set the content to the search context
            setSearchQuery(response);
          }
        })
        .catch((error) => {
          console.error("Error fetching search content:", error);
        });
    }
  }, [isSearch, searchedVideo,setSearchQuery]);


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
          {
            // <Link to="/search-video">
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
                height: "100%",
              }}
            >
              <SearchIcon sx={{ color: "#ffffff", marginRight: "10px" }} />
            </button>
            // </Link>
          }
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
