import React from "react";


//Translate
import Translate from '../../Components/translateSpan/TranslateSpan'
import TranslateJson from "../../utils/translation/en.json"

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
    otpValue
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
            <form onSubmit={handleSubmit} autoComplete="off" className="login-form">
              <Input
                id="phone_number"
                name="phone_number"
                label={TranslateJson.Login.label}
                placeholder={TranslateJson.Login.placeholder}
                value={values.phone_number}
                setValue={handleChange}
                err={errors.phone_number}
                length={10}
                
              />
              <button type="submit" className="login-button">
               {TranslateJson.Login.button}
              </button>
              <p className=" w-full text-center mt-3 font-semibold">
                {TranslateJson.Login.bottom_text.text1}
              </p>
              <p onClick={navigateSignup} className=" w-full text-center cursor-pointer text-text_blue_color">
                {TranslateJson.Login.bottom_text.text2}
              </p>
            </form>
          )}
          {step === 2 && (
            <>
           <OTPResponsive error={error} handelChange={(e) => handelChange({e})} length={6} otpValue={otpValue}  />

              <p className="resend-text">
                <span
                  onClick={setTime}
                  className=" text-primary_color cursor-pointer"
                >
                  {TranslateJson.verification["resend-text"]}
                </span>
                {formatTime(count)}
              </p>
              <button className="login-button-otp" onClick={handelClickOTP}>
                {TranslateJson.verification.button}
              </button>
              <p className="w-full text-center mt-3 font-semibold">
                {TranslateJson.verification.bottom_text.text1}
              </p>
              <p onClick={navigateSignup} className="w-full text-center cursor-pointer text-text_blue_color">
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
