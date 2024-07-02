import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addHeader,
  addMain,
  setClinicDetails,
  setClinicLogo,
  setDoctorDetails,
  setUpdateClinicValues,
  setUpdateDoctorValues,
  updateAllHeader,
  updateAllMain,
  updateHeader,
  updateMain,
} from "../../Redux/Slice/Prescription";

const rightSide = () => {
  const ImageInputRef = useRef(null);
  const disatch = useDispatch();
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

  const [updates, setUpdates] = useState(null);
  const [selectedKey, setselectedKey] = useState("");
  const [selectedFont, setselectedFont] = useState(null);
  const [selectedweight, setselectedWeight] = useState(null);
  const [selectedsize, setselectedSize] = useState(null);
  const [change, setchange] = useState(null);
  const [change1, setchange1] = useState(null);
  const [change2, setchange2] = useState(null);

  const { clinicDetails, doctorDetails, headerDetails, mainDetails } =
    useSelector((state) => state.PrescriptionDetails);

  useEffect(() => {
    if (colorChange) {
      if (colorChange === "clinicDetails") {
        setselectedKey(Object.keys(clinicDetails)[0]);
        return setUpdates(clinicDetails);
      }
      if (colorChange === "doctorDetails") {
        setselectedKey(Object.keys(doctorDetails)[0]);
        return setUpdates(doctorDetails);
      }
      if (colorChange === "headerDetails") {
        setselectedKey(Object.keys(headerDetails)[0]);
        return setUpdates([...headerDetails]);
      }
      if (colorChange === "mainDetails") {
        setselectedKey(Object.keys(mainDetails)[0]);
        return setUpdates([...mainDetails]);
      }
    }
  }, [colorChange]);

  useEffect(() => {
    if (selectedColor !== "") {
      if (colorChange === "clinicDetails") {
        setUpdates((pre) => ({
          ...pre,
          [selectedKey]: {
            ...pre[selectedKey],
            color: selectedColor,
          },
        }));
      }
      if (colorChange === "doctorDetails") {
        setUpdates((pre) => ({
          ...pre,
          [selectedKey]: {
            ...pre[selectedKey],
            color: selectedColor,
          },
        }));
      }
      if (colorChange === "headerDetails") {
        // Ensure selectedKey is within bounds
        if (selectedKey >= 0 && selectedKey < updates.length) {
          // Create a new updates array with the updated item
          const newUpdates = updates.map((item, index) =>
            index === Number(selectedKey)
              ? { ...item, color: selectedColor }
              : item
          );
          // Update the state with the new array
          return setUpdates(newUpdates);
        } else {
          console.error("selectedKey is out of bounds");
        }
      }
      if (colorChange === "mainDetails") {
        if (selectedKey >= 0 && selectedKey < updates.length) {
          // Create a new updates array with the updated item
          const newUpdates = updates.map((item, index) =>
            index === Number(selectedKey)
              ? { ...item, color: selectedColor }
              : item
          );
          // Update the state with the new array
          return setUpdates(newUpdates);
        } else {
          console.error("selectedKey is out of bounds");
        }
      }
    }
  }, [selectedColor]);

  useEffect(() => {
    if (selectedFont && change) {
      if (colorChange === "clinicDetails" && change) {
        setUpdates((pre) => ({
          ...pre,
          [selectedKey]: {
            ...pre[selectedKey],
            font: selectedFont.value,
          },
        }));
        return setchange(null);
      }
      if (colorChange === "doctorDetails" && change) {
        setUpdates((pre) => ({
          ...pre,
          [selectedKey]: {
            ...pre[selectedKey],
            font: selectedFont.value,
          },
        }));
        returnsetchange(null);
      }
      if (colorChange === "headerDetails") {
        // Ensure selectedKey is within bounds
        if (selectedKey >= 0 && selectedKey < updates.length) {
          // Create a new updates array with the updated item
          const newUpdates = updates.map((item, index) =>
            index === Number(selectedKey)
              ? { ...item, font: selectedFont.value }
              : item
          );
          // Update the state with the new array
          return setUpdates(newUpdates);
        } else {
          console.error("selectedKey is out of bounds");
        }
      }
      if (colorChange === "mainDetails") {
        if (selectedKey >= 0 && selectedKey < updates.length) {
          // Create a new updates array with the updated item
          const newUpdates = updates.map((item, index) =>
            index === Number(selectedKey)
              ? { ...item, font: selectedFont.value }
              : item
          );
          // Update the state with the new array
          return setUpdates(newUpdates);
        } else {
          console.error("selectedKey is out of bounds");
        }
      }
    }
  }, [selectedFont, change]);

  useEffect(() => {
    if (selectedweight && change1) {
      if (colorChange === "clinicDetails" && change1) {
        setUpdates((pre) => ({
          ...pre,
          [selectedKey]: {
            ...pre[selectedKey],
            weight: selectedweight.value,
          },
        }));
        return setchange1(null);
      }
      if (colorChange === "doctorDetails" && change1) {
        setUpdates((pre) => ({
          ...pre,
          [selectedKey]: {
            ...pre[selectedKey],
            weight: selectedweight.value,
          },
        }));
        return setchange1(null);
      }
      if (colorChange === "headerDetails") {
        // Ensure selectedKey is within bounds
        if (selectedKey >= 0 && selectedKey < updates.length) {
          // Create a new updates array with the updated item
          const newUpdates = updates.map((item, index) =>
            index === Number(selectedKey)
              ? { ...item, weight: selectedweight.value }
              : item
          );
          // Update the state with the new array
          return setUpdates(newUpdates);
        } else {
          console.error("selectedKey is out of bounds");
        }
      }
      if (colorChange === "mainDetails") {
        if (selectedKey >= 0 && selectedKey < updates.length) {
          // Create a new updates array with the updated item
          const newUpdates = updates.map((item, index) =>
            index === Number(selectedKey)
              ? { ...item, weight: selectedweight.value }
              : item
          );
          // Update the state with the new array
          return setUpdates(newUpdates);
        } else {
          console.error("selectedKey is out of bounds");
        }
      }
    }
  }, [selectedweight, change1]);

  useEffect(() => {
    if (selectedsize && change2) {
      if (colorChange === "clinicDetails" && change2) {
        setUpdates((pre) => ({
          ...pre,
          [selectedKey]: {
            ...pre[selectedKey],
            size: selectedsize.value,
          },
        }));
        return setchange2(null);
      }
      if (colorChange === "doctorDetails" && change2) {
        setUpdates((pre) => ({
          ...pre,
          [selectedKey]: {
            ...pre[selectedKey],
            size: selectedsize.value,
          },
        }));
        return setchange2(null);
      }
      if (colorChange === "headerDetails") {
        // Ensure selectedKey is within bounds
        if (selectedKey >= 0 && selectedKey < updates.length) {
          // Create a new updates array with the updated item
          const newUpdates = updates.map((item, index) =>
            index === Number(selectedKey)
              ? { ...item, size: selectedsize.value }
              : item
          );
          // Update the state with the new array
          return setUpdates(newUpdates);
        } else {
          console.error("selectedKey is out of bounds");
        }
      }
      if (colorChange === "mainDetails") {
        if (selectedKey >= 0 && selectedKey < updates.length) {
          // Create a new updates array with the updated item
          const newUpdates = updates.map((item, index) =>
            index === Number(selectedKey)
              ? { ...item, size: selectedsize.value }
              : item
          );
          // Update the state with the new array
          return setUpdates(newUpdates);
        } else {
          console.error("selectedKey is out of bounds");
        }
      }
    }
  }, [selectedsize, change2]);

  const handleFileInputClick = () => {
    ImageInputRef.current.click();
  };

  const clinicLogoupdate = (item) => {
    return disatch(setClinicLogo(item));
  };

  const clinicalDetailsUpdate = (item) => {
    disatch(setUpdateClinicValues({ selectedKey, item }));
    return;
  };

  const doctorDetailsUpdate = (item) => {
    disatch(setUpdateDoctorValues({ selectedKey, item }));
    return;
  };

  const headerUpdate = (index, title) => {
    return disatch(updateHeader({ index, title }));
  };

  const headerAdd = (item) => {
    return disatch(addHeader(item));
  };

  const mainUpdate = (index, title) => {
    return disatch(updateMain({ index, title }));
  };

  const mainAdd = (item) => {
    return disatch(addMain(item));
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

  const updateInputStyles = (items) => {
    if (colorChange === "headerDetails") {
      // Ensure selectedKey is within bounds
      if (selectedKey >= 0 && selectedKey < updates.length) {
        // Create a new updates array with the updated item
        const newUpdates = updates.map((item, index) =>
          index === Number(selectedKey) ? { ...item, title: items } : item
        );
        console.log("newUpdates", newUpdates);
        // Update the state with the new array
        return setUpdates(newUpdates);
      } else {
        console.error("selectedKey is out of bounds");
      }
    }

    if (colorChange === "mainDetails") {
      // Ensure selectedKey is within bounds
      if (selectedKey >= 0 && selectedKey < updates.length) {
        // Create a new updates array with the updated item
        const newUpdates = updates.map((item, index) =>
          index === Number(selectedKey) ? { ...item, title: items } : item
        );
        // Update the state with the new array
        return setUpdates(newUpdates);
      } else {
        console.error("selectedKey is out of bounds");
      }
    }

    setUpdates((pre) => ({
      ...pre,
      [selectedKey]: {
        ...pre[selectedKey],
        ...items,
      },
    }));
  };

  const updateState = () => {
    if (colorChange === "clinicDetails") {
      disatch(setClinicDetails(updates));
      setOpenModel(false);
      setselectedKey("");
      setColorChange("");
      return;
    }
    if (colorChange === "doctorDetails") {
      disatch(setDoctorDetails(updates));
      setOpenModel(false);
      setselectedKey("");
      setColorChange("");
      return;
    }
    if (colorChange === "headerDetails") {
      disatch(updateAllHeader(updates));
      setOpenModel(false);
      setselectedKey("");
      setColorChange("");
      return;
    }
    if (colorChange === "mainDetails") {
      disatch(updateAllMain(updates));
      setOpenModel(false);
      setselectedKey("");
      setColorChange("");
      return;
    }
  };

  useEffect(() => {
    if (updates && selectedKey) {
      const fill = updates[selectedKey];
      const filterFont = option.filter((i) => i?.value === fill?.font);
      const filterWeight = option1.filter((i) => i?.value === fill?.weight);
      const filterSize = option2.filter((i) => i?.value === fill?.size);

      setselectedFont(filterFont);
      setselectedWeight(filterWeight);
      setselectedSize(filterSize);
    }
  }, [selectedKey]);

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
    updateInputStyles,
    updates,
    setselectedKey,
    selectedFont,
    setselectedFont,
    selectedweight,
    setselectedWeight,
    selectedsize,
    setselectedSize,
    updateState,
    setchange,
    setchange1,
    setchange2,
  };
};

export default rightSide;
