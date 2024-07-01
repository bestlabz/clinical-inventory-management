import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
  addHeader,
  addMain,
  setClinicDetails,
  setClinicLogo,
  setDoctorDetails,
  updateHeader,
  updateMain,
} from "../../Redux/Slice/Prescription";

const rightSide = () => {
  const ImageInputRef = useRef(null);
  const disatch = useDispatch();
  // const [base64Image, setBase64Image] = useState(null);


  const handleFileInputClick = () => {
    ImageInputRef.current.click();
  };


  const clinicLogoupdate = (item) => {
    return disatch(setClinicLogo(item));
  };

  const clinicalDetailsUpdate = (item) => {
    return disatch(setClinicDetails(item));
  };

  const doctorDetailsUpdate = (item) => {
    return disatch(setDoctorDetails(item));
  };

  const headerUpdate = (index, value) => {
    return disatch(updateHeader({ index, value }));
  };

  const headerAdd = (item) => {
    return disatch(addHeader(item));
  };

  const mainUpdate = (index, value) => {
    return disatch(updateMain({ index, value }));
  };

  const mainAdd = (item) => {
    return disatch(addMain(item));
  };

  return {
    handelImage: handleFileInputClick,
    ImageInputRef,
    clinicLogoupdate,
    clinicalDetailsUpdate,
    doctorDetailsUpdate,
    headerUpdate,
    headerAdd,
    mainUpdate,
    mainAdd,
  };
};

export default rightSide;
