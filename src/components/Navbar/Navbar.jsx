import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Drawer,
  Box,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { links } from "./links";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const openNav = () => {
    setActive(true);
  };
  const closeNav = () => {
    setActive(false);
  };

  // style for flex box container
  const style = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    p: 3,
  };
  const styleTwo = {
    display: {
      xs: "none",
      md: "flex",
    },
    justifyContent: "space-between",
    alignItems: "center",
  };

  // drawer component
  const list = () => {
    return (
      <Box sx={{ width: "200px" }}>
        <List>
          {links.map((link) => (
            <Link to={link.path} key={link.id}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary={link.name} sx={{ color: "#000" }} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>

        <List>
          <Link to="/register">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText
                  primary={"Get Started Now !!!"}
                  sx={{ color: "#000" }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="/login">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary={"Login"} sx={{ color: "#000" }} />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
      </Box>
    );
  };

  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar sx={style}>
          <Box sx={{ width: "200px", display: { xs: "none", md: "block" } }}>
            <img src="/assets/logo-white.png" alt="logo" />
          </Box>
          <Box sx={{ width: "78px", display: { xs: "block", md: "none" } }}>
            <img src="/assets/logo-small.png" alt="small logo" />
          </Box>
          <Box sx={styleTwo}>
            {links.map((link) => (
              <Link to={link.path} key={link.id}>
                <Typography
                  variant="body1"
                  component="p"
                  sx={{ mr: 4, color: "#000" }}
                >
                  {link.name}
                </Typography>
              </Link>
            ))}
          </Box>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Link to="register">
              <Button variant="contained" color="primary" sx={{ mr: 4 }}>
                Get Started Now !!!
              </Button>
            </Link>
            <Link to="login">
              <Button variant="outlined" color="primary">
                login
              </Button>
            </Link>
          </Box>
          <Box sx={{ display: { md: "none", xs: "block" } }}>
            <IconButton onClick={openNav}>
              <FaBars color="	#89CFF0" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={active} onClose={closeNav}>
        {list()}
      </Drawer>
    </React.Fragment>
  );
};

export default Navbar;
