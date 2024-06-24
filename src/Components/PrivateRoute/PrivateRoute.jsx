import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";


//Api Call
// import ApiRequest from '../../services/httpService'

const PrivateRoute = ({ children, ...rest }) => {
  const { userDetails } = useSelector((state) => state.userinfo);


  return userDetails ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
