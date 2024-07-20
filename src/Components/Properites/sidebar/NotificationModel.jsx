import React from "react";
import ModelPopup from "../ModelPopup/Notification";
import { IoClose } from "react-icons/io5";

//Translate
import TranslateJson from "../../../utils/translation/en.json"
import { useDispatch } from "react-redux";
import { setVisible } from "../../../Redux/Slice/Notification";

const LogOutModalResponsive = ({ modalpopup }) => {
    const dispatch = useDispatch()

    const openModal = () => {
        dispatch(setVisible())
    }


  return (
    <>
      <div className=" 2xl:block xl:hidden lg:hidden md:hidden sm:hidden xs:hidden mobile:hidden xss:hidden">
        <ModelPopup showDrawer={modalpopup} width="20%" >
          <div className="w-full h-full">
            <div className="absolute top-1 left-1 h-[40px] w-[98%] flex items-center space-x-4">
              <IoClose
                onClick={openModal}
                size={20}
                className="font-bold cursor-pointer hover:text-red-500 transition-all duration-300"
              />{" "}
              <p className=" text-[18px] font-semibold">Notification</p>
            </div>
          </div>
        </ModelPopup>
      </div>

      <div className=" 2xl:hidden xl:block lg:hidden md:hidden sm:hidden xs:hidden mobile:hidden xss:hidden">
        <ModelPopup showDrawer={modalpopup} width="20%" >
        <div className="w-full h-full">
            <div className="absolute top-2 left-3">
              <IoClose
                onClick={openModal}
                size={20}
                className="font-bold cursor-pointer hover:text-red-500 transition-all duration-300"
              />{" "}
            </div>
          </div>
        </ModelPopup>
      </div>

      <div className=" 2xl:hidden xl:hidden lg:block md:hidden sm:hidden xs:hidden mobile:hidden xss:hidden">
        <ModelPopup showDrawer={modalpopup} width="25%">
        <div className="w-full h-full">
            <div className="absolute top-2 left-3">
              <IoClose
                onClick={openModal}
                size={20}
                className="font-bold cursor-pointer hover:text-red-500 transition-all duration-300"
              />{" "}
            </div>
          </div>
        </ModelPopup>
      </div>

      <div className=" 2xl:hidden xl:hidden lg:hidden md:block sm:block xs:hidden mobile:hidden xss:hidden">
        <ModelPopup showDrawer={modalpopup} width="35%">
        <div className="w-full h-full">
            <div className="absolute top-2 left-3">
              <IoClose
                onClick={openModal}
                size={20}
                className="font-bold cursor-pointer hover:text-red-500 transition-all duration-300"
              />{" "}
            </div>
          </div>
        </ModelPopup>
      </div>

      <div className=" 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden xs:block mobile:block xss:hidden">
        <ModelPopup showDrawer={modalpopup} width="55%">
        <div className="w-full h-full">
            <div className="absolute top-2 left-3">
              <IoClose
                onClick={openModal}
                size={20}
                className="font-bold cursor-pointer hover:text-red-500 transition-all duration-300"
              />{" "}
            </div>
          </div>
        </ModelPopup>
      </div>

      <div className=" 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden xs:hidden mobile:hidden xss:block">
        <ModelPopup showDrawer={modalpopup} width="65%">
        <div className="w-full h-full">
            <div className="absolute top-2 left-3">
              <IoClose
                onClick={openModal}
                size={20}
                className="font-bold cursor-pointer hover:text-red-500 transition-all duration-300"
              />{" "}
            </div>
          </div>
        </ModelPopup>
      </div>
    </>
  );
};

export default LogOutModalResponsive;
