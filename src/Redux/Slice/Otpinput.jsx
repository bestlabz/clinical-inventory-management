//Third party npm
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  otpValue: null,
  Err: false,
  doctor: null,
  receptionist: null
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
    },
    setErr: (state, action) => {
      state.Err = action.payload;
    },
    setDoctorDetails: (state, action) => {
      state.doctor = action.payload;
    },
    setReceptionistDetails: (state, action) => {
      state.receptionist = action.payload;
    },
  },
});

// Export actions and reducer
export const { setOTP, clearOTP, setErr, setDoctorDetails,  setReceptionistDetails } = userSlice.actions;
export default userSlice.reducer;
