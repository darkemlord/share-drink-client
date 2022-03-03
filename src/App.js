import React, { useState, useEffect } from "react";
import Home from './Pages/Home';
import client from './config/apollo';
import Auth from "./Pages/Auth/Auth";
import { ApolloProvider } from '@apollo/client';
import { ToastContainer } from 'react-toastify';

function App() {
  const [auth, setAuth] = useState(null);

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
