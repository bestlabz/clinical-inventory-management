import React from "react";
import Input from "../../Components/Properites/Inputs/Input";

import OTP from "../../Components/Properites/OTP/OTP";

import SignupFunction from "../../hooks/Authentication/Signup";
import CountDown from "../../hooks/Authentication/CountDown";
import ImageInput from "../../Components/Properites/imageInput/ImageInput";

const Signup = () => {
  const { step, handelClick } = SignupFunction();
  const { count, formatTime, setTime } = CountDown();

  return (
    <div className="public-route">
      <div className="public-route-right">
        <div className="public-route-right-inside"></div>
      </div>
      <div className="public-route-left">
        <div className="public-route-left-inside">
          <h1 className="title-text">Create a new account</h1>
          {step === 1 && (
            <>
              <Input label="Mobile Number" placeholder="Enter your number" />
              <button className="login-button" onClick={handelClick}>
                Next
              </button>
              <p className=" w-full text-center mt-3 font-semibold">
                Already have an account?
              </p>
              <p className=" w-full text-center cursor-pointer">Login</p>
            </>
          )}
          {step === 2 && (
            <>
              <OTP />
              <p className="resend-text">
                <span
                  onClick={setTime}
                  className=" text-primary_color cursor-pointer"
                >
                  Resend OTP
                </span>
                {formatTime(count)}
              </p>
              <button className="login-button-otp" onClick={handelClick}>
                Next
              </button>
              <p className=" text-center mt-3 font-semibold">
                Already have an account?
              </p>
              <p className=" text-center cursor-pointer">Login</p>
            </>
          )}
          {step === 3 && (
            <>
              <h1 className="sub-text">Profile Details</h1>
              <Input label="Name" placeholder="Enter your name" />
              <Input label="Clinic Name" placeholder="Enter your clinic name" />
              <Input label="Email" placeholder="Enter your email" />
              <div className=" w-full flex items-center gap-3">
                <input  type="checkbox" className=" w-[20px] h-[20px] accent-primary_color" />
                <span>Agree to terms and conditions</span>
              </div>

              <button className="login-button" onClick={handelClick}>
                Next
              </button>
            </>
          )}
          {
            step === 4 && <div className="flex flex-col gap-6 w-full">
              <h1 className="sub-text">Clinical Document Verification</h1>
              <div className=" 2xl:w-[89%] xl:w-[89%] lg:w-[100%] md:w-[80%] sm:w-[80%] xs:w-[80%] xss:w-[80%] mobile:w-[80%]">
              <ImageInput />

              </div>
              <button className="login-button" onClick={handelClick}>
                Submit
              </button>
            
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Signup;
