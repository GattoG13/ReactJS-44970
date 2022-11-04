import { AppBar, Button, IconButton, Tab, Tabs, Toolbar } from "@mui/material";
import React from "react";
import "../assets/css/Navbar.css";
import CartWidget from "./CartWidget";
import Contacto from "./Contacto";
import ItemListContainer from "./ItemListContainer";
import Logo from "./Logo";

function Navbar() {
  return (
    <div className="Navbar">
      <AppBar position="sticky" sx={{ background: "#000" }}>
        <Toolbar>
          <IconButton aria-label="app" color="inherit"></IconButton>
          <Logo />
          <Tabs
            textColor="inherit"
            sx={{
              "&:hover": {
                backgroundColor: "secondary",
              },
            }}
          >
            <Tab label="Products" to={<ItemListContainer />} />
            <Tab label="Categories" />
            <Tab label="Contact Us" LinkComponent={<Contacto />} />
          </Tabs>
          <Button
            sx={{
              marginLeft: "auto",
              backgroundColor: "#000",
              "&:hover": {
                backgroundColor: "#ddd",
                color: "#000",
              },
            }}
            variant="contained"
          >
            Login
          </Button>
          <Button
            sx={{
              backgroundColor: "#000",
              "&:hover": {
                backgroundColor: "#ddd",
                color: "#000",
              },
            }}
            variant="contained"
          >
            Sign up
          </Button>
          <CartWidget />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
