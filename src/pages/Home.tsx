import React from 'react'
import { Box, Typography } from '@mui/material'
import { useSelector } from 'react-redux'

const Home = () => {
  const { user } = useSelector((state: any) => state.login);
  return (
    <div>
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
        <Typography variant="h3">Welcome {user?.fullname}</Typography>
        <Typography variant="h4">This is Home page</Typography>
      </Box>
    </div>
  )
}

export default Home