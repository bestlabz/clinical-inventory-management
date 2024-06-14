import React from "react";
import Input from "../../Components/Properites/Inputs/Input";

import OTP from "../../Components/Properites/OTP/OTP";

import SignupFunction from "../../hooks/Authentication/Signup";
import CountDown from "../../hooks/Authentication/CountDown";
import ImageInput from "../../Components/Properites/imageInput/ImageInput";
import { ClipLoader } from "react-spinners";
import OTPResponsive from "../../Components/Properites/OTP/OTPResponsive";

const Signup = () => {
  const {
    step,
    handelClickOTP,
    navigateLogin,
    errors,
    handleChange,
    handleSubmit,
    values,
    base64Image,
    loader,
    setFieldValue,
    handleDeleteFile,
    error,
    validationError,
    validationCheck,
    handelChange,
    otpValue
  } = SignupFunction();
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
            <form
              autoComplete="off"
              className="login-form"
              onSubmit={handleSubmit}
            >
              <Input
                id="phone_number"
                name="phone_number"
                value={values.phone_number}
                setValue={handleChange}
                length={10}
                label="Mobile Number"
                placeholder="Enter your number"
                err={validationError && errors.phone_number}
              />
              <button
                type="submit"
                onClick={validationCheck}
                className="login-button"
              >
                Next
              </button>
              <p className=" w-full text-center mt-3 font-semibold">
                Already have an account?
              </p>
              <p
                onClick={navigateLogin}
                className=" w-full text-center cursor-pointer text-text_blue_color"
              >
                Login
              </p>
            </form>
          )}
          {step === 2 && (
            <>
              <OTPResponsive
                error={error}
                handelChange={(e) => handelChange({ e })}
                length={6}
                otpValue={otpValue}
              />

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
                Next
              </button>
              <div className=" w-full flex items-center gap-3 flex-col">
                <p className=" text-center mt-3 font-semibold">
                  Already have an account?
                </p>
                <p
                  onClick={navigateLogin}
                  className=" text-center cursor-pointer text-text_blue_color"
                >
                  Login
                </p>
              </div>
            </>
          )}
          {step === 3 && (
            <form
              autoComplete="off"
              className="login-form"
              onSubmit={handleSubmit}
            >
              <h1 className="sub-text">Profile Details</h1>
              <Input
                id="name"
                name="name"
                value={values.name}
                setValue={handleChange}
                err={validationError && errors.name}
                label="Name"
                placeholder="Enter your name"
              />
              <Input
                id="clinic_name"
                name="clinic_name"
                value={values.clinic_name}
                setValue={handleChange}
                err={validationError && errors.clinic_name}
                label="Clinic Name"
                placeholder="Enter your clinic name"
              />
              <Input
                id="email"
                name="email"
                value={values.email}
                setValue={handleChange}
                err={validationError && errors.email}
                label="Email"
                placeholder="Enter your email"
              />
              <div className=" 2xl:w-full xl:w-full lg:w-full md:w-[80%] sm:w-[80%] xs:w-[80%] xss:w-[80%] mobile:w-[80%] flex items-center gap-3 mt-2">
                <input
                  required={true}
                  type="checkbox"
                  className=" w-[20px] h-[20px] accent-primary_color"
                />
                <span>Agree to terms and conditions</span>
              </div>

              <button
                type="submit"
                onClick={validationCheck}
                className="login-button"
              >
                Next
              </button>
            </form>
          )}
          {step === 4 && (
            <form
              autoComplete="off"
              onSubmit={handleSubmit}
              className="flex flex-col  gap-6 w-full 2xl:items-start xl:items-start lg:items-start md:items-center sm:items-center xs:items-center xss:items-center mobile:items-center"
            >
              <h1 className="sub-text">Clinical Document Verification</h1>
              <div className=" relative 2xl:w-[89%] xl:w-[89%] lg:w-[100%] md:w-[80%] sm:w-[80%] xs:w-[80%] xss:w-[80%] mobile:w-[80%]">
                <ImageInput
                  base64Image={base64Image}
                  file={values.file}
                  handleDeleteFile={handleDeleteFile}
                  setFieldValue={setFieldValue}
                />
                {validationError && errors.file && (
                  <span className=" absolute top-[98%] left-0 err-txt ">
                    {errors.file}
                  </span>
                )}
              </div>
              {loader ? (
                <button type="submit" className="login-button">
                  <ClipLoader color="#fff" size={20} />
                </button>
              ) : (
                <button type="submit" className="login-button">
                  Submit
                </button>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;
