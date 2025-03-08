"use client"; // Ensures it runs only on the client-side

import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Button, Menu, MenuItem, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import Image from "next/image";
import { FaBagShopping } from "react-icons/fa6";

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
          <Button className="" color="inherit" component={Link} href="/pages/shop">Shop</Button>
         
          <Button color="inherit" component={Link} href="/pages/account">Account</Button>
          <Button color="inherit" component={Link} href="/pages/account"><FaBagShopping /></Button>
         
        </Box>

        {/* Mobile Menu */}
        <IconButton edge="end" color="inherit" sx={{ display: { md: "none" } }} onClick={handleMenuOpen}>
          <MenuIcon />
        </IconButton>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
          <MenuItem onClick={handleMenuClose} component={Link} href="/pages/shop">Shop</MenuItem>
        
          <MenuItem onClick={handleMenuClose} component={Link} href="/pages/account">Account</MenuItem>
          <MenuItem color="inherit" component={Link} href="/pages/account"><FaBagShopping /></MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
