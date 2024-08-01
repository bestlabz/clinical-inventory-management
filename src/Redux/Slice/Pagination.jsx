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
  dosageFormcurrentPage: 1,
  dosageFormtotalCount: null,
  dosageUnitcurrentPage: 1,
  dosageUnittotalCount: null,

  limitCount: [
    {label: 10, value: 10},
    {label: 25, value: 25},
    {label: 50, value: 50},

  ]
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

    //DosageForm
    setDosageFormNextPage: (state) => {
      state.dosageFormcurrentPage += 1;
    },
    setDosageFormPrePage: (state) => {
      if (state.dosageFormcurrentPage !== 1) {
        state.dosageFormcurrentPage = state.dosageFormcurrentPage - 1;
      }
    },
    setDosageFormCurrentPage: (state, action) => {
      state.dosageFormcurrentPage = action.payload;
    },
    setDosageFormTotalCount: (state, action) => {
      state.dosageFormtotalCount = action.payload;
    },

    //DosageUnit
    setDosageUnitNextPage: (state) => {
      state.dosageUnitcurrentPage += 1;
    },
    setDosageUnitPrePage: (state) => {
      if (state.dosageUnitcurrentPage !== 1) {
        state.dosageUnitcurrentPage = state.dosageUnitcurrentPage - 1;
      }
    },
    setDosageUnitCurrentPage: (state, action) => {
      state.dosageUnitcurrentPage = action.payload;
    },
    setDosageUnitTotalCount: (state, action) => {
      state.dosageUnittotalCount = action.payload;
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
  setDosageFormNextPage,
  setDosageFormPrePage,
  setDosageFormCurrentPage,
  setDosageFormTotalCount,
  setDosageUnitPrePage,
  setDosageUnitCurrentPage,
  setDosageUnitTotalCount,
  setDosageUnitNextPage
} = paginationSlice.actions;
export default paginationSlice.reducer;
