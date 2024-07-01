import { configureStore } from "@reduxjs/toolkit";

import User from "./Slice/User";
import Sidebar from "./Slice/Sidebar";
import OTP from "./Slice/Otp";
import Signup from "./Slice/SignupUser";

import TableDatas from "./Slice/TableDatas";

import PrescriptionDetails from "./Slice/Prescription"; // Add this import statement

const store = configureStore({
  reducer: {
    userinfo: User,
    sidebarInfo: Sidebar,
    otpValue: OTP,
    Signup: Signup,
    TableDatas,
    PrescriptionDetails
  },
});

export default store;
