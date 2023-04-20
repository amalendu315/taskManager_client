import { Box, Typography } from '@mui/material'
import React from 'react'

//404 page

const NotFound404 = () => {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          width: "100vw",
          gap: "10px",
        }}
      >
        <Typography variant="h3">Error:404 !!</Typography>
        <Typography variant="h4">Page not found</Typography>
      </Box>
    );
}


export default NotFound404