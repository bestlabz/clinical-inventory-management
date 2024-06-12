import React, { useState } from "react";

// Third party libraries
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

//Components
import FormHandel from "../../Components/Properites/FormHandel/Formhandel";

//Utilities
import { LoginSchema } from "../../utils/Validation/Login";

//Hooks
import { setUser } from "../../Redux/Slice/User";
import { setOTP } from "../../Redux/Slice/Otp";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [step, setStep] = useState(1);
  const [otpCount, setotpCount] = useState(6);
  const [otp, setOtp] = useState(new Array(otpCount).fill(""));
  const [error, setError] = useState(false);
  const [number, setNumber] = useState(null);

  const { otpValue } = useSelector((state) => state.otpValue);

  const onSubmit = async (values, actions) => {

    console.log(values);
    return setStep((step) => step + 1);
    // dispatchForm()
    //   return setCurrentIndex(currentIndex + 1);
  };

  const { errors, handleChange, handleSubmit, values } = FormHandel({
    initialValue: { phone_number: "" },
    schema: LoginSchema,
    submitFunction: onSubmit,
  });

  const handelClickOTP = () => {
      if (!otpValue) {
        return setError(true);
      }
      const OTPVALUE = otpValue.join("");
      if (!OTPVALUE || OTPVALUE?.length < 6) {
        return setError(true);
      } else {
        setError(false);
        dispatch(setUser("Mohamed Thawfeek"));
        return navigate("/dashboard");
      }
  };



  const handelChange = ({ e, i }) => {
    const value = e.target.value;

    // Check if the value is a digit
    if (!/^\d*$/.test(value)) {
      return; // If not a digit, return without updating the state
    }

    const newOtp = [...otp];
    newOtp[i] = value;

    if (value && e.target.nextSibling) {
      e.target.nextSibling.focus();
    }
    if (value === "" && e.target.previousSibling) {
      e.target.previousSibling.focus();
    }

    dispatch(setOTP(newOtp));
    setOtp(newOtp);
    return;
  };

 

  const navigateSignup = () => {
    navigate('/signup')
  }

  return {
    step,
    setStep,
    setotpCount,
    handelChange,
    otp,
    handelClickOTP,
    setNumber,
    number,
    error,
    errors,
    handleChange,
    handleSubmit,
    values,
    navigateSignup
  };
};

export default Login;
