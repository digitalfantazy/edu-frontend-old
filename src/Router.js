import React from "react";
import { Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import SingUpPage from "./pages/SingUpPage";
import SimsPage from "./pages/SimsPage";
import ProffesorPage from "./pages/ProffesorPage";
import StudentPage from "./pages/StudentPage";

import Header from "./components/header/Header";
import Catalog from "./components/catalog/Catalog";
import Intro from "./components/introBlock/Intro";
import PrivateRoute from "./utils/privateRoute";

const Router = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<SingUpPage />} />
        <Route
          path="sims-page"
          element={<PrivateRoute element={<SimsPage />} />}
        />
        <Route
          path="proffesors"
          element={<PrivateRoute element={<ProffesorPage />} />}
        />
        <Route
          path="student"
          element={<PrivateRoute element={<StudentPage />} />}
        />

        <Route
          path="/:labId/:param"
          element={
            <>
              <Intro />
              <PrivateRoute element={<Catalog />} />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default Router;
