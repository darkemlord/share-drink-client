import React, { useState } from "react";
import Home from './Pages/Home';
import client from './config/apollo';
import Auth from "./Pages/Auth/Auth";
import { ApolloProvider } from '@apollo/client';

function App() {
  const [auth, setAuth] = useState(null);

  return (
    <>
      <ApolloProvider client={client}>
        {!auth ? <Auth auth={setAuth}/> : <Home />}
      </ApolloProvider>
    </>
  );
}

export default App;
