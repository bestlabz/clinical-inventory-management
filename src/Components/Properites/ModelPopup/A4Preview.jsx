import React from "react";
import { IoMdClose } from "react-icons/io";

const ModelPopup = ({
  children,
  showDrawer,
  width = "30%",
  height = "40%",
  closePopup,
}) => {
  return (
    <dialog
      className={`
    w-full h-screen 
    overflow-y-auto
    fixed inset-0  
    z-40
    ${showDrawer ? "2xl:flex xl:flex lg:flex md:flex sm:flex xs:hidden mobile:hidden xss:hidden" : "hidden"} 
    items-center justify-center
    bg-opacity-50
    bg-black
    p-8
    2xl:pt-[10%] xl:pt-[10%] lg:pt-[25%] md:pt-[40%] sm:pt-[40%]
    `}
    >
      <div
        style={{ width: width, height: height }}
        className={` mt-[8%]  bg-white  relative transition-transform duration-500 delay-1000 ease-in-out transform rounded-xl py-2 ${
          showDrawer ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={() => closePopup(false)}
          className="absolute top-[0%] -right-[10%] bg-red-400 w-[30px] h-[30px] rounded-md flex items-center justify-center text-white hover:bg-red-500 transition-all duration-300"
        >
          <IoMdClose size={20} />
        </button>
        {children}
      </div>
    </dialog>
  );
};

export default ModelPopup;
