import React, { useEffect, useState } from "react";

//Components
import FormHandel from "../../Components/Properites/FormHandel/Formhandel";

//Utilities
import { PrescriptionSchema } from "../../utils/Validation/Prescription";
import { useNavigate } from "react-router-dom";

const Prescription = () => {
  const [base64Image, setBase64Image] = useState(null);
  const [validationError, setValidationError] = useState(false);
  const [gender, setGender] = useState(null);

  const navigate = useNavigate();

  const initialvalue = () => {
    return {
      speciality: "",
      phone_number: "",
      license_number: "",
      patient_name: "",
      age: "",
      patient_phone_number: "",
      medicine_name: "",
      dosage: "",
      frequency: "",
      duration: "",
      instruction: "",
      diagnosis: "",
      file: null,
    };
  };

  const onSubmit = async (values, actions) => {
    console.log(values);
  };

  const { errors, handleChange, handleSubmit, values, setFieldValue } =
    FormHandel({
      initialValue: initialvalue(),
      schema: PrescriptionSchema,
      submitFunction: onSubmit,
    });

  useEffect(() => {
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
  }, [values.file]);

  const style = {
    width: "100%",
    padding: "7px",
    border: `${validationError && !gender ? "1px solid #ff0000" : ""}`,
    background: "rgba(218, 227, 255, 0.31)",
    borderRadius: "10px",
  };

  const Options = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
  ];

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

  const SelectGender = (e) => {
    return setGender(e);
  };

  const goBack = () => {
    navigate(-1); // -1 means go back one page
  };

  return {
    style,
    Options,
    setFieldValue,
    values,
    handleSubmit,
    handleChange,
    errors,
    base64Image,
    handleDeleteFile,
    validationCheck,
    validationError,
    SelectGender,
    gender,
    goBack,
  };
};

export default Prescription;
