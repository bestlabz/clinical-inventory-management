import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDosageForm, setDosageStrength } from "../../Redux/Slice/Dosage";
import toast from "react-hot-toast";

import ApiRequest from "../../services/httpService";
import {
  setDosageUnitCurrentPage,
  setDosageUnitNextPage,
  setDosageUnitPrePage,
  setDosageUnitTotalCount,
} from "../../Redux/Slice/Pagination";

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
  const [selectedLimit, setSelectedLimit] = useState({ label: 10, value: 10 });

  const { dosageStrength } = useSelector((state) => state.dosage);

  const {
    dosageUnitcurrentPage: currentPages,
    dosageUnittotalCount: paginationCount,
  } = useSelector((state) => state.Pagination);

  useEffect(() => {
    const API = async () => {
      if (!reFetch) {
        try {
          const { success, dosageUnits, currentPage, totalPages } =
            await ApiRequest.get(
              `/dosageunit?page=${currentPages}&limit=${selectedLimit.value}`
            );
          if (success) {
            dispatch(setDosageUnitCurrentPage(currentPage));
            dispatch(setDosageUnitTotalCount(totalPages));
            return dispatch(setDosageStrength(dosageUnits));
          }
        } catch (error) {
          return toast.error(
            `${error.response?.data?.message || error.response.data.error}`
          );
        }
      }
    };
    API();
  }, [reFetch, selectedLimit]);

  const addDosageStrength = async () => {
    if (dosageValue.trim().length !== 0) {
      try {
        setError(false);
        setReFetch(true);
        setLoader(true);
        const { success, message, currentPage, totalPages } =
          await ApiRequest.post("/dosageunit", {
            unit_name: dosageValue,
          });

        if (success) {
          dispatch(setDosageUnitCurrentPage(currentPage));
          dispatch(setDosageUnitTotalCount(totalPages));
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

  const next = () => {
    if (currentPages !== pageNumbers[pageNumbers.length - 1]) {
      return dispatch(setDosageUnitNextPage());
    }
  };

  const pre = () => {
    return dispatch(setDosageUnitPrePage());
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

  const style = {
    width: "100%",
    padding: "0px",
    border: "1px solid #d3d3d3",
    outline: "1px solid #d3d3d3",
    background: "rgba(218, 227, 255, 0.31)",
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
    paginationCount,
    currentPages,
    pageNumbers,
    next,
    pre,
    selectedLimit,
    setSelectedLimit,
    style,
  };
};

export default DosageStrength;
