import React, { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

// Page routes
import Login from "./pages/Authentication/Login";
import SignUp from "./pages/Authentication/Signup";
import ThemeSuspense from "./Components/theme/ThemeSuspense";

// Lazy load Layout component
const Layout = React.lazy(() => import("./Layout/Layout"));

const App = () => {
  return (
    <div className="w-screen h-screen">
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Pruvate Route */}
          <Route path="/" element={<PrivateRoute />}>
            <Route path="*" element={
              <Suspense fallback={<ThemeSuspense />}>
                <Layout />
              </Suspense>
            } />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
