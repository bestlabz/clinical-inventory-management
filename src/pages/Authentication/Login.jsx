import React from "react";
import Input from "../../Components/Properites/Inputs/Input";

import OTP from "../../Components/Properites/OTP/OTP";

import LoginFunction from "../../hooks/Authentication/Login";
import CountDown from "../../hooks/Authentication/CountDown";

const Login = () => {
  const {
    step,
    handelClick,
    handleNavigate,
    number,
    setNumber,
    error,
    error1,
  } = LoginFunction();
  const { count, formatTime, setTime } = CountDown();
  console.log('error1', error1);


  return (
    <div className="public-route">
      <div className="public-route-right">
        <div className="public-route-right-inside"></div>
      </div>
      <div className="public-route-left">
        <div className="public-route-left-inside">
          <h1 className="title-text">Log in to your account</h1>
          {step === 1 && (
            <>
              <Input
                label="Mobile Number"
                placeholder="Enter your number"
                value={number}
                setValue={(e) => setNumber(e.target.value)}
                err={error ? "Required" : ""}
              />
              <button className="login-button" onClick={() => handelClick()}>
                Log in
              </button>
              <p className=" w-full text-center mt-3 font-semibold">
                Don't have an account?
              </p>
              <p className=" w-full text-center cursor-pointer">
                Create a new one
              </p>
            </>
          )}
          {step === 2 && (
            <>
              <OTP err={error1} />
              <p className="resend-text">
                <span
                  onClick={setTime}
                  className=" text-primary_color cursor-pointer"
                >
                  Resend OTP
                </span>
                {formatTime(count)}
              </p>
              <button className="login-button-otp" onClick={handleNavigate}>
                Log in
              </button>
              <p className="w-full text-center mt-3 font-semibold">
                Don't have an account?
              </p>
              <p className="w-full text-center cursor-pointer">
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
