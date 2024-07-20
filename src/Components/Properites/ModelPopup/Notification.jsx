import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { setVisible } from "../../../Redux/Slice/Notification";

const ModelPopup = ({ children, showDrawer, width = "30%" }) => {
  const dispatch = useDispatch();
  const { Notifiacation } = useSelector((state) => state.notification);

  // useEffect(() => {
  //   const handleClickOutside = () => {
  //     if (Notifiacation) {
  //       return dispatch(setVisible());
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [Notifiacation]);

  //   const openModal = () => {
  //     dispatch(setVisible())
  // }

  return (
    <dialog
      className={`
    w-full h-screen 
    overflow-y-auto
    fixed inset-0 
    z-40
    ${showDrawer ? "flex" : "hidden"} 
    items-center justify-end
    bg-opacity-50
    bg-black
    `}
    >
      <div
        style={{ width: width }}
        className={`bg-white h-full relative transition-transform duration-500 delay-1000 ease-in-out transform py-2 ${
          showDrawer ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {children}
      </div>
    </dialog>
  );
};

export default ModelPopup;
