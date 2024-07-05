import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

//Thired party library
import { useNavigate } from "react-router-dom";

//Api Call
import ApiRequest from "../../services/httpService";
import toast from "react-hot-toast";

const AddDoctor = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [otp, setOTP] = useState("");
  const [modalPopup, setModalPopup] = useState(false);
  const [value, setValue] = useState("");
  const [errorValidate, setErrorValidate] = useState(false);
  const [loader, setLoader] = useState(false);

  const { userDetails } = useSelector((state) => state.userinfo);

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
        setValue("");
        setOTP("");
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
    }
  };
  const next = async () => {
    if (step === 1) {
      if (value.trim() !== "" && value.length >= 10) {
        setLoader(true);
        try {
          const { success } = await ApiRequest.post("/sendotp/doctor", {
            mobile_number: value,
            clinicId: userDetails._id,
          });
  
          if (success) {
            setLoader(false);
  
            return setStep((step) => step + 1);
          }
        } catch (error) {
          setLoader(false);
          toast.error(error.response.data.message);
        }
      
      } else {
        setErrorValidate(true);
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
            mobile_number: value,
            otp,
          });

          if (success) {
            setLoader(false);

            return setStep((step) => step + 1);
          }
        } catch (error) {
          setLoader(false);
          toast.error(error.response.data.error);
        }
      }
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
  };
};

export default AddDoctor;
