import React from "react";

import DocumentPageFunction from "../../hooks/Authentication/DocumentPage";

//Translate
import TranslateJson from "../../utils/translation/en.json";
import Input from "../../Components/Properites/Inputs/Input";
import ImageInput from "../../Components/Properites/imageInput/multipleDocumentUpload";
import { ClipLoader } from "react-spinners";

const DocumentPage = () => {
  const {
    step,
    errors,
    handleChange,
    handleDeleteFile,
    handleSubmit,
    setFieldValue,
    validationCheck,
    validationError,
    values,
    base64Image,
    loader,
  } = DocumentPageFunction();

  return (
    <div className=" w-full h-full flex flex-col items-center justify-center">
      {step === 1 && (
        <form autoComplete="off" className="login-form" onSubmit={handleSubmit}>
          <h1 className="text-[22px] font-semibold">
            Please Update Clinic Details
          </h1>
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
            placeholder={TranslateJson.signup.step3.placeholder.clinic_name}
          />
          <Input
            id="email"
            name="email"
            value={values.email}
            setValue={handleChange}
            err={validationError && errors.email}
            label={TranslateJson.signup.step3.label.email}
            placeholder={TranslateJson.signup.step3.placeholder.email}
          />
          <div className=" 2xl:w-full xl:w-full lg:w-full md:w-[80%] sm:w-[80%] xs:w-[80%] xss:w-[80%] mobile:w-[80%] flex items-center gap-3 mt-2">
            <input
              required={true}
              type="checkbox"
              className=" w-[20px] h-[20px] accent-primary_color"
            />
            <span>{TranslateJson.signup.step3.termsandcondition}</span>
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
      {step === 2 && (
        <form
          autoComplete="off"
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 w-[80%] 2xl:items-start xl:items-start lg:items-start md:items-center sm:items-center xs:items-center xss:items-center mobile:items-center"
        >
          <h1 className="sub-text">{TranslateJson.signup.step4.subtitle}</h1>
          <div className=" relative 2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[80%] sm:w-[80%] xs:w-[80%] xss:w-[80%] mobile:w-[80%]">
            <ImageInput
              base64Image={base64Image}
              file={values.files}
              handleDeleteFile={handleDeleteFile}
              setFieldValue={setFieldValue}
            />
            {validationError && errors.files && (
              <span className=" absolute top-[98%] left-0 err-txt ">
                {errors.files}
              </span>
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
  );
};

export default DocumentPage;
