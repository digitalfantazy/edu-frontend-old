import React, { useRef } from "react";
import { Routes, Route } from "react-router-dom";

import AuthPage from "./pages/AuthPage";
import MainPage from "./pages/MainPage";
import VerifyEmail from "./modules/Auth/components/VerifyEmail";
import SimsPage from "./pages/SimsPage";
import ProffesorPage from "./pages/ProffesorPage";
import StudentPage from "./pages/StudentPage";

import Header from "./components/header/Header";
import Catalog from "./modules/Catalog/index";
import Intro from "./components/introBlock/Intro";
import { PDFViewer } from "./modules/Student/index";
import { PrivateRoute } from "./utils/privateRoute";
import ProfilePage from "./pages/ProfilePage";
import Public from "./utils/PublicOnly";

const Router = () => {
  const ref = useRef(null);

  const scrollToCatalog = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={<MainPage refProp={ref} scrollToCatalog={scrollToCatalog} />}
        />
        <Route path="auth" element={<AuthPage />} />
        <Route
          path="auth/verify-email/:username"
          element={
            <Public>
              <VerifyEmail />
            </Public>
          }
        />

        <Route path="sims-page" element={<PrivateRoute element={<SimsPage />} />} />
        <Route path="proffesors" element={<PrivateRoute element={<ProffesorPage />} />} />

        <Route path="student" element={<PrivateRoute element={<StudentPage />} />} />
        <Route path="student/:filename" element={<PrivateRoute element={<PDFViewer />} />} />

        <Route path="profile" element={<PrivateRoute element={<ProfilePage />} />} />

        <Route
          path="/:labId/:param"
          element={
            <>
              <Intro scrollToCatalog={scrollToCatalog} />
              <PrivateRoute element={<Catalog refProp={ref} />} />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default Router;
