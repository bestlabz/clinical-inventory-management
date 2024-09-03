import React from "react";

import Logo from "../../assets/logo.jpg";

//Third party libraries
import { ClipLoader } from "react-spinners";

//Translate
import Translate from "../../Components/translateSpan/TranslateSpan";
import TranslateJson from "../../utils/translation/en.json";

//Components
import Input from "../../Components/Properites/Inputs/Input";
import ImageInput from "../../Components/Properites/imageInput/signupImageInput";
import OTP from "../../Components/Properites/OTP/OtpBox";

//Hooks
import SignupFunction from "../../hooks/Authentication/Signup";
import CountDown from "../../hooks/Authentication/CountDown";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

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
    resendOtp,
    initial,
    setInitial,
  } = SignupFunction();
  const { count, formatTime, setTime } = CountDown();

  const { Err } = useSelector((state) => state.otpValue);

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
          <div className="title-text 2xl:hidden xl:hidden lg:hidden block pt-1">
            <img src={Logo} className="object-contain w-[200px]" />
          </div>
          <h1 className="title-text">{TranslateJson.signup.title}</h1>
          {step === 1 && (
            <form
              autoComplete="off"
              className="login-form"
              onSubmit={handleSubmit}
            >
              <div className=" flex flex-col items-center 2xl:w-full xl:w-full lg:w-full md:w-[80%] sm:w-[80%] xs:w-[80%] xss:w-[80%] mobile:w-[80%]">
                <Input
                  id="phone_number"
                  name="phone_number"
                  value={values.phone_number}
                  setValue={(e) => {
                    if (!/^\d*$/.test(e.target.value)) {
                      return; // If not a digit, return without updating the state
                    } else {
                      handleChange(e);
                    }
                  }}
                  length={10}
                  label={TranslateJson.signup.step1.label}
                  placeholder={TranslateJson.signup.step1.placeholder}
                  err={validationError && errors.phone_number}
                />

                <Input
                  id="email"
                  name="email"
                  value={values.email}
                  setValue={handleChange}
                  label={TranslateJson.signup.step1.label1}
                  placeholder={TranslateJson.signup.step1.placeholder1}
                  err={validationError && errors.email}
                />
              </div>
              {loader ? (
                <button type="button" className="login-button">
                  <ClipLoader color="#fff" size={20} />
                </button>
              ) : (
                <button
                  type="submit"
                  onClick={validationCheck}
                  className="login-button"
                >
                  {TranslateJson.signup.step1.button}
                </button>
              )}
              <p className=" w-full text-center mt-3 font-semibold">
                {TranslateJson.signup.step1.bottom_text.text1}
              </p>
              <p
                onClick={navigateLogin}
                className=" w-full text-center cursor-pointer text-text_blue_color"
              >
                {TranslateJson.signup.step1.bottom_text.text2}
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
              </div>

              <p className="resend-text">
                <span
                  onClick={() => {
                    setTime();
                    click();
                  }}
                  className=" text-primary_color cursor-pointer"
                >
                  {TranslateJson.signup.step2["resend-text"]}
                </span>
                {formatTime(count)}
              </p>
              {loader ? (
                <button type="button" className="login-button-otp">
                  <ClipLoader color="#fff" size={20} />
                </button>
              ) : (
                <button className="login-button-otp" onClick={handelClickOTP}>
                  {TranslateJson.signup.step2.button}
                </button>
              )}
              <div className=" w-full flex items-center gap-3 flex-col">
                <p className=" text-center mt-3 font-semibold">
                  {TranslateJson.signup.step2.bottom_text.text1}
                </p>
                <p
                  onClick={navigateLogin}
                  className=" text-center cursor-pointer text-text_blue_color"
                >
                  {TranslateJson.signup.step2.bottom_text.text2}
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
              <h1 className="sub-text">
                {TranslateJson.signup.step3.subtitle}
              </h1>
              <div className=" flex flex-col items-center 2xl:w-full xl:w-full lg:w-full md:w-[80%] sm:w-[80%] xs:w-[80%] xss:w-[80%] mobile:w-[80%]">
                <Input
                  id="name"
                  name="name"
                  value={values.name}
                  setValue={(e) => {
                    if (/^[a-zA-Z\s]*$/.test(e.target.value)) {
                      handleChange(e); // Call handleChange if the input is valid
                    }
                  }}
                  err={validationError && errors.name}
                  label={TranslateJson.signup.step3.label.name}
                  placeholder={TranslateJson.signup.step3.placeholder.name}
                />
                <Input
                  id="clinic_name"
                  name="clinic_name"
                  value={values.clinic_name}
                  setValue={(e) => {
                    if (/^[a-zA-Z\s]*$/.test(e.target.value)) {
                      handleChange(e); // Call handleChange if the input is valid
                    }
                  }}
                  err={validationError && errors.clinic_name}
                  label={TranslateJson.signup.step3.label.clinic_name}
                  placeholder={
                    TranslateJson.signup.step3.placeholder.clinic_name
                  }
                />
                <Input
                  id="email"
                  name="email"
                  value={values.email}
                  setValue={handleChange}
                  err={validationError && errors.email}
                  label={TranslateJson.signup.step3.label.email}
                  placeholder={TranslateJson.signup.step3.placeholder.email}
                  disabled={true}
                />
              </div>

              <div className=" 2xl:w-full xl:w-full lg:w-full md:w-[80%] sm:w-[80%] xs:w-[80%] xss:w-[80%] mobile:w-[80%] flex items-center mt-2">
                <input
                  required={true}
                  type="checkbox"
                  className=" w-[16px] h-[16px] accent-primary_color"
                />
                <span className="ml-3 text-[12px]">
                Agree to {""}
                <Link
                  target="_blank"
                  to="/terms-condition"
                  referrerPolicy="no-referrer"
                  className="text-primary_color underline"
                >
                  {TranslateJson.signup.step3.termsandcondition} {""}
                </Link>
                and {""}
                <Link
                  target="_blank"
                  to="/privacy-policy"
                  referrerPolicy="no-referrer"
                  className="text-primary_color underline"
                >
                  {TranslateJson.signup.step3.privacypolicy}
                </Link>

                </span>
              </div>

              <button
                type="submit"
                onClick={validationCheck}
                className="login-button"
              >
                {TranslateJson.signup.step3.button}
              </button>
            </form>
          )}
          {step === 4 && (
            <form
              autoComplete="off"
              onSubmit={handleSubmit}
              className="flex flex-col  gap-6 w-full 2xl:items-start xl:items-start lg:items-start md:items-center sm:items-center xs:items-center xss:items-center mobile:items-center overflow-auto pt-1 pb-3"
            >
              {" "}
              <h1 className="sub-text">
                {TranslateJson.signup.step4.subtitle}
              </h1>
              <div className=" relative 2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[80%] sm:w-[80%] xs:w-[80%] xss:w-[80%] mobile:w-[80%]">
                <ImageInput
                  base64Image={base64Image.clinical_registration_certificate}
                  file={values.clinical_registration_certificate}
                  handleDeleteFile={handleDeleteFile}
                  setFieldValue={setFieldValue}
                  fileName="clinical_registration_certificate"
                  label="Clinical registration certificate"
                  access="(.pdf, .png .jpg .jpeg)"
                />
                {validationError &&
                  errors.clinical_registration_certificate && (
                    <span className=" -mt-3 err-txt ">
                      {errors.clinical_registration_certificate}
                    </span>
                  )}
              </div>
              <div className=" relative 2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[80%] sm:w-[80%] xs:w-[80%] xss:w-[80%] mobile:w-[80%]">
                <ImageInput
                  base64Image={
                    base64Image.primary_consultant_degree_certificate
                  }
                  file={values.primary_consultant_degree_certificate}
                  handleDeleteFile={handleDeleteFile}
                  setFieldValue={setFieldValue}
                  fileName="primary_consultant_degree_certificate"
                  label="Primary consultant degree certificate"
                  access="(.pdf, .png .jpg .jpeg)"
                />
                {validationError &&
                  errors.primary_consultant_degree_certificate && (
                    <span className="-mt-3 err-txt ">
                      {errors.primary_consultant_degree_certificate}
                    </span>
                  )}
              </div>
              <div className="relative 2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[80%] sm:w-[80%] xs:w-[80%] xss:w-[80%] mobile:w-[80%]">
                <ImageInput
                  base64Image={base64Image.clinic_photo}
                  file={values.clinic_photo}
                  handleDeleteFile={handleDeleteFile}
                  setFieldValue={setFieldValue}
                  fileName="clinic_photo"
                  label="Clinic photo with name board"
                  access="(.pdf, .png .jpg .jpeg)"
                />
                {validationError && errors.clinic_photo && (
                  <span className="err-txt  -mt-3">{errors.clinic_photo}</span>
                )}
              </div>
              {loader ? (
                <button type="submit" className="login-button">
                  <ClipLoader color="#fff" size={20} />
                </button>
              ) : (
                <button
                  onClick={validationCheck}
                  type="submit"
                  className="login-button"
                >
                  {TranslateJson.signup.step4.button}
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
