import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setAddHeader,
  setAddMain,
  setClinicDetails,
  setClinicLogo,
  setDoctorDetails,
  setUpdateFeild,
} from "../../Redux/Slice/Prescription";
import toast from "react-hot-toast";

import axios from "axios";

import ApiRequest from "../../services/httpService";


const rightSide = ({ setReFetch }) => {
  const ImageInputRef = useRef(null);
  const dispatch = useDispatch();
  // const [base64Image, setBase64Image] = useState(null);
  const [colorChange, setColorChange] = useState("");
  const [colorOptions, setcolorOptions] = useState([
    "#FF5353",
    "#808080",
    "#40A69A",
    "#2353FC",
    "#000000",
    "#F153FF",
    "#89F945",
    "#87FFF1",
    "#6941C6",
    "#BDFF00",
  ]);
  const [selectedColor, setSelectedColor] = useState("");
  const [openModel, setOpenModel] = useState(false);
  const [selectedKey, setselectedKey] = useState("");
  const [selectedFont, setselectedFont] = useState(null);
  const [selectedweight, setselectedWeight] = useState(null);
  const [selectedsize, setselectedSize] = useState(null);
  const [updateValue, setUpdateValue] = useState("");
  const [oldData, setOldData] = useState(null);
  const [loader, setLoader] = useState(false);
  const [imageUpload, setImageUpload] = useState(null);
  const [imageLoader, setImageLoader] = useState(false)


  const { clinicDetails, doctorDetails, headerDetails, mainDetails } =
    useSelector((state) => state.PrescriptionDetails);

  const { userDetails } = useSelector((state) => state.userinfo);

  useEffect(() => {
    switch (colorChange) {
      case "clinicDetails":
        setOldData(clinicDetails);
        break;
      case "doctorDetails":
        setOldData(doctorDetails);
        break;
      case "header":
        setOldData(headerDetails);
        break;
      case "main":
        setOldData(mainDetails);
        break;
      default:
        break;
    }
  }, [colorChange]);

  const updateData = (data, name, key, newValue) => {
    return data.map((item) => {
      if (item.name === name) {
        return {
          ...item,
          styles: {
            ...item.styles,
            [key]: newValue,
          },
        };
      }
      return item;
    });
  };

  const updateDataValue = (data, name, key, newValue) => {
    return data.map((item) => {
      if (item.name === name) {
        return {
          ...item,
          [key]: newValue,
        };
      }
      return item;
    });
  };

  useEffect(() => {
    const API = async () => {
      if (imageUpload) {
        try {

          const bodyData = {
            clinicId: userDetails._id,
            logo: imageUpload,
          };
          const formData = new FormData();

          for (const key in bodyData) {
            if (bodyData.hasOwnProperty(key)) {
              formData.append(key, bodyData[key]);
            }
          }
          const baseURL = import.meta.env.VITE_APP_API_BASE_URL;
          setImageLoader(true)
          const {data } = await axios.post(
            `${baseURL}/update_logo`, formData
          );

          if(data.success){
            setImageLoader(false)
            toast.success(data.message)
            dispatch(setClinicLogo({logo: data.template?.logo }))
            setImageUpload(null)
            return
          }
        } catch (error) {
          setImageLoader(false)
          toast.error(error.response?.data?.message || "An error occurred");
        }
      }
    };
    API();
  }, [imageUpload]);

  useEffect(() => {
    if (updateValue) {
      const updatedData = updateDataValue(
        colorChange === "clinicDetails"
          ? clinicDetails
          : colorChange === "doctorDetails"
          ? doctorDetails
          : colorChange === "header"
          ? headerDetails
          : mainDetails,
        selectedKey,
        "value",
        updateValue
      );
      switch (colorChange) {
        case "clinicDetails":
          dispatch(setClinicDetails(updatedData));
          break;
        case "doctorDetails":
          dispatch(setDoctorDetails(updatedData));
          break;
        case "header":
          dispatch(setAddHeader(updatedData));
          break;
        case "main":
          dispatch(setAddMain(updatedData));
          break;
        default:
          break;
      }
    }
  }, [updateValue]);

  useEffect(() => {
    if (selectedColor) {
      const updatedData = updateData(
        colorChange === "clinicDetails"
          ? clinicDetails
          : colorChange === "doctorDetails"
          ? doctorDetails
          : colorChange === "header"
          ? headerDetails
          : mainDetails,
        selectedKey,
        "color",
        selectedColor
      );
      switch (colorChange) {
        case "clinicDetails":
          dispatch(setClinicDetails(updatedData));
          break;
        case "doctorDetails":
          dispatch(setDoctorDetails(updatedData));
          break;
        case "header":
          dispatch(setAddHeader(updatedData));
          break;
        case "main":
          dispatch(setAddMain(updatedData));
          break;
        default:
          break;
      }
    }
  }, [selectedColor]);

  useEffect(() => {
    if (selectedFont) {
      const updatedData = updateData(
        colorChange === "clinicDetails"
          ? clinicDetails
          : colorChange === "doctorDetails"
          ? doctorDetails
          : colorChange === "header"
          ? headerDetails
          : mainDetails,
        selectedKey,
        "font",
        selectedFont.value
      );
      switch (colorChange) {
        case "clinicDetails":
          dispatch(setClinicDetails(updatedData));
          break;
        case "doctorDetails":
          dispatch(setDoctorDetails(updatedData));
          break;
        case "header":
          dispatch(setAddHeader(updatedData));
          break;
        case "main":
          dispatch(setAddMain(updatedData));
          break;
        default:
          break;
      }
    }
  }, [selectedFont]);

  useEffect(() => {
    if (selectedweight) {
      const updatedData = updateData(
        colorChange === "clinicDetails"
          ? clinicDetails
          : colorChange === "doctorDetails"
          ? doctorDetails
          : colorChange === "header"
          ? headerDetails
          : mainDetails,
        selectedKey,
        "font_weight",
        selectedweight.value
      );
      switch (colorChange) {
        case "clinicDetails":
          dispatch(setClinicDetails(updatedData));
          break;
        case "doctorDetails":
          dispatch(setDoctorDetails(updatedData));
          break;
        case "header":
          dispatch(setAddHeader(updatedData));
          break;
        case "main":
          dispatch(setAddMain(updatedData));
          break;
        default:
          break;
      }
    }
  }, [selectedweight]);

  useEffect(() => {
    if (selectedsize) {
      const updatedData = updateData(
        colorChange === "clinicDetails"
          ? clinicDetails
          : colorChange === "doctorDetails"
          ? doctorDetails
          : colorChange === "header"
          ? headerDetails
          : mainDetails,
        selectedKey,
        "size",
        selectedsize.value
      );
      switch (colorChange) {
        case "clinicDetails":
          dispatch(setClinicDetails(updatedData));
          break;
        case "doctorDetails":
          dispatch(setDoctorDetails(updatedData));
          break;
        case "header":
          dispatch(setAddHeader(updatedData));
          break;
        case "main":
          dispatch(setAddMain(updatedData));
          break;
        default:
          break;
      }
    }
  }, [selectedsize]);

  const handleFileInputClick = () => {
    ImageInputRef.current.click();
  };

  const clinicLogoupdate = (item) => {
    return dispatch(setClinicLogo(item));
  };

  const modelHandel = () => {
    return setOpenModel(!openModel);
  };

  const styles = {
    width: "100%",
    padding: "8px 5px",
    borderRadius: "10px",
    border: "1px solid #d3d3d3",
    outline: "1px solid transparent",
    background: "rgba(218, 227, 255, 0.31)",
  };

  const option = [
    { label: "Cursive", value: "cursive" },
    { label: "Fantasy", value: "fantasy" },
    { label: "Monospace", value: "monospace" },
    { label: "Sansserif", value: "sans-serif" },
    { label: "Serif", value: "serif" },
  ];

  const styles1 = {
    width: "100%",
    padding: "8px 5px",
    borderRadius: "10px",
    border: "1px solid #d3d3d3",
    outline: "1px solid transparent",
    background: "rgba(218, 227, 255, 0.31)",
  };

  const option1 = [
    { label: "Thin", value: "100" },
    { label: "ExtraLight", value: "200" },
    { label: "Light", value: "300" },
    { label: "Normal", value: "400" },
    { label: "Medium", value: "500" },
    { label: "SemiBold", value: "600" },
    { label: "Bold", value: "700" },
    { label: "ExtraBold", value: "800" },
    { label: "Black", value: "900" },
  ];

  const styles2 = {
    width: "100%",
    padding: "8px 5px",
    borderRadius: "10px",
    border: "1px solid #d3d3d3",
    outline: "1px solid transparent",
    background: "rgba(218, 227, 255, 0.31)",
  };

  const option2 = Array.from({ length: 101 }, (v, i) => ({
    label: i.toString(),
    value: `${i.toString()}px`,
  }));

  useEffect(() => {
    const updateStyles = (details) => {
      const fill = details.find((item) => item.name === selectedKey);
      if (fill) {
        const { styles } = fill;
        const {
          font: selectedFontValue,
          font_weight: selectedWeightValue,
          size: selectedSizeValue,
          color,
        } = styles;

        setSelectedColor(color);
        setselectedFont(option.find((i) => i.value === selectedFontValue));
        setselectedWeight(option1.find((i) => i.value === selectedWeightValue));
        setselectedSize(
          option2.find((i) => i.value === (selectedSizeValue || "14px"))
        );
      }
    };

    if (selectedKey) {
      switch (colorChange) {
        case "clinicDetails":
          if (clinicDetails) updateStyles(clinicDetails);
          break;
        case "doctorDetails":
          if (doctorDetails) updateStyles(doctorDetails);
          break;
        case "header":
          if (headerDetails) updateStyles(headerDetails);
          break;
        case "main":
          if (mainDetails) updateStyles(mainDetails);
          break;
        default:
          break;
      }
    }
  }, [selectedKey]);

  const closePopup = () => {
    switch (colorChange) {
      case "clinicDetails":
        dispatch(setClinicDetails(oldData));
        break;
      case "doctorDetails":
        dispatch(setDoctorDetails(oldData));
        break;
      case "header":
        dispatch(setAddHeader(oldData));
        break;
      case "main":
        dispatch(setAddMain(oldData));
        break;
      default:
        break;
    }
  };

  const update = async () => {
    const getBodyData = (details) => ({
      clinicId: userDetails?._id,
      dynamicFields: [...details],
    });

    const updateField = async (bodyData) => {
      try {
        setLoader(true);
        setReFetch(true);
        const { success, message } = await ApiRequest.post(
          "/update_field",
          bodyData
        );
        if (success) {
          setReFetch(false);
          setLoader(false);
          setSelectedColor("");
          setselectedFont(null);
          setselectedWeight(null);
          setselectedSize(null);
          toast.success(message);
          setOpenModel(false);
          return;
        }
      } catch (error) {
        setReFetch(false);
        setLoader(false);
        toast.error(error.response.data.error);
        return;
      }
    };

    switch (colorChange) {
      case "clinicDetails":
        await updateField(getBodyData(clinicDetails));
        break;
      case "doctorDetails":
        await updateField(getBodyData(doctorDetails));
        break;
      case "header":
        await updateField(getBodyData(headerDetails));
        break;
      case "main":
        await updateField(getBodyData(mainDetails));
        break;
      default:
        break;
    }
  };

  return {
    handelImage: handleFileInputClick,
    ImageInputRef,
    clinicLogoupdate,
    setColorChange,
    colorChange,
    styles,
    option,
    styles1,
    option1,
    styles2,
    option2,
    colorOptions,
    selectedColor,
    setSelectedColor,
    modelHandel,
    openModel,
    setselectedKey,
    selectedFont,
    setselectedFont,
    selectedweight,
    setselectedWeight,
    selectedsize,
    setselectedSize,
    setUpdateValue,
    closePopup,
    update,
    loader,
    setImageUpload,
    imageLoader,
    setImageLoader
  };
};

export default rightSide;
