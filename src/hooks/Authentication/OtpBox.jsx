import React, { useEffect, useRef, useState } from "react";

//Third party npm
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//Hooks
import { clearOTP, setErr, setOTP } from "../../Redux/Slice/Otpinput";

//APirequest
import ApiRequest from "../../services/httpService";
import toast from "react-hot-toast";

const OtpBox = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const inputRefs = useRef([]);
  const length = 6;
  const [otp, setotp] = useState(new Array(length).fill(""));
  const [currentIndex, setCurrentIndex] = useState(0);

  const [error, setError] = useState(false);
  const [otpNotValid, setOtpNotValid] = useState(false);
  const [loader, setLoader] = useState(false);

  const { otpValue } = useSelector((state) => state.otpValue);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        inputRefs.current &&
        !inputRefs.current.some((ref) => ref && ref.contains(event.target))
      ) {
        event.preventDefault();
        event.stopPropagation();
        const emptyIndex = otp?.findIndex((value) => value === "");
        if (emptyIndex !== -1) {
          inputRefs.current[emptyIndex].focus();
          setCurrentIndex(emptyIndex);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [currentIndex]);

  const handleInputChange = (element, index) => {
    const value = element.value;
    if (!value) return;

    const newOtp = [...otp];
    newOtp[index] = value;

    setotp(newOtp);
    dispatch(setOTP(newOtp));
    setCurrentIndex(index);

    if (index < length - 1 && value) {
      element.nextSibling.focus();
    }
  };

  const handleInputChange1 = (element, index, target) => {
    if (index < 6) {
      const value = element;
      if (!value) return;

      const newOtp = [...otp];
      newOtp[index] = value;

      setotp(newOtp);
      dispatch(setOTP(newOtp));
      setCurrentIndex(index);

      if (index < 6) {
        target.nextSibling.focus();
      }
    }
  };

  const handleBackSpace = (element, index) => {
    const newOtp = [...otp];
    newOtp[index] = "";
    setotp(newOtp);
    dispatch(setOTP(newOtp));

    setCurrentIndex(index - 1);

    if (index > 0) {
      element.previousSibling.focus();
    }
  };

  const handelClick = async () => {
    if (!otpValue) {
      dispatch(setErr(true));

      setTimeout(() => {
        dispatch(setErr(false));
      }, 2000);
      return;
    }

    if (otpValue?.length < 6) {
      dispatch(setErr(true));

      setTimeout(() => {
        dispatch(setErr(false));
      }, 2000);
      return;
    } 
  };

  return {
    otp,
    handelClick,
    error,
    otpNotValid,
    setOtpNotValid,
    handleInputChange,
    handleInputChange1,
    loader,
    currentIndex,
    inputRefs,
    handleBackSpace,
    setotp
  };
};

export default OtpBox;
