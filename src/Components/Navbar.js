/* eslint-disable jsx-a11y/alt-text */
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import sun from "../images/sun.png";


export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
            <img src={sun} style={{width:"30px",height:"25px"}}/>
          <Typography sx={{ml:"10px"}} variant="h6" color="inherit" component="div">
            Weather Forecast
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}