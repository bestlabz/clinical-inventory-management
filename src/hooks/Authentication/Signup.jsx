import React, { useState } from "react";

const Signup = () => {
  const [step, setStep] = useState(1);
  const [otpCount, setotpCount] = useState(6);
  const [otp, setOtp] = useState(new Array(otpCount).fill(""));
  const [error, setError] = useState(false);
  const [error1, setError1] = useState(false);

  const handelClick = () => {
    if (step !== 4) {
      return setStep((step) => step + 1);
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

    // dispatch(setOTP(newOtp));
    setOtp(newOtp);
    return;
  };

  return {
    step,
    setStep,
    handelClick,
    setotpCount,
    handelChange,
    otp,
  };
};

export default Signup;
