import { lazy } from "react";

// use lazy for better code splitting
const Dashboard = lazy(() => import("../pages/Dashboard/Dashboard"));
const Doctors = lazy(() => import("../pages/Doctors/Doctors"));
const AddDoctor = lazy(() => import("../pages/Doctors/AddDoctor"));
const AddReceptionist = lazy(() => import("../pages/Receptionist/AddReceptionist"));


const Receptionist = lazy(() => import("../pages/Receptionist/Receptionist"));
const Medicine = lazy(() => import("../pages/Medicine/Medicine"));
const AddMedicine = lazy(() => import("../pages/Medicine/AddMedicine"));





/*
//  * ⚠ These are internal routes!
//  * They will be rendered inside the app, using the default `containers/Layout`.
//  * If you want to add a route to, let's say, a landing page, you should add
//  * it to the `App`'s router, exactly like `Login`, `CreateAccount` and other pages
//  * are routed.
//  *
//  * If you're looking for the links rendered in the SidebarContent, go to
//  * `routes/sidebar.js`
 */

const routes = [
  {
    path: "/dashboard",
    component: Dashboard,
  },
  {
    path: "/doctors",
    component: Doctors,
  },
  {
    path: "/receptionist",
    component: Receptionist,
  },
  {
    path: "/medicine",
    component: Medicine,
  },
  {
    path: "/add-doctor",
    component: AddDoctor,
  },
  {
    path: "/add-recptionist",
    component: AddReceptionist,
  },
  {
    path: "/add-medicine",
    component: AddMedicine,
  }
];

export default routes;
