import { configureStore } from "@reduxjs/toolkit";

import User from "./Slice/User";
import Sidebar from "./Slice/Sidebar";
import OTP from "./Slice/Otp";
import Signup from "./Slice/SignupUser";

import TableDatas from "./Slice/TableDatas";

import PrescriptionDetails from "./Slice/Prescription"; // Add this import statement
import Pagination from "./Slice/Pagination";
import DetailsPage from "./Slice/DetailsPage";


const store = configureStore({
  reducer: {
    userinfo: User,
    sidebarInfo: Sidebar,
    otpValue: OTP,
    Signup: Signup,
    TableDatas,
    PrescriptionDetails,
    Pagination,
    DetailsPage
  },
});

export default store;
