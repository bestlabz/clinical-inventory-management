import React, { useState } from 'react'

//Thired party library
import { useNavigate } from 'react-router-dom';

const AddDoctor = () => {
    const navigate = useNavigate()

    const [step, setStep] = useState(1)
    const [otp, setOTP] = useState("")

    console.log('otpotp', otp);

    const goBack = () => {
        navigate(-1); // -1 means go back one page
      };

      const pre = () => {
        if (step !== 1) {
            setStep((step) => step - 1);
        }
      }
      const next = () => {
        if (step !== 3) {
            setStep((step) => step + 1);
        }
      }
  return {
    goBack,
    step,
    next,
    pre,
    setOTP,
    otp
  }
}

export default AddDoctor