import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  clinicLogo: {
    logo: "",
    title: "",
  },
  clinicDetails: {
    name: {
      value: "ABC Hospital",
      color: "#000",
      size: "18px",
      font: "sans-serif",
      weight: "100"
    },
    contact_number: {
      value: "12345 12345",
      color: "#8A8A8A",
      size: "14px",
      font: "sans-serif",
      weight: "100"
    },
    address: {
      value: "ABC Hospital, 123 Main Street, New York, NY, 10001",
      color: "#8A8A8A",
      size: "14px",
      font: "sans-serif",
      weight: "100"
    },
    gst_no: {
      value: "123456789012",
      color: "#8A8A8A",
      size: "14px",
      font: "sans-serif",
      weight: "100"
    },
  },
  doctorDetails: {
    doctor_name: {
      value: "Dr. ABC Deer",
      color: "#000000",
      size: "18px",
      font: "sans-serif",
      weight: "100"
    },
    speciality: {
      value: "Neurology",
      color: "#000000",
      size: "18px",
      font: "sans-serif",
      weight: "100"
    },
    degree: {
      value: "MBBS",
      color: "#8A8A8A",
      size: "14px",
      font: "sans-serif",
      weight: "100"
    },
    work: {
      value: "ABC Hospital, 123 Main Street, New York, NY, 10001",
      color: "#8A8A8A",
      size: "14px",
      font: "sans-serif",
      weight: "100"
    },
  },
  headerDetails: [
    { title: "one", color: "#000", size: "14px", font: "sans-serif", weight: "100" },
    { title: "two", color: "#000", size: "14px", font: "sans-serif", weight: "100" },
    { title: "three", color: "#000", size: "14px", font: "sans-serif", weight: "100" },
    { title: "four", color: "#000", size: "14px", font: "sans-serif", weight: "100" },
  ],
  mainDetails: [{ title: "", color: "#000", size: "18px", font: "sans-serif", weight: "100" }],
};

export const prescriptionSlice = createSlice({
  name: "prescriptionValues",
  initialState,
  reducers: {
    setClinicLogo: (state, action) => {
      state.clinicLogo = action.payload;
    },
    setClinicDetails: (state, action) => {
      state.clinicDetails = action.payload;
    },
    setUpdateClinicValues: (state, action) => {
      const { selectedKey, item } = action.payload;
      state.clinicDetails[selectedKey] = { ...state.clinicDetails[selectedKey], ...item };
    },
    setDoctorDetails: (state, action) => {
      state.doctorDetails = action.payload;
    },
    setUpdateDoctorValues: (state, action) => {
      const { selectedKey, item } = action.payload;
      state.doctorDetails[selectedKey] = { ...state.doctorDetails[selectedKey], ...item };
    },
    addHeader: (state) => {
      state.headerDetails.push({ title: "", color: "#000", size: "14px", font: "sans-serif", weight: "100" });
    },
    updateHeader: (state, action) => {
      const { index, title } = action.payload;
      if (index >= 0 && index < state.headerDetails.length) {
        state.headerDetails[index] = { ...state.headerDetails[index], ...title };
      }
    },
    updateAllHeader: (state, action) => { 
      state.headerDetails = action.payload

    },
    addMain: (state) => {
      state.mainDetails.push({ title: "", color: "#000", size: "18px", font: "sans-serif", weight: "100" });
    },
    updateMain: (state, action) => {
      const { index, title } = action.payload;
      if (index >= 0 && index < state.mainDetails.length) {
        state.mainDetails[index] = { ...state.mainDetails[index], ...title };
      }
    },
    updateAllMain: (state, action) => { 
      state.mainDetails = action.payload

    },
  },
});

// Export actions and reducer
export const {
  setClinicLogo,
  setClinicDetails,
  setUpdateClinicValues,
  setDoctorDetails,
  setUpdateDoctorValues,
  addHeader,
  updateHeader,
  addMain,
  updateMain,
  updateAllMain,
  updateAllHeader
} = prescriptionSlice.actions;

export default prescriptionSlice.reducer;
