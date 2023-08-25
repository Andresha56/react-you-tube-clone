import Paper from "@mui/material/Paper";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import MicNoneOutlinedIcon from "@mui/icons-material/MicNoneOutlined";

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
  return (
    <Box sx={{display:"flex"}}>
      <Paper
        sx={{
          background: "transparent",
          border: "0.1px solid #808080",
          borderRadius: "50px",
          width: "400px",
          display: "flex",
        }}
      >
        <input
          type="text"
          placeholder="search"
          // value=""
          style={inputStyle}
        />
        <Box
          sx={{
            backgroundColor: "#383535",
            borderTopRightRadius: "15px",
            borderBottomRightRadius: "15px",
            paddingLeft: "10px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <SearchIcon sx={{ color: "#ffffff", marginRight: "10px" }} />
        </Box>
      </Paper>
      {/* ------mic---- */}
     <Avatar sx={{ width:"2rem", height:"2rem",marginLeft:2, backgroundColor:"#383535"}}> {/*  //greyCol*/}
        <MicNoneOutlinedIcon /> 
      </Avatar>
    </Box>
  );
}

export default NavSearch;
