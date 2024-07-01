import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

//Thired party library
import { useNavigate } from 'react-router-dom';

//Api Call
import ApiRequest from "../../services/httpService";

const AddDoctor = () => {
    const navigate = useNavigate()

    const [step, setStep] = useState(1)
    const [otp, setOTP] = useState("")
    const [modalPopup, setModalPopup] = useState(false)
    const [value, setValue] = useState("");

    const { userDetails } = useSelector((state) => state.userinfo);

    useEffect(() => {
      if(step === 3) {
        setModalPopup(true)

        setTimeout(() => {
          setModalPopup(false)
          setValue("")
          setOTP("");
          setStep(1)
        }, 3000)
      }

    }, [step])


    const goBack = () => {
        navigate(-1); // -1 means go back one page
      };

      const pre = () => {
        if (step !== 1) {
            setStep((step) => step - 1);
        }
      }
      const next = async () => {
        if (step === 1) {
          const { success } = await ApiRequest.post("/sendotp/receptionist", {mobile_number: value, clinicId: userDetails._id});
    
          if (success) {
            return setStep((step) => step + 1);
          }
        }
    
        if (step === 2) {
          const { success } = await ApiRequest.post("/verifyotp/receptionist", {mobile_number: value, otp});
    
          if (success) {
            return setStep((step) => step + 1);
          }
        }
    
      };
  return {
    goBack,
    step,
    next,
    pre,
    setOTP,
    otp,
    modalPopup,
    setValue,
    value
  }
}

export default AddDoctor