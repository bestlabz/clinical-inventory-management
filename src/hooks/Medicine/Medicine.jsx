import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//API
import ApiRequest from "../../services/httpService";
import { useDispatch, useSelector } from "react-redux";
import { setMedicineTable } from "../../Redux/Slice/TableDatas";
import toast from "react-hot-toast";
import { setMedicineCurrentPage, setMedicineNextPage, setMedicinePrePage, setMedicineTotalCount } from "../../Redux/Slice/Pagination";

const Medicine = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [selectedDate, setselectedDate] = useState(new Date());
  const [primaryLoader, setPrimaryLoader] = useState(true);
  const [dosageFormsOptions, setDosageFormsOptions] = useState([]);
  const [selectedFilter, setselectedFilter] = useState(null);

  const { medicinescurrentPage: currentPages, medicinestotalCount: paginationCount } =
    useSelector((state) => state.Pagination);

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
    const fetchData = async ({ filter, value, page }) => {
      try {
        const filterQuery =
          filter && value
            ? `?${filter}=${value}&page=${page}`
            : `?page=${page}`;
        const { success, medicines, totalPages, currentPage } =
          await ApiRequest.get(`/medicines${filterQuery}`);

        if (success) {
          dispatch(setMedicineCurrentPage(currentPage));
          dispatch(setMedicineTotalCount(totalPages));
          const tableData = medicines.map((i) => {
            return {
              medicine_name: i?.medicine_name || "",
              dosage_form: i?.dosage_form?.[0] || "",
              dosage_strength: i?.dosage_strength || "",
              dosage_unit: i?.dosage_unit || "",
              status: i?.status,
            };
          });
          setPrimaryLoader(false);
          dispatch(setMedicineTable(tableData));
          return;
        } else {
          setPrimaryLoader(false);
        }
      } catch (error) {
        setPrimaryLoader(false);
        toast.error(error.response.data.error);
      }
    };

    const API = async () => {
      if (!selectedFilter || selectedFilter?.value === "") {
        await fetchData({ page: currentPages });
      } else if (selectedFilter?.value === "OutOfStock") {
        await fetchData({
          filter: "status",
          value: "OutOfStock",
          page: currentPages,
        });
      } else if (selectedFilter?.value) {
        await fetchData({
          filter: "dosage_form",
          value: selectedFilter.value,
          page: currentPages,
        });
      }
    };

    API();
  }, [selectedFilter, currentPages]);

  const style = {
    width: "100%",
    padding: "0px",
    border: "1px solid #d3d3d3",
    outline: "1px solid #d3d3d3",
    background: "rgba(218, 227, 255, 0.31)",
  };

  const Options = [
    { label: "All", value: "" },
    ...dosageFormsOptions,
    { label: "Out of stock", value: "OutOfStock" },
  ];

  const navigateAddMedicinePage = () => {
    return navigate("/add-medicine");
  };

  const next = () => {
    if (currentPages !== pageNumbers[pageNumbers.length - 1]) {
      return dispatch(setMedicineNextPage());
    }
  };

  const pre = () => {
    return dispatch(setMedicinePrePage());
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
  };
};

export default Medicine;
