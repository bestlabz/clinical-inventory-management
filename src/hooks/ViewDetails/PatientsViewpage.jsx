import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

import ApiRequest from "../../services/httpService";
import { setDetails } from "../../Redux/Slice/DetailsPage";

const PatientsViewpage = ({ id }) => {
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const API = async () => {
      if (id) {
        try {
          setLoader(true);
          const { success, patient } = await ApiRequest.get(`/patients/${id}`);

          if (success) {
            setLoader(false);
            return dispatch(setDetails(patient));
          }
        } catch (error) {
          setLoader(false);
          toast.error(error.response.data.error);
        }
      }
    };

    API();
  }, [id]);

  return {
    loader: loader,
  };
};

export default PatientsViewpage;
