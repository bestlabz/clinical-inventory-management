import React, { useEffect, useState } from "react";

//Utilities
import {
  SignupPhoneNumber,
  SignupDetails,
  SignupImage,
} from "../../utils/Validation/Signup";

import ApiRequest from "../../services/httpService";
import { useDispatch, useSelector } from "react-redux";
import { clearUserDetails, setUserDetails } from "../../Redux/Slice/SignupUser";
import toast from "react-hot-toast";

//Components
import FormHandel from "../../Components/Properites/FormHandel/Formhandel";

const DocumentPage = () => {
  const dispatch = useDispatch();
  const [step, setStep] = useState(1);
  const [error, setError] = useState(false);
  const [base64Image, setBase64Image] = useState([]);
  const [validationError, setValidationError] = useState(false);
  const [loader, setLoader] = useState(false);


  const { userDetails } = useSelector((state) => state.userinfo);
  const { newuser } = useSelector((state) => state.Signup);


  console.log('ss', userDetails)


  useEffect(() => {
    setTimeout(() => {
      setError(false);
    }, 2000);
  }, [error]);

  const initialvalue = () => {
    if (step === 1) {
      return {
        name: "",
        clinic_name: "",
        email: "",
      };
    }

    if (step === 2) {
      return {
        file: null,
      };
    }
  };

  const SchemaValidation = () => {
    if (step === 1) {
      return SignupDetails;
    } else if (step === 2) {
      return SignupImage;
    }
  };

  const onSubmit = async (values, actions) => {
    if (step === 1) {
      const storeDetails = {
        name: values.name,
        clinic_name: values.clinic_name,
        email: values.email,
        agree: true,
      };
      dispatch(setUserDetails(storeDetails));
      return setStep((step) => step + 1);
    }
    if (step === 2) {
      const files = () => {
        return values?.files
          ?.map((img, index) => {
            if (index === 0) {
              return {
                certificate: img,
              };
            } else {
              const file = {
                [`certificate${index + 1}`]: img,
              };

              return file;
            }
          })
          .reduce((acc, obj) => ({ ...acc, ...obj }), {});
      };

      const storeDetails = {
        ...newuser,
        ...files(),
      };

      const formData = new FormData();

      for (const key in storeDetails) {
        if (storeDetails.hasOwnProperty(key)) {
          formData.append(key, storeDetails[key]);
        }
      }

      if (userDetails?._id) {
        const baseURL = import.meta.env.VITE_APP_API_BASE_URL;
        setLoader(true);
        try {
          const { success, message } = await ApiRequest.put(
            `${baseURL}/clinics/${userDetails?._id}`,
            formData,
            { "Content-Type": "multipart/form-data" }
          );
          if (success) {
            setLoader(false);
            toast.success(message);
            dispatch(clearUserDetails());
            return navigate("/login");
          }
        } catch (error) {
          setLoader(false);
          toast.error(error.response.data.error);
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
    if (step === 2 && values.files && values.files.length > 0) {
      const newBase64Images = [];

      for (let i = 0; i < values.files.length; i++) {
        const file = values.files[i];
        const reader = new FileReader();

        reader.onload = function (event) {
          const base64String = event.target.result;
          newBase64Images.push(base64String);

          // Update state only after all files are processed
          if (newBase64Images.length === values.files.length) {
            setBase64Image(newBase64Images);
          }
        };

        reader.onerror = function (error) {
          console.error("Error: ", error);
        };

        reader.readAsDataURL(file);
      }
    }
  }, [values.files, step]);

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

  return {
    setStep,
    step,
    errors,
    handleChange,
    handleSubmit,
    values,
    setFieldValue,
    validationCheck,
    handleDeleteFile,
    validationError,
    base64Image,
    setBase64Image,
    loader,
  };
};

export default DocumentPage;
