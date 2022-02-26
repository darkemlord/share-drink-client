import React from 'react';
import { Button, TextField } from '@mui/material';
import './RegisterForm.scss';
import { useFormik } from 'formik';
import * as yup from 'yup';

const RegisterForm = () => {

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: yup.object({
      name: yup.string().required('Name is required')
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
          label='name'
          inputProps={{shrink: +false}}
          style={{borderRadius:'10px',
            backgroundColor: "white"
          }}
          value={formik.values.name}
          onChange={formik.handleChange}
        />

        <TextField
          fullWidth
          focused={false}
          margin='normal'
          size='small'
          id='username'
          name='username'
          label='username'
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
