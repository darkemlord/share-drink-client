import React from 'react';
import './Auth.scss';
import RegisterForm from '../../Components/RegisterForm/RegisterForm';
import { Container } from '@mui/material';
import logo from '../../assets/Images/sharedrinklogo.png';
import background from '../../assets/Images/formBack.jpg';


const Auth = (props) => {
  const { setAuth } = props;
  return (
    <Container className='auth'>
      <div className='form-container'>
        <img className='logo-form'src={logo} alt='no available'/>
        <RegisterForm />
      </div>
    </Container>
  )
}

export default Auth
