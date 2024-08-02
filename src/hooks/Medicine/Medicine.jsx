import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import * as xlsx from "xlsx";

//API
import ApiRequest from "../../services/httpService";

//Hooks
import { setMedicineTable } from "../../Redux/Slice/TableDatas";
import {
  setMedicineCurrentPage,
  setMedicineNextPage,
  setMedicinePrePage,
  setMedicineTotalCount,
} from "../../Redux/Slice/Pagination";

const Medicine = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const inputRef = useRef();

  const [selectedDate, setselectedDate] = useState(new Date());
  const [primaryLoader, setPrimaryLoader] = useState(true);
  const [dosageFormsOptions, setDosageFormsOptions] = useState([]);
  const [selectedFilter, setselectedFilter] = useState(null);
  const [searchFilter, setsearchFilter] = useState("");
  const [model, setmodel] = useState(false);
  const [loader, setLoader] = useState(false);
  const [reFetch, setreFetch] = useState(false);
  const [selectedLimit, setSelectedLimit] = useState({ label: 10, value: 10 });
  const [statusAvailable, setStatusAvailable] = useState(false);
  const [tableLoader, setTableLoader] = useState(false)

  const {
    medicinescurrentPage: currentPages,
    medicinestotalCount: paginationCount,
  } = useSelector((state) => state.Pagination);

  
  useEffect(() => {
    setTableLoader(true)
  }, [selectedLimit])


  useEffect(() => {
    const fetchData = async () => {
      try {
        const [dosageFormResponse] = await Promise.all([
          ApiRequest.get("/dosageform"),
        ]);

        if (dosageFormResponse.success) {
          const dosageFormOptions = dosageFormResponse.dosageForms.map((i) => ({
            label: i.form_name,
            value: i.form_name,
          }));
          return setDosageFormsOptions(dosageFormOptions);
        }
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async ({ filter, value, page, search }) => {
      try {
        const filterQuery =
          filter && value
            ? `?${filter}=${value}&page=${page}&medicine_name=${search}`
            : `?page=${page}&medicine_name=${search}`;
        const { success, medicines, totalPages, currentPage } =
          await ApiRequest.get(
            `/medicines${filterQuery}&limit=${selectedLimit.value}`
          );

        if (success) {
          setTableLoader(false)
          setStatusAvailable(false)
          dispatch(
            setMedicineCurrentPage(
              medicines.length === 0 && currentPage !== 1
                ? currentPage - 1
                : currentPage
            )
          );
          dispatch(setMedicineTotalCount(totalPages));
          const tableData = medicines.map((i) => {
            return {
              medicine_name: i?.medicine_name || "",
              dosage_form: i?.dosage_form?.[0] || "",
              dosage_strength: i?.dosage_strength || "",
              dosage_unit: i?.dosage_unit || "",
              status: i?.status,
              id: i?._id,
            };
          });
          setPrimaryLoader(false);
          dispatch(setMedicineTable(tableData));
          return;
        } else {
          setTableLoader(false)
          setStatusAvailable(false)

          setPrimaryLoader(false);
        }
      } catch (error) {
        setTableLoader(false)
        setStatusAvailable(false)
        setPrimaryLoader(false);
        toast.error(
          `${error.response?.data?.message || error.response.data.error}`
        );
      }
    };

    const API = async () => {
      if (!model || !reFetch) {
        if (!selectedFilter || selectedFilter?.value === "") {
          await fetchData({ page: currentPages, search: searchFilter });
        } else if (selectedFilter?.value === "OutOfStock") {
          await fetchData({
            filter: "status",
            value: "OutOfStock",
            page: currentPages,
            search: searchFilter,
          });
        } else if (selectedFilter?.value) {
          await fetchData({
            filter: "dosage_form",
            value: selectedFilter.value,
            page: currentPages,
            search: searchFilter,
          });
        }
      }
    };

    API();
  }, [
    selectedFilter,
    currentPages,
    searchFilter,
    model,
    reFetch,
    selectedLimit,
  ]);

  const style = {
    width: "100%",
    padding: "0px",
    border: "1px solid #d3d3d3",
    outline: "1px solid #d3d3d3",
    background: "rgba(218, 227, 255, 0.31)",
  };

  const Options = [
    // { label: "All", value: "" },
    ...dosageFormsOptions,
    { label: "Out of stock", value: "OutOfStock" },
  ];

  const navigateAddMedicinePage = () => {
    return navigate("/add-medicine");
  };

  const next = () => {
    if (currentPages !== pageNumbers[pageNumbers.length - 1]) {
      setStatusAvailable(true);
      setTableLoader(false)

      return dispatch(setMedicineNextPage());
    }
  };

  const pre = () => {
    if (currentPages !== 1) {
      setStatusAvailable(true);
      setTableLoader(false)

      return dispatch(setMedicinePrePage());
    }
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

  const handelModel = () => {
    return setmodel(!model);
  };

  const handleDelete = async (id) => {
    try {
      setLoader(true);
      const { success, message } = await ApiRequest.delete(`/medicines/${id}`);
      if (success) {
        setLoader(false);
        toast.success(message);
        setmodel(false);
        return;
      }
    } catch (error) {
      setLoader(false);
      console.log("ee", error);
      return;
    }
  };

  const handleExcel = async (e) => {
    const file = e.target.files[0];

    if (file) {
      const validTypes = [
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "application/vnd.ms-excel",
      ];

      if (validTypes.includes(file.type)) {
        try {
          const data = await file.arrayBuffer();
          const workbook = xlsx.read(data);
          const worksheet = workbook.Sheets[workbook.SheetNames[0]];
          const jsonData = xlsx.utils.sheet_to_json(worksheet);

          const requiredKeys = [
            "medicine_name",
            "dosage_form",
            "dosage_strength",
            "dosage_unit",
          ];

          let errorOccurred = false;

          jsonData.forEach((item, index) => {
            requiredKeys.forEach((key) => {
              if (!item.hasOwnProperty(key) || !item[key]) {
                if (!errorOccurred) {
                  toast.error(
                    `Alert: Field "${key}" is ${
                      item.hasOwnProperty(key) ? "empty" : "missing"
                    } in item at index ${index}`
                  );
                  errorOccurred = true;
                }
              }
            });

            Object.keys(item).forEach((key) => {
              if (!requiredKeys.includes(key)) {
                if (!errorOccurred) {
                  toast.error(
                    `Alert: Unexpected field "${key}" found in item at index ${index}`
                  );
                  errorOccurred = true;
                }
              }
            });
          });

          if (!errorOccurred) {
            const formData = new FormData();

            formData.append("file", file);

            try {
              setreFetch(true);
              const { success, message } = await ApiRequest.post(
                "/import/medicines",
                formData,
                { "Content-Type": "multipart/form-data" }
              );

              if (success) {
                setreFetch(false);
                toast.success(message);
                return;
              }
            } catch (error) {
              console.log("ee", error);
            }
            // Proceed with your file handling logic here
          }
        } catch (error) {
          console.error("Error processing the file:", error);
        }
      } else {
        toast.error("Please upload an Excel file.");
      }
    }
  };

  const handleInput = () => {
    return inputRef.current.click();
  };

  return {
    setselectedDate,
    selectedDate,
    style,
    Options,
    navigateAddMedicinePage,
    primaryLoader,
    setselectedFilter,
    selectedFilter,
    paginationCount,
    currentPages,
    pageNumbers,
    next,
    pre,
    setsearchFilter,
    searchFilter,
    handelModel,
    model,
    handleDelete,
    loader,
    handleExcel,
    inputRef,
    handleInput,
    selectedLimit,
    setSelectedLimit,
    statusAvailable,
    tableLoader
  };
};

export default Medicine;
