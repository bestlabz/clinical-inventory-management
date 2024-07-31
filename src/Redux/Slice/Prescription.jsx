import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  clinicLogo: {
    logo: "",
  },
  clinicDetails: [],
  doctorDetails: [],
  headerDetails: [],
  mainDetails: [],

  feildUpdated: false,
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
    setDoctorDetails: (state, action) => {
      state.doctorDetails = action.payload;
    },
    setAddHeader: (state, action) => { 
      state.headerDetails = action.payload
    },
    setAddMain: (state, action) => {
      state.mainDetails = action.payload
    },

    setUpdateFeild: (state, action) => {
      state.feildUpdated = action.payload;
    },
    clearTemplate: (state, action) => {
      state.clinicLogo = { logo: "" };
      state.clinicDetails = [];
      state.doctorDetails = [];
      state.headerDetails = [];
      state.mainDetails = [];
      state.feildUpdated = false;

    }
      // add more reducers for other details like patient details, medication details, etc. if required.  // add more reducers for other details like patient details, medication details, etc. if required.  // add more reducers for other details like patient details, medication details, etc. if required.  // add more reducers for other details
   
  },
});

// Export actions and reducer
export const {
  setClinicLogo,
  setClinicDetails,
  setDoctorDetails,
  setAddHeader,
  setAddMain,
  setUpdateFeild,
  clearTemplate
} = prescriptionSlice.actions;

export default prescriptionSlice.reducer;
