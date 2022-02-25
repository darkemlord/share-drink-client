import React from 'react';
import './Auth.scss';
import RegisterForm from '../../Components/RegisterForm/RegisterForm';
import { Container } from '@mui/material';
import logo from '../../assets/Images/sharedrinklogo.png';


const Auth = (props) => {
  const { setAuth } = props;
  return (
    <Container className='auth'>
      <img className='logo-form'src={logo} alt='no available'/>
      <RegisterForm />
    </Container>
  )
}

export default Auth
