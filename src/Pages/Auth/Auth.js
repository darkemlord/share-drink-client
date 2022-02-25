import React from 'react';
import './Auth.scss';
import RegisterForm from '../../Components/RegisterForm/RegisterForm';
import { Container } from '@mui/material';


const Auth = (props) => {
  const { setAuth } = props;
  return (
    <Container>
      <RegisterForm />
    </Container>
  )
}

export default Auth
