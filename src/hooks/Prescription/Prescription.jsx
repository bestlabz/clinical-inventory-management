import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import ApiRequest from "../../services/httpService";
import toast from "react-hot-toast";
import {
  setAddHeader,
  setAddMain,
  setClinicDetails,
  setClinicLogo,
  setDoctorDetails,
  setUpdateFeild,
} from "../../Redux/Slice/Prescription";

const Prescription = () => {
  const [base64Image, setBase64Image] = useState(null);
  const [validationError, setValidationError] = useState(false);
  const [reFetch, setReFetch] = useState(false);
  const [headerLoader, setheaderLoader] = useState(false);
  const [mainLoader, setmainLoader] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userDetails } = useSelector((state) => state.userinfo);

  useEffect(() => {
    const API = async () => {
      if (userDetails && !reFetch) {
        try {
          dispatch(setUpdateFeild(true))
          const { success, templates } = await ApiRequest.get(
            `/get_prescriptionTemplate/${userDetails._id}`
          );

          if (success) {
            dispatch(setUpdateFeild(false))
            dispatch(setClinicLogo({logo: templates?.[0]?.logo }))
            const FilterCliniDetails = templates?.[0]?.dynamicFields?.filter(
              (item) => item?.section === "clinic details"
            );
            const FilterDoctorDetails = templates?.[0]?.dynamicFields?.filter(
              (item) => item?.section === "doctor details"
            );
            const FilterHeaderDetails = templates?.[0]?.dynamicFields?.filter(
              (item) => item?.section === "header"
            );
            const FilterMainDetails = templates?.[0]?.dynamicFields?.filter(
              (item) => item?.section === "main"
            );

            dispatch(setClinicDetails(FilterCliniDetails));
            dispatch(setDoctorDetails(FilterDoctorDetails));
            dispatch(setAddHeader(FilterHeaderDetails));
            dispatch(setAddMain(FilterMainDetails));

            return;
          }
        } catch (error) {
          toast.error(error.response.data.message);
        }
      }
    };

    API();
  }, [userDetails, reFetch]);

  const addDynamicFeild = async (details) => {
    if (!details) return;

    const setLoaderState = (section, state) => {
      if (section === "header") {
        setheaderLoader(state);
      }
      if (section === "main") {
        setmainLoader(state);
      }
    };

    try {
      setReFetch(true);
      setLoaderState(details.section, true);

      const { success } = await ApiRequest.post("/add_field", details);

      if (success) {
        setLoaderState(details.section, false);
        setReFetch(false);
      }
    } catch (error) {
      setLoaderState(details.section, false);
      setReFetch(false);
      toast.error(error.response?.data?.message || "An error occurred");
    }
  };

  const removeDynamicFeild = async (details) => {
    if (!details) return;

    try {
      setReFetch(true);
      const { success } = await ApiRequest.delete(
        `delete_field/${details.clinicId}/${details.section}/${details.fieldName}`
      );

      if (success) {
        setReFetch(false);
      }
    } catch (error) {
      setReFetch(false);
      toast.error(error.response?.data?.message || "An error occurred");
    }
  };

  // useEffect(() => {
  //   const file = values.file;

  //   if (file) {
  //     const reader = new FileReader();

  //     reader.onload = function (event) {
  //       const base64String = event.target.result;
  //       setBase64Image(base64String);
  //     };

  //     reader.onerror = function (error) {
  //       console.error("Error: ", error);
  //     };

  //     reader.readAsDataURL(file);
  //   }
  // }, [values.file]);

  const validationCheck = () => {
    setValidationError(true);
    setTimeout(() => {
      setValidationError(false);
    }, 2000);
  };

  const goBack = () => {
    navigate(-1); // -1 means go back one page
  };

  return {
    validationCheck,
    validationError,
    goBack,
    addDynamicFeild,
    headerLoader,
    mainLoader,
    removeDynamicFeild,
    setReFetch
  };
};

export default Prescription;
