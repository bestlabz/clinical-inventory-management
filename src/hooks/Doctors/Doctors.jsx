import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//Api
import ApiRequest from "../../services/httpService";
import { setDoctorTable } from "../../Redux/Slice/TableDatas";
import toast from "react-hot-toast";
import {
  setDoctorsCurrentPage,
  setDoctorsNextPage,
  setDoctorsPrePage,
  setDoctorsTotalCount,
} from "../../Redux/Slice/Pagination";

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
  const [viewPage, setviewPage] = useState(false);
  const [dotorId, setDotorId] = useState(null);

  const { userDetails } = useSelector((state) => state.userinfo);

  const {
    doctorscurrentPage: currentPages,
    doctorstotalCount: paginationCount,
  } = useSelector((state) => state.Pagination);

  useEffect(() => {
    const fetchData = async ({ filter, page }) => {
      try {
        dispatch(setDoctorTable([]));
        const filterQuery = filter
          ? `?${filter}=true&page=${page}`
          : `?page=${page}&verify=true`;

        const {
          success,
          doctorAvailability,
          totalDoctorsCount,
          availableDoctorsCount,
          unavailableDoctorsCount,
          currentPage,
          totalPages,
        } = await ApiRequest.get(
          `/doctersby_clinic/${userDetails._id}${filterQuery}`
        );

        if (success) {
          dispatch(setDoctorsCurrentPage(currentPage));
          dispatch(setDoctorsTotalCount(totalPages));
          setCardValue({
            total_doctor: totalDoctorsCount,
            available_doctor: availableDoctorsCount,
            leave_doctor: unavailableDoctorsCount,
          });

          const tableData = doctorAvailability.map((i) => {
            return {
              id: i?.doctor?._id,
              doctor_name: i?.doctor?.name || "",
              specialist: i?.doctor?.specialist || "",
              availability: i?.availability !== "unavailable",
              status:
                i?.doctor?.clinics?.length > 0
                  ? i?.doctor?.clinics?.filter(
                      (item) => item?.clinicId === userDetails?._id
                    )[0]?.block
                  : false,
              doctor_image: i?.doctor?.profile || null,
              mobile_number: i?.doctor?.mobile_number,
            };
          });

          setPrimaryLoader(false);
          dispatch(setDoctorTable(tableData));
        } else {
          setPrimaryLoader(false);
        }
      } catch (error) {
        setPrimaryLoader(false);
        dispatch(setDoctorTable([]));
        toast.error(error.response.data.error);
      }
    };

    const API = async () => {
      if (!model) {
        if (!selectedFilter || selectedFilter?.value === "") {
          await fetchData({ page: currentPages });
        } else if (selectedFilter?.value === "verify") {
          await fetchData({ filter: "verify", page: currentPages });
        } else if (selectedFilter?.value === "recently_joined") {
          await fetchData({ filter: "recently_joined", page: currentPages });
        }
      }
    };

    API();
  }, [selectedFilter, model, currentPages]);

  const handleChange = async (id, value, reason) => {
    try {
      setLoader(true);
      const { success } = await ApiRequest.post(`/doctor/${id}`, {
        clinicId: userDetails._id,
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
    { label: "Recently joined", value: "recently_joined" },
    { label: "Verified", value: "verify" },
  ];

  const navigateAddDoctorPage = () => {
    return navigate("/add-doctor");
  };

  const next = () => {
    if (currentPages !== pageNumbers[pageNumbers.length - 1]) {
      return dispatch(setDoctorsNextPage());
    }
  };

  const pre = () => {
    return dispatch(setDoctorsPrePage());
  };

  const getPagesCut = ({ pagesCutCount = 2 }) => {
    const ceiling = Math.ceil(pagesCutCount / 2);
    const floor = Math.floor(pagesCutCount / 2);

    if (paginationCount <= pagesCutCount) {
      return { start: 1, end: Number(paginationCount) };
    } else if (Number(currentPages) <= ceiling) {
      return { start: 1, end: pagesCutCount };
    } else if (Number(currentPages) + floor >= Number(paginationCount)) {
      return {
        start: Number(paginationCount) - Number(pagesCutCount) + 1,
        end: Number(paginationCount),
      };
    } else {
      return {
        start: Number(currentPages) - ceiling + 1,
        end: Number(currentPages) + floor,
      };
    }
  };

  const { start, end } = getPagesCut({ pagesCutCount: 3 }); // Adjust pagesCutCount as needed
  const pageNumbers = Array.from(
    { length: end - start + 1 },
    (_, i) => start + i
  );

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
    setviewPage,
    viewPage,
    paginationCount,
    currentPages,
    pageNumbers,
    next,
    pre,
    setDotorId,
    dotorId,
  };
};

export default Doctors;
