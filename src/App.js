import React, { useState } from "react";
import Home from './Pages/Home';
import Auth from "./Pages/Auth/Auth";

function App() {
  const [auth, setAuth] = useState(null);

  return (
    <>
      {!auth ? <Auth auth={setAuth}/> : <Home />}
    </>
  );
}

export default App;
