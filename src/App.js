import React, { useEffect } from "react";
import { HashRouter } from "react-router-dom";
import { useDispatch } from "react-redux";

import Router from "./Router";
import { checkAuth } from "./store/reducers/authSlice";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth())
  })
    
  return (
    <HashRouter>
      <div className="App">
        <Router/>
      </div>
    </HashRouter>
  );
}

export default App;
