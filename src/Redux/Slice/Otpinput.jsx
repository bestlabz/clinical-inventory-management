//redux

//Third party npm
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  otpValue: null,
  Err: false,
  doctorDetails: null,
  receptionistDetails: null,
};

export const userSlice = createSlice({
  name: "otpValues",
  initialState,
  reducers: {
    setOTP: (state, action) => {
      state.otpValue = action.payload;
    },
    clearOTP: (state) => {
      state.otpValue = null;
      state.doctorDetails = null;
      state.receptionistDetails = null;
    },
    setErr: (state, action) => {
      state.Err = action.payload;
    },
    setDoctorDetails: (state, action) => {
      state.doctorDetails = action.payload;
    },
    setReceptionistDetails: (state, action) => {
      state.receptionistDetails = action.payload;
    },
  },
});

// Export actions and reducer
export const {
  setOTP,
  clearOTP,
  setErr,
  setDoctorDetails,
  setReceptionistDetails,
} = userSlice.actions;
export default userSlice.reducer;
