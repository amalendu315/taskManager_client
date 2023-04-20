import React from "react";
import {Box} from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

const Form = (props: any) => {
  const { formType }: any = props;

  return (
    <Box>
      {formType === "login" ? (
        <>
          <LoginForm />
        </>
      ) : (
        <>
          <RegisterForm />
        </>
      )}
    </Box>
  );
};

export default Form;
