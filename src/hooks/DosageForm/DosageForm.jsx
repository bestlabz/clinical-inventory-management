import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDosageForm } from "../../Redux/Slice/Dosage";
import toast from "react-hot-toast";

import ApiRequest from "../../services/httpService";
import {
  setDosageFormCurrentPage,
  setDosageFormNextPage,
  setDosageFormPrePage,
  setDosageFormTotalCount,
} from "../../Redux/Slice/Pagination";

const DosageForm = () => {
  const dispatch = useDispatch();

  const [model, setModel] = useState(false);
  const [dosageValue, setDosageValue] = useState("");
  const [reFetch, setReFetch] = useState(false);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const [loader1, setLoader1] = useState(false);
  const [action, setAction] = useState("");
  const [clear, setClear] = useState(false);

  const { dosageForm } = useSelector((state) => state.dosage);

  const {
    dosageFormcurrentPage: currentPages,
    dosageFormtotalCount: paginationCount,
  } = useSelector((state) => state.Pagination);

  useEffect(() => {
    const API = async () => {
      if (!reFetch) {
        try {
          const { success, dosageForms, currentPage, totalPages } =
            await ApiRequest.get("/dosageform");

          if (success) {
            dispatch(setDosageFormCurrentPage(currentPage));
            dispatch(setDosageFormTotalCount(totalPages));
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
        setLoader(true);
        const { success, message } = await ApiRequest.post("/dosageform", {
          form_name: dosageValue,
        });

        if (success) {
          setLoader(false);
          setDosageValue("");
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

  const deleteDosageForm = async (id, value) => {
    if (id && value) {
      try {
        setReFetch(true);
        setLoader1(true);

        const { success, message } = await ApiRequest.delete(
          `/dosageform/${id}`,
          {
            form_name: value,
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

  const editDosageForm = async (id, value, reason) => {
    if (id && value && reason) {
      try {
        setReFetch(true);
        setLoader1(true);

        const { success, message } = await ApiRequest.put(`/dosageform/${id}`, {
          form_name: reason,
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

  const next = () => {
    if (currentPages !== pageNumbers[pageNumbers.length - 1]) {
      return dispatch(setDosageFormNextPage());
    }
  };

  const pre = () => {
    return dispatch(setDosageFormPrePage());
  };

  const getPagesCut = ({ pagesCutCount = 2 }) => {
    const ceiling = Math.ceil(pagesCutCount / 2);
    const floor = Math.floor(pagesCutCount / 2);

    if (paginationCount <= pagesCutCount) {
      return { start: 1, end: Number(paginationCount) };
    } else if (Number(currentPages) <= ceiling) {
      return { start: 1, end: pagesCutCount };
    } else if (Number(currentPages) + floor >= Number(paginationCount)) {
      return {
        start: Number(paginationCount) - Number(pagesCutCount) + 1,
        end: Number(paginationCount),
      };
    } else {
      return {
        start: Number(currentPages) - ceiling + 1,
        end: Number(currentPages) + floor,
      };
    }
  };

  const { start, end } = getPagesCut({ pagesCutCount: 3 }); // Adjust pagesCutCount as needed
  const pageNumbers = Array.from(
    { length: end - start + 1 },
    (_, i) => start + i
  );

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
    loader1,
    editDosageForm,
    action,
    setAction,
    clear,
    setClear,
    paginationCount,
    currentPages,
    pageNumbers,
    next,
    pre,
  };
};

export default DosageForm;
