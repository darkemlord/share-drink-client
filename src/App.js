import React, { useState, useEffect, useMemo} from "react";
import Home from './Pages/Home';
import client from './config/apollo';
import Auth from "./Pages/Auth/Auth";
import { ApolloProvider } from '@apollo/client';
import { ToastContainer } from 'react-toastify';
import { getToken, decodeToken } from './utils/token';
import { AuthContext } from './context/authContext';

function App() {
  const [auth, setAuth] = useState(undefined);
  useEffect(() => {
    const token = getToken();
    if(token === null) {
      setAuth(null)
    } else {
      setAuth(decodeToken(token))
    }
  }, [])

  const logout = () => {
    console.log('exit')
  }

  const setUser = (user) => {
    setAuth(user)
  }
  const authData = useMemo(() => ({
    auth,
    logout,
    setUser
  }), [auth])

  return (
    <>
      <ApolloProvider client={client}>
        <AuthContext.Provider value={authData}>
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
        </AuthContext.Provider>
      </ApolloProvider>
    </>
  );
}

export default App;
