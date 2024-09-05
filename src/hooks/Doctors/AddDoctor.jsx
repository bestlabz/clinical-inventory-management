//add doctor hook
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//Thired party library
import { useNavigate } from "react-router-dom";

//Api Call
import ApiRequest from "../../services/httpService";
import toast from "react-hot-toast";
import { clearOTP } from "../../Redux/Slice/Otpinput";

const AddDoctor = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [otp, setOTP] = useState("");
  const [modalPopup, setModalPopup] = useState(false);
  const [value, setValue] = useState("");
  const [errorValidate, setErrorValidate] = useState(false);
  const [loader, setLoader] = useState(false);
  const [email, setEmail] = useState("");

  const { userDetails } = useSelector((state) => state.userinfo);

  const { doctorDetails } = useSelector((state) => state.otpValue);
  

  useEffect(() => {
    if (doctorDetails) {
      setValue(doctorDetails?.phone || "");
      setEmail(doctorDetails?.email || "");
      setStep((step) => step + 1);      
    }
  }, []);

  useEffect(() => {
    if (email !== "" && doctorDetails) {
      resendOtp();
    }
  }, [email]);

  useEffect(() => {
    if (errorValidate) {
      setTimeout(() => {
        setErrorValidate(false);
      }, 3000);
    }
  }, [errorValidate]);

  useEffect(() => {
    if (step === 3) {
      setModalPopup(true);
      setTimeout(() => {
        setModalPopup(false);
        setEmail("");
        setValue("");
        setOTP("");
        navigate("/doctors");
        dispatch(clearOTP());
        setStep(1);
      }, 3000);
    }
  }, [step]);

  const goBack = () => {
    navigate(-1); // -1 means go back one page
  };

  const pre = () => {
    if (step !== 1) {
      setStep((step) => step - 1);
      setValue("");
      setEmail("");
    }
  };
  const next = async () => {
    if (step === 1) {
      if (email.trim() !== "" && value.trim() !== "" && value.length <= 12) {
        setLoader(true);
        try {
          const { success } = await ApiRequest.post("/sendotp/doctor", {
            mobile_number: value,
            clinicId: userDetails._id,
            email,
          });

          if (success) {
            setLoader(false);

            return setStep((step) => step + 1);
          }
        } catch (error) {
          setLoader(false);
          toast.error(
            `${error.response?.data?.message || error.response.data.error}`
          );
        }
      } else {
        setErrorValidate(true);
        return;
      }
    }

    if (step === 2) {
      if (value !== "" && otp.length !== 4) {
        setErrorValidate(true);
        return;
      } else {
        try {
          setLoader(true);
          const { success } = await ApiRequest.post("/verifyotp/doctor", {
            email,
            otp,
          });

          if (success) {
            setLoader(false);
            return setStep((step) => step + 1);
          }
        } catch (error) {
          setOTP("");
          setLoader(false);
          toast.error(
            `${error.response?.data?.message || error.response.data.error}`
          );
        }
      }
    }
  };

  const resendOtp = async () => {
    const bodyData = {
      email: email,
    };

    try {
      const { success, message } = await ApiRequest.post(
        "/resendotp/doctor",
        bodyData
      );

      if (success) {
        toast.success(message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.response.data.error);
    }
  };
  return {
    goBack,
    step,
    next,
    pre,
    setOTP,
    otp,
    modalPopup,
    setValue,
    value,
    setErrorValidate,
    errorValidate,
    loader,
    email,
    setEmail,
    resendOtp,
  };
};

export default AddDoctor;
