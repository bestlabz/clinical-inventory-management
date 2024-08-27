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
      const { success, clinic, balancedue } = await ApiRequest.get("/clinic");

      const data = {
        ...clinic,
        balancedue,
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
        const transformedData = userDetails?.subscription_details.flatMap(
          (item) => {
            const subscriptionDetails = item.subscription_id
              ? {
                  duration: item?.subscription_id?.duration,
                  durationInNo: item?.subscription_id?.durationInNo,
                  price: item?.subscription_id?.pricePerMonth,
                  name: item?.subscription_id?.title?.title
                    ? item?.subscription_id?.title?.title
                    : "----",
                  subscription_startdate: item?.subscription_startdate,
                  subscription_enddate: item?.subscription_enddate,
                  subscription_id: item?.subscription_id._id,
                  id: item?._id,
                }
              : null;

            const billingHistoryDetails = item?.billinghistory
              .filter(
                (history) =>
                  history?.doctor !== 0 || history?.receptionist !== 0
              )
              .map((history) => ({
                transaction_id: history?.transaction_id
                  ? history?.transaction_id
                  : "----",
                price: history?.amount ? history?.amount : 0,
                doctor: history?.doctor,
                receptionist: history?.receptionist,
                _id: history?._id,
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
              }));

            return subscriptionDetails
              ? [subscriptionDetails, ...billingHistoryDetails]
              : billingHistoryDetails;
          }
        );

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
