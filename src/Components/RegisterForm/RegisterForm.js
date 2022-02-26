import React from 'react';
import { Button, TextField } from '@mui/material';
import { REGISTER_USER } from '../../gql/user';
import { useMutation } from '@apollo/client';
import './RegisterForm.scss';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify'

const RegisterForm = () => {
  const [register] = useMutation(REGISTER_USER);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: yup.object({
      name: yup.string().required('Name is required'),
      username: yup.string()
      .matches(/^[a-zA-Z0-9-]*$/, 'Username shouldn\'t contain spaces')
      .required('Username is required'),
      email: yup.string().email('Email is not valid').required('Email is required'),
      password: yup.string().required('Password is required')
      .oneOf([yup.ref('confirmPassword')], 'Password doesn\'t match'),
      confirmPassword: yup.string().required('Confirm your password')
      .oneOf([yup.ref('password')], 'Password doesn\'t match')
    }),
    onSubmit: async(formData) => {
      try {
      const newUser = formData;
      delete newUser.confirmPassword;
      await register({
        variables:{
          input: newUser
        }
      });
      toast.success('User registered!')
      } catch(error) {
        console.log(error)
        toast.error(error.message)
      }
      formik.handleReset();
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>

        {/* here we have the form inputs */}
        <TextField
          fullWidth
          focused={false}
          margin='normal'
          size='small'
          id='name'
          name='name'
          label='Name'
          inputProps={{shrink: +false}}
          style={{borderRadius:'10px',
            backgroundColor: "white"
          }}
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.errors.name && true}
        />

        <TextField
          fullWidth
          focused={false}
          margin='normal'
          size='small'
          id='username'
          name='username'
          label='Username'
          InputProps={{shrink: +false}}
          style={{
            borderRadius:'10px',
            backgroundColor: "white"
          }}
          value={formik.values.username}
          onChange={formik.handleChange}
          error={formik.errors.username && true}
        />

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

        <TextField
          fullWidth
          focused={false}
          margin='normal'
          size='small'
          type='password'
          id='confirmPassword'
          name='confirmPassword'
          label='Confirm Password'
          InputProps={{shrink: +false}}
          style={{
            borderRadius:'10px',
            backgroundColor: "white"
          }}
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          error={formik.errors.confirmPassword && true}
        />
        <Button className='register-button' type='submit' variant='contained'>Register!</Button>
      </form>
    </>
  )
};

function initialValues(){
    return {
      name: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    }
}

export default RegisterForm;
