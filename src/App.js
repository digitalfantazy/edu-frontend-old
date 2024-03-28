import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";

import Router from "./Router";
import { checkAuth } from "./store/reducers/authSlice";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth())
  })
    
  return (
    <BrowserRouter>
      <div className="App">
        <Router/>
      </div>
    </BrowserRouter>
  );
}

export default App;
