import React from "react";



//Translate
import Translate from '../../Components/translateSpan/TranslateSpan'
import TranslateJson from "../../utils/translation/en.json"

//Assets
import ReloadIcon from "../../assets/Svg/Reloadicon";
//Third party libraries
import { IoArrowBackSharp } from "react-icons/io5";
import PhoneNumber from "../../Components/Properites/PhoneNumber/PhoneNumber";

//components
import OTPResponsive1 from "../../Components/Properites/OTP/OTPResponsive1";


//Hooks
import AddReceptionistFunction from "../../hooks/Receptionist/AddReceptionist";
import ResponsiveSuccessmodal from "../../Components/Properites/ResponsiveSuccessmodal/ResponsiveSuccessmodal";

const AddReceptionist = () => {
  const { goBack, next, pre, step, otp, setOTP, modalPopup } = AddReceptionistFunction();

  return (
    <div
      style={{
        boxShadow:
          "0 5px 9px -8px rgba(0, 0, 0, .9), 0 2px 9px -3px rgba(0, 0, 0, .9)",
      }}
      className="add-doctor-container"
    >
      <div className="add-doctor-top">
        <IoArrowBackSharp
          size={20}
          onClick={() => {
            if (step === 1) {
              return goBack();
            } else {
              return pre();
            }
          }}
          className=" cursor-pointer"
        />
        <p className="add-doctor-top-title">{TranslateJson.add_receptionist.navigate_content}</p>
      </div>

      <div className="add-doctor-content">
        {step === 1 && (
          <>
            <p className="add-doctor-content-header">
              {TranslateJson.add_receptionist.step1.button}
            </p>
            <PhoneNumber />

            <button onClick={next} className="add-doctor-content-phonenumber">
             {TranslateJson.add_receptionist.step1.button}
            </button>
          </>
        )}
        {step === 2 && (
          <>
            <p className="add-doctor-content-header">
              {TranslateJson.add_receptionist.step2.title}
            </p>

            <p className=" text-gray-500">
              {TranslateJson.add_receptionist.step2.subtext}
            </p>

            <OTPResponsive1 otp={otp} setOTP={setOTP} />

            <p className=" flex items-center gap-3 cursor-pointer">
              {" "}
              <ReloadIcon /> {TranslateJson.add_receptionist.step2.resend_text}
            </p>

            <button onClick={next} className="add-doctor-content-phonenumber">{TranslateJson.add_receptionist.step2.button}</button>
          </>
        )}

        {step === 3 && (
          <>
            {modalPopup && (
             <ResponsiveSuccessmodal modalPopup={modalPopup} />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AddReceptionist;
