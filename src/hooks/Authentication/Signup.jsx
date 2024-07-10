import React, { useEffect, useState } from "react";

//Third party libraries
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//Components
import FormHandel from "../../Components/Properites/FormHandel/Formhandel";

//Utilities
import {
  SignupPhoneNumber,
  SignupDetails,
  SignupImage,
} from "../../utils/Validation/Signup";

//Hooks
import { clearUserDetails, setUserDetails } from "../../Redux/Slice/SignupUser";
import { clearOTP, setOTP } from "../../Redux/Slice/Otp";
import ApiRequest from "../../services/httpService";
import toast from "react-hot-toast";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [step, setStep] = useState(1);
  const [base64Image, setBase64Image] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [validationError, setValidationError] = useState(false);
  const [phone_number, setPhone_number] = useState("");
  const [id, setID] = useState(null);
  const { newuser } = useSelector((state) => state.Signup);
  const { otpValue } = useSelector((state) => state.otpValue);

  useEffect(() => {
    setTimeout(() => {
      setError(false);
    }, 2000);
  }, [error]);

  const initialvalue = () => {
    if (step === 1) {
      return {
        phone_number: "",
      };
    }

    if (step === 3) {
      return {
        name: "",
        clinic_name: "",
        email: "",
      };
    }

    if (step === 4) {
      return {
        file: null,
      };
    }
  };

  const SchemaValidation = () => {
    if (step === 1) {
      return SignupPhoneNumber;
    } else if (step === 3) {
      return SignupDetails;
    } else if (step === 4) {
      return SignupImage;
    }
  };

  const onSubmit = async (values, actions) => {
    if (step === 1) {
      setLoader(true);
      dispatch(setUserDetails({ phone_number: values.phone_number }));
      try {
        const { success } = await ApiRequest.post("/sendotp", {
          mobile_number: values.phone_number,
        });
        if (success) {
          setLoader(false);
          setPhone_number(values.phone_number);
          return setStep((step) => step + 1);
        }
      } catch (error) {
        setLoader(false)
        toast.error(error.response.data.message)
      }
     
    }
    if (step === 3) {
      const storeDetails = {
        name: values.name,
        clinic_name: values.clinic_name,
        email: values.email,
        agree: true,
      };
      dispatch(setUserDetails(storeDetails));
      return setStep((step) => step + 1);
    }
    if (step === 4) {
      const storeDetails = {
        ...newuser,
        certificate: values.file,
      };

      const formData = new FormData();

      for (const key in storeDetails) {
        if (storeDetails.hasOwnProperty(key)) {
          formData.append(key, storeDetails[key]);
        }
      }

      if (id) {
        const baseURL = import.meta.env.VITE_APP_API_BASE_URL
        setLoader(true);
        try {
          const { data } = await axios.put(`${baseURL}/clinics/${id}`, formData);
          if (data.success) {
            setLoader(false);
            dispatch(clearUserDetails());
            return navigate("/login");
          }
        } catch (error) {
          setLoader(false);
          console.log('error', error);
          toast.error(error.response.data.error);
        }
      
      } else {
        toast.error("Invalid ID");
        setTimeout(() => {
          setLoader(false);
          return navigate("/login");
        }, 2000);
      }
    }
  };

  const { errors, handleChange, handleSubmit, values, setFieldValue } =
    FormHandel({
      initialValue: initialvalue(),
      schema: SchemaValidation(),
      submitFunction: onSubmit,
    });

  useEffect(() => {
    if (step === 4) {
      const file = values.file;

      if (file) {
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
    }
  }, [values.file, step]);

  const handelClickOTP = async () => {
    if (!otpValue) {
      return setError(true);
    }
    if (otpValue?.length < 6) {
      return setError(true);
    } else {
      setError(false);

      const bodyData = {
        mobile_number: phone_number,
        otp: otpValue,
      };
      setLoader(true);
      try {
        const { clinic, success } = await ApiRequest.post("/verifyotp", bodyData);
        if (success) {
          setLoader(false);
          setID(clinic?._id)
          dispatch(clearOTP());
          return setStep((step) => step + 1);
        }
      } catch (error) {
        setLoader(false);
        console.log(error);
        toast.error(error.response.data.error)
      }
    
    }
  };

  const handelChange = ({ e }) => {
    const value = e;

    // Check if the value is a digit
    if (!/^\d*$/.test(value)) {
      return; // If not a digit, return without updating the state
    }

    dispatch(setOTP(value));
    return;
  };

  const navigateLogin = () => {
    navigate("/login");
  };

  const handleDeleteFile = () => {
    setFieldValue("file", null);
    setBase64Image(null); // Clear base64Image when deleting file
  };

  const validationCheck = () => {
    setValidationError(true);
    setTimeout(() => {
      setValidationError(false);
    }, 2000);
  };

  return {
    step,
    setStep,
    handelClickOTP,
    handelChange,
    navigateLogin,
    errors,
    handleChange,
    handleSubmit,
    values,
    base64Image,
    loader,
    handleDeleteFile,
    setFieldValue,
    error,
    validationCheck,
    validationError,
    otpValue,
  };
};

export default Signup;
