import React, { useState } from 'react';
import './Auth.scss';
import RegisterForm from '../../Components/RegisterForm/RegisterForm';
import { Container } from '@mui/material';
import logo from '../../assets/Images/sharedrinklogo.png';


const Auth = (props) => {
  const [loginForm, setLoginForm] = useState(false);

  return (
    <Container className='auth'>
      <div className='form-container'>
        <img className='logo-form'src={logo} alt='no available'/>
        {loginForm ? <h1>Login Form</h1> : <RegisterForm changeform={setLoginForm}/>}
      </div>
    </Container>
  )
}

export default Auth
