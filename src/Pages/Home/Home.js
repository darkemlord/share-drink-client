import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import './Home.scss';

const Home = () => {
  const auth = useAuth();
  console.log(auth)

  return (
    <div>Home</div>
  )
}

export default Home;
