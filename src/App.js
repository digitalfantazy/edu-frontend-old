import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";

import Router from "./Router";
import { checkAuth } from "./modules/Auth/api/checkAuthFetch";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(checkAuth());


    const intervalId = setInterval(() => {
      dispatch(checkAuth());
    }, 1740000); // 29 минут

    // Функция очистки, которая будет вызвана при размонтировании компонента
    return () => {
      clearInterval(intervalId);
    };
  }, [dispatch]);
    
  return (
    <BrowserRouter>
      <div className="App">
        <Router/>
      </div>
    </BrowserRouter>
  );
}

export default App;
