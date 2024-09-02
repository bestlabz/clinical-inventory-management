import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

import { addBillingHistory, setUser } from "../../Redux/Slice/User";

// Api Call
import ApiRequest from "../../services/httpService";
import ThemeSuspense from "../theme/ThemeSuspense";
import { setNotification } from "../../Redux/Slice/Notification";

const PrivateRoute = ({ children, ...rest }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userDetails } = useSelector((state) => state.userinfo);
  const [loading, setLoading] = useState(true);

  const fetchClinicData = useCallback(async () => {
    try {
      const { success, clinic, balancedue, doctorsCount, receptionistsCount } =
        await ApiRequest.get("/clinic");

      const data = {
        ...clinic,
        balancedue,
        doctorsCount,
        receptionistsCount,
      };

      if (success) {
        dispatch(setUser(data));
      }
    } catch (error) {
      localStorage.removeItem("token");
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
        if (!userDetails.details) {
          return navigate("/document");
        }

        const filter = userDetails?.subscription_details.filter(
          (item) => item.subscription_id !== null
        );

        const transformedData = filter.flatMap((item) => {
          const itemData = item.billinghistory.map((bil) => {
            return {
              transaction_id: bil?.transaction_id
                ? bil?.transaction_id
                : "----",
              price: bil?.amount ? bil?.amount : 0,
              doctor: bil?.doctor,
              receptionist: bil?.receptionist,
              _id: bil?._id,
              subscription_id: item?.subscription_id
                ? item?.subscription_id?._id
                : "----",
              id: item?._id,
              duration: item?.subscription_id?.duration,
              durationInNo: item?.subscription_id?.durationInNo,
              pricePerMonth: item?.subscription_id?.pricePerMonth,
              name: item?.subscription_id?.title?.title
                ? item?.subscription_id?.title?.title
                : "----",
              subscription_enddate: item?.subscription_enddate,
              subscription_startdate: item?.subscription_startdate,
            };
          });

          return itemData;
        });

        dispatch(addBillingHistory(transformedData));

        try {
          const { success, notifications } = await ApiRequest.get(
            `/getnotifications?recipientId=${userDetails?._id}`
          );

          if (success) {
            dispatch(setNotification(notifications));
          }

          return;
        } catch (error) {
          console.log("ee", error);
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
