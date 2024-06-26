import React, { useEffect, useState } from "react";

//Components
import FormHandel from "../../Components/Properites/FormHandel/Formhandel";

//Utilities
import { AddMedicineSchema } from "../../utils/Validation/AddMedicine";
import { useNavigate } from "react-router-dom";

//API
import ApiRequest from "../../services/httpService";

const Addmedicine = () => {
  const navigate = useNavigate();

  const [validateErr, setValidateErr] = useState(false);
  const [modalPopup, setModalPopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedItem1, setSelectedItem1] = useState(null);

  const [dosageFormsOptions, setDosageFormsOptions] = useState([]);
  const [dosageUnitOptions, setDosageUnitOptions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [dosageFormResponse, dosageUnitResponse] = await Promise.all([
          ApiRequest.get("/dosageform"),
          ApiRequest.get("/dosageunit"),
        ]);

        if (dosageFormResponse.success) {
          const dosageFormOptions = dosageFormResponse.dosageForms.map((i) => ({
            label: i.form_name,
            value: i._id,
          }));
          setDosageFormsOptions(dosageFormOptions);
        }

        if (dosageUnitResponse.success) {
          const dosageUnitOptions = dosageUnitResponse.dosageUnits.map((i) => ({
            label: i.unit_name,
            value: i._id,
          }));
          setDosageUnitOptions(dosageUnitOptions);
        }
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  const onSubmit = async (values, actions) => {
    if (!selectedItem) {
      return setValidateErr(true);
    }

    if (!selectedItem1) {
      return setValidateErr(true);
    }
    const bodyData = {
      medicine_name: values.medicine_name,
      dosage_strength: values.dasage_strength,
      dosage_form: [selectedItem.value],
      dosage_unit: selectedItem1.value,
    };
    const { success } = await ApiRequest.post("/medicines", bodyData);

    if (success) {
      setModalPopup(true);
      setSelectedItem(null);
      setSelectedItem1(null);
      setTimeout(() => {
        setModalPopup(false);
        actions.resetForm();
      }, 3000);
      return;
    }
  };

  const { errors, handleChange, handleSubmit, values, resetForm } = FormHandel({
    initialValue: { medicine_name: "", dasage_strength: "" },
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

  const style = {
    width: "100%",
    padding: "7px",
    border: `1px solid ${validateErr && !selectedItem ? "red" : "#d3d3d3"}`,
    borderRadius: "8px",
    outline: "1px solid #d3d3d3",
    background: "rgba(218, 227, 255, 0.31)",
  };

  const Options = [
    { label: "Liquid", value: "Liquid" },
    { label: "Tablet", value: "Tablet" },
  ];
  return {
    goBack,
    handleSubmit,
    values,
    handleChange,
    errors,
    handelClick,
    validateErr,
    modalPopup,
    style,
    dosageFormsOptions,
    dosageUnitOptions,
    setSelectedItem,
    selectedItem,
    setSelectedItem1,
    selectedItem1,
  };
};

export default Addmedicine;
