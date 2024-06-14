import React from "react";

//Assets
import ReloadIcon from "../../assets/Svg/Reloadicon";
//Third party libraries
import { IoArrowBackSharp } from "react-icons/io5";
import PhoneNumber from "../../Components/Properites/PhoneNumber/PhoneNumber";

//Hooks
import AddReceptionistFunction from "../../hooks/Receptionist/AddReceptionist";
import OTP from "../../Components/Properites/OTP/OTP";
import OTPResponsive1 from "../../Components/Properites/OTP/OTPResponsive1";

const AddReceptionist = () => {
  const { goBack, next, pre, step, otp, setOTP } = AddReceptionistFunction();

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
        <p className="add-doctor-top-title">Invite Receptionist</p>
      </div>

      <div className="add-doctor-content">
        {step === 1 && (
          <>
            <p className="add-doctor-content-header">
              Enter Receptionist Mobile number
            </p>
            <PhoneNumber />

            <button onClick={next} className="add-doctor-content-phonenumber">
              Send Code
            </button>
          </>
        )}
        {step === 2 && (
          <>
            <p className="add-doctor-content-header">
              Enter Receptionist Mobile number
            </p>

            <p className=" text-gray-500">
              A secure code has been sent to Receptionist mobile number
            </p>

            <OTPResponsive1 otp={otp} setOTP={setOTP} />

            <p className=" flex items-center gap-3 cursor-pointer">
              {" "}
              <ReloadIcon /> Resend Code
            </p>

            <button onClick={next} className="add-doctor-content-phonenumber">Verify</button>
          </>
        )}

        {step === 3 && (
          <>
            <button className="add-doctor-content-phonenumber">
              Request Document
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default AddReceptionist;
