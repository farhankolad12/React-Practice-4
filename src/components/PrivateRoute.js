import React from "react";
import { Outlet, Navigate } from "react-router";

const PrivateRoute = ({ output }) => {
  let auth = { token: output };
  return auth.token === true ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
