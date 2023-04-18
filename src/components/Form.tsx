import React, { useEffect } from "react";
import { Typography, Box, Button, TextField} from "@mui/material";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";

const Form = (props: any) => {
  const { formType }: any = props;
  const navigate = useNavigate();

  const initialValuesLogin = {
    email: "",
    password: "",
  };

  const initialValuesRegister = {
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validate = (values: any) => {
    const errors: any = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    if (formType === "register") {
      if (!values.fullname) {
        errors.fullname = "Required";
      }
      if (!values.confirmPassword) {
        errors.confirmPassword = "Required";
      } else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = "Passwords do not match";
      }
    }
    return errors;
  };

  const onSubmit = (values: any) => {
    console.log(values);
    navigate("/home");
  };

  useEffect(() => {
    console.log(formType);
  }, [formType]);

  return (
    <Box>
      {formType === "login" ? (
        <>
          <Formik
            initialValues={initialValuesLogin}
            validate={validate}
            onSubmit={onSubmit}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit} style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "10px",
                
              }} >
                <TextField
                  type="email"
                  name="email"
                  // placeholder="Email"
                  label="Email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email && errors.email}
                <TextField
                  type="password"
                  name="password"
                  // placeholder="Password"
                  label="Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {errors.password && touched.password && errors.password}
                <Button variant="contained" type="submit" disabled={isSubmitting}>
                  Submit
                </Button>
              </form>
            )}
          </Formik>
        </>
      ) : (
        <>
          <Formik
            initialValues={initialValuesRegister}
            validate={validate}
            onSubmit={onSubmit}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => <form onSubmit={handleSubmit} style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
            }} >
              <TextField
                type="text"
                name="fullname"
                // placeholder="Full Name"
                label="Full Name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.fullname}
              />
              {errors.fullname && touched.fullname && errors.fullname}
              <TextField
                type="email"
                name="email"
                // placeholder="Email"
                label="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              {errors.email && touched.email && errors.email}
              <TextField
                type="password"
                name="password"
                // placeholder="Password"
                label="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              {errors.password && touched.password && errors.password}
              <TextField
                type="password"
                name="confirmPassword"
                // placeholder="Confirm Password"
                label="Confirm Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
              />
              {errors.confirmPassword &&
                touched.confirmPassword &&
                errors.confirmPassword} 
              <Button variant="contained" type="submit" disabled={isSubmitting}>
                Submit
              </Button>
              </form>}
          </Formik>
        </>
      )}
    </Box>
  );
};

export default Form;
