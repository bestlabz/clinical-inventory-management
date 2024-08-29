import React, { useEffect } from "react";

//Third party libraries
import { ClipLoader } from "react-spinners";

//Translate
import Translate from "../../Components/translateSpan/TranslateSpan";
import TranslateJson from "../../utils/translation/en.json";

//Components
import Input from "../../Components/Properites/Inputs/Input";
import OTP from "../../Components/Properites/OTP/OtpBox";

//Hooks
import LoginFunction from "../../hooks/Authentication/Login";
import CountDown from "../../hooks/Authentication/CountDown";
import { useSelector } from "react-redux";

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
    loader,
    resendOtp,
    initial,
    setInitial,
  } = LoginFunction();
  const { count, formatTime, setTime } = CountDown();

  const { otpValue, Err } = useSelector((state) => state.otpValue);

  console.log("count", count);

  const click = () => {
    if (!initial) {
      setInitial(true);
      resendOtp();
    } else {
      if (count === 0) {
        resendOtp();
      }
    }
  };

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
              <div className="flex flex-col ">
                {/* lg:w-[55%] xl:w-[70%] 2xl:w-[85%] md:w-[55%] gap-3 sm:w-[55%] xs:w-[90%] xss:w-[90%] mobile:w-[95%] */}
                <div className=" 2xl:block xl:block lg:block md:block sm:block xs:hidden mobile:hidden xss:hidden">
                  <OTP err={Err} />
                </div>
                <div className=" 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden xs:block mobile:hidden xss:hidden">
                  <OTP err={Err} gap="6px" height="45px" width="45px" />
                </div>
                <div className=" 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden xs:hidden mobile:block xss:hidden">
                  <OTP
                    err={Err}
                    gap="6px"
                    height="35px"
                    width="35px"
                    fontSize="24px"
                  />
                </div>
                <div className=" 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden xs:hidden mobile:hidden xss:block">
                  <OTP
                    err={Err}
                    gap="3px"
                    height="33px"
                    width="33px"
                    fontSize="18px"
                  />
                </div>
                {/* <div className=" flex items-center justify-between">
                  <span className=" text-red-500 w-full mt-3">
                    {!otpValue &&
                      Err &&
                      `${TranslateJson.verification["err-text"]}`}
                  </span>
                </div> */}
              </div>

              <p className="resend-text">
                <span
                  onClick={() => {
                    setTime();
                    click();
                  }}
                  className=" text-primary_color cursor-pointer"
                >
                  {TranslateJson.verification["resend-text"]}
                </span>
                {formatTime(count)}
              </p>
              {loader ? (
                <button type="button" className="login-button-otp">
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
