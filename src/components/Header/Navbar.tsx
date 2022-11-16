import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AppsIcon from "@mui/icons-material/Apps";

import profileImg from "../../assets/profile.jpeg";
import useStyles from "./styles";

export default function NavBar() {
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Google
          </Typography>
          <Box className={classes.rightContent}>
            <IconButton sx={{ mr: 2 }}>
              <AppsIcon />
            </IconButton>
            <img src={profileImg} alt="logo" className={classes.profileImg} />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
