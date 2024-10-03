import React, { useEffect, useState } from "react";

//Utilities
import { SignupDetails, SignupImage } from "../../utils/Validation/Signup";

import ApiRequest from "../../services/httpService";
import { useDispatch, useSelector } from "react-redux";
import { clearUserDetails, setUserDetails } from "../../Redux/Slice/SignupUser";
import toast from "react-hot-toast";

//Components
import FormHandel from "../../Components/Properites/FormHandel/Formhandel";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

const DocumentPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [error, setError] = useState(false);
  const [base64Image, setBase64Image] = useState({
    clinical_registration_certificate: "",
    primary_consultant_degree_certificate: "",
    clinic_photo: "",
  });
  const [validationError, setValidationError] = useState(false);
  const [loader, setLoader] = useState(false);

  const { userDetails } = useSelector((state) => state.userinfo);
  const { newuser } = useSelector((state) => state.Signup);
  const Email = localStorage.getItem("email");
  const userID = localStorage.getItem("user_id");
  const Token = localStorage.getItem("token");

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

      if (userID) {
        setLoader(true);
        try {
          const { success, message } = await ApiRequest.put(
            `/clinics/${userID}`,
            formData,
            { "Content-Type": "multipart/form-data" }
          );
          if (success) {
            const { success, freetrails } = await ApiRequest.get("/freetrail");

            if (success) {
              const count = freetrails[0].days;
              const currentDate = new Date(); // current date
              const currentDateisoString = currentDate.toISOString();
              const futureDate = new Date(
                currentDate.setDate(currentDate.getDate() + Number(count))
              );
              const isoString = futureDate.toISOString();
              await ApiRequest.post(`/updateSubscription/${userID}`, {
                subscription_id: freetrails[0]._id,
                transaction_id: "free_trail",
                subscription_startdate: currentDateisoString,
                subscription_enddate: isoString,
              });
                setLoader(false);
                toast.success(message);
                dispatch(clearUserDetails());
                localStorage.removeItem("token");
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
    if (step === 2) {
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

  const handleDeleteFile = (id) => {
    const filter = base64Image.filter((_, index) => index !== id);
    const filters = values.files.filter((_, index) => index !== id);

    setBase64Image([...filter]);
    setFieldValue("files", [...filters]);
    return;
  };

  useEffect(() => {
    setFieldValue("email", Email);
  }, [Email]);

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
