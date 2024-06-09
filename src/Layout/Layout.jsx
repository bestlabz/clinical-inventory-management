import React, { Suspense, useEffect, useState } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

// Internal imports
import Main from "./Main";
import routes from "../routes/index";
import ThemeSuspense from "../Components/theme/ThemeSuspense";
import Sidebar from "../Components/Properites/sidebar/Sidebar";

// const Page404 = React.lazy(() => import("../pages/Error/404"));

const Layout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const isOnline = navigator.onLine;

  useEffect(() => {
    setIsLoading(false);
  }, [location]);

  return (
    <>
      {!isOnline && (
        <div className="flex justify-center bg-gray-50 text-white">
          You are in offline mode!
        </div>
      )}
      <div className="flex h-screen overflow-auto">
        <div className="flex flex-col flex-1 w-full">
          {isLoading ? (
            <ThemeSuspense />
          ) : (
            <Main>
              <Suspense fallback={<ThemeSuspense />}>
                <Sidebar>
                  <Routes>
                    {routes.map((route, i) => (
                      route.component && (
                        <Route
                          key={i}
                          path={route.path}
                          element={<route.component />}
                        />
                      )
                    ))}
                    <Route path="/" element={<Navigate to="/dashboard" replace />} />
                    {/* <Route path="*" element={<Page404 />} /> */}
                  </Routes>
                </Sidebar>
              </Suspense>
            </Main>
          )}
        </div>
      </div>
    </>
  );
};

export default Layout;
