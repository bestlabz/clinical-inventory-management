import { configureStore } from "@reduxjs/toolkit";

import User from "./Slice/User";
import Sidebar from "./Slice/Sidebar";
import OTP from "./Slice/Otp";
import Signup from "./Slice/SignupUser";

import TableDatas from "./Slice/TableDatas";

const store = configureStore({
  reducer: {
    userinfo: User,
    sidebarInfo: Sidebar,
    otpValue: OTP,
    Signup: Signup,
    TableDatas,
  },
});

export default store;
