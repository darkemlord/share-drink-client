import React from 'react';
import './Auth.scss';
import { Button } from '@mui/material'

const Auth = (props) => {
  const { setAuth } = props;
  return (
    <div>
      <Button variant='contained'>Click on me</Button>
    </div>
  )
}

export default Auth
