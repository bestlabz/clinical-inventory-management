import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

import { setUser } from "../../Redux/Slice/User";

// Api Call
import ApiRequest from "../../services/httpService";
import ThemeSuspense from "../theme/ThemeSuspense";
import { setNotification } from "../../Redux/Slice/Notification";

const PrivateRoute = ({ children, ...rest }) => {
  const dispatch = useDispatch();
  const navigate= useNavigate()
  const { userDetails } = useSelector((state) => state.userinfo);
  const [loading, setLoading] = useState(true);

  const fetchClinicData = useCallback(async () => {
    try {
      const { success, clinic } = await ApiRequest.get("/clinic");
      if (success) {
        dispatch(setUser(clinic));
      }
    } catch (error) {
      localStorage.removeItem('token')
      console.error("Error fetching clinic data:", error.response.data);
    } finally {
      setLoading(false);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchClinicData();
  }, [fetchClinicData]);


  useEffect(() => {
    const API = async () => {
      if (userDetails) {

        if(!userDetails.details) {
         return  navigate('/document')
        }

        try {
          const { success, notifications } = await ApiRequest.get(
            `/getnotifications?recipientId=${userDetails?._id}`
          );

          if (success) {
            dispatch(setNotification(notifications));
          }

          return;
        } catch (error) {
          console.log('ee', error)
          // return toast.error(error.response.data.error);
        }
      }
    };
    API();
  }, [userDetails]);

  if (loading) {
    return <ThemeSuspense />; // You can replace this with a spinner or some other loading indicator
  }

  return userDetails ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
