import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDosageForm, setDosageStrength } from "../../Redux/Slice/Dosage";
import toast from "react-hot-toast";

import ApiRequest from "../../services/httpService";

const DosageStrength = () => {
  const dispatch = useDispatch();

  const [model, setModel] = useState(false);
  const [dosageValue, setDosageValue] = useState("");
  const [reFetch, setReFetch] = useState(false);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const [loader1, setLoader1] = useState(false);
  const [action, setAction] = useState("");
  const [clear, setClear] = useState(false);

  const { dosageStrength } = useSelector((state) => state.dosage);

  useEffect(() => {
    const API = async () => {
      if (!reFetch) {
        try {
          const { success, dosageUnits } = await ApiRequest.get("/dosageunit");

          console.log("dosageUnits", dosageUnits);
          if (success) {
            return dispatch(setDosageStrength(dosageUnits));
          }
        } catch (error) {
          return toast.error(error.response.data.error);
        }
      }
    };
    API();
  }, [reFetch]);

  const addDosageStrength = async () => {
    if (dosageValue.trim().length !== 0) {
      try {
        setError(false);
        setReFetch(true);
        setLoader(true);
        const { success, message } = await ApiRequest.post("/dosageunit", {
          unit_name: dosageValue,
        });

        if (success) {
          setLoader(false);
          setReFetch(false);
          return toast.success(message);
        }
      } catch (error) {
        setLoader(false);
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

  const deleteDosageStrength = async (id, value) => {
    if (id && value) {
      try {
        setReFetch(true);
        setLoader1(true);

        const { success, message } = await ApiRequest.delete(
          `/dosageunit/${id}`,
          {
            medicine_name: value,
          }
        );

        if (success) {
          setModel(false);
          setLoader1(false);
          setReFetch(false);
          return toast.success(message);
        }
      } catch (error) {
        setLoader(false);
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

  const editDosageStrength = async (id, value, reason) => {
    if (id && value && reason) {
      try {
        setReFetch(true);
        setLoader1(true);

        const { success, message } = await ApiRequest.put(`/dosageunit/${id}`, {
          unit_name: reason,
        });

        if (success) {
          setLoader1(false);
          setClear(true);
          setReFetch(false);
          return toast.success(message);
        }
      } catch (error) {
        setLoader(false);
        setReFetch(false);
        toast.error(error.response.data.error);
      }
    }
  };

  return {
    tableBody: dosageStrength,
    model,
    setModel,
    setDosageValue,
    dosageValue,
    addDosageStrength,
    error,
    setError,
    loader,
    deleteDosageStrength,
    loader1,
    editDosageStrength,
    action,
    setAction,
    clear,
    setClear,
  };
};

export default DosageStrength;
