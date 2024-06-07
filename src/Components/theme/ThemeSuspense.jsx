import React from "react";
import ClipLoader  from "react-spinners/ClipLoader";

const ThemeSuspense = () => {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center p-6 text-lg font-medium text-gray-600 dark:text-gray-400 dark:bg-gray-900">
        <ClipLoader  color="#264653" size={50} />
    </div>
  );
};

export default ThemeSuspense;
