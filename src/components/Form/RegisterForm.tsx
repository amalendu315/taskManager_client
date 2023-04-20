import React from 'react'
import { useDispatch } from 'react-redux'
import { loginRequest, loginSuccess, loginFail } from '../../redux/features/login/loginSlice'
import { Box, Button, TextField, Typography } from '@mui/material'
import { Formik } from 'formik'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { backendURI } from '../../constants/config'

const RegisterForm = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const initialValuesRegister = {
        fullname: '',
        email: '',
        password: '',
        role: 'user'
    }

    const validate = (values: any) => {
        const errors: any = {}
        if (!values.fullname) {
            errors.fullname = 'Required'
        }
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

    const onRegisterSubmit = async (values: any) => {
        try {
            dispatch(loginRequest())
            axios.post(`${backendURI}/auth/register`, values).then((res: any) => {
                dispatch(loginSuccess(res.data))
                navigate('/')
            }).catch((err: any) => {
                dispatch(loginFail(err.response.data.message))
            }
            )
        } catch (error) {
            dispatch(loginFail(error))
        }
    }

  return (
    <>
      <Formik
        initialValues={initialValuesRegister}
        validate={validate}
        onSubmit={onRegisterSubmit}
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

            <Button variant="contained" type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </form>
        )}
      </Formik>
    </>
  );
}

export default RegisterForm