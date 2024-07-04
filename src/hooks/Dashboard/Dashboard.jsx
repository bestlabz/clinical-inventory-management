import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

//Api
import ApiRequest from "../../services/httpService";
import { setPatientsTable } from "../../Redux/Slice/TableDatas";
import axios from "axios";
import toast from "react-hot-toast";

const Dashboard = () => {
  const [selectedDate, setselectedDate] = useState();
  const [primaryLoader, setPrimaryLoader] = useState(true);
  const dispatch = useDispatch();

  console.log('selectedDate', selectedDate);


  useEffect(() => {
    const API = async () => {
      try {

        let formattedDate

        if (selectedDate) {
          const date = new Date(selectedDate);
          const day = String(date.getDate()).padStart(2, "0");
          const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
          const year = date.getFullYear();
           formattedDate = `${day}-${month}-${year}`;
        } else {
          formattedDate = ""
        }
        
        const { success, patients } = await ApiRequest.get(`/patients?appointment_date=${formattedDate}`);

        if (success) {
          const tableData = patients.map((i) => {
            return {
              name: i?.name || "",
              doctor_image: i?.appointment_history?.[0]?.doctor?.profile || null,
              doctor_name: i?.appointment_history?.[0]?.doctor?.name || "",
              specialist: i?.appointment_history?.[0]?.doctor?.specilaist || "",
              appointment_time: i?.appointment_history?.[0]?.time || "",
            };
          });
          setPrimaryLoader(false);
          dispatch(setPatientsTable(tableData));
          return;
        }
      } catch (error) {
        console.log('ee', error)
        setPrimaryLoader(false);
        toast.error(error.response.data.message)
        
      }
    
    };
    API();
  }, [selectedDate]);

  const style = {
    width: "100%",
    padding: "0px",
    border: "1px solid #d3d3d3",
    outline: "1px solid #d3d3d3",
    background: "rgba(218, 227, 255, 0.31)",
  };

  const Options = [
    { label: "Today", value: "today" },
    { label: "This Year", value: "this_year" },
    { label: "This Month", value: "this_month" },
    { label: "This Week", value: "this_week" },
  ];

  return {
    setselectedDate,
    selectedDate,
    style,
    Options,
    primaryLoader,
  };
};

export default Dashboard;
