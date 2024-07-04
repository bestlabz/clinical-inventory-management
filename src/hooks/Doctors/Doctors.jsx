import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//Api
import ApiRequest from "../../services/httpService";
import { setDoctorTable } from "../../Redux/Slice/TableDatas";
import toast from "react-hot-toast";

const Doctors = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [selectedDate, setselectedDate] = useState();
  const [primaryLoader, setPrimaryLoader] = useState(true);
  const [cardValue, setCardValue] = useState({
    total_doctor: "",
    available_doctor: "",
    leave_doctor: "",
  });
  const [model, setModel] = useState(false);
  const [clear, setClear] = useState(false);
  const [selectedFilter, setselectedFilter] = useState(null);
  const [loader, setLoader] = useState(false);

  const { userDetails } = useSelector((state) => state.userinfo);

  useEffect(() => {
    const fetchData = async (filter) => {
      try {
        const filterQuery = filter ? `?${filter}=true` : "";
        const {
          success,
          doctorAvailability,
          totalDoctorsCount,
          availableDoctorsCount,
          unavailableDoctorsCount,
        } = await ApiRequest.get(
          `/doctersby_clinic/${userDetails._id}${filterQuery}`
        );

        if (success) {
          setCardValue({
            total_doctor: totalDoctorsCount,
            available_doctor: availableDoctorsCount,
            leave_doctor: unavailableDoctorsCount,
          });

          const tableData = doctorAvailability.map((i) => ({
            id: i?.doctor?._id,
            doctor_name: i?.doctor?.name || "",
            specialist: i?.doctor?.specialist || "",
            availability: i?.availability !== "unavailable",
            status: i?.doctor.block,
            doctor_image: i?.doctor?.profile || null,
          }));

          setPrimaryLoader(false);
          dispatch(setDoctorTable(tableData));
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
      } else if (selectedFilter?.value === "onleave") {
        await fetchData("onleave");
      } else if (selectedFilter?.value === "recently_joined") {
        await fetchData("recently_joined");
      }
    };

    API();
  }, [selectedFilter, model]);

  const handleChange = async (id, value, reason) => {
    try {
      setLoader(true);
      const { success } = await ApiRequest.post(`/doctor/${id}`, {
        block: value,
        reason,
      });

      if (success) {
        setLoader(false);
        setClear(true);
        toast.success("Doctor status updated successfully");
      }
    } catch (error) {
      setLoader(false);
      toast.error(error.response.data.error);
    }
  };

  const style = {
    width: "100%",
    padding: "0px",
    border: "1px solid #d3d3d3",
    outline: "1px solid #d3d3d3",
    background: "rgba(218, 227, 255, 0.31)",
  };

  const Options = [
    { label: "All", value: "" },
    { label: "Recently joined", value: "recently_joined" },
    { label: "Doctors on leave", value: "onleave" },
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
    setClear,
    setselectedFilter,
    selectedFilter,
    loader,
  };
};

export default Doctors;
