import React, { useState } from "react";

//Components
import FormHandel from "../../Components/Properites/FormHandel/Formhandel";

//Utilities
import { SupportSchema } from "../../utils/Validation/support";

import ApiRequest from "../../services/httpService";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const Support = () => {
  const { userDetails } = useSelector((state) => state.userinfo);
  const [validationError, setValidationError] = useState(false);
  const [loader, setLoader] = useState(false);

  const initialvalue = () => {
    return {
      name: userDetails?.name,
      mobile_number: userDetails?.mobile_number,
      email: userDetails?.email,
      description: "",
    };
  };

  
  const onSubmit = async (values, actions) => {
    const storeDetails = {
      name: values.name,
      email: values.email,
      mobile_number: values.mobile_number,
      description: values.description,
      clinicId: userDetails._id,
    };

    try {
      setLoader(true);
      const { success, message } = await ApiRequest.post(
        `/addhelpandsupport`,
        storeDetails
      );
      if (success) {
        setLoader(false);
        actions.resetForm()
        toast.success(message);
        return;
      }
    } catch (error) {
      setLoader(false);
      toast.error(
        `${error.response?.data?.message || error.response.data.error}`
      );
    }
  };

  const { errors, handleChange, handleSubmit, values, setFieldValue } =
    FormHandel({
      initialValue: initialvalue(),
      schema: SupportSchema,
      submitFunction: onSubmit,
    });


    const validationCheck = () => {
        setValidationError(true);
        setTimeout(() => {
          setValidationError(false);
        }, 2000);
      };
    

  return {
    errors,
    handleChange,
    handleSubmit,
    values,
    setFieldValue,
    validationError,
    validationCheck,
    loader
    
  };
};

export default Support;
