import React, { useState, useEffect } from "react";
import Home from './Pages/Home';
import client from './config/apollo';
import Auth from "./Pages/Auth/Auth";
import { ApolloProvider } from '@apollo/client';
import { ToastContainer } from 'react-toastify';
import { getToken, decodeToken } from './utils/token';

function App() {
  const [auth, setAuth] = useState(null);
  useEffect(() => {
    const token = getToken();
    if(token === null) {
      setAuth(null)
    } else {
      setAuth(token)
    }
  }, [auth])

  return (
    <>
      <ApolloProvider client={client}>
        {!auth ? <Auth auth={setAuth}/> : <Home />}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </ApolloProvider>
    </>
  );
}

export default App;
