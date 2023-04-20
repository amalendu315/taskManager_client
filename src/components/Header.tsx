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
import { routes } from "../routes";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../redux/features/login/loginSlice";
import "react-toastify/dist/ReactToastify.css";


const Navbar: FC = (): ReactElement => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const checkAuth = useSelector((state: any) => state.login.isLoggedIn);

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

  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "primary.main",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters 
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        >
          <Typography
            variant="h6"
            noWrap
            textAlign="center"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              color: "white",
            }}
          >
            Collaborative TaskManager
          </Typography>
          {checkAuth && (
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                // aria-label="account of current user"
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
                  color: "white",
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
                  <Typography textAlign="center">LOGOUT</Typography>
                </MenuItem>
              </Menu>
            </Box>
          )}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, color: "white", textAlign: "center" }}
          >
            Collaborative TaskManager
          </Typography>
          {checkAuth && (
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "space-around",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
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
                    sx={{
                      fontSize: "large",
                      marginLeft: "2rem",
                      color: "white",
                    }}
                  >
                    {page.title}
                  </Link>
                ))}
              </Box>
              <Button
                sx={{
                  marginLeft: "1rem",
                  fontWeight: "bold",
                  justifyContent: "flex-end",
                }}
                variant="text"
                onClick={handleLogout}
              >
                <Typography color="white" textAlign="center">
                  LOGOUT
                </Typography>
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>
    </Box>
  );
};

export default Navbar;
