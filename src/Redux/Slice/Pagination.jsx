import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  patientscurrentPage: 1,
  patientstotalCount: null,
  doctorscurrentPage: 1,
  doctorstotalCount: null,
  receptionistcurrentPage: 1,
  receptionisttotalCount: null,
  medicinescurrentPage: 1,
  medicinestotalCount: null,
};

export const paginationSlice = createSlice({
  name: "paginationValues",
  initialState,
  reducers: {
    //patients
    setPatientsNextPage: (state) => {
      state.patientscurrentPage += 1;
    },
    setPatientsPrePage: (state) => {
      if (state.patientscurrentPage !== 1) {
        state.patientscurrentPage = state.patientscurrentPage - 1;
      }
    },
    setPatientsCurrentPage: (state, action) => {
      state.patientscurrentPage = action.payload;
    },
    setPatientsTotalCount: (state, action) => {
      state.patientstotalCount = action.payload;
    },

    //Doctors
    setDoctorsNextPage: (state) => {
      state.doctorscurrentPage += 1;
    },
    setDoctorsPrePage: (state) => {
      if (state.currentPage !== 1) {
        state.doctorscurrentPage = state.doctorscurrentPage - 1;
      }
    },
    setDoctorsCurrentPage: (state, action) => {
      state.doctorscurrentPage = action.payload;
    },
    setDoctorsTotalCount: (state, action) => {
      state.doctorstotalCount = action.payload;
    },

    //Receptionists
    setReceptionistsNextPage: (state) => {
      state.receptionistcurrentPage += 1;
    },
    setReceptionistsPrePage: (state) => {
      if (state.receptionistcurrentPage !== 1) {
        state.receptionistcurrentPage = state.receptionistcurrentPage - 1;
      }
    },
    setReceptionistsCurrentPage: (state, action) => {
      state.receptionistcurrentPage = action.payload;
    },
    setReceptionistsTotalCount: (state, action) => {
      state.receptionisttotalCount = action.payload;
    },

    //Medicines
    setMedicineNextPage: (state) => {
      state.medicinescurrentPage += 1;
    },
    setMedicinePrePage: (state) => {
      if (state.medicinescurrentPage !== 1) {
        state.medicinescurrentPage = state.medicinescurrentPage - 1;
      }
    },
    setMedicineCurrentPage: (state, action) => {
      state.medicinescurrentPage = action.payload;
    },
    setMedicineTotalCount: (state, action) => {
      state.medicinestotalCount = action.payload;
    },
  },
});

// Export actions and reducer
export const {
  setPatientsNextPage,
  setPatientsPrePage,
  setPatientsCurrentPage,
  setPatientsTotalCount,
  setDoctorsNextPage,
  setDoctorsPrePage,
  setDoctorsCurrentPage,
  setDoctorsTotalCount,
  setReceptionistsNextPage,
  setReceptionistsPrePage,
  setReceptionistsCurrentPage,
  setReceptionistsTotalCount,
  setMedicineNextPage,
  setMedicinePrePage,
  setMedicineCurrentPage,
  setMedicineTotalCount,
} = paginationSlice.actions;
export default paginationSlice.reducer;
