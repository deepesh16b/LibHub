import { Box, Typography, Menu, MenuItem } from "@mui/material";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import React, { useState } from "react";

const Profile = ({ account, setAccount }) => {
  const [open, setOpen] = useState(false);
  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const logout = ()=>{
    setAccount("");
  }
  const [hover, setHover] = useState(false);
  // --------------------------------------
  return (
    <>
       <Box
        onClick={handleClick}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          marginTop: 2,
          marginRight: 30,
          fontWeight: "600",
          cursor: "pointer",
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "white",
          borderRadius: "50%",
          padding: "9px",
          height: "20px",
          width: "23px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: hover ? "white" : "transparent",
          color: hover ? "green" : "white", // Adjust default color as needed
          transition: "all 0.3s ease", // Smooth hover effect
        }}
      >
        {account.trim().charAt(0).toUpperCase()}
      </Box>


      <Menu style={{marginTop : 15, marginLeft : -30,borderRadius: "20%"}} anchorEl={open} open={Boolean(open)} onClose={handleClose}>
        <MenuItem  style={{padding : "4px 20px 4px 20px" }} onClick={() => {handleClose(); logout();}}>
          <PowerSettingsNewIcon fontSize="small" color="success" style={{marginRight : 10}}/>
          <Typography style={{fontSize : 14, }}>Logout</Typography>
        </MenuItem>
      </Menu>
    </>
  );
};
export default Profile;
