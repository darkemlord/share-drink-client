import React from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { TextField, Button } from '@mui/material';
import './LoginForm.scss'

const LoginForm = (props) => {
  const { changeform } = props

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: yup.object({
      email: yup.string().email('Email is not valid').required('Email is required'),
      password: yup.string().required('Password is required')
    }),
    onSubmit: (formData) => {
      console.log(formData)
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          focused={false}
          margin='normal'
          size='small'
          id='email'
          name='email'
          label='Email'
          InputProps={{shrink: +false}}
          style={{
            borderRadius:'10px',
            backgroundColor: "white"
          }}
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.errors.email && true}
        />

        <TextField
          fullWidth
          focused={false}
          margin='normal'
          size='small'
          type='password'
          id='password'
          name='password'
          label='password'
          InputProps={{shrink: +false}}
          style={{
            borderRadius:'10px',
            backgroundColor: "white"
          }}
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.errors.password && true}
        />

        <div className='register-info'>
          <p>Do you haven't an account?</p>
          <span onClick={() => changeform(false)}>Sign in here</span>
        </div>

        <Button className='register-button' type='submit' variant='contained'>Login</Button>
      </form>
    </>
  )
}

function initialValues(){
    return {
      email: "",
      password: "",
    }
}

export default LoginForm;
