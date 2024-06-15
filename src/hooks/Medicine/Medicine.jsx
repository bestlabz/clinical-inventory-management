import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Medicine = () => {
  const navigate = useNavigate();

  const [selectedDate, setselectedDate] = useState(new Date());

  const style = {
    width: "100%",
    padding: "0px",
    border: "1px solid #d3d3d3",
    outline: "1px solid #d3d3d3",
    background: "rgba(218, 227, 255, 0.31)",
  };

  const Options = [
    { label: "Recently joined", value: "Recently_joined" },
    { label: "Receptionist on leave", value: "Receptionist_on_leave" },
  ];


  const dummydata = [
    {
        medicine_name: "Medicine1",
        dosage_form: "Tablet",
        dosage_strength: "500 mg",
        status: true,
    },
    {
        medicine_name: "Medicine2",
        dosage_form: "Capsule",
        dosage_strength: "250 mg",
        status: false,
    },
    {
        medicine_name: "Medicine3",
        dosage_form: "Liquid",
        dosage_strength: "100 ml",
        status: true,
    },
    {
        medicine_name: "Medicine4",
        dosage_form: "Injection",
        dosage_strength: "10 ml",
        status: true,
    },
    {
        medicine_name: "Medicine5",
        dosage_form: "Tablet",
        dosage_strength: "100 mg",
        status: false,
    },
    {
        medicine_name: "Medicine6",
        dosage_form: "Capsule",
        dosage_strength: "500 mg",
        status: true,
    },
    {
        medicine_name: "Medicine7",
        dosage_form: "Liquid",
        dosage_strength: "200 ml",
        status: false,
    },
    {
        medicine_name: "Medicine8",
        dosage_form: "Tablet",
        dosage_strength: "750 mg",
        status: true,
    },
    {
        medicine_name: "Medicine9",
        dosage_form: "Injection",
        dosage_strength: "5 ml",
        status: false,
    },
    {
        medicine_name: "Medicine10",
        dosage_form: "Tablet",
        dosage_strength: "50 mg",
        status: true,
    },
    {
        medicine_name: "Medicine11",
        dosage_form: "Capsule",
        dosage_strength: "100 mg",
        status: false,
    },
    {
        medicine_name: "Medicine12",
        dosage_form: "Liquid",
        dosage_strength: "150 ml",
        status: true,
    },
    {
        medicine_name: "Medicine13",
        dosage_form: "Injection",
        dosage_strength: "20 ml",
        status: true,
    },
    {
        medicine_name: "Medicine14",
        dosage_form: "Tablet",
        dosage_strength: "200 mg",
        status: false,
    },
    {
        medicine_name: "Medicine15",
        dosage_form: "Capsule",
        dosage_strength: "400 mg",
        status: true,
    },
];


  const navigateAddMedicinePage = () => {
    return navigate('/add-medicine')
  }

  return {
    setselectedDate,
    selectedDate,
    style,
    Options,
    dummydata,
    navigateAddMedicinePage
  };
};

export default Medicine;
