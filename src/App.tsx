import React from 'react';
import { 
  CssBaseline,
  Box,
  Paper,
  Typography,
 } from '@mui/material';
 import { Routes, Route } from 'react-router-dom';
 import { routes as appRoutes } from "./routes"

function App() {
  return (
    <>
      <CssBaseline /> {/* Global CSS */}
      <Box
        sx={{
          width: "100%",
          height: "90vh",
        }}
        display="flex"
        flexDirection="column"
      >
          <Routes>
            {appRoutes.map((route) => (
              <Route
                key={route.key}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Routes>
      </Box>
    </>
  );
}

export default App;
