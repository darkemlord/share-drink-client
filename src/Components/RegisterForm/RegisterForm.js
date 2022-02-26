import React from 'react';
import { Button, TextField } from '@mui/material';
import './RegisterForm.scss';
import { useFormik } from 'formik';
import * as yup from 'yup';

const RegisterForm = () => {

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: yup.object({
      name: yup.string().required('Name is required'),
      username: yup.string().matches(/^[a-zA-Z0-9-]*$/, 'Username shouldn\'t contain spaces').required('Username is required')
    }),
    onSubmit: (formData) => {
      console.log(formData)
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
          helperText={formik.errors.name}
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
          helperText={formik.errors.username}
        />

        <TextField
          fullWidth
          focused={false}
          margin='normal'
          size='small'
          id='email'
          name='email'
          label='email'
          InputProps={{shrink: +false}}
          style={{
            borderRadius:'10px',
            backgroundColor: "white"
          }}
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
        />

        <TextField
          fullWidth
          focused={false}
          margin='normal'
          size='small'
          type='password'
          id='confirmPassword'
          name='confirmPassword'
          label='confirmPassword'
          InputProps={{shrink: +false}}
          style={{
            borderRadius:'10px',
            backgroundColor: "white"
          }}
        />
        <Button type='submit' variant='contained'>Click on me</Button>
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
      confirmPassword: "",
    }
}

export default RegisterForm;
