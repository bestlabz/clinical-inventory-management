import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

//Components
import FormHandel from "../../Components/Properites/FormHandel/Formhandel";

//Utilities
import { ProfileDetails } from "../../utils/Validation/Profile";

import ApiRequest from "../../services/httpService";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { addBalanceDue, setUser } from "../../Redux/Slice/User";

const Profile = () => {
  const profileRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [base64Image, setBase64Image] = useState();
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [step, setStep] = useState(1);
  const [payModel, setPayModel] = useState(false);
  const [balanceDue, setBalanceDue] = useState(false);
  const [model, setModel] = useState(false);
  const [subscriptionID, setsubscriptionID] = useState(null);
  const [transitationID, setTransitationID] = useState("");
  const [amount, setAmount] = useState("");
  const [paymentLoader, setPaymentLoader] = useState(false);
  const [err, setErr] = useState(false);
  const [steps, setSteps] = useState(1);

  const { userDetails } = useSelector((state) => state.userinfo);

  useEffect(() => {
    const subscriptionid =
      userDetails?.subscription_details[
        userDetails?.subscription_details?.length - 1
      ];
    setsubscriptionID(subscriptionid?.subscription_id?._id);
  }, [userDetails]);

  useEffect(() => {
    const Api = async () => {
      if (!loader) {
        const {
          success,
          clinic,
          balancedue,
          doctorsCount,
          receptionistsCount,
        } = await ApiRequest.get("/clinic");
        if (success) {
          const data = {
            ...clinic,
            balancedue,
            doctorsCount,
            receptionistsCount,
          };

          dispatch(setUser(data));
          setFieldValue("name", clinic?.name);
          setFieldValue("clinic_name", clinic?.clinic_name);
          setFieldValue("email", clinic?.email);
          setFieldValue("mobile_number", clinic?.mobile_number);
          setFieldValue("profile", clinic?.profile);
        }
      }
    };
    Api();
  }, [loader]);

  useEffect(() => {
    const API = async () => {
      if (balanceDue && userDetails) {
        if (!subscriptionID) {
          setBalanceDue(false);
          toast.error("subscription ID not available");
          return;
        }
        try {
          const {
            success,
            doctors,
            receptionists,
            totalUnsubscriptionAmount,
            subscriptionDurations,
          } = await ApiRequest.post(
            `/balancedue/${userDetails?._id}/${subscriptionID}`
          );

          if (success) {
            const data = {
              doctors,
              receptionists,
              totalUnsubscriptionAmount,
              subscriptionDurations,
            };

            dispatch(addBalanceDue(data));
            return;
          }
        } catch (error) {
          toast.error(error.response.data.error);
        }
      }
    };

    API();
  }, [balanceDue]);

  const initialvalue = () => {
    return {
      name: "",
      clinic_name: "",
      email: "",
      profile: null,
    };
  };

  const onSubmit = async (values, actions) => {
    const storeDetails = {
      name: values.name,
      clinic_name: values.clinic_name,
      email: values.email,
      mobile_number: values.mobile_number,
      profile: values.profile,
    };

    const formData = new FormData();

    for (const key in storeDetails) {
      if (storeDetails.hasOwnProperty(key)) {
        formData.append(key, storeDetails[key]);
      }
    }

    try {
      setLoader(true);
      const { success, message } = await ApiRequest.put(
        `/clinics/${userDetails?._id}`,
        formData,
        { "Content-Type": "multipart/form-data" }
      );
      if (success) {
        setLoader(false);
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
      schema: ProfileDetails,
      submitFunction: onSubmit,
    });

  useEffect(() => {
    const file = values?.profile;
    const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;

    if (file && !urlPattern.test(file) && file instanceof Blob) {
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
  }, [values]);

  const handleClick = () => {
    profileRef.current.click();
  };

  const goBack = () => {
    navigate(-1); // -1 means go back one page
  };

  const validationCheck = () => {
    if (errors.profile) {
      toast.error(errors.profile);
    }
    setError(true);
    setTimeout(() => {
      setError(false);
    }, 2000);
  };

  const closePayModel = () => {
    setPayModel(!payModel);
  };

  const balanceModel = () => {
    if (subscriptionID) {
      setBalanceDue(!balanceDue);
    } else {
      toast.error("subscription ID not available");
    }
  };

  const updateBalanceDue = async () => {
    try {
      const latestSubscription =
        userDetails.subscription_details[
          userDetails.subscription_details.length - 1
        ];
      setPaymentLoader(true);
      const { success, message } = await ApiRequest.put(
        `/balanceduepayment/${userDetails._id}/${latestSubscription._id}`,
        {
          transaction_id: transitationID,
          amount: amount,
        }
      );

      if (success) {
        setPaymentLoader(false);
        setModel(false);
        setBalanceDue(!balanceDue);
        toast.success(message);
      }
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };

  return {
    profileRef,
    handleClick,
    goBack,
    errors,
    handleChange,
    handleSubmit,
    values,
    setFieldValue,
    error,
    validationCheck,
    base64Image,
    loader,
    step,
    setStep,
    closePayModel,
    payModel,
    balanceDue,
    balanceModel,
    model,
    setModel,
    updateBalanceDue,
    transitationID,
    setTransitationID,
    amount,
    setAmount,
    paymentLoader,
    err,
    setErr,
    steps,
    setSteps,
  };
};

export default Profile;
