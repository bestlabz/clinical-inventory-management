import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDosageForm } from "../../Redux/Slice/Dosage";
import toast from "react-hot-toast";

import ApiRequest from "../../services/httpService";

const DosageForm = () => {
  const dispatch = useDispatch();

  const [model, setModel] = useState(false);
  const [dosageValue, setDosageValue] = useState("");
  const [reFetch, setReFetch] = useState(false);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false)
  const [loader1, setLoader1] = useState(false)

  const { dosageForm } = useSelector((state) => state.dosage);

  useEffect(() => {
    const API = async () => {
      if (!reFetch) {
        try {
          const { success, dosageForms } = await ApiRequest.get("/dosageform");

          if (success) {
            return dispatch(setDosageForm(dosageForms));
          }
        } catch (error) {
          return toast.error(error.response.data.error);
        }
      }
    };
    API();
  }, [reFetch]);

  const addDosageForm = async () => {
    if (dosageValue.trim().length !== 0) {
      try {
        setError(false);
        setReFetch(true);
        setLoader(true)
        const { success, message } = await ApiRequest.post("/dosageform", {
          form_name: dosageValue,
        });

        if (success) {
          setLoader(false)
          setReFetch(false);
          return toast.success(message);
        }
      } catch (error) {
        setLoader(false)
        setReFetch(false);
        toast.error(error.response.data.error);
      }
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };


  const deleteDosageForm = async (id, value) => {
    if (id && value) {
      try {
        setReFetch(true);
        setLoader1(true)
        
        const { success, message } = await ApiRequest.delete(`/dosageform/${id}`, {
          form_name: value,
        });

        if (success) {
          setModel(false)
          setLoader1(false)
          setReFetch(false);
          return toast.success(message);
        }
      } catch (error) {
        setLoader(false)
        setReFetch(false);
        toast.error(error.response.data.error);
      }
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };

  return {
    tableBody: dosageForm,
    model,
    setModel,
    setDosageValue,
    dosageValue,
    addDosageForm,
    error,
    setError,
    loader,
    deleteDosageForm,
    loader1
  };
};

export default DosageForm;
