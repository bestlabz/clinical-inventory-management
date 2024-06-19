import React from "react";
import ModelPopup from "../ModelPopup/ModelPopup";
import { IoClose } from "react-icons/io5";

//Translate
import TranslateJson from "../../../utils/translation/en.json"

const LogOutModalResponsive = ({ modalpopup, openModal, logout }) => {
  return (
    <>
      <div className=" 2xl:block xl:block lg:hidden md:hidden sm:hidden xs:hidden mobile:hidden xss:hidden">
        <ModelPopup showDrawer={modalpopup} width="25%" height="30%">
          <div className="flex flex-col gap-6 items-center justify-center w-full h-full">
            <div className="absolute top-2 right-3">
              <IoClose
                onClick={openModal}
                size={20}
                className="font-bold cursor-pointer hover:text-red-500 transition-all duration-300"
              />{" "}
            </div>
            <p className="text-[22px] font-semibold text-center w-[80%]">
             {TranslateJson.logout.title}
            </p>

            <div className="flex items-center gap-4">
              <button
                className="logout-button bg-red-500 text-white text-[18px] hover:bg-transparent hover:text-red-500 transition-all duration-300 hover:border-red-500"
                onClick={openModal}
              >
                {TranslateJson.logout.buttons.cancel}
              </button>
              <button
                onClick={logout}
                className="logout-button text-[18px] border-secondary_text hover:bg-primary_color hover:text-white hover:border-primary_color transition-all duration-300"
              >
                {TranslateJson.logout.buttons.Submit}
              </button>
            </div>
          </div>
        </ModelPopup>
      </div>

      <div className=" 2xl:hidden xl:hidden lg:block md:hidden sm:hidden xs:hidden mobile:hidden xss:hidden">
        <ModelPopup showDrawer={modalpopup} width="40%" height="25%">
          <div className="flex flex-col gap-6 items-center justify-center w-full h-full">
            <div className="absolute top-2 right-3">
              <IoClose
                size={20}
                className="font-bold cursor-pointer hover:text-red-500 transition-all duration-300"
              />{" "}
            </div>
            <p className="text-[22px] font-semibold text-center w-[80%]">
              {TranslateJson.logout.title}
            </p>

            <div className="flex items-center gap-4">
              <button
                className="logout-button bg-red-500 text-white text-[18px] hover:bg-transparent hover:text-red-500 transition-all duration-300 hover:border-red-500"
                onClick={openModal}
              >
                {TranslateJson.logout.buttons.cancel}
              </button>
              <button
                onClick={logout}
                className="logout-button text-[18px] border-secondary_text hover:bg-primary_color hover:text-white hover:border-primary_color transition-all duration-300"
              >
                {TranslateJson.logout.buttons.Submit}
              </button>
            </div>
          </div>
        </ModelPopup>
      </div>

      <div className=" 2xl:hidden xl:hidden lg:hidden md:block sm:block xs:hidden mobile:hidden xss:hidden">
        <ModelPopup showDrawer={modalpopup} width="50%" height="30%">
          <div className="flex flex-col gap-6 items-center justify-center w-full h-full">
            <div className="absolute top-2 right-3">
              <IoClose
                size={20}
                className="font-bold cursor-pointer hover:text-red-500 transition-all duration-300"
              />{" "}
            </div>
            <p className="text-[22px] font-semibold text-center w-[80%]">
              {TranslateJson.logout.title}
            </p>

            <div className="flex items-center gap-4">
              <button
                className="logout-button bg-red-500 text-white text-[18px] hover:bg-transparent hover:text-red-500 transition-all duration-300 hover:border-red-500"
                onClick={openModal}
              >
                {TranslateJson.logout.buttons.cancel}
              </button>
              <button
                onClick={logout}
                className="logout-button text-[18px] border-secondary_text hover:bg-primary_color hover:text-white hover:border-primary_color transition-all duration-300"
              >
                {TranslateJson.logout.buttons.Submit}
              </button>
            </div>
          </div>
        </ModelPopup>
      </div>

      <div className=" 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden xs:block mobile:block xss:hidden">
        <ModelPopup showDrawer={modalpopup} width="90%" height="30%">
          <div className="flex flex-col gap-6 items-center justify-center w-full h-full">
            <div className="absolute top-2 right-3">
              <IoClose
                size={20}
                className="font-bold cursor-pointer hover:text-red-500 transition-all duration-300"
              />{" "}
            </div>
            <p className="text-[22px] font-semibold text-center w-[80%]">
              {TranslateJson.logout.title}
            </p>

            <div className="flex items-center gap-4">
              <button
                className="logout-button bg-red-500 text-white text-[18px] hover:bg-transparent hover:text-red-500 transition-all duration-300 hover:border-red-500"
                onClick={openModal}
              >
                {TranslateJson.logout.buttons.cancel}
              </button>
              <button
                onClick={logout}
                className="logout-button text-[18px] border-secondary_text hover:bg-primary_color hover:text-white hover:border-primary_color transition-all duration-300"
              >
                {TranslateJson.logout.buttons.Submit}
              </button>
            </div>
          </div>
        </ModelPopup>
      </div>

      <div className=" 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden xs:hidden mobile:hidden xss:block">
        <ModelPopup showDrawer={modalpopup} width="96%" height="30%">
          <div className="flex flex-col gap-6 items-center justify-center w-full h-full">
            <div className="absolute top-2 right-3">
              <IoClose
                size={20}
                className="font-bold cursor-pointer hover:text-red-500 transition-all duration-300"
              />{" "}
            </div>
            <p className="text-[22px] font-semibold text-center w-[80%]">
              {TranslateJson.logout.title}
            </p>

            <div className="flex items-center gap-4">
              <button
                className="logout-button bg-red-500 text-white text-[18px] hover:bg-transparent hover:text-red-500 transition-all duration-300 hover:border-red-500"
                onClick={openModal}
              >
                {TranslateJson.logout.buttons.cancel}
              </button>
              <button
                onClick={logout}
                className="logout-button text-[18px] border-secondary_text hover:bg-primary_color hover:text-white hover:border-primary_color transition-all duration-300"
              >
                {TranslateJson.logout.buttons.Submit}
              </button>
            </div>
          </div>
        </ModelPopup>
      </div>
    </>
  );
};

export default LogOutModalResponsive;
