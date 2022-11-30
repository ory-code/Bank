import Image from "next/image";
import React from "react";
import { logo } from "../assets/";
import style from "./Navbar.module.scss";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={`  ${style.hamburger__menu}`}>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon fontSize="large" />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Home</MenuItem>
        <MenuItem onClick={handleClose}>About us</MenuItem>
        <MenuItem onClick={handleClose}>Features</MenuItem>
        <MenuItem onClick={handleClose}>Solution</MenuItem>
      </Menu>
    </div>
  );
}

const NavBar = () => {
  return (
    <header className={` ${style.header}`}>
      <nav className={style.nav}>
        <Link href={"/"}>
          <Image
            src={logo}
            alt="bank logo"
            width={82}
            height={25}
            loading="lazy"
          />
        </Link>
        <ul className={style.ul}>
          <li>Home</li>
          <li>About us</li>
          <li>features</li>
          <li>Solution</li>
        </ul>
        <BasicMenu />
      </nav>
    </header>
  );
};

export default NavBar;
