"use client"; // Ensures it runs only on the client-side

import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Button, Menu, MenuItem, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  
  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <AppBar className="bg-black text-white absolute z-50 opacity-85" position="static" >
      <Toolbar>
        {/* Logo / Brand Name */}
        <Typography variant="h6"  sx={{ flexGrow: 1 }}>
          <Link href="/" className="text-white text-xl font-bold">
            <Image src={"/products/logo.png"} width={50} height={50} alt="logo"/>
          </Link>
        </Typography>

        {/* Desktop Navigation */}
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <Button className="" color="inherit" component={Link} href="/shop">Shop</Button>
          <Button color="inherit" component={Link} href="/about">About</Button>
          <Button color="inherit" component={Link} href="/pages/account">Account</Button>
         
        </Box>

        {/* Mobile Menu */}
        <IconButton edge="end" color="inherit" sx={{ display: { md: "none" } }} onClick={handleMenuOpen}>
          <MenuIcon />
        </IconButton>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
          <MenuItem onClick={handleMenuClose} component={Link} href="/shop">Shop</MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} href="/about">About</MenuItem>
          <MenuItem onClick={handleMenuClose} component={Link} href="/contact">Contact</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
