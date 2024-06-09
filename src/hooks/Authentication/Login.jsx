import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../Redux/Slice/User";
import { setOTP } from "../../Redux/Slice/Otp";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [step, setStep] = useState(1);
  const [otpCount, setotpCount] = useState(6);
  const [otp, setOtp] = useState(new Array(otpCount).fill(""));
  const [error, setError] = useState(false);
  const [error1, setError1] = useState(false);
  const [number, setNumber] = useState(null);

  const { otpValue } = useSelector((state) => state.otpValue);

  const handelClick = () => {
    if (step === 1) {
      if (number) {
        if (step !== 2) {
          setError(false);
          return setStep((step) => step + 1);
        }
      } else {
        setError(true);
      }
    }
  };

  const handelChange = ({ e, i }) => {
    const value = e.target.value;

    // Check if the value is a digit
    if (!/^\d*$/.test(value)) {
      return; // If not a digit, return without updating the state
    }

    const newOtp = [...otp];
    newOtp[i] = value;

    if (value && e.target.nextSibling) {
      e.target.nextSibling.focus();
    }
    if (value === "" && e.target.previousSibling) {
      e.target.previousSibling.focus();
    }

    dispatch(setOTP(newOtp));
    setOtp(newOtp);
    return;
  };

  const handleNavigate = () => {
    if (!otpValue) {
      return setError1(true);
    }
    const OTPVALUE = otpValue.join("");
    if (!OTPVALUE || OTPVALUE?.length < 6) {
      return setError1(true);
    } else {
      setError1(false);
      dispatch(setUser("Mohamed Thawfeek"));
      return navigate("/dashboard");
    }
  };

  return {
    step,
    setStep,
    handelClick,
    setotpCount,
    handelChange,
    otp,
    handleNavigate,
    setNumber,
    number,
    error,
    error1,
  };
};

export default Login;
