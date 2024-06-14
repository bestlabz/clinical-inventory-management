import React, { useEffect, useState } from "react";

//Third party libraries
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//Components
import FormHandel from "../../Components/Properites/FormHandel/Formhandel";

//Utilities
import {
  SignupPhoneNumber,
  SignupDetails,
  SignupImage,
} from "../../utils/Validation/Signup";

//Hooks
import { setUserDetails } from "../../Redux/Slice/SignupUser";
import { setOTP } from "../../Redux/Slice/Otp";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [step, setStep] = useState(1);
  const [base64Image, setBase64Image] = useState(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [validationError, setValidationError] = useState(false);

  const { newuser } = useSelector((state) => state.Signup);
  const { otpValue } = useSelector((state) => state.otpValue);

  useEffect(() => {
      setTimeout(() => {
        setError(false);
      }, 2000);
  }, [error]);

  const initialvalue = () => {
    if (step === 1) {
      return {
        phone_number: "",
      };
    }

    if (step === 3) {
      return {
        name: "",
        clinic_name: "",
        email: "",
      };
    }

    if (step === 4) {
      return {
        file: null,
      };
    }
  };

  const SchemaValidation = () => {
    if (step === 1) {
      return SignupPhoneNumber;
    } else if (step === 3) {
      return SignupDetails;
    } else if (step === 4) {
      return SignupImage;
    }
  };

  const onSubmit = async (values, actions) => {
    if (step === 1) {
      dispatch(setUserDetails({ phone_number: values.phone_number }));
      return setStep((step) => step + 1);
    }
    if (step === 3) {
      const storeDetails = {
        name: values.name,
        clinic_name: values.clinic_name,
        email: values.email,
        trems_condition: true,
        ...newuser,
      };
      dispatch(setUserDetails(storeDetails));

      return setStep((step) => step + 1);
    }
    if (step === 4) {
      const storeDetails = {
        ...newuser,
        file: values.file,
      };
      dispatch(setUserDetails(storeDetails));
      setLoader(true);
      setTimeout(() => {
        setLoader(false);
        return navigate("/login");
      }, 2000);
    }
  };

  const { errors, handleChange, handleSubmit, values, setFieldValue } =
    FormHandel({
      initialValue: initialvalue(),
      schema: SchemaValidation(),
      submitFunction: onSubmit,
    });

  useEffect(() => {
    if (step === 4) {
      const file = values.file;

      if (file) {
        const reader = new FileReader();

        reader.onload = function (event) {
          const base64String = event.target.result;
          setBase64Image(base64String);
        };

        reader.onerror = function (error) {
          console.error("Error: ", error);
        };

        reader.readAsDataURL(file);
      }
    }
  }, [values.file, step]);

  const handelClickOTP = () => {
    if (step !== 4) {
      if (!otpValue) {
        return setError(true);
      }
      if (otpValue?.length < 6) {
        setError(true);

        return;
      } else {
        setError(false);
        return setStep((step) => step + 1);
      }
    }
  };

  const handelChange = ({ e }) => {
    const value = e;

    // Check if the value is a digit
    if (!/^\d*$/.test(value)) {
      return; // If not a digit, return without updating the state
    }

    dispatch(setOTP(value));
    return;
  };

  const navigateLogin = () => {
    navigate("/login");
  };

  const handleDeleteFile = () => {
    setFieldValue("file", null);
    setBase64Image(null); // Clear base64Image when deleting file
  };

  const validationCheck = () => {
    setValidationError(true);
    setTimeout(() => {
      setValidationError(false);
    }, 2000);
  };

  return {
    step,
    setStep,
    handelClickOTP,
    handelChange,
    navigateLogin,
    errors,
    handleChange,
    handleSubmit,
    values,
    base64Image,
    loader,
    handleDeleteFile,
    setFieldValue,
    error,
    validationCheck,
    validationError,
    otpValue,
  };
};

export default Signup;
