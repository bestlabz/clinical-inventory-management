import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  clinicLogo: {
    logo: "",
    title: "",
  },
  clinicDetails: {
    name: "ABC Hospital",
    contact_number: "12345 12345",
    address: "2118 Eadbury Ave Rowland Heights, California(CA), 91748",
    gst_no: "12345 12345",
  },
  doctorDetails: {
    doctor_name: "George",
    speciality: "Neuro",
    degree: "MBBS",
    work: "Consultant Neurologist and Epileptologist ",
  },
  headerDetails: [{ title: "" }, { title: "" }, { title: "" }, { title: "" }],
  mainDetails: [{ title: "" }],
};

export const prescriptionSlice = createSlice({
  name: "prescriptionValues",
  initialState,
  reducers: {
    setClinicLogo: (state, action) => {
      const { logo, title } = action.payload;
      if (logo !== undefined) state.clinicLogo.logo = logo;
      if (title !== undefined) state.clinicLogo.title = title;
    },
    setClinicDetails: (state, action) => {
      const { name, contact_number, address, gst_no } = action.payload;
      if (name !== undefined) state.clinicDetails.name = name;
      if (contact_number !== undefined)
        state.clinicDetails.contact_number = contact_number;
      if (address !== undefined) state.clinicDetails.address = address;
      if (gst_no !== undefined) state.clinicDetails.gst_no = gst_no;
    },
    setDoctorDetails: (state, action) => {
      const { doctor_name, speciality, degree, work } = action.payload;
      if (doctor_name !== undefined)
        state.doctorDetails.doctor_name = doctor_name;
      if (speciality !== undefined) state.doctorDetails.speciality = speciality;
      if (degree !== undefined) state.doctorDetails.degree = degree;
      if (work !== undefined) state.doctorDetails.work = work;
    },
    addHeader: (state) => {
      state.headerDetails.push({ title: "" });
    },
    updateHeader: (state, action) => {
      const { index, value } = action.payload;
      if (index >= 0 && index < state.headerDetails.length) {
        state.headerDetails[index].title = value;
      }
    },
    addMain: (state) => {
      state.mainDetails.push({ title: "" });
    },
    updateMain: (state, action) => {
      const { index, value } = action.payload;
      if (index >= 0 && index < state.mainDetails.length) {
        state.mainDetails[index].title = value;
      }
    },
  },
});

// Export actions and reducer
export const {
  setClinicLogo,
  setClinicDetails,
  setDoctorDetails,
  addHeader,
  updateHeader,
  addMain,
  updateMain,
} = prescriptionSlice.actions;

export default prescriptionSlice.reducer;
