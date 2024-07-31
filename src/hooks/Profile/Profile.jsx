import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

//Components
import FormHandel from "../../Components/Properites/FormHandel/Formhandel";

//Utilities
import { ProfileDetails } from "../../utils/Validation/Profile";

import ApiRequest from "../../services/httpService";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { setUser } from "../../Redux/Slice/User";

const Profile = () => {
  const profileRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [base64Image, setBase64Image] = useState();
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [step, setStep] = useState(1);
  const [payModel, setPayModel] = useState(false);

  const { userDetails } = useSelector((state) => state.userinfo);

  useEffect(() => {
    const Api = async () => {
      if (!loader) {
        const { success, clinic } = await ApiRequest.get("/clinic");
        if (success) {
          dispatch(setUser(clinic));
          setFieldValue("name", clinic?.name);
          setFieldValue("clinic_name", clinic?.clinic_name);
          setFieldValue("email", clinic?.email);
          setFieldValue("mobile_number", clinic?.mobile_number);
          setFieldValue("profile", clinic?.profile);
        }
      }
    };
    Api();
  }, [loader]);

  const initialvalue = () => {
    return {
      name: "",
      clinic_name: "",
      email: "",
      profile: null,
    };
  };

  const onSubmit = async (values, actions) => {
    const storeDetails = {
      name: values.name,
      clinic_name: values.clinic_name,
      email: values.email,
      mobile_number: values.mobile_number,
      profile: values.profile,
    };

    const formData = new FormData();

    for (const key in storeDetails) {
      if (storeDetails.hasOwnProperty(key)) {
        formData.append(key, storeDetails[key]);
      }
    }

    try {
      setLoader(true);
      const { success, message } = await ApiRequest.put(
        `/clinics/${userDetails?._id}`,
        formData,
        { "Content-Type": "multipart/form-data" }
      );
      if (success) {
        setLoader(false);
        toast.success(message);
        return;
      }
    } catch (error) {
      setLoader(false);
      toast.error(
        `${error.response?.data?.message || error.response.data.error}`
      );
    }
  };

  const { errors, handleChange, handleSubmit, values, setFieldValue } =
    FormHandel({
      initialValue: initialvalue(),
      schema: ProfileDetails,
      submitFunction: onSubmit,
    });

  useEffect(() => {
    const file = values?.profile;
    const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;

    if (file && !urlPattern.test(file) && file instanceof Blob) {
      const reader = new FileReader();

      reader.onload = function (event) {
        const base64String = event.target.result;
        setBase64Image(base64String);
      };

      reader.onerror = function (error) {
        console.error("Error: ", error);
      };

      reader.readAsDataURL(file);
    }
  }, [values]);

  const handleClick = () => {
    profileRef.current.click();
  };

  const goBack = () => {
    navigate(-1); // -1 means go back one page
  };

  const validationCheck = () => {
  if(errors.profile){
    toast.error(errors.profile);
    
  }
    setError(true);
    setTimeout(() => {
      setError(false);
    }, 2000);
  };

  const closePayModel = () => {
    setPayModel(!payModel);
  };

  return {
    profileRef,
    handleClick,
    goBack,
    errors,
    handleChange,
    handleSubmit,
    values,
    setFieldValue,
    error,
    validationCheck,
    base64Image,
    loader,
    step,
    setStep,
    closePayModel,
    payModel,
  };
};

export default Profile;
