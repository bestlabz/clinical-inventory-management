import { configureStore } from "@reduxjs/toolkit";

import User from "./Slice/User";
import Sidebar from "./Slice/Sidebar";

const store = configureStore({
  reducer: {
    userinfo: User,
    sidebarInfo: Sidebar,
  },
});

export default store;
