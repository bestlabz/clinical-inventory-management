import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//Api
import ApiRequest from "../../services/httpService";
import { setReceptionistTable } from "../../Redux/Slice/TableDatas";
import toast from "react-hot-toast";

const Doctors = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [selectedDate, setselectedDate] = useState();
  const [primaryLoader, setPrimaryLoader] = useState(true);
  const [clear, setClear] = useState(false);
  const [model, setModel] = useState(false);
  const [selectedFilter, setselectedFilter] = useState(null)
  const [loader, setLoader] = useState(false)


  const { userDetails } = useSelector((state) => state.userinfo);

  useEffect(() => {
    const fetchData = async (filter) => {
      try {
        const filterQuery = filter ? `?${filter}=true` : "";
        const { success, receptionists } = await ApiRequest.get(
          `/receptionist/clinic/${userDetails._id}${filterQuery}`
        );
  
        if (success) {
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
        await fetchData();
      } else if (selectedFilter?.value === "onleave") {
        await fetchData("onleave");
      } else if (selectedFilter?.value === "recently_joined") {
        await fetchData("recently_joined");
      }
    };
  
    API();
  }, [selectedFilter, model]);

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
    { label: "Receptionist on leave", value: "onleave" },
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
    loader
  };
};

export default Doctors;
