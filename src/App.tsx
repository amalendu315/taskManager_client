import React, { useEffect } from "react";
import { CssBaseline, Box, Paper, Typography } from "@mui/material";
import { Routes, Route, useNavigate, redirect } from "react-router-dom";
import { routes as appRoutes } from "./routes";
import { useSelector } from "react-redux";
import Auth from "./pages/Auth";
import NotFound404 from "./pages/404";

function App() {
  const navigate = useNavigate();
  const { isLoggedin } = useSelector((state: any) => state.login);

  const checkToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    } else {
      navigate("/auth");
    }
  };

  useEffect(() => {
    checkToken();
  }, [isLoggedin]);

  return (
    <>
      {/* <CssBaseline /> Global CSS */}
      <Box
        sx={{
          width: isLoggedin ? "100vw" : "100%",
          height: "90vh",
          overflow: "hidden",
        }}
        display="flex"
        flexDirection="column"
      >
        <Routes>
          {/*404 page route */}
          { !isLoggedin && <Route path="/auth" element={<Auth />} />}
          {appRoutes.map((route) => (
            <Route
            key={route.key}
            element={<route.component />}
            path={route.path}
            />
            ))}
            <Route path="*" element={<NotFound404 />} />
        </Routes>
      </Box>
    </>
  );
}



export default App;
