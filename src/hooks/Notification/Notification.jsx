import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ApiRequest from "../../services/httpService";
import toast from "react-hot-toast";
import { setNotification } from "../../Redux/Slice/Notification";

const Notification = () => {
  const dispatch = useDispatch();
  const { userDetails } = useSelector((state) => state.userinfo);

  const { NotificationData } = useSelector((state) => state.notification);
  const [reFetch, setReFetch] = useState(false);

  useEffect(() => {
    const API = async () => {
      if (!reFetch) {
        try {
          const {success, notifications} = await ApiRequest.get(
            `/getnotifications?recipientId=${userDetails?._id}`
          );

          if(success) {

              dispatch(setNotification(notifications));
          }


          return;
        } catch (error) {
          return toast.error(error.response.data.error);
        }
      }
    };

    API();
  }, [reFetch]);

  const handleClick = async (id) => {
    try {
      setReFetch(true);
      const data = await ApiRequest.put(`/notification/read/${id}`, {
        read: true,
      });
      setReFetch(false);
    } catch (error) {
      setReFetch(false);
      toast.error(error.response.data.error);
    }
  };

  return {
    notifications: NotificationData,
    handleClick,
  };
};

export default Notification;
