import React from "react";
// import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import NotAuthorized from "../components/notAuthorized/NotAuthorized";

const PrivateRoute = ({ element, ...rest }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    return !isAuthenticated ? <NotAuthorized /> : element
};

export default PrivateRoute;
