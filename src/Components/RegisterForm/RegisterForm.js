import React from 'react';
import { Button, TextField } from '@mui/material';
import './RegisterForm.scss';
import { useFormik } from 'formik';
import * as yup from 'yup';

const RegisterForm = () => {
  return (
    <>
      <form onSubmit={() => console.log('hello world')}>
        <TextField
          fullWidth
          margin='normal'
          size='small'
          id='name'
          name='name'
          label='name'
          inputProps={{className: 'input-style'}}
        />

        <TextField
          fullWidth
          margin='normal'
          size='small'
          id='username'
          name='username'
          label='username'
          inputProps={{className: 'input-style'}}
        />
        <Button variant='contained'>Click on me</Button>
      </form>
    </>
  )
}

export default RegisterForm;
