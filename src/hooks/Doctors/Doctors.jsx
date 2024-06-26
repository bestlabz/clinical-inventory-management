import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

//Api
import ApiRequest from '../../services/httpService'

const Doctors = () => {
  const navigate = useNavigate();

  const [selectedDate, setselectedDate] = useState(new Date());

  const [tableData, setTableData] = useState([])

  const { userDetails } = useSelector((state) => state.userinfo);



  useEffect(() => {
    const API = async () => {
      const {success, doctorAvailability} = await ApiRequest.get(`/doctersby_clinic/${userDetails._id}`);

      if (success) { 
        const tableData = doctorAvailability.map((i) => {
          return {
            doctor_image: i?.doctor?.postgraduate_certificate || "",
            doctor_name: i?.doctor?.name || null,
            specialist: i?.doctor?.specilaist || "",
            appointment_time: i?.availability === "unavailable" ? false : true || false
  
          }
        })

       return setTableData(tableData)

      }
    }
    API()
  }, [])

  const style = {
    width: "100%",
    padding: "0px",
    border: "1px solid #d3d3d3",
    outline: "1px solid #d3d3d3",
    background: "rgba(218, 227, 255, 0.31)",
  };

  const Options = [
    { label: "Recently joined", value: "Recently_joined" },
    { label: "Doctors on leave", value: "Doctors_on_leave" },
  ];



  const navigateAddDoctorPage = () => {
    return navigate('/add-doctor')
  }

  return {
    setselectedDate,
    selectedDate,
    style,
    Options,
    dummydata: tableData,
    navigateAddDoctorPage
  };
};

export default Doctors;
