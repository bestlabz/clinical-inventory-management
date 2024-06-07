import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ children, ...rest }) => {
  const { userDetails } = useSelector((state) => state.userinfo);

  return userDetails ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
