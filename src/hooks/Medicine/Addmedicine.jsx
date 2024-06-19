import React, { useEffect, useState } from "react";

//Components
import FormHandel from "../../Components/Properites/FormHandel/Formhandel";

//Utilities
import { AddMedicineSchema } from "../../utils/Validation/AddMedicine";
import { useNavigate } from "react-router-dom";

const Addmedicine = () => {
  const navigate = useNavigate();

  const [validateErr, setValidateErr] = useState(false);
  const [modalPopup, setModalPopup] = useState(false)




  const onSubmit = async (values, actions) => {
    console.log(values);
    setModalPopup(true)

    setTimeout(() => {
      setModalPopup(false)
      actions.resetForm()
    }, 3000)
    return;
    // dispatchForm()
    //   return setCurrentIndex(currentIndex + 1);
  };

  const { errors, handleChange, handleSubmit, values, resetForm } = FormHandel({
    initialValue: { medicine_name: "", dasage_form: "", dasage_strength: "" },
    schema: AddMedicineSchema,
    submitFunction: onSubmit,
  });

  const handelClick = () => {
    setValidateErr(true);
    setTimeout(() => {
      setValidateErr(false);
    }, 3000);
  };

  const goBack = () => {
    navigate(-1); // -1 means go back one page
  };
  return {
    goBack,
    handleSubmit,
    values,
    handleChange,
    errors,
    handelClick,
    validateErr,
    modalPopup
  };
};

export default Addmedicine;
