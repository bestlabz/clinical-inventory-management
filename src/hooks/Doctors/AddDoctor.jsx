import React, { useEffect, useState } from 'react'

//Thired party library
import { useNavigate } from 'react-router-dom';

const AddDoctor = () => {
    const navigate = useNavigate()

    const [step, setStep] = useState(1)
    const [otp, setOTP] = useState("")
    const [modalPopup, setModalPopup] = useState(false)


    useEffect(() => {
      if(step === 3) {
        setModalPopup(true)

        setTimeout(() => {
          setModalPopup(false)
          setOTP("")
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
    otp,
    modalPopup
  }
}

export default AddDoctor