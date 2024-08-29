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
import { clearOTP, setErr } from "../../Redux/Slice/Otpinput";

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
  const [email, setEmail] = useState("");
  const [loader, setLoader] = useState(false);
  const [initial, setInitial] = useState(false)

  const { otpValue } = useSelector((state) => state.otpValue);

  useEffect(() => {
    if (step === 1) {
      localStorage.removeItem("token");
    }
  }, [step]);

  useEffect(() => {
    setTimeout(() => {
      setError(false);
    }, 2000);
  }, [error]);

  const onSubmit = async (values, actions) => {
    const bodyData = {
      email: values.email,
    };
    setEmail(values.email);
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
      toast.error(
        `${error.response?.data?.message || error.response.data.error}`
      );
    }
  };

  const { errors, handleChange, handleSubmit, values } = FormHandel({
    initialValue: { email: "" },
    schema: LoginSchema,
    submitFunction: onSubmit,
  });

  const handelClickOTP = async () => {
    if (!otpValue) {
      dispatch(setErr(true));

      setTimeout(() => {
        dispatch(setErr(false));
      }, 2000);
      return;
    }

    if (otpValue?.length < 6) {
      dispatch(setErr(true));

      setTimeout(() => {
        dispatch(setErr(false));
      }, 2000);
      return;
    } else {
      setError(false);

      const bodyData = {
        email: email,
        otp: otpValue.join(""),
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
        dispatch(clearOTP());
        dispatch(setErr(true));
        setTimeout(() => {
          dispatch(setErr(false));
        }, 2000);
        toast.error(
          `${error.response?.data?.message || error.response.data.error}`
        );
      }
    }
  };

  const navigateSignup = () => {
    navigate("/signup");
  };

  const resendOtp = async () => {
    const bodyData = {
      email: email,
    }

    try {
      const {success, message} = await ApiRequest.post('/resendotp/clinic', bodyData)

      if(success){
        toast.success(message);
      }
      
    } catch (error) {

      toast.error(error.response?.data?.message || error.response.data.error)
      
    }

  }

  return {
    step,
    setStep,
    setotpCount,
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
    resendOtp,
    initial, setInitial
  };
};

export default Login;
