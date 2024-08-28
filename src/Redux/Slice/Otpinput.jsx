//Third party npm
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  otpValue: null,
  Err: false,
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
  },
});

// Export actions and reducer
export const { setOTP, clearOTP, setErr } = userSlice.actions;
export default userSlice.reducer;
