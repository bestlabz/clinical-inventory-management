import React, { useEffect, useState } from "react";

// Third party libraries
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

//Components
import FormHandel from "../../Components/Properites/FormHandel/Formhandel";

//Utilities
import { LoginSchema } from "../../utils/Validation/Login";

//Hooks
import { setToken, setUser } from "../../Redux/Slice/User";
import { setOTP, clearOTP } from "../../Redux/Slice/Otp";

//Api Call
import ApiRequest from "../../services/httpService";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [step, setStep] = useState(1);
  const [otpCount, setotpCount] = useState(6);
  const [otp, setOtp] = useState(new Array(otpCount).fill(""));
  const [error, setError] = useState(false);
  const [number, setNumber] = useState(null);
  const [phone_number, setPhone_number] = useState("");
  const [loader, setLoader] = useState(false);

  const { otpValue } = useSelector((state) => state.otpValue);

  useEffect(() => {
    setTimeout(() => {
      setError(false);
    }, 2000);
  }, [error]);

  const onSubmit = async (values, actions) => {
    const bodyData = {
      mobile_number: values.phone_number,
    };
    setPhone_number(values.phone_number);
    try {
      setLoader(true);
      const { success, message } = await ApiRequest.put("/login", bodyData);

      if (success) {
        setLoader(false);
        return setStep((step) => step + 1);
      } else {
        return toast.error(message);
      }
    } catch (error) {
      setLoader(false);
      toast.error(error.response.data.message);
    }
  };

  const { errors, handleChange, handleSubmit, values } = FormHandel({
    initialValue: { phone_number: "" },
    schema: LoginSchema,
    submitFunction: onSubmit,
  });

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
      try {
        setLoader(true);
        const { clinic, token } = await ApiRequest.post("/verifyotp", bodyData);
        setLoader(false);
        dispatch(setUser(clinic));
        localStorage.setItem("token", token);
        dispatch(clearOTP());
        return navigate("/dashboard");
      } catch (error) {
        setLoader(false);
        toast.error(error.response.data.error);
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

  const navigateSignup = () => {
    navigate("/signup");
  };

  return {
    step,
    setStep,
    setotpCount,
    handelChange,
    otp,
    handelClickOTP,
    setNumber,
    number,
    error,
    errors,
    handleChange,
    handleSubmit,
    values,
    navigateSignup,
    otpValue,
    loader,
  };
};

export default Login;
