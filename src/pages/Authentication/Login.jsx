import React from "react";
import Input from "../../Components/Properites/Inputs/Input";

import OTP from "../../Components/Properites/OTP/OTP";

import LoginFunction from "../../hooks/Authentication/Login";
import CountDown from "../../hooks/Authentication/CountDown";

const Login = () => {
  const {
    step,
    handelClickOTP,
    error,
    errors,
    handleChange,
    handleSubmit,
    values,
    navigateSignup
  } = LoginFunction();
  const { count, formatTime, setTime } = CountDown();

  return (
    <div className="public-route">
      <div className="public-route-right">
        <div className="public-route-right-inside"></div>
      </div>
      <div className="public-route-left">
        <div className="public-route-left-inside">
          <h1 className="title-text">Log in to your account</h1>
          {step === 1 && (
            <form onSubmit={handleSubmit} autoComplete="off" className="login-form">
              <Input
                id="phone_number"
                name="phone_number"
                label="Mobile Number"
                placeholder="Enter your phone number"
                value={values.phone_number}
                setValue={handleChange}
                err={errors.phone_number}
                length={10}
                
              />
              <button type="submit" className="login-button">
                Log in
              </button>
              <p className=" w-full text-center mt-3 font-semibold">
                Don't have an account?
              </p>
              <p onClick={navigateSignup} className=" w-full text-center cursor-pointer text-text_blue_color">
                Create a new one
              </p>
            </form>
          )}
          {step === 2 && (
            <>
              <OTP err={error} />
              <p className="resend-text">
                <span
                  onClick={setTime}
                  className=" text-primary_color cursor-pointer"
                >
                  Resend OTP
                </span>
                {formatTime(count)}
              </p>
              <button className="login-button-otp" onClick={handelClickOTP}>
                Log in
              </button>
              <p className="w-full text-center mt-3 font-semibold">
                Don't have an account?
              </p>
              <p onClick={navigateSignup} className="w-full text-center cursor-pointer text-text_blue_color">
                Create a new one
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
