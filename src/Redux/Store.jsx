import { configureStore } from "@reduxjs/toolkit";

import User from "./Slice/User";
import Sidebar from "./Slice/Sidebar";
import OTP from "./Slice/Otp";
import Signup from "./Slice/SignupUser";

import TableDatas from "./Slice/TableDatas";

import PrescriptionDetails from "./Slice/Prescription"; // Add this import statement
import Pagination from "./Slice/Pagination";
import DetailsPage from "./Slice/DetailsPage";
import Dosage from "./Slice/Dosage";
import Notification from "./Slice/Notification";
import Template from "./Slice/SMSTemplate";
import SubscriptionCard from './Slice/Subscription'




const store = configureStore({
  reducer: {
    userinfo: User,
    sidebarInfo: Sidebar,
    otpValue: OTP,
    Signup: Signup,
    TableDatas,
    PrescriptionDetails,
    Pagination,
    DetailsPage,
    dosage: Dosage,
    notification: Notification,
    template:  Template,
    subscription: SubscriptionCard
  },
});

export default store;
