import React from "react";

//Assets
import Img from "../../assets/PreviewImage.png";
import Signature from "../../assets/signature.png";
import Image1 from "../../assets/image1.png";

//Translate
import TranslateJson from "../../utils/translation/en.json";

//Third party libraries
import { FaArrowLeft } from "react-icons/fa6";

//Components
import RightSide from "./RightSide";
import LeftSide from "./LeftSide";

//Hooks
import PrescriptionFunction from "../../hooks/Prescription/Prescription";

const Prescription = () => {
  const {
    Options,
    style,
    base64Image,
    errors,
    handleChange,
    handleDeleteFile,
    handleSubmit,
    setFieldValue,
    values,
    SelectGender,
    validationCheck,
    validationError,
    gender,
    goBack,
  } = PrescriptionFunction();
  return (
    <div className="prescription-container">
      <div className="prescription-right-container">
        <div
          style={{
            boxShadow:
              "0 5px 5px -8px rgba(0, 0, 0, .9), 0 2px 8px -3px rgba(0, 0, 0, .6)",
          }}
          className="add-prescription-top"
        >
          <FaArrowLeft className=" cursor-pointer" size={20} onClick={goBack} />
          <p className="add-medicine-top-text">
            {TranslateJson.prescription.navigate_content}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          autoComplete="off"
          className="prescription-right"
        >
          <RightSide
            Options={Options}
            TranslateJson={TranslateJson}
            errors={errors}
            gender={gender}
            handleChange={handleChange}
            style={style}
            validationError={validationError}
            values={values}
            base64Image={base64Image}
            handleDeleteFile={handleDeleteFile}
            setFieldValue={setFieldValue}
            SelectGender={SelectGender}
          />
          <div className="col-span-2 place-content-center py-3">
            <div className="w-full flex items-center justify-center">
              <button
                type="submit"
                onClick={validationCheck}
                className="bg-primary_color text-white  2xl:w-[30%] xl:w-[30%] lg:w-[30%] md:w-[40%] sm:w-[40%] xs:w-[80%] mobile:w-[80%] xss:w-[90%] py-[10px] rounded-lg "
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="prescription-left">
        <LeftSide
          values={values}
          Image1={Image1}
          Img={Img}
          Signature={Signature}
          TranslateJson={TranslateJson}
          gender={gender}
          base64Image={base64Image}
        />
      </div>
    </div>
  );
};

export default Prescription;
