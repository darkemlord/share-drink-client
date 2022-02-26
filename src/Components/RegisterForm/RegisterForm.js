import React from 'react';
import { Button } from '@mui/material';
import './RegisterForm.scss';
import { useFormik }from 'formik';
import * as yup from 'yup';

const RegisterForm = () => {
  return (
    <div>
      <form onSubmit={() => console.log('hello world')}>

        <Button variant='contained'>Click on me</Button>
      </form>
    </div>
  )
}

export default RegisterForm;
