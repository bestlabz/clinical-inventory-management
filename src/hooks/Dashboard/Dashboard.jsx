import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

//Api
import ApiRequest from "../../services/httpService";
import { setPatientsTable } from "../../Redux/Slice/TableDatas";

const Dashboard = () => {
  const [selectedDate, setselectedDate] = useState(new Date());
  const [primaryLoader, setPrimaryLoader] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const API = async () => {
      const { success, patients } = await ApiRequest.get("/patients");

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
    };
    API();
  }, []);

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
