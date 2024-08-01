import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//Api
import ApiRequest from "../../services/httpService";
import { setPatientsTable } from "../../Redux/Slice/TableDatas";
import toast from "react-hot-toast";
import {
  setPatientsCurrentPage,
  setPatientsNextPage,
  setPatientsPrePage,
  setPatientsTotalCount,
} from "../../Redux/Slice/Pagination";
import { setNotification } from "../../Redux/Slice/Notification";

const Dashboard = () => {
  const dispatch = useDispatch();

  const [selectedDate, setselectedDate] = useState(new Date());
  const [primaryLoader, setPrimaryLoader] = useState(true);
  const [viewPage, setviewPage] = useState(false);
  const [patientID, setPatientID] = useState(null);
  const [selectedLimit, setSelectedLimit] = useState({ label: 10, value: 10 });
  const [statusAvailable, setStatusAvailable] = useState(false)

  const {
    patientscurrentPage: currentPages,
    patientstotalCount: paginationCount,
  } = useSelector((state) => state.Pagination);

  useEffect(() => {
    const API = async () => {
      try {
        let formattedDate;

        if (selectedDate) {
          const date = new Date(selectedDate);
          const day = String(date.getDate()).padStart(2, "0");
          const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
          const year = date.getFullYear();
          formattedDate = `${day}-${month}-${year}`;
        } else {
          formattedDate = "";
        }

        const { success, patients, currentPage, totalPages } =
          await ApiRequest.get(
            `/patients?appointment_date=${formattedDate}&page=${currentPages}&limit=${selectedLimit.value}`
          );

        if (success) {
          setStatusAvailable(false)
          dispatch(
            setPatientsCurrentPage(
              patients.length === 0 && currentPage !== 1
                ? currentPage - 1
                : currentPage
            )
          );
          dispatch(setPatientsTotalCount(totalPages));
          const tableData = patients.map((i) => {
            return {
              name: i?.name || "",
              doctor_image:
                i?.appointment_history?.[0]?.doctor?.profile || null,
              doctor_name: i?.appointment_history?.[0]?.doctor?.name || "",
              specialist: i?.appointment_history?.[0]?.doctor?.specialist || "",
              appointment_time: i?.appointment_history?.[0]?.time || "",
              id: i?._id,
            };
          });
          setPrimaryLoader(false);
          dispatch(setPatientsTable(tableData));
          return;
        }
      } catch (error) {
        setPrimaryLoader(false);
        toast.error(
          `${error.response?.data?.message || error.response.data.error}`
        );
      }
    };
    API();
  }, [selectedDate, currentPages, selectedLimit]);

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

  const next = () => {
    if (currentPages !== pageNumbers[pageNumbers.length - 1]) {
      setStatusAvailable(true)

      return dispatch(setPatientsNextPage());
    }
  };

  const pre = () => {
    if(currentPages !== 1){
      setStatusAvailable(true)
      return dispatch(setPatientsPrePage());

    }
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
    primaryLoader,
    paginationCount,
    currentPages,
    pageNumbers,
    next,
    pre,
    viewPage,
    setviewPage,
    patientID,
    setPatientID,
    selectedLimit,
    setSelectedLimit,
    statusAvailable
  };
};

export default Dashboard;
