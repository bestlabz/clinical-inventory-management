import React, { useEffect, useState } from "react";

import ApiRequest from "../../services/httpService";
import { useDispatch, useSelector } from "react-redux";
import { setDetails } from "../../Redux/Slice/DetailsPage";
import toast from "react-hot-toast";

// import ApiRequest from '../../services/httpService'

const ViewPage = ({ category, id }) => {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);
  const [model, setModel] = useState(false);
  const [clear, setClear] = useState(false);
  const [loader1, setLoader1] = useState(false);

  const [verifyCertificate, setVerifyCertificate] = useState(false);
  const [verifyDoctor, setVerifyDoctor] = useState(false);
  const [timeSlots, setTimeSlots] = useState([]);

  const { userDetails } = useSelector((state) => state.userinfo);

  useEffect(() => {
    const API = async () => {
      if (category === "doctor" && id) {
        try {
          setLoader(true);
          const { success, doctors } = await ApiRequest.get(`/doctors/${id}`);

          if (success) {
            setLoader(false);
            const availability = await ApiRequest.get(
              `/get/availability?clinicId=${userDetails._id}&doctorId=${id}`
            );
            dispatch(setDetails(doctors));

            if (availability.success) {
              const availabilityDatas = [...availability.availabilities?.[0].availabilities]

              const today = new Date().toISOString().split('T')[0];
              const filteredData = availabilityDatas.filter(item => item.date.startsWith(today));

              setTimeSlots(filteredData);
            }
            return;
          }
        } catch (error) {
          setLoader(false);
          toast.error(error.response.data.error);
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
          toast.error(error.response.data.error);
        }
      }
    };

    API();
  }, [category, model, verifyCertificate, verifyDoctor]);

  useEffect(() => {
    const API = async () => {
      if (verifyCertificate) {
        if (category === "doctor" && id) {
          try {
            const { success, message } = await ApiRequest.put(
              `/verify/certificate/${id}`,
              {
                undergraduate_certificate_verify: true,
                postgraduate_certificate_verify: true,
              }
            );

            if (success) {
              setVerifyCertificate(false);
              toast.success(message);
              return;
            }
          } catch (error) {
            setVerifyCertificate(false);            
            toast.error(error.response.data.error)
          }
        }

        if (category === "receptionist" && id) {
          try {
            const { success, message } = await ApiRequest.put(
              `/verify/receptionist/certificate/${id}`,
              { certificate_verify: true }
            );

            if (success) {
              setVerifyCertificate(false);
              toast.success(message);
              return;
            }
          } catch (error) {
            setVerifyCertificate(false);
            toast.error(error.response.data.error)
          }
        }
      }
    };
    API();
  }, [verifyCertificate]);

  useEffect(() => {
    const API = async () => {
      if (verifyDoctor) {
        if (category === "doctor" && id) {
          try {           
            const { success, message } = await ApiRequest.put(
              `/doctors/verify/clinic`,
              {
                verify: true,
                clinicId: userDetails?._id,
                doctorId: id,
              }
            );

            if (success) {
              setVerifyDoctor(false);
              toast.success(message);
              return;
            }
          } catch (error) {
            setVerifyCertificate(false);
            toast.error(error.response.data.error)
          }
        }

        if (category === "receptionist" && id) {
          try {
            const { success, message } = await ApiRequest.put(
              `/receptionists/verify/${id}`,
              { verify: true }
            );

            if (success) {
              setVerifyDoctor(false);
              toast.success(message);
              return;
            }
          } catch (error) {
            setVerifyCertificate(false);
            toast.error(error.response.data.error)
          }
        }
      }
    };
    API();
  }, [verifyDoctor]);

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
        setLoader1(true);
        const { success } = await ApiRequest.post(`/receptionist/${id}`, {
          block: value,
          reason,
        });

        if (success) {
          setLoader1(false);
          toast.success("Receptionist status updated successfully");
          return setClear(true);
        }
      } catch (error) {
        setLoader1(false);
        toast.error(error.response.data.error);
      }
    }
  };

  const style = {
    width: "70%",
    padding: "3px 0 ",
    border: "1px solid #d3d3d3",
    outline: "1px solid #d3d3d3",
    background: "rgba(218, 227, 255, 0.31)",
  };

  const Options = [
    { label: "Monday", value: "Monday" },
    { label: "Tuesday", value: "Tuesday" },
    { label: "Wednesday", value: "Wednesday" },
    { label: "Thursday", value: "Thursday" },
    { label: "Friday", value: "Friday" },
  ];

  
  return {
    loader,
    model,
    setModel,
    clear,
    handleChange,
    loader1,
    setClear,
    setVerifyCertificate,
    verifyCertificate,
    setVerifyDoctor,
    verifyDoctor,
    style,
    Options,
    TimeSlotsResult: timeSlots,
  };
};

export default ViewPage;
