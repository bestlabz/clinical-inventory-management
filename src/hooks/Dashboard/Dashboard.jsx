import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//Api
import ApiRequest from "../../services/httpService";
import { setPatientsTable } from "../../Redux/Slice/TableDatas";
import toast from "react-hot-toast";
import { setCurrentPage, setTotalCount } from "../../Redux/Slice/Pagination";

const Dashboard = () => {
  const [selectedDate, setselectedDate] = useState();
  const [primaryLoader, setPrimaryLoader] = useState(true);
  const dispatch = useDispatch();

  const { currentPage: currentPages, totalCount: paginationCount } =
    useSelector((state) => state.Pagination);


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
        
        const { success, patients,currentPage, totalPages } = await ApiRequest.get(`/patients?appointment_date=${formattedDate}&page=${currentPages}`);

        if (success) {
          dispatch(setCurrentPage(currentPage));
          dispatch(setTotalCount(totalPages));
          const tableData = patients.map((i) => {
            return {
              name: i?.name || "",
              doctor_image: i?.appointment_history?.[0]?.doctor?.profile || null,
              doctor_name: i?.appointment_history?.[0]?.doctor?.name || "",
              specialist: i?.appointment_history?.[0]?.doctor?.specialist || "",
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
  }, [selectedDate, currentPages]);

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
    if(  currentPages !== pageNumbers[pageNumbers.length - 1]) {
      return dispatch(setNextPage());

    }
  };

  const pre = () => {
    return dispatch(setPrePage());
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
  };
};

export default Dashboard;
