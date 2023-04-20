// src/components/Navbar.tsx

import React, { FC, ReactElement, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Link,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
// import { routes } from "../routes";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../redux/features/login/loginSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Navbar: FC = (): ReactElement => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state: any) => state.login);

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleLogout = () => {
      dispatch(logout());
      navigate("/auth");
  };

  const routes = [
    {
      key: "home",
      path: "/home",
      title: "Home",
    },
    {
      key: "about",
      path: "/about",
      title: "About",
    },
    {
      key: "contact",
      path: "/contact",
      title: "Contact",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "secondary.main",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
            }}
          >
            Collaborative TaskManager
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {routes.map((page) => (
                <Link
                  key={page.key}
                  component={NavLink}
                  to={page.path}
                  color="black"
                  underline="none"
                  variant="button"
                >
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.title}</Typography>
                  </MenuItem>
                </Link>
              ))}
              <MenuItem onClick={handleLogout}>
                <Typography textAlign="center" >LOGOUT</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            Collaborative TaskManager
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                marginLeft: "1rem",
              }}
            >
              {routes.map((page) => (
                <Link
                  key={page.key}
                  component={NavLink}
                  to={page.path}
                  color="black"
                  underline="none"
                  variant="button"
                  sx={{ fontSize: "large", marginLeft: "2rem" }}
                >
                  {page.title}
                </Link>
              ))}
              <MenuItem
                onClick={handleLogout}
                sx={{ fontSize: "large", marginLeft: "2rem" }}
              >
                <Typography textAlign="center">LOGOUT</Typography>
              </MenuItem>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </Box>
  );
};

export default Navbar;
