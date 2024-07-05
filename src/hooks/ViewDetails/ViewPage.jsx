import React, { useEffect, useState } from "react";

import ApiRequest from "../../services/httpService";
import { useDispatch, useSelector } from "react-redux";
import { setDetails } from "../../Redux/Slice/DetailsPage";
import toast from "react-hot-toast";

const ViewPage = ({ category, id }) => {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);
  const [model, setModel] = useState(false);
  const [clear, setClear] = useState(false);
  const [loader1, setLoader1] = useState(false)

  const { userDetails } = useSelector((state) => state.userinfo);

  useEffect(() => {
    const API = async () => {
      if (category === "doctor" && id) {
        try {
          setLoader(true);
          const { success, doctors } = await ApiRequest.get(`/doctors/${id}`);

          const availability = await ApiRequest.get(
            `/get/availability?doctorId=667bb58fed1dd58802689661`
          );

          if (availability.success) {
            const filterAvailability = availability?.availabilities?.filter(
              (i) => i.clinicId === userDetails?._id
            );

            console.log("filterAvailability", filterAvailability);
          }

          if (success) {
            setLoader(false);
            return dispatch(setDetails(doctors));
          }
        } catch (error) {
          setLoader(false);
          console.log("ee", error);
        }
      }

      if (category === "receptionist" && id) {
        try {
          setLoader(true);
          const { success, receptionist } = await ApiRequest.get(
            `/receptionists/${id}`
          );

          if (success) {
            setLoader(false);
            return dispatch(setDetails(receptionist));
          }
        } catch (error) {
          setLoader(false);
          console.log("ee", error);
        }
      }
    };

    API();
  }, [category, model]);

  const handleChange = async (id, value, reason) => {

    if (category === "doctor") {
      try {
        setLoader1(true);
        const { success } = await ApiRequest.post(`/doctor/${id}`, {
          block: value,
          reason,
        });
  
        if (success) {
          setLoader1(false);
          setClear(true);
          toast.success("Doctor status updated successfully");
        }
      } catch (error) {
        setLoader1(false);
        toast.error(error.response.data.error);
      }

    }
    if (category === "receptionist") {
      try {
        setLoader1(true)
        const { success } = await ApiRequest.post(`/receptionist/${id}`, {
          block: value,
          reason,
        });
    
        if (success) {
          setLoader1(false)
          toast.success("Receptionist status updated successfully")
          return setClear(true);
          ;
        }
      } catch (error) {
        setLoader1(false)
        toast.error(error.response.data.error);
      }
    }
  };

  return {
    loader,
    model,
    setModel,
    clear,
    handleChange,
    loader1,
    setClear
  };
};

export default ViewPage;

