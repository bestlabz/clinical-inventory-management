import React from "react";

//Third party libraries
import { ClipLoader } from "react-spinners";

//Translate
import Translate from "../../Components/translateSpan/TranslateSpan";
import TranslateJson from "../../utils/translation/en.json";

//Components
import Input from "../../Components/Properites/Inputs/Input";
import OTPResponsive from "../../Components/Properites/OTP/OTPResponsive";

//Hooks
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
    navigateSignup,
    handelChange,
    otpValue,
    loader,
  } = LoginFunction();
  const { count, formatTime, setTime } = CountDown();

  return (
    <div className="public-route">
      <div className="public-route-right">
        <div className="public-route-right-inside"></div>
      </div>
      <div className="public-route-left">
        <div className="public-route-left-inside">
          <h1 className="title-text">{TranslateJson.Login.title}</h1>
          {step === 1 && (
            <form
              onSubmit={handleSubmit}
              autoComplete="off"
              className="login-form"
            >
              <div className=" flex flex-col items-center 2xl:w-full xl:w-full lg:w-full md:w-[80%] sm:w-[80%] xs:w-[80%] xss:w-[80%] mobile:w-[80%]">
                {/* // if (!/^\d*$/.test(e.target.value)) {
                  //   return; // If not a digit, return without updating the state
                  // } else {
                  //   handleChange(e);
                  // } */}
                <Input
                  id="email"
                  name="email"
                  label={TranslateJson.Login.label}
                  placeholder={TranslateJson.Login.placeholder}
                  value={values.email}
                  setValue={handleChange}
                  err={errors.email}
                />
              </div>
              {loader ? (
                <button type="button" className="login-button">
                  <ClipLoader color="#fff" size={20} />
                </button>
              ) : (
                <button type="submit" className="login-button">
                  {TranslateJson.Login.button}
                </button>
              )}
              <p className=" w-full text-center mt-3 font-semibold">
                {TranslateJson.Login.bottom_text.text1}
              </p>
              <p
                onClick={navigateSignup}
                className=" w-full text-center cursor-pointer text-text_blue_color"
              >
                {TranslateJson.Login.bottom_text.text2}
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
                  {TranslateJson.verification["resend-text"]}
                </span>
                {formatTime(count)}
              </p>
              {loader ? (
                <button type="button" className="login-button">
                  <ClipLoader color="#fff" size={20} />
                </button>
              ) : (
                <button className="login-button-otp" onClick={handelClickOTP}>
                  {TranslateJson.verification.button}
                </button>
              )}
              <p className="w-full text-center mt-3 font-semibold">
                {TranslateJson.verification.bottom_text.text1}
              </p>
              <p
                onClick={navigateSignup}
                className="w-full text-center cursor-pointer text-text_blue_color"
              >
                {TranslateJson.verification.bottom_text.text2}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
