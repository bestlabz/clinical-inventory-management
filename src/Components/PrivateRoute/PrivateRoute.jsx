import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

import { setUser } from "../../Redux/Slice/User";

// Api Call
import ApiRequest from "../../services/httpService";
import ThemeSuspense from "../theme/ThemeSuspense";

const PrivateRoute = ({ children, ...rest }) => {
  const dispatch = useDispatch();
  const { userDetails } = useSelector((state) => state.userinfo);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const API = async () => {
      const { success, clinic } = await ApiRequest.get("/clinic");
      if (success) {
        dispatch(setUser(clinic));
      }
      setLoading(false);
    };
    API();
  }, []);

  if (loading) {
    return <ThemeSuspense /> // You can replace this with a spinner or some other loading indicator
  }

  return userDetails ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
