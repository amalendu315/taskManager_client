import React, { useState } from "react";
import { Typography, Box, Button, Paper } from "@mui/material";
import Form from "../components/Form";

const Auth = () => {
  const [formType, setFormType] = useState("login");
  return (
    <>
      <Box
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        sx={{
          backgroundImage: `url(${require("../assets/bg.jpg")})`,
          backgroundSize: "cover",
          // backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            width: "100%",
            maxWidth: "500px",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: "rgba(255, 255, 255, 0.5)",
          }}
        >
          <Typography color="primary.dark" variant="h4">
            {formType === "login" ? "Login" : "Register"}
          </Typography>
          <Form formType={formType} />
          <Typography
            sx={{
              marginTop: "10px",
            }}
          >
            {formType === "login"
              ? "Don't have an account?"
              : "Already have an account?"}
          </Typography>
          <Button
            variant="text"
            color="primary"
            onClick={() =>
              setFormType(formType === "login" ? "register" : "login")
            }
          >
            {formType === "login" ? "Register" : "Login"}
          </Button>
        </Paper>
      </Box>
    </>
  );
};

export default Auth;
