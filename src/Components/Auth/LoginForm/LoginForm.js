import React, { useState } from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { TextField, Button } from '@mui/material';
import './LoginForm.scss'
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../../gql/user'
import { setToken } from '../../../utils/token';
import { useAuth } from '../../../hooks/useAuth';

const LoginForm = (props) => {
  const { changeform } = props
  const [error, setError] = useState('')
  const [ login ] = useMutation(LOGIN)
  const auth = useAuth();
  const { setUser } = auth;

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: yup.object({
      email: yup.string().email('Email is not valid').required('Email is required'),
      password: yup.string().required('Password is required')
    }),
    onSubmit: async (formData) => {
      try{
        const { data } = await login({
          variables: {
            input: formData
          }
        });
        const { token } = data.login
        setToken(token);
        setUser(token);
      } catch(error){
        setError(error.message)
        console.log(error)
      }
      formik.handleReset()
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
        {error !== '' ? <span className="error-mesage">{error}</span> : <span></span>}
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
