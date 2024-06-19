import React from "react";
import ModelPopup from "../ModelPopup/ModelPopup";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

import TranslateJson from '../../../utils/translation/en.json'

const ResponsiveSuccessmodal = ({ modalPopup }) => {
  return (
    <>
      <div className=" 2xl:block xl:block lg:hidden md:hidden sm:hidden xs:hidden mobile:hidden xss:hidden">
        <ModelPopup showDrawer={modalPopup} width="25%" height="25%">
          <div className="flex flex-col gap-6 items-center justify-center w-full h-full">
            <IoCheckmarkCircleOutline size={40} className=" text-green_light" />
            <p className="text-[18px] font-medium">{TranslateJson.common.success_message}</p>
          </div>
        </ModelPopup>
      </div>

      <div className=" 2xl:hidden xl:hidden lg:block md:hidden sm:hidden xs:hidden mobile:hidden xss:hidden">
        <ModelPopup showDrawer={modalPopup} width="40%" height="20%">
          <div className="flex flex-col gap-6 items-center justify-center w-full h-full">
            <IoCheckmarkCircleOutline size={40} className=" text-green_light" />
            <p className="text-[18px] font-medium">{TranslateJson.common.success_message}</p>
          </div>
        </ModelPopup>
      </div>

      <div className=" 2xl:hidden xl:hidden lg:hidden md:block sm:block xs:hidden mobile:hidden xss:hidden">
        <ModelPopup showDrawer={modalPopup} width="50%" height="25%">
          <div className="flex flex-col gap-6 items-center justify-center w-full h-full">
            <IoCheckmarkCircleOutline size={40} className=" text-green_light" />
            <p className="text-[18px] font-medium">{TranslateJson.common.success_message}</p>
          </div>
        </ModelPopup>
      </div>

      <div className=" 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden xs:block mobile:block xss:hidden">
        <ModelPopup showDrawer={modalPopup} width="80%" height="20%">
          <div className="flex flex-col gap-6 items-center justify-center w-full h-full">
            <IoCheckmarkCircleOutline size={40} className=" text-green_light" />
            <p className="text-[18px] font-medium">{TranslateJson.common.success_message}</p>
          </div>
        </ModelPopup>
      </div>

      <div className=" 2xl:hidden xl:hidden lg:hidden md:hidden sm:hidden xs:hidden mobile:hidden xss:block">
        <ModelPopup showDrawer={modalPopup} width="90%" height="20%">
          <div className="flex flex-col gap-6 items-center justify-center w-full h-full">
            <IoCheckmarkCircleOutline size={40} className=" text-green_light" />
            <p className="text-[18px] font-medium">{TranslateJson.common.success_message}</p>
          </div>
        </ModelPopup>
      </div>
    </>
  );
};

export default ResponsiveSuccessmodal;
