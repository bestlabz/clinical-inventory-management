import React from "react";

const ModelPopup = ({ children, showDrawer, width="30%", height="40%" }) => {
  return (
    <dialog
      className={`
    w-full h-screen 
    overflow-y-auto
    fixed inset-0 
    z-40
    ${showDrawer ? "flex" : "hidden"} 
    items-center justify-center
    bg-opacity-50
    bg-black
    `}
    >
      <div
      style={{ width: width,  height: height}}
        className={`bg-white relative transition-transform duration-500 delay-1000 ease-in-out transform rounded-xl py-2 ${
          showDrawer ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {children}
      </div>
    </dialog>
  );
};

export default ModelPopup;
