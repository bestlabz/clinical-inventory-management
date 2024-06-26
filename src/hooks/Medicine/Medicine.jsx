import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//API
import ApiRequest from '../../services/httpService'

const Medicine = () => {
  const navigate = useNavigate();

  const [selectedDate, setselectedDate] = useState(new Date());
  const [tableData, setTableData] = useState([])

  useEffect(() => {
    const API = async () => {
        const {success, medicines} = await ApiRequest.get('/medicines')

        if(success) {
            const tableData = medicines.map((i) => {
                return   {
                    medicine_name: i?.medicine_name || "",
                    dosage_form: "",
                    dosage_strength: i?.dosage_strength || "",
                    status: true,
                }
            })

            return setTableData(tableData)
        }

    }
    API()
  }, [])

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


  const navigateAddMedicinePage = () => {
    return navigate('/add-medicine')
  }

  return {
    setselectedDate,
    selectedDate,
    style,
    Options,
    dummydata: tableData,
    navigateAddMedicinePage
  };
};

export default Medicine;
