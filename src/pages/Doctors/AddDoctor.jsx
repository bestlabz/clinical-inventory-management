import React from "react";

//Assets 
import ReloadIcon from '../../assets/Svg/Reloadicon'
//Third party libraries
import { IoArrowBackSharp } from "react-icons/io5";
import PhoneNumber from "../../Components/Properites/PhoneNumber/PhoneNumber";

//Hooks
import AddDoctorFunction from "../../hooks/Doctors/AddDoctor";
import OTP from "../../Components/Properites/OTP/OTP";

const AddDoctor = () => {
  const { goBack, next, pre, step, otp, setOTP } = AddDoctorFunction();

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
        <p className="add-doctor-top-title">Invite Doctor</p>
      </div>

      <div className="add-doctor-content">
        {step === 1 && (
          <>
            <p className="add-doctor-content-header">
              Enter Doctor’s Mobile number
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
              Enter Doctor’s Mobile number
            </p>
            <div className=" 2xl:block xl:block lg:block md:block sm:block xs:hidden xss:hidden mobile:hidden">
              <OTP
                setValue={setOTP}
                value={otp}
                def="0000"
                height="60px"
                width="60px"
                length="4"
                textColor="#069B56"
                gap="10px"
              />
            </div>

            <div className=" 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden xs:block xss:hidden mobile:block">
              <OTP
                setValue={setOTP}
                value={otp}
                def="0000"
                height="40px"
                width="40px"
                length="4"
                textColor="#069B56"
                gap="10px"
              />
            </div>

            <div className=" 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden xs:hidden xss:block mobile:hidden">
              <OTP
                setValue={setOTP}
                value={otp}
                def="0000"
                height="30px"
                width="30px"
                length="4"
                textColor="#069B56"
                gap="10px"
              />
            </div>

            <p className=" flex items-center gap-3 cursor-pointer"> <ReloadIcon /> Resend Code</p>

            <button className="add-doctor-content-phonenumber">
              Verify
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default AddDoctor;
