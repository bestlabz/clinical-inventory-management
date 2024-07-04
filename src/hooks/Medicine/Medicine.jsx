import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//API
import ApiRequest from "../../services/httpService";
import { useDispatch } from "react-redux";
import { setMedicineTable } from "../../Redux/Slice/TableDatas";
import toast from "react-hot-toast";

const Medicine = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [selectedDate, setselectedDate] = useState(new Date());
  const [primaryLoader, setPrimaryLoader] = useState(true);
  const [dosageFormsOptions, setDosageFormsOptions] = useState([]);
  const [selectedFilter, setselectedFilter] = useState(null)


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
    const fetchData = async (filter, value) => {
      try {
        const filterQuery = filter && value ? `?${filter}=${value}` : "";
        const { success, medicines } = await ApiRequest.get(
          `/medicines${filterQuery}`
        );
  
        if (success) {
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
        await fetchData();
      } else if (selectedFilter?.value === "OutOfStock") {
        await fetchData("status", "OutOfStock");
      } else if (selectedFilter?.value) {
        await fetchData("dosage_form", selectedFilter.value);
      }
    };
  
    API();
  }, [selectedFilter]);

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

  return {
    setselectedDate,
    selectedDate,
    style,
    Options,
    navigateAddMedicinePage,
    primaryLoader,
    setselectedFilter,
    selectedFilter
  };
};

export default Medicine;
