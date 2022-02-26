import React from 'react';
import { Button, TextField } from '@mui/material';
import './RegisterForm.scss';
import { useFormik } from 'formik';
import * as yup from 'yup';

const RegisterForm = () => {
  return (
    <div>
      <form onSubmit={() => console.log('hello world')}>
        <TextField
          fullWidth
          id='name'
          name='name'
          label='name'
        />
        <Button variant='contained'>Click on me</Button>
      </form>
    </div>
  )
}

export default RegisterForm;
