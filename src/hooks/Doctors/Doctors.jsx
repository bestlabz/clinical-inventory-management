import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//Api
import ApiRequest from "../../services/httpService";
import { setDoctorTable } from "../../Redux/Slice/TableDatas";

const Doctors = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [selectedDate, setselectedDate] = useState();
  const [primaryLoader, setPrimaryLoader] = useState(true)  
  const [cardValue, setCardValue] = useState({
    total_doctor: "",
    available_doctor: "",
    leave_doctor: ""
  })
  const [model, setModel] = useState(false)
  const [clear, setClear] = useState(false)
  
  const { userDetails } = useSelector((state) => state.userinfo);


  useEffect(() => {
    const API = async () => {
      const { success, doctorAvailability, totalDoctorsCount, availableDoctorsCount, unavailableDoctorsCount } = await ApiRequest.get(
        `/doctersby_clinic/${userDetails._id}?appointment_date=${selectedDate}`
      );

      if (success) {
        setCardValue({
          total_doctor: totalDoctorsCount,
          available_doctor: availableDoctorsCount,
          leave_doctor: unavailableDoctorsCount
        })
        const tableData = doctorAvailability.map((i) => {
          return {
            id: i?.doctor?._id,
            doctor_image: i?.doctor?.postgraduate_certificate || "",
            doctor_name: i?.doctor?.name || "",
            specialist: i?.doctor?.specilaist || "",
            availability: i?.availability === "unavailable" ? false : true,
            status: i?.doctor.block,
            doctor_image: i?.doctor?.profile || null,
          };
        });
        console.log('tableData', tableData);
        setPrimaryLoader(false)
        dispatch(setDoctorTable(tableData))
        return 
      }
    };
    API();
  }, [selectedDate, model]);

  const handleChange = async (id, value, reason) => {

    const { success } = await ApiRequest.post(`/doctor/${id}`, {
      block: value,
      reason
    });

    if(success) {
      setClear(true)
    }

  }

 

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
    return navigate("/add-doctor");
  };

  return {
    setselectedDate,
    selectedDate,
    style,
    Options,
    navigateAddDoctorPage,
    cardValue,
    primaryLoader,
    setModel,
    model,
    handleChange,
    clear,
    setClear
  };
};

export default Doctors;
