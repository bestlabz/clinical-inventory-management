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
import { clearUserDetails, setUserDetails } from "../../Redux/Slice/SignupUser";
import { clearOTP, setErr, setOTP } from "../../Redux/Slice/Otpinput";
import ApiRequest from "../../services/httpService";
import toast from "react-hot-toast";
import axios from "axios";
import dayjs from "dayjs";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [step, setStep] = useState(1);
  const [base64Image, setBase64Image] = useState({
    clinical_registration_certificate: "",
    primary_consultant_degree_certificate: "",
    clinic_photo: "",
  });
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [validationError, setValidationError] = useState(false);
  const [validation, setValidation] = useState("");
  const [id, setID] = useState(null);
  const [initial, setInitial] = useState(false);
  const { newuser } = useSelector((state) => state.Signup);
  const { otpValue } = useSelector((state) => state.otpValue);
  const Token = localStorage.getItem("token");

  useEffect(() => {
    if (step === 1) {
      localStorage.removeItem("token");
    }
  }, [step]);

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
      setLoader(true);
      dispatch(
        setUserDetails({
          phone_number: values.phone_number,
          email: values.email,
        })
      );
      try {
        const { success } = await ApiRequest.post("/sendotp", {
          mobile_number: values.phone_number,
          email: values.email,
        });
        if (success) {
          setLoader(false);
          setValidation({
            mobile_number: values.phone_number,
            email: values.email,
          });
          return setStep((step) => step + 1);
        }
      } catch (error) {
        setLoader(false);
        toast.error(error.response.data.message);
      }
    }
    if (step === 3) {
      const storeDetails = {
        name: values.name,
        clinic_name: values.clinic_name,
        agree: true,
      };
      dispatch(setUserDetails(storeDetails));
      return setStep((step) => step + 1);
    }
    if (step === 4) {
      // const files = () => {
      //   return values?.files
      //     ?.map((img, index) => {
      //       if (index === 0) {
      //         return {
      //           certificate: img,
      //         };
      //       } else {
      //         const file = {
      //           [`certificate${index + 1}`]: img,
      //         };

      //         return file;
      //       }
      //     })
      //     .reduce((acc, obj) => ({ ...acc, ...obj }), {});
      // };

      const storeDetails = {
        ...newuser,
        certificate: values.clinical_registration_certificate,
        certificate2: values.primary_consultant_degree_certificate,
        certificate3: values.clinic_photo,
      };

      const formData = new FormData();

      for (const key in storeDetails) {
        if (storeDetails.hasOwnProperty(key)) {
          formData.append(key, storeDetails[key]);
        }
      }

      if (id) {
        const baseURL = import.meta.env.VITE_APP_API_BASE_URL;
        setLoader(true);
        try {
          const { data } = await axios.put(
            `${baseURL}/clinics/${id}`,
            formData
          );
          if (data.success) {
            const { success, freetrails } = await ApiRequest.get("/freetrail");

            if (success) {
              const count = freetrails[0].days;
              const currentDate = new Date(); // current date
              const currentDateisoString = currentDate.toISOString();
              const futureDate = new Date(
                currentDate.setDate(currentDate.getDate() + Number(count))
              );
              const isoString = futureDate.toISOString();

              await ApiRequest.post(`/updateSubscription/${id}`, {
                subscription_id: freetrails[0]._id,
                transaction_id: "free_trail",
                subscription_startdate: currentDateisoString,
                subscription_enddate: isoString,
              });
            }

            setLoader(false);
            dispatch(clearUserDetails());
            if (Token) {
              return navigate("/dashboard");
            } else {
              return navigate("/login");
            }
          }
        } catch (error) {
          setLoader(false);
          toast.error(
            `${error.response?.data?.message || error.response.data.error}`
          );
        }
      } else {
        toast.error("Invalid ID");
        setTimeout(() => {
          setLoader(false);
          return navigate("/login");
        }, 2000);
      }
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
      if (values.clinical_registration_certificate) {
        const file = values.clinical_registration_certificate;
        const reader = new FileReader();

        reader.onload = function (event) {
          const base64String = event.target.result;
          setBase64Image((prev) => ({
            ...prev,
            clinical_registration_certificate: base64String,
          }));
        };

        reader.onerror = function (error) {
          console.error("Error: ", error);
        };

        reader.readAsDataURL(file);
      }
      if (values.primary_consultant_degree_certificate) {
        const file = values.primary_consultant_degree_certificate;
        const reader = new FileReader();

        reader.onload = function (event) {
          const base64String = event.target.result;
          setBase64Image((prev) => ({
            ...prev,
            primary_consultant_degree_certificate: base64String,
          }));
        };

        reader.onerror = function (error) {
          console.error("Error: ", error);
        };

        reader.readAsDataURL(file);
      }
      if (values.clinic_photo) {
        const file = values.clinic_photo;
        const reader = new FileReader();

        reader.onload = function (event) {
          const base64String = event.target.result;

          setBase64Image((prev) => ({
            ...prev,
            clinic_photo: base64String,
          }));
        };

        reader.onerror = function (error) {
          console.error("Error: ", error);
        };

        reader.readAsDataURL(file);
      }
    }
  }, [values, step]);

  const handelClickOTP = async () => {
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
    } else {
      setError(false);

      const bodyData = {
        email: validation.email,
        otp: otpValue.join(""),
      };
      setLoader(true);
      try {
        const { clinic, success, token } = await ApiRequest.post(
          "/verifyotp",
          bodyData
        );
        if (success) {
          setLoader(false);
          setID(clinic?._id);
          localStorage.setItem("token", token);
          dispatch(clearOTP());
          dispatch(setErr(true));

          setTimeout(() => {
            dispatch(setErr(false));
          }, 2000);
          setStep((step) => step + 1);
          return;
        }
      } catch (error) {
        dispatch(setErr(true));

        setTimeout(() => {
          dispatch(setErr(false));
        }, 2000);
        setLoader(false);
        toast.error(
          `${error.response?.data?.message || error.response.data.error}`
        );
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

  const handleDeleteFile = (id) => {
    const filter = base64Image.filter((_, index) => index !== id);
    const filters = values.files.filter((_, index) => index !== id);

    setBase64Image([...filter]);
    setFieldValue("files", [...filters]);
    return;
  };

  const validationCheck = () => {
    setValidationError(true);
    setTimeout(() => {
      setValidationError(false);
    }, 2000);
  };

  const resendOtp = async () => {
    const bodyData = {
      email: validation?.email,
    };

    try {
      const { success, message } = await ApiRequest.post(
        "/resendotp/clinic",
        bodyData
      );

      if (success) {
        toast.success(message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.response.data.error);
    }
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
    resendOtp,
    initial,
    setInitial,
  };
};

export default Signup;
