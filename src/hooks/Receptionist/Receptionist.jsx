import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

//Api
import ApiRequest from "../../services/httpService";
import { setReceptionistTable } from "../../Redux/Slice/TableDatas";

const Doctors = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [selectedDate, setselectedDate] = useState();
  const [primaryLoader, setPrimaryLoader] = useState(true);
  const [clear, setClear] = useState(false);
  const [model, setModel] = useState(false);

  const { userDetails } = useSelector((state) => state.userinfo);

  useEffect(() => {
    const API = async () => {
      const { success, receptionists } = await ApiRequest.get(
        `/receptionist/clinic/${userDetails._id}`
      );

      if (success) {
        const tableData = receptionists.map((i) => {
          return {
            id: i._id,
            receptionist_image: "",
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
      }
    };
    API();
  }, [model, selectedDate]);

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
    return navigate("/add-recptionist");
  };

  const handleChange = async (id, value, reason) => {
    const { success } = await ApiRequest.post(`/receptionist/${id}`, {
      block: value,
      reason,
    });

    if (success) {
      return setClear(true);
      ;
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
    setClear
  };
};

export default Doctors;
