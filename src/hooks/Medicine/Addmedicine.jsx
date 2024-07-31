import React, { useEffect, useState } from "react";

//Components
import FormHandel from "../../Components/Properites/FormHandel/Formhandel";

//Utilities
import { AddMedicineSchema } from "../../utils/Validation/AddMedicine";
import { useNavigate } from "react-router-dom";

//API
import ApiRequest from "../../services/httpService";
import toast from "react-hot-toast";

const Addmedicine = () => {
  const navigate = useNavigate();

  const [validateErr, setValidateErr] = useState(false);
  const [modalPopup, setModalPopup] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedItem1, setSelectedItem1] = useState(null);

  const [dosageFormsOptions, setDosageFormsOptions] = useState([]);
  const [dosageUnitOptions, setDosageUnitOptions] = useState([]);

  const [loader, setLoader] = useState(false)

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
        toast.error(
          `${error.response?.data?.message || error.response.data.error}`
        );
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
      dosage_form: selectedItem.label,
      dosage_unit: selectedItem1.label,
    };

    try {
      setLoader(true)
      const { success } = await ApiRequest.post("/medicines", bodyData);

      if (success) {
        setLoader(false)
        setModalPopup(true);
        setSelectedItem(null);
        setSelectedItem1(null);
        setTimeout(() => {
          setModalPopup(false);
          actions.resetForm();
        }, 3000);
        return;
      }
      
    } catch (error) {
      setLoader(false)
      toast.error(
        `${error.response?.data?.message || error.response.data.error}`
      );
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

  const style1 = {
    width: "100%",
    padding: "7px",
    border: `1px solid ${validateErr && !selectedItem ? "transparent" : "transparent"}`,
    borderRadius: "8px",
    outline: "1px solid transparent",
    background: "rgba(218, 227, 255, 0.31)",
  };


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
    style1,
    loader
  };
};

export default Addmedicine;
