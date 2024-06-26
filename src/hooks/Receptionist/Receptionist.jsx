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
      const {success, receptionists} = await ApiRequest.get(`/receptionist/clinic/${userDetails._id}`);

      if (success) { 
        const tableData = receptionists.map((i) => {
          return {
            receptionist_image: "",
            receptionist_name: i?.name || "",
            status: i?.availability === "unavailable" ? false : true || false
  
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
    { label: "Receptionist on leave", value: "Receptionist_on_leave" },
  ];


  const navigateAddRecptionistPage = () => {
    return navigate('/add-recptionist')
  }

  return {
    setselectedDate,
    selectedDate,
    style,
    Options,
    dummydata: tableData,
    navigateAddRecptionistPage
  };
};

export default Doctors;
