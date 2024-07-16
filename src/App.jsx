import React, { Suspense, useCallback, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

// Page routes
import Login from "./pages/Authentication/Login";
import SignUp from "./pages/Authentication/Signup";
import ThemeSuspense from "./Components/theme/ThemeSuspense";

// Lazy load Layout component
const Layout = React.lazy(() => import("./Layout/Layout"));

const App = () => {
  const location = window.location.pathname;

  const fetchClinicData = useCallback(() => {
    if (location === "/") {
      const token = localStorage.getItem("token");
      if (token) {
        return (window.location.pathname = "/dashboard");
      } else {
        return (window.location.pathname = "/login");
      }
    }
  }, [location]);

  useEffect(() => {
    fetchClinicData();
  }, [fetchClinicData]);

  return (
    <div className="w-screen h-screen">
      <Toaster position="top-right" reverseOrder={false} />
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Pruvate Route */}
          <Route path="/" element={<PrivateRoute />}>
            <Route
              path="*"
              element={
                <Suspense fallback={<ThemeSuspense />}>
                  <Layout />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
