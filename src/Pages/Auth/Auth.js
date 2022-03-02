import React, { useState } from 'react';
import './Auth.scss';
import RegisterForm from '../../Components/Auth/RegisterForm';
import LoginForm from '../../Components/Auth/LoginForm'
import { Container } from '@mui/material';
import logo from '../../assets/Images/sharedrinklogo.png';


const Auth = (props) => {
  const [loginForm, setLoginForm] = useState(false);

  return (
    <Container className='auth'>
      <div className='form-container'>
        <img className='logo-form'src={logo} alt='no available'/>
        {loginForm ? <LoginForm changeform={setLoginForm}/> : <RegisterForm changeform={setLoginForm}/>}
      </div>
    </Container>
  )
}

export default Auth
