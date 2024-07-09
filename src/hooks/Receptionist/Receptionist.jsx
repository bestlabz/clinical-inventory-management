import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//Api
import ApiRequest from "../../services/httpService";
import { setReceptionistTable } from "../../Redux/Slice/TableDatas";
import toast from "react-hot-toast";
import { setReceptionistsCurrentPage, setReceptionistsNextPage, setReceptionistsPrePage, setReceptionistsTotalCount } from "../../Redux/Slice/Pagination";

const Doctors = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [selectedDate, setselectedDate] = useState();
  const [primaryLoader, setPrimaryLoader] = useState(true);
  const [clear, setClear] = useState(false);
  const [model, setModel] = useState(false);
  const [selectedFilter, setselectedFilter] = useState(null)
  const [loader, setLoader] = useState(false)
  const [viewPage, setviewPage] = useState(false)

  const [receptionistID, setReceptionistID] = useState(null)


  const { userDetails } = useSelector((state) => state.userinfo);

  const { receptionistcurrentPage: currentPages, receptionisttotalCount: paginationCount } =
    useSelector((state) => state.Pagination);


  useEffect(() => {
    const fetchData = async ({filter, page}) => {
      try {
        const filterQuery = filter
        ? `?${filter}=true&page=${page}`
        : `?page=${page}`;

        const { success, receptionists,  currentPage,
          totalPages, } = await ApiRequest.get(
          `/receptionist/clinic/${userDetails._id}${filterQuery}`
        );
  
        if (success) {
          dispatch(setReceptionistsCurrentPage(currentPage));
          dispatch(setReceptionistsTotalCount(totalPages));
          const tableData = receptionists.map((i) => {
            return {
              id: i._id,
              receptionist_name: i?.name || "",
              availability:
                i?.availability === "unavailable" ? false : true || false,
              receptionist_image: i?.profile || null,
              status: i?.block,
            };
          });
          setPrimaryLoader(false);
          dispatch(setReceptionistTable(tableData));
          return;
        } else {
          setPrimaryLoader(false);
        }
      } catch (error) {
        setPrimaryLoader(false);
        toast.error(error.response.data.message);
      }
    };
  
    const API = async () => {
      if (!selectedFilter || selectedFilter?.value === "") {
        await fetchData({ page: currentPages });
      } else if (selectedFilter?.value === "onleave") {
        await fetchData({ filter: "onleave", page: currentPages });
      } else if (selectedFilter?.value === "recently_joined") {
        await fetchData({ filter: "recently_joined", page: currentPages });
      }
    };
  
    API();
  }, [selectedFilter, model, currentPages]);

  const style = {
    width: "100%",
    padding: "0px",
    border: "1px solid #d3d3d3",
    outline: "1px solid #d3d3d3",
    background: "rgba(218, 227, 255, 0.31)",
  };

  const Options = [
    { label: "Recently joined", value: "recently_joined" },
    // { label: "Receptionist on leave", value: "onleave" },
  ];


  const navigateAddRecptionistPage = () => {
    return navigate("/add-recptionist");
  };

  const handleChange = async (id, value, reason) => {

    try {
      setLoader(true)
      const { success } = await ApiRequest.post(`/receptionist/${id}`, {
        block: value,
        reason,
      });
  
      if (success) {
        setLoader(false)
        toast.success("Receptionist status updated successfully")
        return setClear(true);
        ;
      }
    } catch (error) {
      setLoader(false)
      toast.error(error.response.data.error);
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


  const next = () => {
    if( currentPages !== pageNumbers[pageNumbers.length - 1]) {
      return dispatch(setReceptionistsNextPage());

    }
  };

  const pre = () => {
    return dispatch(setReceptionistsPrePage());
  };




  return {
    setselectedDate,
    selectedDate,
    style,
    Options,
    navigateAddRecptionistPage,
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
    setReceptionistID,
    receptionistID
  };
};

export default Doctors;
