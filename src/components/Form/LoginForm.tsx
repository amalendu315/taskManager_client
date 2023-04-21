import React from 'react'
import { useDispatch } from 'react-redux'
import { loginRequest, loginSuccess, loginFail } from '../../redux/features/login/loginSlice'
import { Box, Button, TextField, Typography } from '@mui/material'
import { Formik } from 'formik'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { backendURI } from '../../constants/config'

const LoginForm = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const initialValuesLogin = {
        email: '',
        password: ''
    }

    const validate = (values: any) => {
        const errors: any = {}
        if (!values.email) {
            errors.email = 'Required'
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
            errors.email = 'Invalid email address'
        }
        if (!values.password) {
            errors.password = 'Required'
        } else if (values.password.length < 3) {
            errors.password = 'Password must be at least 3 characters'
        }
        return errors
    }

    const onLoginSubmit = async (values: any) => {
      dispatch(loginRequest());
      axios
        .post(`${backendURI}/auth/login`, values)
        .then((res: any) => {
          dispatch(loginSuccess(res.data));
          navigate("/");
        })
        .catch((err: any) => {
          dispatch(loginFail(err.message));
        });
    };
  return (
    <>
      <Formik
        initialValues={initialValuesLogin}
        validate={validate}
        onSubmit={onLoginSubmit}
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
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
            }}
          >
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
  );
}

export default LoginForm