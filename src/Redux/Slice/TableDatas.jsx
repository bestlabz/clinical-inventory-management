import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  doctorTable: [],
  patientsTable: [],
  receptionistTable: [],
  medicineTable: [],
};

export const userSlice = createSlice({
  name: "tableValues",
  initialState,
  reducers: {
    setDoctorTable: (state, action) => {
      state.doctorTable = action.payload;
    },
    setPatientsTable: (state, action) => {
      state.patientsTable = action.payload;
    },
    setReceptionistTable: (state, action) => {
      state.receptionistTable = action.payload;
    },
    setMedicineTable: (state, action) => {
      state.medicineTable = action.payload;
    },
  },
});

// Export actions and reducer
export const {
  setDoctorTable,
  setPatientsTable,
  setReceptionistTable,
  setMedicineTable,
} = userSlice.actions;
export default userSlice.reducer;
