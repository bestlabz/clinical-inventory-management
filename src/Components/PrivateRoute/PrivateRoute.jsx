import React, { useCallback, useEffect, useState } from "react";
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

  const fetchClinicData = useCallback(async () => {
    try {
      const { success, clinic } = await ApiRequest.get("/clinic");
      if (success) {
        dispatch(setUser(clinic));
      }
    } catch (error) {
      console.error("Error fetching clinic data:", error);
    } finally {
      setLoading(false);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchClinicData();
  }, [fetchClinicData]);

  if (loading) {
    return <ThemeSuspense />; // You can replace this with a spinner or some other loading indicator
  }

  return userDetails ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;